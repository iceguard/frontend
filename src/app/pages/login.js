import React, { Component } from 'react'
import Main from '@layout/Main'
import Login from '@auth/Login'

export default class SignUpPage extends Component {
    render() {
        return (
            <Main>
                <h1>Anmelden</h1>
                <Login />
            </Main>
        )
    }
}
