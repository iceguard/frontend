import React, { PureComponent } from 'react'
import Link from 'next/link'
import firebase from 'firebase/app'
import 'firebase/auth'
import WithUser from '@misc/WithUser'
import styles from './header.scss'
import { Logo } from '@misc/logo'

export class Header extends PureComponent {
    render() {
        const { pathname } = this.props

        return (
            <WithUser>
                {user => {
                    const isLoggedIn = user.email

                    return (
                        <header className={styles.header}>
                            <Logo />
                            <div className={styles.navTrigger}>
                                <span />
                                <span />
                                <span />
                            </div>
                            <ul className={styles.headerNav}>
                                {isLoggedIn ? (
                                    <>
                                        <li>
                                            <a>{user.email}</a>
                                        </li>
                                        <li>
                                            <a onClick={() => firebase.auth().signOut()}>Logout</a>
                                        </li>
                                    </>
                                ) : null}
                                {!isLoggedIn ? (
                                    <>
                                        <li>
                                            <Link href="/login">
                                                <a className={pathname === '/login' ? 'is-active' : ''}>Login</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/signup">
                                                <a className={pathname === '/signup' ? 'is-active' : ''}>Sign Up</a>
                                            </Link>
                                        </li>
                                    </>
                                ) : null}
                            </ul>
                        </header>
                    )
                }}
            </WithUser>
        )
    }
}
