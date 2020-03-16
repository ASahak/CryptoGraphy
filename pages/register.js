import React, {useRef, useState} from 'react';
import Head from 'next/head'
import Icon from "components/Icons/icon";
import UI_ELEMENTS from "components/shared/UI";
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import fire from "config/fire";
import Alert from "components/shared/UI/Alert";
import Router from 'next/router';
import * as authService from "utils/auth-service";
import { bodyLoading } from 'components/shared/helpers/global-functions';

function RegisterForm () {
    const _timeout = 4000;
    const [loadingRegister, setLoadingRegister] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { register, handleSubmit, watch, errors, reset } = useForm();
    const onSubmit = data => {
        const timeStart = new Date().getTime();
        setLoadingRegister(true);
        fire.auth().createUserWithEmailAndPassword(data.email, data.password).then(user => {
            setLoadingRegister(false);
            const db = fire.firestore();
            db.collection('users').add({
                fullName: data.name,
                email: data.email,
                color: '#' + Math.random().toString(16).slice(2, 8),
                messages: {}
            }).then(_ => {
                Router.replace('/');
            });
        }).catch(err => {
            setErrorMessage(err.message);
            setLoadingRegister(false);
            reset();
            const timeEnd = new Date().getTime();
            if (timeEnd - timeStart > _timeout) {
                setErrorMessage('');
            } else {
                setTimeout(() => {
                    setErrorMessage('');
                }, (_timeout - (timeEnd - timeStart)));
            }
        });
    };
    const password = useRef({});
    password.current = watch("password", "");
    return (
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            {errorMessage && <Alert
                type="error"
                timeout={_timeout}
                message={errorMessage}
            />}
            <UI_ELEMENTS.Input
                type="text"
                name="name"
                refBind={register({
                    required: 'Name is required',
                    pattern: {
                        value: /.*[A-Z]+.*/g,
                        message: "Name must include at least one uppercase letter"
                    }
                })}
                errors={errors.name && errors.name.message}
                fullWidth={true}
                placeholder="Name"
                size="md" />
            <UI_ELEMENTS.Input
                type="email"
                name="email"
                refBind={register({
                    required: 'Email is required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address"
                    }
                })}
                errors={errors.email && errors.email.message}
                fullWidth={true}
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
            <UI_ELEMENTS.Input
                refBind ={register({
                    validate: value =>
                        value === password.current || "The passwords do not match"
                })}
                errors={errors.password_repeat && errors.password_repeat.message}
                name="password_repeat"
                type="password"
                fullWidth={true}
                placeholder="Confirm Password"
                size="md" />
            <UI_ELEMENTS.Button
                icon={loadingRegister ? {dir: 'right', element: 'loading'} : {}}
                type="submit"
                text="Register"
                width={190}
                size="md"/>
            <Link href="/login" prefetch={false}>
                <a className="link-to-reset">I have an account already. Go to login</a>
            </Link>
        </form>
    )
}

class Register extends React.Component {
    constructor () {
        super();
        this.state = {
            isLoading: true
        };
        bodyLoading(this.state.isLoading);
        authService.__isLogged().then(res => {
            if (res) {
                Router.push('/')
            } else {
                this.setState({
                    isLoading: false
                }, () => bodyLoading(this.state.isLoading));
            }
        })
    }
    render () {
        if (this.state.isLoading) return '';
        return (
            <div className="container">
                <Head>
                    <title>Register</title>
                </Head>

                <main>
                    <div className="register-form-container">
                        <div className="form-icon">
                            <Icon name="user" />
                        </div>
                        <h4 className="title-form">Member Register</h4>
                        <RegisterForm />
                    </div>
                </main>

                <style global jsx>{`
                .register-form-container {
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
                .register-form-container .title-form {
                    margin-bottom: 10px;
                    text-align: center;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-size: 23px;
                    margin: 10px 10px 20px 10px;
                    color: #fbfbfc;
                    font-weight: 400;
                }
                .register-form-container .link-to-reset {
                    text-align: center;
                    display: block;
                    margin: 10px;
                    font-size: 13px;
                    font-style: italic;
                    color: #e5e6e8;
                    letter-spacing: 1px;
                }
                .register-form-container .form-icon {
                    width: 40px;
                    height: 40px;
                    margin: auto;
                }
                .register-form-container .form-icon svg {
                    width: 100%;
                    height: 100%;
                }
            `}</style>
            </div>
        )
    }
}

export default React.memo(Register)
