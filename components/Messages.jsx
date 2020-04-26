import React from 'react';
import {connect} from "react-redux";
import {
    __GET_ACTIVE_USERS_MESSAGES,
    __ADD_MESSAGE,
    __GET_CHAT_USERS,
    __IS_TYPING_TO_ACTIVE_USER,
    __EDIT_MESSAGE,
} from 'store/saga';
import {
    __SET_ENCRYPT_DATA,
} from 'store/actions';
import TextAreaMessage from 'components/elements/TextAreaMessage';
import Skeleton from "./Skeleton";
import PrivateMessageContent from "components/elements/PrivateMessageContent";
import { Modal } from 'components/shared/UI/Modal';
import UI_ELEMENTS from "./shared/UI";
import { Bus } from "components/shared/helpers/Bus";
import {
    Vigenere,
    RSA,
    Caesar,
    Playfair,
    Vernam,
    Substitution,
} from 'libraries';


class Messages extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            startMessageNotify: '',
            skeletonLoading: true,
            noChatUser: false,
            activeUserData: {},
            showModal: false,
            beforeClose: false,
            sendMessage: '',
            modalData: {
                yourMessage: '',
                encryptText: '',
                warningMsg: '',
            }
        };
        this.__sendMessage              = this.__sendMessage.bind(this);
        this.__isTyping                 = this.__isTyping.bind(this);
        this.__handleSuccess            = this.__handleSuccess.bind(this);
        this.__closeModal               = this.__closeModal.bind(this);
        this.__handleSubmitMessage      = this.__handleSubmitMessage.bind(this);
        this.__updateStateContent       = this.__updateStateContent.bind(this);
        this.__messagesHaveBeenDeleted  = this.__messagesHaveBeenDeleted.bind(this);
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
        if (!prevProps.activeUser?.id && this.props.activeUser?.id && prevProps.activeUser?.id !== this.props.activeUser?.id) {
            this.setState({
                startMessageNotify: '',
                skeletonLoading: true
            });
            const startTime = new Date().getTime();
            const genMessages = await __GET_ACTIVE_USERS_MESSAGES(this.props.activeUser?.id).next();
            const endTime = new Date().getTime();

            this.__updateStateContent(genMessages.value.letters[0].message, endTime, startTime);
        } else if (prevProps.activeUser?.id !== this.props.activeUser?.id && this.props.activeUser?.id) {
            this.setState({
                startMessageNotify: '',
                skeletonLoading: true
            });
            const startTime = new Date().getTime();
            const genMessages = await __GET_ACTIVE_USERS_MESSAGES(this.props.activeUser?.id).next();
            const endTime = new Date().getTime();

            this.__updateStateContent(genMessages.value.letters[0].message, endTime, startTime);
        } else if (prevProps.messages.length === 1 && prevProps.messages[0].message === '' && this.props.messages.length === 1 && this.props.messages[0].message !== '') {
            this.setState({
                startMessageNotify: '',
            });
        }
    }

    __messagesHaveBeenDeleted () {
        this.setState({
            startMessageNotify: 'Send the first letter'
        })
    }

    __updateStateContent (message, endTime, startTime) {
        this.setState({//If there aren't any messages
            ...(message === '' && {startMessageNotify: 'Send the first letter'})
        });

        if (endTime - startTime < 1000) {
            setTimeout(() => {
                this.setState({
                    noChatUser: false,
                    skeletonLoading: false,
                })
            }, 1000)
        } else {
            this.setState({
                noChatUser: false,
                skeletonLoading: false,
            })
        }
    }

    __isTyping (hint) {
        __IS_TYPING_TO_ACTIVE_USER(hint, this.props.activeUser?.id, this.props.loggedUser.id).next()
    }

    __handleSuccess () {
        this.setState({
            beforeClose: true
        });
    }

    __closeModal () {
        this.setState({
            beforeClose: false,
            showModal: false
        }, () => {
            if (this.state.modalData.encryptText) this.__handleSubmitMessage(this.state.sendMessage, this.state.modalData.encryptText, this.state.modalData.decryptText);
        });
    }

    async __handleSubmitMessage (value, encryptedMsg, decryptMsg) {
        const isKey = (value === 'crypt' && value === encryptedMsg && value === decryptMsg && (isNaN(decryptMsg)));
        const messageData = {
            time: new Date().getTime(),
            message: value,
            encryptedMsg: encryptedMsg,
            decryptedMsg: decryptMsg,
            key: isKey ? 'crypt' : this.props.encryptData?.key,
            encryptType: isKey ? 'crypt' : this.props.encryptData.type
        };

        await __ADD_MESSAGE({
            friend: {
                friendId: this.props.activeUser?.id,
                loggedUser: this.props.loggedUser,
                msgData: {...messageData, owner: this.props.loggedUser.id}
            },
            my: {
                friendId: this.props.activeUser?.id,
                loggedUser: this.props.loggedUser,
                msgData: {...messageData, owner: 'Me'}
            }
        }).next();

        __GET_CHAT_USERS().next();
        this.setState({
            startMessageNotify: ''
        });
        Bus.dispatch('messageSendingFinish');
    }

    __encryptCommon (value, key, type, callback = () => {}) {
        let sendMSG = {};
        switch (type) {
            case 'vigenere':
                const encryptedMsgV = Vigenere.doCryptVigenere(false, value, key, (msg) => {
                    callback(msg);
                    this.props.__SET_ENCRYPT_DATA({type: 'warning', value: true});
                });
                return sendMSG = {
                    encryptedMSG: encryptedMsgV,
                    decryptedMSG: Vigenere.doCryptVigenere(true, encryptedMsgV, key, (msg) => {
                        callback(msg);
                        this.props.__SET_ENCRYPT_DATA({type: 'warning', value: true});
                    }),
                };
            case 'substitution' :
                const encryptedMsgS = Substitution(value);
                return sendMSG = {
                    encryptedMSG: encryptedMsgS.encrypt,
                    decryptedMSG: encryptedMsgS.decrypt
                };
            case 'rsa' :
                // Message
                const message = value;

                // Generate RSA keys
                const keys = RSA.generate(key);

                const encoded_message = RSA.encode(message);
                const encrypted_message = RSA.encrypt(encoded_message, keys.n, keys.e);
                const decrypted_message = RSA.decrypt(encrypted_message, keys.d, keys.n);
                const decoded_message = RSA.decode(decrypted_message);

                return sendMSG = {
                    encryptedMSG: encoded_message.toString(),
                    decryptedMSG: decoded_message
                };
            case 'caesar':
                const encryptedMsgC = Caesar.doCrypt(false, value, key, (msg) => {
                    callback(msg);
                });
                return sendMSG = {
                    encryptedMSG: encryptedMsgC,
                    decryptedMSG: Caesar.doCrypt(true, encryptedMsgC, key, (msg) => {
                        callback(msg);
                    })
                };
            case 'playfair':
                return sendMSG = {
                    encryptedMSG: Playfair.doCipher(value, key, (msg) => {
                        callback(msg);
                    }),
                    decryptedMSG: Playfair.deCodeCipher(value, key)
                };
            case 'vernam':
                let _keyE = '';
                const encryptedMsgVer = Vernam.doEncrypt(value, (_key) => {
                    _keyE = _key;
                    this.props.__SET_ENCRYPT_DATA({type: 'key', value: _key})
                });

                return sendMSG = {
                    encryptedMSG: encryptedMsgVer,
                    decryptedMSG: Vernam.doDecrypt(value, _keyE)
                };
            default : break;
        }
    }

    async __sendMessage (value, isKey) {
        if (isKey instanceof Object) {
            const encryptedMsg = this.__encryptCommon.call(this, value, isKey.mainObj?.key, isKey.mainObj?.encryptType);
            await __EDIT_MESSAGE(
                {value, e: encryptedMsg.encryptedMSG, d: encryptedMsg.decryptedMSG},
                isKey?.index,
                {idUser: this.props.activeUser?.id, myId: this.props.loggedUser?.id}).next();
            Bus.dispatch('endEditing');
            Bus.dispatch('messageSendingFinish');
            return
        } else if (isKey) {
            this.__handleSubmitMessage('crypt', 'crypt', 'crypt');
            return
        }
        let warning = '';
        this.setState({
            sendMessage: value
        }, () => {
            const encryptMsg = this.__encryptCommon.call(this, value, this.props.encryptData?.key, this.props.encryptData.type, (msg) => {
                warning = msg;
            });
            if (this.props.isShowModal) {
                this.setState({
                    modalData: {
                        yourMessage: value,
                        ...(warning && {warningMsg: warning}),
                        ...(encryptMsg.encryptedMSG && {encryptText: encryptMsg.encryptedMSG}),
                        ...(encryptMsg.decryptedMSG && {decryptText: encryptMsg.decryptedMSG}),
                    },
                    showModal: true
                });
            } else if (encryptMsg.encryptedMSG && encryptMsg.decryptedMSG) this.__handleSubmitMessage(value, encryptMsg.encryptedMSG, encryptMsg.decryptedMSG);
        });
    }

    render () {
        return (
            <div
                className={`message-content-right 
                ${this.state.skeletonLoading ? 'skeleton-loading-content' : ''} 
                ${!this.state.noChatUser ? 'hidden-overlay' : ''} 
                ${this.state.startMessageNotify ? 'empty-message-content' : ''}
                ${this.state.noChatUser ? 'no-chat-user': ''}
                `}>
                {this.state.skeletonLoading && !this.state.noChatUser ?
                    new Array(6).fill('').map((_, i) => {
                            return (
                                <div
                                    className={`skeleton-container-messages ${i % 2 !== 0 ? 'odd-container-skeleton' : ''}`}
                                    key={i + Math.random().toString(16).slice(2, 6)} style={{opacity: (6 - i) * 0.10}}>
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
                    <PrivateMessageContent messagesHaveBeenDeleted={this.__messagesHaveBeenDeleted} />
                }
                {!this.state.skeletonLoading && <TextAreaMessage
                    activeUser={this.props.activeUser}
                    loggedUserId={this.props.loggedUser?.id}
                    isTyping={this.__isTyping}
                    sendMessage={this.__sendMessage}/>}

                <Modal
                    show={this.state.showModal}
                    beforeClose={this.state.beforeClose}
                    close={this.__closeModal}>
                    <div className="scroll-content">
                        <h2>Please confirm message</h2>
                        <h4>Your included text</h4>
                        <p className="message-p">{this.state.modalData.yourMessage}</p>
                        <h4>Encrypted text</h4>
                        {this.state.modalData.warningMsg ? <p className="warning-message">{this.state.modalData.warningMsg}</p>:
                            <p className="message-p">{this.state.modalData.encryptText}</p>
                        }
                    </div>
                    <UI_ELEMENTS.Button
                        background="#37415c"
                        color="#fff"
                        fontSize={11}
                        type="button"
                        text={'Send'}
                        width={100}
                        margin={['20px', '0', '0', 'auto']}
                        onClick={this.__handleSuccess}
                        size="sm"/>
                </Modal>
                <style jsx >{`
                    .scroll-content {
                        max-height: 70vh;
                        overflow-x: hidden;
                    }
                    .message-p {
                        word-break: break-all;
                    }
                    .warning-message {
                        color: #ffa100;
                    }
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
                    .message-content-right.skeleton-loading-content {
                        overflow: hidden;
                        justify-content: flex-start;
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
    activeUser: state.chat.activeUser,
    usersList: state.chat.myChatUsers,
    isShowModal: state.chat.isShowModal,
    encryptData: state.chat.encryptData,
    messages: state.chat.activeUserMessages,
});

const mapDispatchToProps = {
    __SET_ENCRYPT_DATA,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Messages);
