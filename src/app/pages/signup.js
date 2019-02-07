import React, { Component } from 'react'
import Main from '@layout/Main'
import SignUp from '@auth/SignUp'

export default class SignUpPage extends Component {
    render() {
        return (
            <Main>
                <h1>Registrieren</h1>
                <SignUp />
            </Main>
        )
    }
}
