import React, { Component } from 'react'
import style from './form.css'

export default class FormInfoBar extends Component {
    render() {
        const { infoMessage } = this.props

        return <div className={style.formInfo}>{infoMessage}</div>
    }
}
