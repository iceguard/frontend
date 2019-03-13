import React, { Component } from 'react'
import { Layout } from '@layout/layout'

export default class IndexPage extends Component {
    render() {
        return (
            <Layout withAuth>
                <h2>Welcome</h2>
            </Layout>
        )
    }
}
