import React, { Component } from 'react'
import styles from './form.css'

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
