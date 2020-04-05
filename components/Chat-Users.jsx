import React from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import UI_ELEMENTS from "components/shared/UI";
import Skeleton from 'components/Skeleton';
import {
    __GET_CHAT_USERS,
    __ADD_NEW_MESSAGE,
    __CHANGE_IS_SEEN,
    __GO_PRIVATE_CHAT,
} from 'store/saga';
import {
    __SET_ACTIVE_USER
} from 'store/actions';
import NoChatUsers from 'components/elements/NoChatUsers';
import CommonRoom from 'components/elements/CommonRoom';
import { connect } from 'react-redux';
import { Bus } from 'components/shared/helpers/Bus';

const EveryUser = props => {
    return (
      <div
          onClick={() => props.goPrivateChat(props.id)}
          className={`user-messages-container ${props.isActiveUser === props.id ? 'active-user' : ''} 
          ${props.dataMSG.letters.owner !== 'Me' && props.dataMSG.isSeen === false ? 'must-open-message' : ''}`}>
          <UI_ELEMENTS.UserImage
              firstName={props.dataMSG.fullName.split(' ')[0]}
              lastName={props.dataMSG.fullName.split(' ')[1] || ''}
              fill={props.dataMSG.color}
          />
          <div className="user-message-info">
              <div className="user-message-info_left">
                  <h4>{props.dataMSG.fullName + (props.dataMSG.letters.owner !== 'Me' && props.dataMSG.isSeen === false ? ' ( 1 )' : '')}</h4>
                  {props.dataMSG.isTyping === true ?
                      <div className='spinner'>
                          <div className='bounce1'></div>
                          <div className='bounce2'></div>
                          <div className='bounce3'></div>
                      </div>:
                      <p>{(props.dataMSG.letters && props.dataMSG.letters.message) ? props.dataMSG.letters.message : 'No messages yet'}</p>}
              </div>
              <div className="user-message-info_right">
                  <span>{(props.dataMSG.letters && props.dataMSG.letters.time) ? moment(props.dataMSG.letters.time).fromNow() : ''}</span>
              </div>
          </div>
      </div>
  )
};
EveryUser.propTypes = {
    id: PropTypes.string,
    isActiveUser: PropTypes.string,
    dataMSG: PropTypes.object
};

class ChatUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commonRoom: false
        };
        this.__moveToCommonRoom = this.__moveToCommonRoom.bind(this);
        this.__goPrivateChat    = this.__goPrivateChat.bind(this);
        Bus.subscribe('startChat', (data) => this.__startPrivateChat(data))
    }

    componentDidMount() {
        __GET_CHAT_USERS().next()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.usersList !== this.props.usersList) {
            this.props.__SET_ACTIVE_USER(this.props.activeUser.id ? this.props.activeUser : this.props.usersList[0])
        }
    }

    componentWillUnmount() {
        Bus.unsubscribe('startChat');
        __GET_CHAT_USERS({}).next();
    }

    __moveToCommonRoom () {
        this.setState({
            commonRoom: !this.state.commonRoom
        })
    }

    __goPrivateChat (idUser) {
        __GO_PRIVATE_CHAT(idUser, this.props.loggedUser.id).next();
    }

    async __startPrivateChat (data) {
        const _reverseArray = [
            {...data},
            ...this.props.usersList
        ];
        await __ADD_NEW_MESSAGE(data.id, {
            time: null,
            message: ''
        }).next();
        __GET_CHAT_USERS(_reverseArray).next();
        this.props.__SET_ACTIVE_USER(data);
        this.__moveToCommonRoom()
    }

    render () {
        return (
            <div className="chat-users">
                <h4>{!this.state.commonRoom ? 'Your Messages' : <a onClick={this.__moveToCommonRoom}><span className="lnr lnr-chevron-left"></span> Back</a>}</h4>
                <div className="chat-room-wrapper">
                    {!this.state.commonRoom ? <div className="users-messages-container">
                        {this.props.usersList === null ? new Array(8).fill('').map((_, i) => {
                           return (
                               <div className="skeleton-container" key={i + Math.random().toString(16).slice(2, 6)} style={{opacity: (8 - i) * 0.09}}>
                                   <Skeleton
                                       width="35px"
                                       height="35px"
                                       margin={['5px', '10px' , '0px', '10px']}
                                       radius="50%"
                                   />
                                   <div className="line-wrap">
                                       <Skeleton
                                           width="100%"
                                           height="12px"
                                           margin={['5px', '0px' , '10px', '0px']}
                                           radius="0%"
                                       />
                                       <Skeleton
                                           width="100%"
                                           height="12px"
                                           margin={['5px', '0px' , '10px', '0px']}
                                           radius="0%"
                                       />
                                   </div>
                                </div>
                           )
                        }): this.props.usersList.length ? this.props.usersList.map(user => <EveryUser
                            isActiveUser={this.props.activeUser.id}
                            id={user.id}
                            dataMSG={user}
                            key={user.id}
                            goPrivateChat={this.__goPrivateChat}
                        /> ) : <NoChatUsers goToCommonRoom={() => this.__moveToCommonRoom} />}
                    </div>: <CommonRoom />}
                    {!this.state.commonRoom && this.props.usersList !== null && this.props.usersList.length ?
                        <UI_ELEMENTS.Button
                            background="transparent"
                            color="#37415c"
                            fontSize={11}
                            hover="hover-from-transparent"
                            type="button"
                            text={'Common Room'}
                            width={150}
                            margin={['20px', 'auto', '0', 'auto']}
                            onClick={this.__moveToCommonRoom}
                            size="sm"/>
                        : ''}
                </div>
                <style jsx global>{`
                    .skeleton-container {
                        padding: 10px 0;
                        display: flex;
                    }
                    .skeleton-container .line-wrap {
                        width: calc(100% - 70px);                    
                    }
                    .chat-users {
                        width: 30%;
                        box-shadow: 0 3px 1px -2px rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12);
                    }
                    .chat-users > h4 {
                        margin: 0;
                        padding: 10px;
                        border-bottom: 1px solid #e3dede;
                        display: flex;
                        justify-content: space-between;
                        height: 41.5px;    
                    }
                    .chat-users > h4 > a > span{ 
                        font-size: 12px;
                    } 
                    .chat-users > h4 > a{ 
                        cursor: pointer;
                        color: #0000ffba;
                        font-size: 13px;
                    }
                    .users-messages-container .user-messages-container {
                        display: flex;
                        align-items: center;
                        padding: 10px;
                        border-bottom: 1px solid #e3dede;
                        transition: .4s;
                        cursor: pointer;
                    }
                    .users-messages-container .user-messages-container.active-user {
                        border-right: 2px solid #1ab898;
                        background-color: #eeeeee;
                    }
                    .users-messages-container .must-open-message {
                        background-color: #eeeeee;
                        font-weight: 900;
                    }
                    .users-messages-container .user-messages-container:hover{
                        background-color: #eeeeee;
                    }
                    .user-messages-container .user-message-info {
                        display: flex;
                        margin-left: 10px;
                        width: calc(100% - 50px);
                        justify-content: space-between;
                    }
                    .user-messages-container .user-message-info .user-message-info_left {
                        width: calc(100% - 90px);
                    }
                    .user-messages-container .user-message-info .user-message-info_right {
                        width: fit-content;
                        white-space: nowrap;
                    }
                    .user-messages-container .user-message-info .user-message-info_right > span {
                        font-size: 13px;
                    }
                    .user-messages-container .user-message-info .user-message-info_left h4 {
                        margin-top: 2px;
                        font-size: 14px;
                        margin-bottom: 5px;
                    }
                    .user-messages-container .user-message-info .user-message-info_left p {
                        margin: 0;
                        height: 16px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        font-size: 12px;
                    }
                `}</style>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedUser: state.chat.loggedUser,
    usersList: state.chat.myChatUsers,
    activeUser: state.chat.activeUser
});

const mapDispatchToProps = {
    __SET_ACTIVE_USER
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatUsers);