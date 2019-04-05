import React, { Component } from 'react'
import { Layout } from '@layout/layout'
import { DeviceDetailView } from '@section/deviceDetailView'

export default class DevicePage extends Component {
    render() {
        return (
            <Layout withAuth>
                <DeviceDetailView />
            </Layout>
        )
    }
}
