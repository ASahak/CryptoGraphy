import React from 'react';
import App from 'next/app';
import GlobalStyle from "components/shared/helpers/global-styles";
import { Provider } from 'react-redux';
import store from 'store';

class AppWrapper extends App {
    constructor(props) {
        super(props);
    }

    render() {
        const {Component, pageProps, initialProps} = this.props;
        return (
            <>
                <GlobalStyle />
                <Provider store={store}>
                    <Component {...pageProps} {...initialProps} />
                </Provider>
            </>
        )
    }
}

export default AppWrapper;