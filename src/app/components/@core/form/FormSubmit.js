import React, { Component } from 'react'
import styles from './form.scss'

export default class FormInput extends Component {
    render() {
        const { value } = this.props

        return (
            <div className={styles.formSubmit}>
                <input type="submit" value={value} />
            </div>
        )
    }
}
