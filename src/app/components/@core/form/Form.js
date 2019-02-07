import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        const { onSubmit, children } = this.props

        return <form onSubmit={onSubmit}>{children}</form>
    }
}
