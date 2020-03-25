import React from 'react';
import UI_ELEMENTS from 'components/shared/UI';
import Messages from "components/Messages";

class ChatMessages extends React.Component {
    constructor(props) {
        super(props);
        this._encryptData = [
            {value: 'rsa', name: 'RSA'},
            {value: 'vijiner', name: 'Vijiner'},
        ];
    }
    __selectEncrypt (data) {
    }
    render () {
        return (
            <div className="chat-messages">
                <UI_ELEMENTS.Select
                    selectEncrypt={this.__selectEncrypt}
                    placeholder="Please choose encrypt type"
                    style={{
                        display: 'block',
                        width: '100%',
                        padding: '12px',
                        border: 'none',
                        borderBottom: '1px solid #e3dede',
                        marginLeft: '1px',
                        backgroundColor: 'transparent'
                    }}
                    dataOptions={this._encryptData}
                />
                <Messages />
                <style>{`
                    .chat-messages {
                        width: 70%;
                        box-shadow: 0 3px 1px -2px rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12);
                    }
                `}</style>
            </div>
        )
    }
}
export default ChatMessages;