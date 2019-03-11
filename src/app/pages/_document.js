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
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                        }

                        h1, h2, h3, h4, h5, h6 {
                            font-weight: 300;
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
