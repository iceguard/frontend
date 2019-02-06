import React, { Component } from 'react'
import App from '../components/App'
import SignIn from '../components/SignIn'

export default class LoginPage extends Component {
    render() {
        return (
            <App>
                <SignIn/>
            </App>
        )
    }
}
