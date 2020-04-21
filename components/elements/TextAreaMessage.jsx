import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { classDebounce } from 'hooks/use-debounce';
import {
    __CHANGE_IS_SEEN
} from "../../store/saga";

const SendIcon = (props) => {
    return (
        <>
            {props.value ?
                <img src="./assets/images/send.png" onClick={() => props.sendMessage('message')}/> :
                <img src="./assets/images/key.png" onClick={() => props.sendMessage('key')}/>
            }
        </>
    )
};
SendIcon.propTypes = {
    value: PropTypes.string,
    sendMessage: PropTypes.func,
};

class TextAreaMessage extends React.PureComponent {
    constructor (props) {
        super(props);
        this.messageArea = React.createRef();
        this.state = {
            messageValue: '',
        };
        this.__debounceTyping     = this.__debounceTyping.bind(this);
        this.__setMessageValue    = this.__setMessageValue.bind(this);
        this.__autoSize           = this.__autoSize.bind(this);
        this.__submitMessage      = this.__submitMessage.bind(this);
        this.__userIsOnline       = this.__userIsOnline.bind(this);
        this.__userIsOffline      = this.__userIsOffline.bind(this);
    }

    __autoSize () {
        this.messageArea.current.style.height = 'auto';
        this.messageArea.current.style.height = (this.messageArea.current.scrollHeight) + 'px';
    }

    __userIsOffline () {
        this.props.isTyping(false);
    }

    __userIsOnline () {
        if (this.props.activeUser?.id && this.props.loggedUserId && !this.props.activeUser?.isSender) {
            __CHANGE_IS_SEEN({senderID: this.props.activeUser?.id, myID: this.props.loggedUserId}).next();
        }
    }


    __debounceTyping = classDebounce(this.__isTyping, 600);

    __isTyping () {
        if (this.state.messageValue !== '') {
            this.props.isTyping(true);
        }
    }

    __submitMessage (evt) {
        if (evt.key === 'Enter' && evt.shiftKey) {
            return;
        }
        if (evt === 'key') {
            this.props.sendMessage('key', true);
        } else if (evt === 'message' || evt.key === 'Enter') {
            this.state.messageValue !== '' && this.props.sendMessage(this.state.messageValue);
            this.messageArea.current.blur();
            this.setState({
                messageValue: ''
            }, () => {
                this.messageArea.current.style.height = 'auto';
            });
            evt.key && evt.preventDefault()
        }
    }

    __setMessageValue (evt) {
        this.setState({
            messageValue: evt.target.value
        }, () => {
            if (this.state.messageValue === '') {
                this.props.isTyping(false);
            }
        })
    }

    render () {
        return (
            <>
                <div className="message-send-container">
                    <textarea
                        ref={this.messageArea}
                        value={this.state.messageValue}
                        rows={this.state.rowLineCount}
                        onFocus={this.__userIsOnline}
                        onBlur={this.__userIsOffline}
                        onInput={this.__autoSize}
                        onChange={(evt) => {this.__setMessageValue(evt); this.__debounceTyping()}}
                        placeholder="Type message..."
                        onKeyDown={this.__submitMessage}></textarea>
                    <SendIcon
                        sendMessage={this.__submitMessage}
                        value={this.state.messageValue}
                    />
                </div>
                <style jsx global>{`
                    .message-send-container {
                        padding-left: 3px;
                        display: flex;
                        justify-content: space-between;
                        border-top: 1px solid rgb(227, 222, 222);
                        align-items: center;
                    }
                    .message-send-container img {
                        width: 25px;
                        height: 25px;
                        margin-right: 7px;
                        cursor: pointer;
                    }
                    .message-send-container textarea {
                        resize: none;
                        max-height: 70px;
                        width: calc(100% - 30px);
                        border: none;
                        outline: none;
                    }
                    .message-send-container textarea::-webkit-scrollbar {
                      width: 0px;
                      height: 10px;
                    }
                    
                    .message-send-container textarea::-webkit-scrollbar-thumb {
                      background: transparent;
                    }
                    
                    .message-send-container textarea::-webkit-scrollbar-track {
                      background: transparent;
                    }
                `}</style>
            </>
        )
    }
}

TextAreaMessage.propTypes = {
    loggedUserId: PropTypes.string,
    activeUser: PropTypes.object,
    isTyping: PropTypes.func,
    sendMessage: PropTypes.func,
};

export default TextAreaMessage;