import React, { Component } from 'react'
import App from '../components/App'
import Login from '../components/Login'

export default class SignUpPage extends Component {
    render() {
        return (
            <App>
                <h1>Anmelden</h1>
                <Login />
            </App>
        )
    }
}
