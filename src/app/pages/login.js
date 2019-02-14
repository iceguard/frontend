import React, { Component } from 'react'
import Main from '@layout/Main'
import Login from '@auth/Login'

export default class LoginPage extends Component {
    render() {
        return (
            <Main>
                <Login />
            </Main>
        )
    }
}
