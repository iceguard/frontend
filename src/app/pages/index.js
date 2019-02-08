import React, { Component } from 'react'
import Main from '@layout/Main'
import WithUser from '@misc/WithUser'

export default class IndexPage extends Component {
    render() {
        return (
            <Main>
                <WithUser>{user => <p>Hello {user.email}</p>}</WithUser>
            </Main>
        )
    }
}
