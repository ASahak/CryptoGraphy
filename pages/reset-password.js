import React, {useState} from 'react';
import Head from "next/dist/next-server/lib/head";
import UI_ELEMENTS from 'components/shared/UI';
import { useForm } from 'react-hook-form';
import Alert from 'components/shared/UI/Alert';
import Router from "next/router";
import Icon from "components/Icons/icon";
import * as authService from "utils/auth-service";
import {__bodyLoading} from "components/shared/helpers/global-functions";
import Link from "next/link";
import { connect } from 'react-redux';
import {
    __CHANGE_STATUS_IS_LOADING
} from "../store/actions";


function ResetForm () {
    const _timeout = 4000;
    const [loadingLogin, setLoadingLogin] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = data => {
        setLoadingLogin(true);
        authService.__resetPassword(data.email).then(_res => {
            reset();
            setLoadingLogin(false);
            setSuccessMessage('Please check your email');
            setTimeout(() => {
                Router.replace('/login');
            }, _timeout)
        })
        .catch(err => {
            reset();
            setLoadingLogin(false);
            setErrorMessage(err.message);
        })
    };

    return (
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            {errorMessage && <Alert
                type="error"
                timeout={_timeout}
                message={errorMessage}
            />}
            {successMessage && <Alert
                type="success"
                timeout={_timeout}
                message={successMessage}
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
            <UI_ELEMENTS.Button
                type="submit"
                icon={loadingLogin ? {dir: 'right', element: 'loading'} : {}}
                text="Reset Password"
                width={230}
                size="md"/>
            <Link href="/login" prefetch={false}>
                <a className="link-to-reset">I have changed my password already. Move to login</a>
            </Link>
        </form>
    )
}
class ResetPassword extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: this.props.isLoading
        };
        __bodyLoading(this.state.isLoading);
        authService.__isLogged().then(res => {
            if (res) {
                Router.push('/')
            } else {
                this.setState({
                    isLoading: false
                }, () => __bodyLoading(this.state.isLoading, false));
            }
        })
    }
    componentDidMount() {
        this.props.__CHANGE_STATUS_IS_LOADING(false);
    }

    render () {
        if (this.state.isLoading) return '';
        return(
            <div className="container">
                <Head>
                    <title>Reset Password</title>
                </Head>

                <main>
                    <div className="reset-form-container">
                        <div className="form-icon">
                            <Icon name="user" />
                        </div>
                        <h4 className="title-form">Reset Password</h4>
                        <ResetForm />
                    </div>
                </main>
                <style global jsx>{`
                    .reset-form-container {
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
                    .reset-form-container .title-form {
                        margin-bottom: 10px;
                        text-align: center;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        font-size: 23px;
                        margin: 10px 10px 20px 10px;
                        color: #fbfbfc;
                        font-weight: 400;
                    }
                    .reset-form-container .link-to-reset {
                        text-align: center;
                        display: block;
                        margin: 10px;
                        font-size: 13px;
                        font-style: italic;
                        color: #e5e6e8;
                        letter-spacing: 1px;
                    }
                    .reset-form-container .form-icon {
                        width: 40px;
                        height: 40px;
                        margin: auto;
                    }
                    .reset-form-container .form-icon svg {
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
    __CHANGE_STATUS_IS_LOADING
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(ResetPassword));