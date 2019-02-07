import React, { Component } from 'react'

export default class FormInput extends Component {
    render() {
        const { label, name, type, required, initialValue, errorMessage, onChange, hasError } = this.props

        return (
            <div>
                <label htmlFor={name}>{label}</label>
                <input id={name} type={type} name={name} required={required} value={initialValue} autoComplete="off" onChange={onChange} />
                {hasError && <div>{errorMessage}</div>}
            </div>
        )
    }
}
