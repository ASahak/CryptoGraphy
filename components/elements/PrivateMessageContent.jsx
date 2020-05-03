import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import UI_ELEMENTS from "components/shared/UI";
import * as moment from 'moment';
import Icon from 'components/Icons/icon';
import debounce from "lodash.debounce";
import {
    __LOAD_MORE_MESSAGES,
} from 'store/actions';
import { Bus } from 'components/shared/helpers/Bus';
import {
    _EVERY_PAGE_LIMIT_MESSAGES
} from 'components/shared/helpers/constants';
import { __getUserMessages } from 'store/reselect';
import {
    __detectCryptIcon
} from 'components/shared/helpers/global-functions';
import {
    __EDIT_MESSAGE,
    __REMOVE_MESSAGE,
} from "store/saga";

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
            isEditing: false,
            isRemoving: false,
            editingMsgIndex: null,
        };
        this._messagesEnd           = null;
        this._handleDomClick        = null;
        this._handleClickRemove     = null;
        this.__scrollToBottom       = this.__scrollToBottom.bind(this);
        this.__handleScrollTop      = this.__handleScrollTop.bind(this);
        this.__showEncryptPopUp     = this.__showEncryptPopUp.bind(this);
        this.__doEncryptType        = this.__doEncryptType.bind(this);
        this.__hidePopUpEncrypt     = this.__hidePopUpEncrypt.bind(this);
        this.__editMessage          = this.__editMessage.bind(this);
        this.__removeMessageConfirm = this.__removeMessageConfirm.bind(this);
        this.__removeMessage        = this.__removeMessage.bind(this);
        this.__clickRemovePopUp = this.__clickRemovePopUp.bind(this);
        this._scrollContent     = React.createRef();
        Bus.subscribe('cancelEditing', () => {
            this.setState({
                isEditing: false
            })
        });
        Bus.subscribe('endEditing', () => {
            this.setState({
                isEditing: false,
                isRemoving: false,
                editingMsgIndex: null,
            })
        });
    }
    __scrollToBottom (behavior) {
        setTimeout(() => {
            this._messagesEnd?.scrollIntoView({ behavior: (behavior ? 'smooth' : 'auto')});
        }, 0)
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

    __showEncryptPopUp (evt, index, isKey) {
        if (evt.target.closest('.remove-confirm-container')) return;

        const _currentSrc = evt.target.closest('.separate-p');
        if (document.body.querySelector('.opened-encryptPopUp') &&
            document.body.querySelector('.opened-encryptPopUp') !== _currentSrc
        ) {
            document.body.querySelector('.opened-encryptPopUp').setAttribute('data-hint-encrypt', false);
            document.body.querySelector('.opened-encryptPopUp').classList.remove('opened-encryptPopUp')
        }
        if (isKey) return;
        if (_currentSrc) {
            const dataIcon = _currentSrc.getAttribute('data-hint-encrypt');
            this.state.messagesSelector = [...this.state.messagesSelector];
            this.state.messagesSelector[index].isEncrypt = false;
            this.setState({
                encryptIcon: JSON.parse(dataIcon),
                messagesSelector: this.state.messagesSelector
            }, () => this.forceUpdate());
            _currentSrc.classList.toggle('opened-encryptPopUp');
        }
        setTimeout(() => {
            addEventListener('click', this._handleDomClick = this.__hidePopUpEncrypt.bind(this, index))
        }, 0)
    }

    __hidePopUpEncrypt (index, e) {
        this.state.messagesSelector = [...this.state.messagesSelector];
        delete this.state.messagesSelector[index].isEncrypt;
        this.setState({
            messagesSelector: this.state.messagesSelector
        }, () => this.forceUpdate());

        removeEventListener('click', this._handleDomClick);
        if (!e.target.closest('div[data-hint-encrypt]') && document.body.querySelector('.opened-encryptPopUp')) {
            document.body.querySelector('.opened-encryptPopUp').setAttribute('data-hint-encrypt', false);
            document.body.querySelector('.opened-encryptPopUp').classList.remove('opened-encryptPopUp')
        }
    }

    __doEncryptType (e, index) {
        const _currentSrc = e.target.closest('.separate-p');
        e.stopPropagation();

        this.setState({
            encryptIcon: !this.state.encryptIcon
        }, () => {
            _currentSrc.setAttribute('data-hint-encrypt', this.state.encryptIcon);
            const newEncryption = [...this.state.messagesSelector];
            newEncryption[index].isEncrypt = this.state.encryptIcon;
            this.setState({
                messagesSelector: newEncryption
            })
        })
    }

    __editMessage (evt, msg, time) {
        const index = this.props.messages.findIndex(msg => msg.time === time);
        __EDIT_MESSAGE(null, index, {idUser: this.props.activeUser?.id, myId: this.props.loggedUser?.id}).next();
        evt.stopPropagation();
        this.setState({
            isEditing: true,
            editingMsgIndex: index
        }, () => {
            Bus.dispatch('editMessage', {msg, index});
        })
    }

     __removeMessageConfirm (evt) {
        evt.stopPropagation();
        const _currentSrc      = evt.target.closest('.separate-p');
        const alreadyDeclared  = evt.target.closest('.messages-content')?.querySelector('.opened-pop-confirm-remove');
        if (alreadyDeclared) {
            alreadyDeclared.classList.remove('opened-pop-confirm-remove');
        }
        _currentSrc.classList.add('opened-pop-confirm-remove');
        setTimeout(() => {
            addEventListener('click', this._handleClickRemove = this.__clickRemovePopUp.bind(this))
        }, 0);
    }

    __removeMessage (time) {
        __REMOVE_MESSAGE(time, {idUser: this.props.activeUser?.id, myId: this.props.loggedUser?.id}).next();
    }

    __clickRemovePopUp (evt) {
        const alreadyDeclared  = evt.target.closest('.messages-content')?.querySelector('.opened-pop-confirm-remove');
        if (alreadyDeclared && !evt.target.closest('.remove-confirm-container') || evt.target.closest('.trigger-close-dialog')) {
            alreadyDeclared.classList.remove('opened-pop-confirm-remove');
            removeEventListener('click', this._handleClickRemove);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // if (prevProps.activeUser.isTyping !== this.props.activeUser.isTyping) { todo
        //     this.props.activeUser.isTyping && this.__scrollToBottom('behavior');
        // }

        // Detect if there are removed message
        if (this.props.activeUser?.removedMessageIndex >= 0 &&
            (prevProps.messages[this.props.activeUser.removedMessageIndex]?.removed !== this.props.messages[this.props.activeUser.removedMessageIndex]?.removed ||
            !(() => {
                const currentIndex = this.state.messagesSelector.length - (this.props.messages.length - this.props.activeUser.removedMessageIndex);
                if (currentIndex < 0) return false;
                return this.state.messagesSelector[currentIndex]?.removed
            })())
        ) {
            const currentIndex = this.state.messagesSelector.length - (this.props.messages.length - this.props.activeUser.removedMessageIndex);
            if (currentIndex >= 0) {
                const newEncryption = [...this.state.messagesSelector];
                if (newEncryption[currentIndex]) {
                    newEncryption[currentIndex].removed = true;
                    this.setState({
                        messagesSelector: newEncryption
                    })
                }
            }
        }

        // when editing have been finished
        if (this.props.activeUser?.editedMsgIndex >= 0 &&
            (this.props.messages[this.props.activeUser?.editedMsgIndex].message !== prevProps.messages[this.props.activeUser?.editedMsgIndex].message ||
            (() => {
                const currentIndex = this.state.messagesSelector.length - (this.props.messages.length - this.props.activeUser?.editedMsgIndex);
                if (currentIndex < 0) return false;
                return this.state.messagesSelector[currentIndex].message !== this.props.messages[this.props.activeUser?.editedMsgIndex].message;
            })())
        ) {
            const currentIndex = this.state.messagesSelector.length - (this.props.messages.length - this.props.activeUser?.editedMsgIndex);
            if (currentIndex >= 0) {
                const editedArray = [...this.state.messagesSelector];
                editedArray[currentIndex] = this.props.messages[this.props.activeUser?.editedMsgIndex];
                this.setState({
                    isEditing: false,
                    isRemoving: false,
                    editingMsgIndex: null,
                    messagesSelector: editedArray
                });
            }
        }
        // Sending notification when there was not any messages
        if (this.props.messages.length === 1 && this.props.messages[0].message === '' || prevProps.messages.length === 1 && prevProps.messages[0].message === '') {
            this.props.messagesHaveBeenDeleted();
        }
        // Update message list
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

    componentWillUnmount() {
        removeEventListener('click', this._handleClickRemove);
        removeEventListener('click', this._handleDomClick);
        Bus.unsubscribe('cancelEditing');
        Bus.unsubscribe('endEditing');
    }

    get FN () {
        return this.props.activeUser ? this.props.activeUser.fullName.split(' ')[0].slice(0, 1).toUpperCase() : '';
    }
    get LN () {
        return this.props.activeUser ? this.props.activeUser.fullName.split(' ')[1]?.slice(0, 1) || ''.toUpperCase() : '';
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
                            <div key={message.time + index} className={_isOwner ? 'content-right_owner' : 'content-left_owner'}>
                                <UI_ELEMENTS.UserImage
                                    firstName={_dataMSG.fullName.split(' ')[0]}
                                    lastName={_dataMSG.fullName.split(' ')[1] || ''}
                                    fill={_dataMSG.color}
                                />
                                {message.removed ? <div className="removed-message">Removed message</div> :
                                <div className={`message-time ${__detectCryptIcon(message) ? 'crypt-message' : ''}`}
                                     data-message-type={message.encryptType}
                                     data-message-key={message.key}>
                                    <div
                                        className="separate-p"
                                        onClick={(e) => this.__showEncryptPopUp(e, index, __detectCryptIcon(message))}
                                        data-hint-encrypt={false}>

                                        {(_isOwner && !__detectCryptIcon(message) && (!this.state.isEditing && !this.state.isRemoving)) &&
                                        <span className="edit-remove">
                                            <i className="lnr lnr-pencil" onClick={(e) => this.__editMessage(e, message, message.time)}></i>
                                            <i className="lnr lnr-cross" onClick={(e) => this.__removeMessageConfirm(e)}></i>
                                            <div className="remove-confirm-container">
                                                Are you sure?
                                                <p>
                                                    <a className="trigger-close-dialog">No</a>
                                                    <a onClick={() => this.__removeMessage(message.time)}>Yes</a>
                                                </p>
                                            </div>
                                        </span>}

                                        <span className="encryptPopUp"
                                              onClick={(e) => this.__doEncryptType(e, index)}>
                                            {this.state.encryptIcon ? <Icon name="unlocked" /> :
                                            <Icon name="locked" />}
                                        </span>

                                        {__detectCryptIcon(message) ? <img src="./assets/images/key.png" alt="iconSend"/> :

                                            <span>{message.isEncrypt === false ? message.decryptedMsg ://there will be some case which is equal undefined
                                                message.isEncrypt === true ? message.encryptedMsg : message.message} </span>} {message.edited && <span className="edited-msg">(edited)</span>}
                                    </div>
                                    <span className="time-wrap">{moment(+message.time).format('lll')}</span>
                                    {_isOwner ? (index === this.state.messagesSelector.length - 1) ? this.props.activeUser.isSeen ?
                                        <div className="status-message">Seen</div>: <div className="status-message">Delivered</div> : '' : ''}
                                </div>}
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
                        padding-top: 10px;
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
                    .content-left_owner .removed-message, .content-right_owner .removed-message {
                        padding: 5px 10px;
                        max-width: 50%;
                        position: relative;
                        background-color: #d9d7d7;
                        border-radius: 6px;
                        font-size: 14px;
                        height: 27px;
                        font-style: italic;
                        color: #767575;
                        margin-top: 5px;
                        margin-bottom: 10px;
                    }
                    .content-left_owner .removed-message {
                        margin-left: 10px;
                    }
                    .content-right_owner .removed-message {
                        margin-right: 10px;
                    }
                    .content-right_owner .message-time {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        padding: 5px 10px;
                        max-width: 50%;
                        position: relative;
                    }
                    .content-left_owner .message-time > div.separate-p .edited-msg, 
                    .content-right_owner .message-time > div.separate-p .edited-msg{
                        font-size: 10px;
                        font-family: sans-serif;
                        font-style: italic;
                    }
                    .content-left_owner .crypt-message > div.separate-p, 
                    .content-right_owner .crypt-message > div.separate-p {
                        background-color: transparent !important;
                        padding: 0 !important;
                        height: 27px;
                    }
                    .content-left_owner .crypt-message > div.separate-p img, 
                    .content-right_owner .crypt-message > div.separate-p img{
                        width: 30px;
                    }
                    .content-left_owner .crypt-message > div.separate-p:before, .content-right_owner .crypt-message > div.separate-p:before {
                        border-color: transparent !important;
                    }
                    .message-time .status-message {
                        font-size: 12px;
                        color: #424242;
                    }
                    .message-time:hover > span {
                        opacity: 1 !important;
                        visibility: visible !important;
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
                        visibility: hidden;
                    }
                    .content-right_owner .message-time > div.separate-p .edit-remove i{
                        padding: 2px 4px;    
                        position: relative;
                    }
                    .content-right_owner .message-time > div.separate-p .edit-remove i.lnr-pencil:after{
                        content: '';
                        position: absolute;
                        width: 5px;
                        height: 5px;
                        background: ${this.state.rightColor};
                        top: 0;
                        right: -5px;
                    }
                    .content-right_owner .message-time > div.separate-p .edit-remove i.lnr-cross:after{
                        content: '';
                        position: absolute;
                        width: 5px;
                        height: 5px;
                        background: ${this.state.rightColor};
                        bottom: 0;
                        right: -5px;
                    }
                    .content-right_owner .message-time > div.separate-p .edit-remove .remove-confirm-container p {
                        margin: 4px 0 0;
                        display: flex;
                        justify-content: flex-end;
                    }
                    .content-right_owner .message-time > div.separate-p .edit-remove .remove-confirm-container p > a:first-child{
                        height: 19px;
                        display: inline-block;
                        border: 1px solid #ccc;
                        width: 25px;
                        border-radius: 2px;
                        text-align: center;
                        font-size: 12px;
                        vertical-align: middle;
                        margin-right: 7px;
                        background-color: ${this.state.rightColor};
                        color: #fff;
                        cursor: pointer;
                    } 
                    .opened-pop-confirm-remove .edit-remove {
                        opacity: 1 !important;
                        visibility: visible !important;
                        left: -18px !important;
                    }
                    .content-right_owner .message-time > div.separate-p .edit-remove .remove-confirm-container p > a:last-child{
                        height: 19px;
                        display: inline-block;
                        border: 1px solid #ccc;
                        width: 25px;
                        border-radius: 2px;
                        text-align: center;
                        font-size: 12px;
                        vertical-align: middle;
                        background-color: #c5cbca;
                        color: #fff;
                        cursor: pointer;
                    } 
                    .content-right_owner .message-time > div.separate-p .edit-remove .remove-confirm-container{ 
                        position: absolute;
                        width: 120px;
                        right: 24px;
                        padding: 6px;
                        color: #000;
                        font-size: 13px;
                        border: 1px solid #ccc;
                        border-radius: 3px;
                        top: 14px;
                        bottom: 0;
                        margin: auto;
                        height: 55px;
                        opacity: 0;
                        z-index: 22;
                        background: #fff;
                        transition: .4s;
                        visibility: hidden;
                        cursor: default;
                    }
                    .content-right_owner .message-time > div.separate-p .edit-remove .remove-confirm-container:after{
                        content: '';
                        width: 0;
                        height: 0;
                        border-top: 4px solid transparent;
                        border-bottom: 4px solid transparent;
                        border-left: 4px solid #dcdcdc;
                        position: absolute;
                        right: -4px;
                        -webkit-transform: rotate(0deg);
                        -ms-transform: rotate(0deg);
                        transform: rotate(0deg);
                        top: 21px;
                    } 
                    .content-right_owner .message-time > div.separate-p .edit-remove .remove-confirm-container:before{
                        content: '';
                        width: 0;
                        height: 0;
                        border-top: 3px solid transparent;
                        border-bottom: 3px solid transparent;
                        border-left: 3px solid #fff;
                        position: absolute;
                        right: -3px;
                        -webkit-transform: rotate(0deg);
                        -ms-transform: rotate(0deg);
                        transform: rotate(0deg);
                        top: 22px;
                        z-index: 22;
                    } 
                    .opened-pop-confirm-remove .remove-confirm-container {
                        opacity: 1 !important;
                        visibility: visible !important;
                    }
                    .opened-pop-confirm-remove + .time-wrap {
                        display: none;
                    }
                    .content-right_owner .message-time > div.separate-p .edit-remove{
                        position: absolute;
                        left: -15px;
                        background: ${this.state.rightColor};
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
                    .content-right_owner .message-time > div.separate-p:hover .edit-remove{
                        opacity: 1;
                        visibility: visible;
                        left: -18px;
                    }
                    .content-right_owner .message-time > div.separate-p .edit-remove:after{
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
                    .content-right_owner .message-time > div.separate-p .edit-remove:before{
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
                    
                    .content-right_owner .message-time > div.separate-p .encryptPopUp,
                    .content-left_owner .message-time > div.separate-p .encryptPopUp{
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
                    .content-right_owner .message-time > div.separate-p .encryptPopUp {
                        left: -30px;
                    }
                    .content-left_owner .message-time > div.separate-p .encryptPopUp{
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
                    .content-right_owner .message-time > div.separate-p,
                    .content-left_owner .message-time > div.separate-p {
                        cursor: pointer;
                        text-align:left;
                        margin: 0 0 5px 0;
                        display: inline-block;
                        padding: 5px 10px;
                        color: #fff;
                        font-size: 13px;
                        border-radius: 5px;
                        position: relative;
                        min-height: 27px;
                        word-break: break-all;
                    }
                    .content-right_owner .message-time > div.separate-p, .content-right_owner .message-time > span {
                        background-color: ${this.state.rightColor};
                    }
                    .content-left_owner .message-time > div.separate-p, .content-left_owner .message-time > span {
                        background-color: ${this.state.leftColor};
                    }
                    .content-right_owner .message-time > div.separate-p:before {
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
                    .content-left_owner .message-time > div.separate-p:before {
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

PrivateMessageContent.propTypes = {
    messagesHaveBeenDeleted: PropTypes.func,
};

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
