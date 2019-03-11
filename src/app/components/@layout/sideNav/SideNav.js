import React, { Component } from 'react'
import 'firebase/auth'
import WithUser from '@misc/WithUser'
import styles from './sideNav.scss'

export class SideNav extends Component {
    render() {
        return (
            <WithUser>
                {user => {
                    const isLoggedIn = user.email

                    if (isLoggedIn) {
                        return <aside className={styles.sideNav} />
                    }
                }}
            </WithUser>
        )
    }
}
