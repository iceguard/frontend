import React, { PureComponent } from 'react'
import Link from 'next/link'
import styles from './logo.scss'

export class Logo extends PureComponent {
    render() {
        return (
            <Link href="/">
                <h1 className={styles.logo}>
                    <span>
                        <span />
                    </span>
                    <a>Ice Guard</a>
                </h1>
            </Link>
        )
    }
}
