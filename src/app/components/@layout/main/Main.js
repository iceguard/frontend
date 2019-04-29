import React, { Component } from 'react'
import styles from './main.css'
import classnames from 'classnames'

export class Main extends Component {
    render() {
        const { children, hasPadding } = this.props

        return <main className={classnames(styles.mainContainer, { [styles.withPadding]: hasPadding })}>{children}</main>
    }
}
