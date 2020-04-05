import React from 'react';
import {connect} from "react-redux";
import {
    __GET_ACTIVE_USERS_MESSAGES,
    __ADD_NEW_MESSAGE,
    __GET_CHAT_USERS,
    __ADD_FRIEND_MESSAGE,
    __IS_TYPING_TO_ACTIVE_USER
} from 'store/saga';
import TextAreaMessage from 'components/elements/TextAreaMessage';
import Skeleton from "./Skeleton";
import PrivateMessageContent from "components/elements/PrivateMessageContent";

class Messages extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            startMessageNotify: '',
            skeletonLoading: true,
            noChatUser: false,
            activeUserData: {}
        };
        this.__sendMessage        = this.__sendMessage.bind(this);
        this.__isTyping           = this.__isTyping.bind(this);
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        // Working when my chat list is empty
        if (!this.state.noChatUser && this.props.usersList && this.props.usersList.length === 0) {
            this.setState({
                noChatUser: true
            })
        } else if (this.state.noChatUser && this.props.usersList && this.props.usersList.length !== 0) {
            this.setState({
                noChatUser: false
            })
        }
        if (!prevProps.activeUser && this.props.activeUser && prevProps.activeUser !== this.props.activeUser) {
            this.setState({
                startMessageNotify: '',
                skeletonLoading: true
            });
            const genMessages = await __GET_ACTIVE_USERS_MESSAGES(this.props.activeUser).next();
            console.log(genMessages, 'genMessages', 4444);
            if (genMessages.value.letters[0].message === '') { //If there aren't any messages
                this.setState({
                    noChatUser: false,
                    skeletonLoading: false,
                    startMessageNotify: 'Send the first letter'
                })
            }
            this.setState({
                noChatUser: false,
                skeletonLoading: false,
            })
        } else if (prevProps.activeUser !== this.props.activeUser && this.props.activeUser) {
            this.setState({
                startMessageNotify: '',
                skeletonLoading: true
            });
            const genMessages = await __GET_ACTIVE_USERS_MESSAGES(this.props.activeUser).next();
            console.log(genMessages, 5555, this.props.activeUser, prevProps.activeUser);
            if (genMessages.value.letters[0].message === '') { //If there aren't any messages
                this.setState({
                    noChatUser: false,
                    skeletonLoading: false,
                    startMessageNotify: 'Send the first letter'
                })
            }
            this.setState({
                noChatUser: false,
                skeletonLoading: false,
            })
        }
    }

    __isTyping (hint) {
        __IS_TYPING_TO_ACTIVE_USER(hint, this.props.activeUser, this.props.loggedUser.id).next()
    }

    async __sendMessage (value) {
        const messageData = {
            time: new Date().getTime(),
            message: value
        };
        await __ADD_FRIEND_MESSAGE({friendId: this.props.activeUser, loggedUser: this.props.loggedUser}, {...messageData, owner: this.props.loggedUser.id}).next();
        await __ADD_NEW_MESSAGE(this.props.activeUser, {
            ...messageData,
            owner: 'Me'
        }).next();
        __GET_CHAT_USERS().next()
    }

    render () {
        return (
            <div
                className={`message-content-right 
                ${(this.state.skeletonLoading || !this.state.noChatUser) ? 'hidden-overlay' : ''} 
                ${this.state.startMessageNotify ? 'empty-message-content' : ''}
                ${this.state.noChatUser ? 'no-chat-user': ''}
                `}>
                {this.state.skeletonLoading && !this.state.noChatUser ?
                    new Array(5).fill('').map((_, i) => {
                            return (
                                <div
                                    className={`skeleton-container-messages ${i % 2 !== 0 ? 'odd-container-skeleton' : ''}`}
                                    key={i + Math.random().toString(16).slice(2, 6)} style={{opacity: (5 - i) * 0.19}}>
                                    <Skeleton
                                        width="35px"
                                        height="35px"
                                        margin={['5px', '10px', '0px', '10px']}
                                        radius="50%"
                                    />
                                    <div className="line-wrap">
                                        <Skeleton
                                            width="55%"
                                            height="52px"
                                            margin={['5px', '0px', '0px', i % 2 !== 0 ? 'auto' : '0px']}
                                            radius="0%"
                                        />
                                        {i % 2 !== 0 ?
                                            <Skeleton
                                                width="55%"
                                                height="52px"
                                                margin={['5px', '0px', '0px', 'auto']}
                                                radius="0%"
                                            />: ''
                                        }
                                    </div>
                                </div>
                            )
                        })
                    : this.state.startMessageNotify ? <div className="send-first-message">{this.state.startMessageNotify}</div>:
                    !this.state.noChatUser &&
                    <PrivateMessageContent />
                }
                {!this.state.skeletonLoading && <TextAreaMessage isTyping={this.__isTyping} sendMessage={this.__sendMessage}/>}
                <style jsx >{`
                    .skeleton-container-messages .line-wrap {
                        width: calc(100% - 70px);   
                        margin-bottom: 10px;                 
                    }
                    .odd-container-skeleton {
                        flex-direction: row-reverse;
                    }
                    .skeleton-container-messages {
                        display: flex;
                    }
                    .message-content-right.hidden-overlay {
                        overflow: hidden;
                    }
                    .message-content-right {
                        height: calc(100% - 42px);
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                    .empty-message-content {
                        justify-content: flex-end;
                    }
                    .send-first-message {
                        text-align: center;
                        font-size: 20px;
                        margin-bottom: 16px;
                    }
                    .no-chat-user {
                        background-image: url('./assets/images/nochat.png');
                        background-position: center;
                        background-repeat: no-repeat;
                        opacity: .2;
                    }
                `}</style>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedUser: state.chat.loggedUser,
    activeUser: state.chat.activeUser.id,
    usersList: state.chat.myChatUsers,
});

const mapDispatchToProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Messages);
