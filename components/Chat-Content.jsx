import React from 'react';
import ChatUsers from 'components/Chat-Users';
import ChatMessages from 'components/Chat-Messages';

class ChatContent extends React.Component {
    constructor () {
        super();
    }
    render () {
        return (
            <div className="chat-content">
                <ChatUsers />
                <ChatMessages />
                <style>{`
                    .chat-content {
                        height: calc(100vh - 79px);
                        width: calc(100vw - 10vw);
                        margin: auto;
                        display: flex;
                        justify-content:space-between;
                        margin-top: 16px;
                        max-width: 1200px;
                        padding-bottom: 16px;
                    }
                `}</style>
            </div>
        )
    }
}
export default ChatContent;