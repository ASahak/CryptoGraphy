import React from 'react';
import {connect} from "react-redux";
import UI_ELEMENTS from "components/shared/UI";
import * as moment from 'moment';
import {
    __LOAD_MORE_MESSAGES
} from 'store/actions';
import { __getUserMessages } from 'store/reselect';

class PrivateMessageContent extends React.PureComponent{
    constructor (props) {
        super(props);
        this.state = {
            leftColor: this.props.activeUser && this.props.activeUser.color || '#0C4651',
            rightColor: this.props.activeUser && this.props.loggedUser.color || '#1BBC9B',
            scrollLoadingAllow: true,
            messagesSelector: []
        };
        this._messagesEnd       = null;
        this.__scrollToBottom   = this.__scrollToBottom.bind(this);
        this.__handleScrollTop  = this.__handleScrollTop.bind(this);
    }
    __scrollToBottom (behavior) {
        this._messagesEnd.scrollIntoView({ behavior: (behavior ? 'smooth' : 'auto')});
    }

    __handleScrollTop (e) {
        if (this.state.scrollLoadingAllow && e.target.scrollTop < 50) {
            this.props.__LOAD_MORE_MESSAGES(1);
            this.setState({
                scrollLoadingAllow: false
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.activeUser.isTyping !== this.props.activeUser.isTyping) {
            this.props.activeUser.isTyping && this.__scrollToBottom('behavior');
        }
        if (prevProps.messagesPage !== this.props.messagesPage || prevProps.messages.length !== this.props.messages.length) {
            if ((this.props.messagesPage - 1) * 15 <= this.props.messages.length) {
                this.setState({
                    scrollLoadingAllow: true,
                    messagesSelector: __getUserMessages({data: this.props.messages, page: this.props.messagesPage})
                }, () => {
                    this.__scrollToBottom('behavior');
                });
            } else {
                this.props.__LOAD_MORE_MESSAGES(-1);
            }
        }
    }

    componentDidMount() {
        this.setState({
            messagesSelector: __getUserMessages({data: this.props.messages, page: this.props.messagesPage})
        }, () => {
            this.__scrollToBottom();
        });
    }

    get FN () {
        return this.props.activeUser ? this.props.activeUser.fullName.split(' ')[0].slice(0, 1).toUpperCase() : '';
    }
    get LN () {
        return this.props.activeUser ? this.props.activeUser.fullName.split(' ')[1].slice(0, 1) || ''.toUpperCase() : '';
    }

    render () {
        return (
            <>
                <div className="messages-content" onScroll={(e) => this.__handleScrollTop(e)}>
                    {this.state.messagesSelector.map((message, index) => {
                        const _isOwner = message.owner === 'Me';
                        const _dataMSG = _isOwner ? this.props.loggedUser : this.props.activeUser;
                        return (
                            <div key={message.time} className={_isOwner ? 'content-right_owner' : 'content-left_owner'}>
                                <UI_ELEMENTS.UserImage
                                    firstName={_dataMSG.fullName.split(' ')[0]}
                                    lastName={_dataMSG.fullName.split(' ')[1] || ''}
                                    fill={_dataMSG.color}
                                />
                                <div className="message-time">
                                    <p>{message.message}</p>
                                    <span>{moment(+message.time).format('lll')}</span>
                                    {this.props.activeUser.letters && this.props.activeUser.letters.owner === 'Me' && index === this.state.messagesSelector.length - 1 ? this.props.activeUser.isSeen ?
                                        <div className="status-message">Seen</div>: <div className="status-message">Delivered</div> : ''}
                                </div>
                            </div>
                        )
                    })}
                    {this.props.activeUser.isTyping && <div className="is-typing-wrap">
                        {this.FN + this.LN + ' is typing '}
                        <div className='spinner'>
                            <div className='bounce1'></div>
                            <div className='bounce2'></div>
                            <div className='bounce3'></div>
                        </div>
                    </div>}
                    <div ref={(el) => { this._messagesEnd = el }}>{/*Scroll Into View*/}</div>
                </div>
                <style jsx>{`
                    .messages-content {
                        height: 100%;
                        overflow-x: hidden;
                        position: relative;
                    }
                    .messages-content ::-webkit-scrollbar {
                      width: 0px;
                      height: 10px;
                    }
                    
                    .messages-content ::-webkit-scrollbar-thumb {
                      background: transparent;
                    }
                    
                    .messages-content ::-webkit-scrollbar-track {
                      background: transparent;
                    }
                    .content-right_owner {
                        display: flex;
                        justify-content: flex-start;
                        flex-flow: row-reverse;
                        text-align: right;
                        padding: 0 10px;
                        margin: 7px;
                    }
                    .content-left_owner {
                        display: flex;
                        justify-content: end;
                        text-align: left;
                        padding: 0 10px;
                        margin: 7px;
                    }
                    .content-left_owner .message-time {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        padding: 5px 10px;
                        max-width: 50%;
                        position: relative;
                    }
                    .content-right_owner .message-time {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        padding: 5px 10px;
                        max-width: 50%;
                        position: relative;
                    }
                    .message-time .status-message {
                        font-size: 12px;
                        color: #424242;
                    }
                    .message-time:hover > span {
                        opacity: 1 !important   ;
                    }
                    .content-right_owner .message-time > span,
                    .content-left_owner .message-time > span {
                        opacity: 0;
                        transition: .4s;
                        font-size: 9px;
                        font-family: sans-serif;
                        position: absolute;
                        top: -13px;
                        text-align: center;
                        min-width: fit-content;
                        background-color: red;
                        padding: 3px 5px;
                        color: #fff;
                        flex-shrink: 0;
                        white-space: nowrap;
                        border-radius: 4px;
                    }
                    .content-right_owner .message-time > p,
                    .content-left_owner .message-time > p {
                        text-align:left;
                        margin: 0 0 5px 0;
                        display: inline-block;
                        padding: 5px 10px;
                        color: #fff;
                        font-size: 13px;
                        border-radius: 5px;
                        position: relative;
                    }
                    .content-right_owner .message-time > p, .content-right_owner .message-time > span {
                        background-color: ${this.state.rightColor};
                    }
                    .content-left_owner .message-time > p, .content-left_owner .message-time > span {
                        background-color: ${this.state.leftColor};
                    }
                    .content-right_owner .message-time > p:before {
                        content: '';
                        width: 0;
                        height: 0;
                        border-top: 4px solid transparent;
                        border-bottom: 4px solid transparent;
                        border-left: 4px solid ${this.state.rightColor};
                        position: absolute;
                        right: -3px;
                        transform: rotate(0deg);
                        top: 7px;
                    }
                    .content-left_owner .message-time > p:before {
                        content: '';
                        width: 0;
                        height: 0;
                        border-top: 4px solid transparent;
                        border-bottom: 4px solid transparent;
                        border-left: 4px solid ${this.state.leftColor};
                        position: absolute;
                        left: -3px;
                        transform: rotate(-180deg);
                        top: 7px;
                    }
                    
                    .is-typing-wrap {
                        margin-left: 20px;
                        margin-bottom: 7px;
                        display: flex;
                        align-items: center;
                        font-size: 13px;
                    }
                    .is-typing-wrap .spinner{ 
                        margin-top: 5px;
                        margin-left: 10px;
                    }
                `}</style>
            </>
       )
    }
}


const mapStateToProps = state => ({
    loggedUser: state.chat.loggedUser,
    activeUser: state.chat.activeUser,
    messages: state.chat.activeUserMessages,
    messagesPage: state.chat.messagesPage,
});

const mapDispatchToProps = {
    __LOAD_MORE_MESSAGES
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PrivateMessageContent);
