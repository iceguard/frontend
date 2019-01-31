import React, { Component } from 'react'
import App from '../components/App'
import FirebaseAuth from '../components/FirebaseAuth'

export default class LoginPage extends Component {
    render() {
        return (
            <App>
                <FirebaseAuth/>
            </App>
        )
    } 
}
