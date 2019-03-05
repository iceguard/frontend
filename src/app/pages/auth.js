import React, { Component } from 'react'
import Main from '@layout/Main'
import { Auth } from '@auth/auth'

export default class AuthPage extends Component {
    render() {
        return (
            <Main>
                <Auth />
            </Main>
        )
    }
}
