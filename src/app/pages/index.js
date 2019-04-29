import React, { Component } from 'react'
import { Layout } from '@layout/layout'
import { HomeView } from '@section/homeView'

export default class IndexPage extends Component {
    render() {
        return (
            <Layout hasPadding={false}>
                <HomeView />
            </Layout>
        )
    }
}
