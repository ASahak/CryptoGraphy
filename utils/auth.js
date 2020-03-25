import React, {Component} from 'react'
import Router from 'next/router'
import Login from '../pages/login';
import * as authService from './auth-service';
import { __bodyLoading } from 'components/shared/helpers/global-functions';

export default function withAuth(AuthComponent) {

    return class Authenticated extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isAuth: false,
                isLoading: true
            };
            __bodyLoading(this.state.isLoading);
            authService.__isLogged().then(res => {
                if (res) {
                    if (Router.pathname === '/login' || Router.pathname === '/register') {
                        Router.push('/');
                        this.setState({
                            isAuth: true,
                        });
                    } else {
                        this.setState({
                            isAuth: true,
                            isLoading: false
                        }, () => __bodyLoading(this.state.isLoading, this.state.isAuth))
                    }
                } else {
                    this.setState({
                        isLoading: false
                    }, () => {
                        __bodyLoading(this.state.isLoading, this.state.isAuth);
                        Router.replace('/login')
                    });
                }
            })
        }

        render() {
            return (
                <div>
                    {!this.state.isLoading && (this.state.isAuth ? <AuthComponent {...this.props} auth={authService} /> : <Login />)}
                </div>
            )
        }
    }
};