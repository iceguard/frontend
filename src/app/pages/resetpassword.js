import React, { Component } from 'react'
import Main from '@layout/Main'
import { ResetPassword } from '@auth/resetPassword'

export default class ResetPasswordPage extends Component {
    render() {
        return (
            <Main>
                <ResetPassword />
            </Main>
        )
    }
}
