import React, { Component } from 'react'
import styles from './main.scss'

export class Main extends Component {
    render() {
        return <main className={styles.mainContainer}>{this.props.children}</main>
    }
}
