import React, { Component } from 'react'
import Main from '@layout/Main'
import Auth from '@auth/Auth'

export default class AuthPage extends Component {
    render() {
        return (
            <Main>
                <h1>Auth</h1>
                <Auth />
            </Main>
        )
    }
}
