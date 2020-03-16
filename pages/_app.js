import React from 'react';
import App from 'next/app';
import GlobalStyle from "components/shared/helpers/global-styles";


class AppWrapper extends App {
    constructor(props) {
        super(props);
    }

    render() {
        const {Component, pageProps, initialProps} = this.props;
        return (
            <>
                <GlobalStyle />
                <Component {...pageProps} {...initialProps} />
            </>
        )
    }
}

export default AppWrapper;