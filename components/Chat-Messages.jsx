import React from 'react';
import UI_ELEMENTS from 'components/shared/UI';
import Icon from 'components/Icons/icon';
import Messages from "components/Messages";
import {connect} from "react-redux";
import {
    __CHANGE_STATUS_MODAL,
    __SET_ENCRYPT_DATA
} from 'store/actions';


class ChatMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this._encryptData = [
            {value: 'substitution', name: 'Substitution'},
            {value: 'vigenere', name: 'Vigenere'},
            {value: 'caesar', name: 'Caesar'},
            {value: 'playfair', name: 'Playfair'},
            {value: 'vernam', name: 'Vernam'},
        ];
        this.__selectEncrypt    = this.__selectEncrypt.bind(this);
        this.__generateValue    = this.__generateValue.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.encryptData.type !== this.props.encryptData.type) {
            if (this.props.encryptData.type === 'substitution') {
                this.props.__SET_ENCRYPT_DATA([{type: 'key', value: ''}, {
                    type: 'warning',
                    value: false
                }, {type: 'disabled', value: true}]);
            } else if (this.props.encryptData.type === 'vernam') {
                this.props.__SET_ENCRYPT_DATA([{type: 'key', value: ''}, {type: 'warning', value: false}, {type: 'disabled', value: true}]);
            } else {
                let value = this.props.encryptData.type === 'caesar' ? 3 : '';
                this.props.__SET_ENCRYPT_DATA([{type: 'key', value: value}, {type: 'warning', value: false}, {type: 'disabled', value: false}]);
            }
        }
    }

    componentDidMount () {
        this.props.__SET_ENCRYPT_DATA({type: 'type', value: 'substitution'})
    }

    __generateValue (value) {
        this.props.__SET_ENCRYPT_DATA({type: 'key', value: ''});
        if (this.props.encryptData.type  === 'caesar' && value === '') {
            value = 3;
        }
        return value
    }

    __selectEncrypt (data) {
        this.props.__SET_ENCRYPT_DATA({type: 'type', value: data})
    }
    render () {
        return (
            <div className="chat-messages">
                <div className="select-bar">
                    <UI_ELEMENTS.Select
                        selectEncrypt={this.__selectEncrypt}
                        placeholder="Please choose encrypt type"
                        style={{
                            display: 'block',
                            width: '70%',
                            padding: '12px',
                            border: 'none',
                            borderBottom: '1px solid #e3dede',
                            marginLeft: '1px',
                            backgroundColor: 'transparent'
                        }}
                        dataOptions={this._encryptData}
                    />
                    <div style={{height: '100%'}} className={this.props.encryptData.warning ? 'warning-wrap' : ''}>
                        <UI_ELEMENTS.Input
                            name="key"
                            attr={this.props.encryptData.type === 'caesar' ? [{name: 'min', value: 1}] : []}
                            type={this.props.encryptData.type === 'caesar' ? 'number' : 'text'}
                            id="key"
                            disabled={this.props.encryptData.disabled}
                            value={this.props.encryptData.key}
                            refBind={React.createRef()}
                            placeholder={this.props.encryptData.type  === 'caesar' ? "Press 1-25 digits only" : "Key"}
                            events={['change', 'input']}
                            onChange={(e) => {this.props.__SET_ENCRYPT_DATA({type: 'key', value: this.__generateValue(e.target.value)})}}
                            onInput={() => this.props.__SET_ENCRYPT_DATA({type: 'warning', value: false})}
                            size="md" />
                    </div>
                    <span className={`show-modal-icon ${!this.props.isShowModal ? 'disable-modal' : ''}`} onClick={() => this.props.__CHANGE_STATUS_MODAL()}>
                        <Icon name="modal" />
                    </span>
                </div>
                <Messages />
                <style jsx global>{`
                    .chat-messages .select-bar .disable-modal svg {
                        opacity: 0.3;
                        filter: blur(1px);
                    }
                    .chat-messages .select-bar .show-modal-icon {
                        height: 100%;
                        width: 61px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-bottom: 1px solid rgb(227, 222, 222);
                        border-left: 1px solid rgb(227, 222, 222);
                        cursor: pointer;
                    }
                    .chat-messages .select-bar .input-wrap{
                        height: 100%;
                    }
                    .chat-messages .select-bar .input-wrap input{
                        margin-bottom: 0;
                        height: 100%;
                        background-color: #fff;
                        border-bottom: 1px solid rgb(227, 222, 222) !important;
                        border-left: 1px solid rgb(227, 222, 222) !important;
                        border-top: 0;
                        border-right: 0;
                    }
                    .chat-messages .select-bar {
                        display: flex;
                        align-items: center;
                        height: 41.8px;
                    }
                    .chat-messages .select-bar .warning-wrap {
                        box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
                        animation: pulse 1.5s infinite;
                    }
                    @keyframes pulse {
                        0% {
                           box-shadow: 0 0 0 0 rgba(214, 20, 20, 0.7);
                        }
                        70% {
                            box-shadow: 0 0 0 4px rgba(182, 13, 13, 0);
                        }
                        100% {
                            box-shadow: 0 0 0 0 rgba(0,0,0,0);
                        }
                    }
                    .chat-messages {
                        width: 70%;
                        box-shadow: 0 3px 1px -2px rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12);
                    }
                `}</style>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isShowModal: state.chat.isShowModal,
    encryptData: state.chat.encryptData
});
const mapDispatchToProps = {
    __CHANGE_STATUS_MODAL,
    __SET_ENCRYPT_DATA
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatMessages);