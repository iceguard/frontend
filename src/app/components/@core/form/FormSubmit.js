import React, { Component } from 'react'

export default class FormInput extends Component {
    render() {
        const { value } = this.props

        return (
            <div>
                <input type="submit" value={value} />
            </div>
        )
    }
}
