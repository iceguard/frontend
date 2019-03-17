import React, { Component } from 'react'
import { Layout } from '@layout/layout'
import { DeviceOverview } from '@section/deviceOverview'

export default class DashboardPage extends Component {
    render() {
        return (
            <Layout withAuth>
                <DeviceOverview />
            </Layout>
        )
    }
}
