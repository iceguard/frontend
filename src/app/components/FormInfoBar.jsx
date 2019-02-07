import React, { Component } from 'react'

export default class FormInfoBar extends Component {
    render() {
        const { infoMessage } = this.props

        return <div>{infoMessage}</div>
    }
}
