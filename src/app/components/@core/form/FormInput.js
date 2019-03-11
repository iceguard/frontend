import React, { Component } from 'react'
import classnames from 'classnames'
import styles from './form.scss'

export default class FormInput extends Component {
    render() {
        const { label, name, type, required, initialValue, errorMessage, onChange, hasError } = this.props

        return (
            <div className={classnames(styles.formItem, { [styles.formItemError]: hasError })}>
                <label htmlFor={name} className={styles.formLabel}>
                    {label}
                </label>
                <input
                    id={name}
                    className={styles.formInput}
                    type={type}
                    name={name}
                    required={required}
                    value={initialValue}
                    autoComplete="off"
                    onChange={onChange}
                />
                {hasError && <div className={styles.formError}>{errorMessage}</div>}
            </div>
        )
    }
}
