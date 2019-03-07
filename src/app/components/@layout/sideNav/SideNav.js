import React, { PureComponent } from 'react'
import 'firebase/auth'
import WithUser from '@misc/WithUser'
import styles from './sideNav.scss'
import { Logo } from '@misc/logo'

export class SideNav extends PureComponent {
    render() {
        return (
            <WithUser>
                {user => {
                    const isLoggedIn = user.email

                    if (isLoggedIn) {
                        return (
                            <aside className={styles.sideNav}>
                                <Logo />
                            </aside>
                        )
                    }
                }}
            </WithUser>
        )
    }
}
