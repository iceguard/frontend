import React, { Component } from 'react'
import Main from '@layout/Main'
import { SignUp } from '@auth/signUp'

export default class SignUpPage extends Component {
    render() {
        return (
            <Main>
                <SignUp />
            </Main>
        )
    }
}
