import React, { Component } from 'react'
import { withRouter } from 'next/router'

class WithRouter extends Component {
    render() {
        const { router } = this.props

        return <>{this.props.children(router)}</>
    }
}

export default withRouter(WithRouter)
