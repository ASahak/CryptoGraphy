import React, {useState} from 'react';
import Head from 'next/head'
import Icon from 'components/Icons/icon';
import UI_ELEMENTS from 'components/shared/UI';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import fire from 'config/fire';
import Alert from 'components/shared/UI/Alert';
import Router from "next/router";
import * as authService from "utils/auth-service";
import { bodyLoading } from 'components/shared/helpers/global-functions';
import { connect } from 'react-redux';
import {
    CHANGE_STATUS_IS_LOADING
} from 'store/actions';

function LoginForm () {
    const _timeout = 4000;
    const [loadingLogin, setLoadingLogin] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { register, handleSubmit, errors, reset } = useForm();
    const onSubmit = data => {
        const timeStart = new Date().getTime();
        setLoadingLogin(true);
        fire.auth().signInWithEmailAndPassword(data.email, data.password).then(user => {
            setLoadingLogin(false);
            Router.replace('/');
        }).catch(err => {
            setLoadingLogin(false);
            setErrorMessage(err.message);
            reset();
            const timeEnd = new Date().getTime();
            if (timeEnd - timeStart > _timeout) {
                setErrorMessage('');
            } else {
                setTimeout(() => {
                    setErrorMessage('');
                }, (_timeout - (timeEnd - timeStart)));
            }
        })
    };
    return (
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            {errorMessage && <Alert
                type="error"
                timeout={_timeout}
                message={errorMessage}
            />}
            <UI_ELEMENTS.Input
                name="email"
                type="email"
                refBind={register({
                    required: 'Email is required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address"
                    }
                })}
                fullWidth={true}
                errors={errors.email && errors.email.message}
                placeholder="Email ID"
                size="md" />
            <UI_ELEMENTS.Input
                refBind={register({
                    required: "You must specify a password",
                    minLength: {
                        value: 8,
                        message: "Password must have at least 8 characters"
                    }
                })}
                errors={errors.password && errors.password.message}
                name="password"
                type="password"
                fullWidth={true}
                placeholder="Password"
                size="md" />
            <UI_ELEMENTS.Button
                type="submit"
                icon={loadingLogin ? {dir: 'right', element: 'loading'} : {}}
                text="Login"
                width={190}
                size="md"/>
            <Link href="/reset-password" prefetch={false}>
                <a className="link-to-reset">Forgot password? click to reset</a>
            </Link>
            <Link href="/register" prefetch={false}>
                <a className="link-to-reset">I am new here. I want an account</a>
            </Link>
        </form>
    )
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: this.props.isLoading
        };
        bodyLoading(this.state.isLoading);
        authService.__isLogged().then(res => {
            if (res) {
                Router.push('/')
            } else {
                this.setState({
                    isLoading: false
                }, () => bodyLoading(this.state.isLoading, false));
            }
        })
    }
    componentDidMount() {
        this.props.CHANGE_STATUS_IS_LOADING(false);
    }

    render() {
        if (this.state.isLoading) return '';
        return (
            <div className="container">
                <Head>
                    <title>Login</title>
                </Head>

                <main>
                    <div className="login-form-container">
                        <div className="form-icon">
                            <Icon name="user" />
                        </div>
                        <h4 className="title-form">Member Login</h4>
                        <LoginForm/>
                    </div>
                </main>

                <style global jsx>{`
                    .login-form-container {
                        position: absolute;
                        left: 0;
                        right: 0;
                        margin: auto;
                        width: 400px;
                        padding: 25px 20px;
                        background: #ececec30;
                        bottom: 0;
                        top: 0;
                        height: max-content;
                        border-radius: 5px;
                        -webkit-backdrop-filter: blur(6px);
                        backdrop-filter: blur(6px);
                        border: 1px solid #ffffff24;
                    }
                    .login-form-container .title-form {
                        margin-bottom: 10px;
                        text-align: center;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        font-size: 23px;
                        margin: 10px 10px 20px 10px;
                        color: #fbfbfc;
                        font-weight: 400;
                    }
                    .login-form-container .link-to-reset {
                        text-align: center;
                        display: block;
                        margin: 10px;
                        font-size: 13px;
                        font-style: italic;
                        color: #e5e6e8;
                        letter-spacing: 1px;
                    }
                    .login-form-container .form-icon {
                        width: 40px;
                        height: 40px;
                        margin: auto;
                    }
                    .login-form-container .form-icon svg {
                        width: 100%;
                        height: 100%;
                    }
                `}</style>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.auth.isLoading
});

const mapDispatchToProps = {
    CHANGE_STATUS_IS_LOADING
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(Login));
