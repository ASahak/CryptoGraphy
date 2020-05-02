import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css" />
                </Head>

                <body>
                    <Main />
                    <div id="portal"></div>
                    <NextScript />
                </body>
                <script src="https://kit.fontawesome.com/bf472f0730.js"></script>
                <style jsx global>{`
                `}</style>

            </Html>
        );
    }
}

export default MyDocument;
