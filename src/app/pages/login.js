import React, { Component } from 'react'
import Main from '../components/Main'
import Login from '../components/Login'

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
