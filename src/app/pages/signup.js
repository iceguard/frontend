import React, { Component } from 'react'
import { Layout } from '@layout/layout'
import { SignUp } from '@auth/signUp'

export default class SignUpPage extends Component {
    render() {
        return (
            <Layout>
                <SignUp />
            </Layout>
        )
    }
}
