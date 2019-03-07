import React, { Component } from 'react'
import { Layout } from '@layout/layout'
import { Login } from '@auth/login'

export default class LoginPage extends Component {
    render() {
        return (
            <Layout>
                <Login />
            </Layout>
        )
    }
}
