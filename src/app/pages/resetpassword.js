import React, { Component } from 'react'
import Main from '@layout/Main'
import ResetPassword from '@auth/ResetPassword'

export default class ResetPasswordPage extends Component {
    render() {
        return (
            <Main>
                <h1>Passwort zurücksetzen</h1>
                <ResetPassword />
            </Main>
        )
    }
}
