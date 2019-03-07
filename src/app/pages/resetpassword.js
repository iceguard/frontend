import React, { Component } from 'react'
import { Layout } from '@layout/layout'
import { ResetPassword } from '@auth/resetPassword'

export default class ResetPasswordPage extends Component {
    render() {
        return (
            <Layout>
                <ResetPassword />
            </Layout>
        )
    }
}
