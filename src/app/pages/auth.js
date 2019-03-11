import React, { Component } from 'react'
import { Layout } from '@layout/layout'
import { Auth } from '@auth/auth'

export default class AuthPage extends Component {
    render() {
        return (
            <Layout>
                <Auth />
            </Layout>
        )
    }
}
