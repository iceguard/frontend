import React, { Component } from 'react'
import styles from './form.scss'

export default class Form extends Component {
    render() {
        const { onSubmit, children } = this.props

        return (
            <form onSubmit={onSubmit} className={styles.FormContainer}>
                {children}
            </form>
        )
    }
}
