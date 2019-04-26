import React, { Component } from 'react'
import Link from 'next/link'
import styles from './logo.css'
import { Icon } from '@misc/icon'

export class Logo extends Component {
    render() {
        return (
            <Link href="/">
                <h1 className={styles.logo}>
                    <Icon type="security" size="30" />
                    <a>Ice Guard</a>
                </h1>
            </Link>
        )
    }
}
