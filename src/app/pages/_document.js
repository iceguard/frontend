import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html>
                <Head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" className="next-head" />
                    <link href="https://fonts.googleapis.com/css?family=PT+Sans+Narrow:700" rel="stylesheet" />

                    <style>{`
                        #__next { height: 100%; }

                        html {
                            height: 100%;
                        }

                        body {
                            position: relative;
                            overflow: hidden;
                            height: 100%;
                            font-family: Roboto, sans-serif;
                            font-weight: 300;
                            font-size: 16px;
                            color: #1b1b1b;
                            background: rgb(244,244,244);
                            background: linear-gradient(176deg, rgba(244,244,244,1) 0%, rgba(213,248,255,1) 100%);
                        }

                        a {
                            color: #1b1b1b;
                        }
                    `}</style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
