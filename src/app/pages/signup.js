import React, { Component } from 'react'
import Main from '../components/Main'
import SignUp from '../components/SignUp'

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
