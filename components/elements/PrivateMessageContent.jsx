import React from 'react';
import {connect} from "react-redux";
import UI_ELEMENTS from "components/shared/UI";
import * as moment from 'moment';
import Icon from 'components/Icons/icon';
import debounce from "lodash.debounce";
import {
    __LOAD_MORE_MESSAGES
} from 'store/actions';
import {
    _EVERY_PAGE_LIMIT_MESSAGES
} from 'components/shared/helpers/constants';
import { __getUserMessages } from 'store/reselect';

class PrivateMessageContent extends React.PureComponent{
    constructor (props) {
        super(props);
        this.state = {
            leftColor: this.props.activeUser && this.props.activeUser?.color || '#0C4651',
            rightColor: this.props.activeUser && this.props.loggedUser?.color || '#1BBC9B',
            scrollLoadingAllow: true,
            messagesSelector: [],
            encryptIcon: true,
            scrollPosition: null,
            previousScrollHeight: 0,
            previousScrollTop: 0,
            loadingMessages: false,
        };
        this._messagesEnd       = null;
        this._handleDomClick    = null;
        this.__scrollToBottom   = this.__scrollToBottom.bind(this);
        this.__handleScrollTop  = this.__handleScrollTop.bind(this);
        this.__showEncryptPopUp = this.__showEncryptPopUp.bind(this);
        this.__doEncryptType    = this.__doEncryptType.bind(this);
        this.__hidePopUpEncrypt = this.__hidePopUpEncrypt.bind(this);
        this.__generateRef      = this.__generateRef.bind(this);
        this.__detectCryptIcon  = this.__detectCryptIcon.bind(this);
        this.__editMessage      = this.__editMessage.bind(this);
        this.__removeMessage    = this.__removeMessage.bind(this);
        this._scrollContent     = React.createRef();
    }
    __scrollToBottom (behavior) {
        this._messagesEnd.scrollIntoView({ behavior: (behavior ? 'smooth' : 'auto')});
    }

    __handleScrollTop (e) {

        if (this.state.scrollLoadingAllow && e.target.scrollTop < 50) {
            this.setState({
                previousScrollTop: this._scrollContent?.scrollTop,
                previousScrollHeight: this._scrollContent?.scrollHeight,
                scrollLoadingAllow: false,
                loadingMessages: true,
            }, () => {
                setTimeout(() => {
                    this.props.__LOAD_MORE_MESSAGES(1);
                }, 1000);
            })
        } else {
            this.setState({
                scrollLoadingAllow: true
            })
        }
    }

    __generateRef (index) {
        this['message-' + index] = React.createRef();
        return this['message-' + index];
    }

    __showEncryptPopUp (evt, index, ref, isKey) {
        const _currentSrc = evt.target.closest('p') && evt.target.closest('p');
        if (document.body.querySelector('.opened-encryptPopUp') &&
            document.body.querySelector('.opened-encryptPopUp') !== _currentSrc
        ) {
            document.body.querySelector('.opened-encryptPopUp').setAttribute('data-hint-encrypt', false);
            document.body.querySelector('.opened-encryptPopUp').classList.remove('opened-encryptPopUp')
        }
        if (isKey) return;
        if (_currentSrc) {
            const dataIcon = _currentSrc.getAttribute('data-hint-encrypt');
            this.setState({
                encryptIcon: JSON.parse(dataIcon)
            });
            _currentSrc.classList.toggle('opened-encryptPopUp');
        }
        setTimeout(() => {
            addEventListener('click', this._handleDomClick = this.__hidePopUpEncrypt.bind(this, this[ref].current, index))
        }, 0)
    }

    __hidePopUpEncrypt (ref, index, e) {
        ref.innerText = this.state.messagesSelector[index].message;

        removeEventListener('click', this._handleDomClick);
        if (!e.target.closest('p[data-hint-encrypt]') && document.body.querySelector('.opened-encryptPopUp')) {
            document.body.querySelector('.opened-encryptPopUp').setAttribute('data-hint-encrypt', false);
            document.body.querySelector('.opened-encryptPopUp').classList.remove('opened-encryptPopUp')
        }
    }

    __doEncryptType (e, ref, index) {
        const _currentSrc = e.target.closest('p');
        e.stopPropagation();

        this.setState({
            encryptIcon: !this.state.encryptIcon
        }, () => {
            _currentSrc.setAttribute('data-hint-encrypt', this.state.encryptIcon);
            this[ref].current.innerText = this.state.messagesSelector[index][this.state.encryptIcon ? 'encryptedMsg' : 'decryptedMsg'];
        })
    }
    __detectCryptIcon (msg) {
        return msg.message === msg.key && msg.message === msg.encryptType && msg.message === msg.decryptedMsg && msg.message === msg.encryptType
    }

    __editMessage (evt, msg, index) {
        evt.stopPropagation();
    }

    __removeMessage (evt, msg, index) {
        evt.stopPropagation();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // if (prevProps.activeUser.isTyping !== this.props.activeUser.isTyping) {
        //     this.props.activeUser.isTyping && this.__scrollToBottom('behavior');
        // }
        if ((prevProps.messagesPage !== this.props.messagesPage || prevProps.messages.length !== this.props.messages.length)) {
            if ((this.props.messagesPage - 1) * _EVERY_PAGE_LIMIT_MESSAGES <= this.props.messages.length ) {
                this.setState({
                    scrollLoadingAllow: true,
                    loadingMessages: false,
                    messagesSelector: __getUserMessages({data: this.props.messages, page: this.props.messagesPage})
                }, () => {
                    if (prevProps.messages.length !== this.props.messages.length) {
                        this.__scrollToBottom('behavior');
                    } else {
                        this._scrollContent.scrollTo(0, (this._scrollContent.scrollHeight -
                            this.state.previousScrollHeight + this.state.previousScrollTop - 45));
                    }
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
            this._scrollContent.onscroll = debounce((e) => {
                if (this.props.messages.length > _EVERY_PAGE_LIMIT_MESSAGES) {
                    this.__handleScrollTop(e)
                }
            }, 100);
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
                <div
                    className={`messages-content ${this.state.loadingMessages ? 'scroll-disable' : ''}`}
                    ref={(el) => this._scrollContent = el}>
                    {this.state.loadingMessages && <div className="sbl-circ"></div>}
                    {this.state.messagesSelector.map((message, index) => {
                        const _isOwner = message.owner === 'Me';
                        const _dataMSG = _isOwner ? this.props.loggedUser : this.props.activeUser;
                        if (!_dataMSG) return '';
                        return (
                            <div key={message.time} className={_isOwner ? 'content-right_owner' : 'content-left_owner'}>
                                <UI_ELEMENTS.UserImage
                                    firstName={_dataMSG.fullName.split(' ')[0]}
                                    lastName={_dataMSG.fullName.split(' ')[1] || ''}
                                    fill={_dataMSG.color}
                                />
                                <div className={`message-time ${this.__detectCryptIcon(message) ? 'crypt-message' : ''}`}
                                     data-message-type={message.encryptType}
                                     data-message-key={message.key}>
                                    <p
                                        onClick={(e) => this.__showEncryptPopUp(e, index, 'message-' + index, this.__detectCryptIcon(message))}
                                        data-hint-encrypt={false}>

                                        {_isOwner && !this.__detectCryptIcon(message) &&
                                        <span className="edit-remove">
                                            <i className="lnr lnr-pencil" onClick={(e) => this.__editMessage(e, message, index)}></i>
                                            <i className="lnr lnr-cross" onClick={(e) => this.__removeMessage(e, message, index)}></i>
                                        </span>}

                                        <span className="encryptPopUp"
                                              onClick={(e) => this.__doEncryptType(e,'message-' + index, index)}>
                                            {this.state.encryptIcon ? <Icon name="unlocked" /> :
                                            <Icon name="locked" />}
                                        </span>

                                        {this.__detectCryptIcon(message) ? <img src="./assets/images/key.png" alt="iconSend"/> :

                                            <span ref={this.__generateRef(index)}>{message.message}</span>}
                                    </p>
                                    <span>{moment(+message.time).format('lll')}</span>
                                    {this.props.activeUser.letters && this.props.activeUser.letters.owner === 'Me' && index === this.state.messagesSelector.length - 1 ? this.props.activeUser.isSeen ?
                                        <div className="status-message">Seen</div>: <div className="status-message">Delivered</div> : ''}
                                </div>
                            </div>
                        )
                    })}
                    <div ref={(el) => { this._messagesEnd = el }}>{/*Scroll Into View*/}</div>
                </div>
                {this.props.activeUser.isTyping && <div className="is-typing-wrap">
                    {this.FN + this.LN + ' is typing '}
                    <div className='spinner'>
                        <div className='bounce1'></div>
                        <div className='bounce2'></div>
                        <div className='bounce3'></div>
                    </div>
                </div>}
                <style jsx global>{`
                    .sbl-circ {
                      height: 35px;
                      width: 35px;
                      color: #5a5a5a;
                      position: relative;
                      display: block;
                      border: 2px solid;
                      border-radius: 50%;
                      border-top-color: transparent;
                      animation: rotate 1s linear infinite; 
                      margin: 5px auto;
                    }

                    @keyframes rotate {
                      0% {
                        transform: rotate(0); }
                      100% {
                        transform: rotate(360deg); } 
                    }
                        
                    .messages-content {
                        height: 100%;
                        overflow-x: hidden;
                        position: relative;
                    }
                    .scroll-disable {
                        overflow: hidden;
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
                    .content-left_owner .crypt-message > p, 
                    .content-right_owner .crypt-message > p {
                        background-color: transparent !important;
                        padding: 0 !important;
                        height: 27px;
                    }
                    .content-left_owner .crypt-message > p img, 
                    .content-right_owner .crypt-message > p img{
                        width: 30px;
                    }
                    .content-left_owner .crypt-message > p:before, .content-right_owner .crypt-message > p:before {
                        border-color: transparent !important;
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
                    .content-right_owner .message-time > p .edit-remove i{
                        padding: 2px 4px;    
                        position: relative;
                    }
                    .content-right_owner .message-time > p .edit-remove i:first-child:after{
                        content: '';
                        position: absolute;
                        width: 5px;
                        height: 5px;
                        background: #0c6d83;
                        top: 0;
                        right: -5px;
                    }
                    .content-right_owner .message-time > p .edit-remove i:last-child:after{
                        content: '';
                        position: absolute;
                        width: 5px;
                        height: 5px;
                        background: #0c6d83;
                        bottom: 0;
                        right: -5px;
                    }
                    .content-right_owner .message-time > p .edit-remove{
                        position: absolute;
                        left: -15px;
                        background: #0c6d83;
                        display: -webkit-box;
                        display: -webkit-flex;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-flex-direction: column;
                        -ms-flex-direction: column;
                        flex-direction: column;
                        top: 0;
                        width: 18px;
                        font-size: 9px;
                        height: 27px;
                        -webkit-box-pack: justify;
                        -webkit-justify-content: space-between;
                        -ms-flex-pack: justify;
                        justify-content: space-between;
                        border-right: 1px solid;
                        opacity: 0;
                        transition: .2s;
                        visibility: hidden;
                    }
                    .content-right_owner .message-time > p:hover .edit-remove{
                        opacity: 1;
                        visibility: visible;
                        left: -18px;
                    }
                    .content-right_owner .message-time > p .edit-remove:after{
                        content: '';
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        height: 0.8px;
                        width: 18px;
                        margin: auto;
                        background: #fff;
                    }
                    .content-right_owner .message-time > p .edit-remove:before{
                        content: '';
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        right: -1px;
                        height: 27px;
                        width: 0.8px;
                        margin: auto;
                        background: #fff;
                        z-index: 2;
                    }
                    .opened-encryptPopUp .edit-remove {
                        display: none !important;
                    }
                    
                    .content-right_owner .message-time > p .encryptPopUp,
                    .content-left_owner .message-time > p .encryptPopUp{
                        position: absolute;
                        height: 25px;
                        display: none;
                        width: 25px;
                        padding: 2px;
                        bottom: 0;
                        top: 0;
                        margin: auto;
                        cursor: pointer;
                        border-radius: 5px;
                        
                    }
                    .content-right_owner .message-time > p .encryptPopUp {
                        left: -30px;
                    }
                    .content-left_owner .message-time > p .encryptPopUp{
                        right: -30px;
                    }
                    
                    .opened-encryptPopUp {
                        background-color: #e7e7e7 !important;
                        color: #000 !important;
                    } 
                    .opened-encryptPopUp:before {
                        border-left-color: #e7e7e7 !important;
                    }
                    .opened-encryptPopUp .encryptPopUp{
                        display: block !important;
                    }
                    .content-right_owner .message-time > p,
                    .content-left_owner .message-time > p {
                        cursor: pointer;
                        text-align:left;
                        margin: 0 0 5px 0;
                        display: inline-block;
                        padding: 5px 10px;
                        color: #fff;
                        font-size: 13px;
                        border-radius: 5px;
                        position: relative;
                        word-break: break-all;
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
