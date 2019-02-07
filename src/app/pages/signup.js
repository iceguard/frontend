import React, { Component } from 'react'
import App from '../components/App'
import SignUp from '../components/SignUp'

export default class SignUpPage extends Component {
    render() {
        return (
            <App>
                <h1>Sign Up</h1>
                <SignUp />
            </App>
        )
    }
}
