import React from 'react';
import fire from "config/fire";
import UI_ELEMENTS from "components/shared/UI";
import PropTypes from 'prop-types';
import * as moment from 'moment';

const EveryUser = props => {
    return (
      <div className="user-messages-container">
          <UI_ELEMENTS.UserImage
              firstName={props.dataMSG.fullName.split(' ')[0]}
              lastName={props.dataMSG.fullName.split(' ')[1] || ''}
              fill={props.dataMSG.color}
          />
          <div className="user-message-info">
              <div className="user-message-info_left">
                  <h4>{props.dataMSG.fullName}</h4>
                  <p>{props.dataMSG.message}</p>
              </div>
              <div className="user-message-info_right">
                  <span>{moment(props.dataMSG.time).fromNow()}</span>
              </div>
          </div>
      </div>
  )
};
EveryUser.propTypes = {
    dataMSG: PropTypes.object
};

class ChatUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usersList: {}
        };
    }

    componentDidMount() {
        const db = fire.firestore();
        db.collection('users').where("email", "==", fire.auth().currentUser.email)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    Object.keys(doc.data().messages).forEach(user => {
                        this.setState({
                            usersList: {[user]: {...doc.data().messages[user].pop()}}
                        })
                    })
                })
            })
    }

    render () {
        return (
            <div className="chat-users">
                <h4>Your Messages</h4>
                <div className="users-messages-container">
                    {Object.keys(this.state.usersList).map(user => <EveryUser
                        dataMSG={this.state.usersList[user]}
                        key={user}
                    />)}
                </div>
                <style>{`
                    .chat-users {
                        width: 30%;
                        box-shadow: 0 3px 1px -2px rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12);
                    }
                    .chat-users > h4 {
                        margin: 0;
                        padding: 10px;
                        border-bottom: 1px solid #e3dede;
                    }
                    .users-messages-container .user-messages-container {
                        display: flex;
                        align-items: center;
                        padding: 10px;
                        border-bottom: 1px solid #e3dede;
                        transition: .4s;
                        cursor: pointer;
                    }
                    .users-messages-container .user-messages-container:hover {
                        background-color: #eeeeee;
                    }
                    .user-messages-container .user-message-info {
                        display: flex;
                        margin-left: 10px;
                        width: calc(100% - 50px);
                        justify-content: space-between;
                    }
                    .user-messages-container .user-message-info .user-message-info_left {
                        width: calc(100% - 50px);
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
export default ChatUsers;