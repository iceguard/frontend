import React, { Component } from 'react'
import Link from 'next/link'
import firebase from 'firebase/app'
import 'firebase/auth'
import WithUser from '@misc/WithUser'
import styles from './header.scss'
import classnames from 'classnames'
import WithRouter from '@misc/WithRouter'
import { Logo } from '@misc/logo'
import { Icon } from '@misc/icon'

export class Header extends Component {
    constructor() {
        super()

        this.state = {
            mobileNavActive: false,
        }

        this.toggleNavigation = this.toggleNavigation.bind(this)
    }

    toggleNavigation() {
        this.setState({
            mobileNavActive: !this.state.mobileNavActive,
        })
    }

    render() {
        return (
            <WithUser>
                {user => {
                    return (
                        <header className={styles.header}>
                            {this.renderLogo()}
                            {this.renderMobileNavToggle()}
                            {this.renderHeadNavigation(user)}
                            {this.renderMobileNav()}
                        </header>
                    )
                }}
            </WithUser>
        )
    }

    renderLogo() {
        return <Logo />
    }

    renderMobileNavToggle() {
        return (
            <div className={classnames(styles.navTrigger, { [styles.navTriggerActive]: this.state.mobileNavActive })} onClick={this.toggleNavigation}>
                <Icon type={this.state.mobileNavActive ? 'close' : 'menu'} size="30" />
            </div>
        )
    }

    renderHeadNavigation(user) {
        const isLoggedIn = user.email

        return (
            <WithRouter>
                {router => (
                    <ul className={styles.headerNav}>
                        {isLoggedIn ? (
                            <>
                                <li>
                                    <a>
                                        <span className={styles.loggedInUser}>{user.email}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" onClick={() => firebase.auth().signOut()}>
                                        Logout
                                    </a>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className={router.pathname == '/login' ? styles.isActive : ''}>
                                    <Link href="/login">
                                        <a>Login</a>
                                    </Link>
                                </li>
                                <li className={router.pathname == '/signup' ? styles.isActive : ''}>
                                    <Link href="/signup">
                                        <a>Sign Up</a>
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                )}
            </WithRouter>
        )
    }

    renderMobileNav() {
        return <div className={classnames(styles.mobileNavigation, { [styles.mobileNavigationActive]: this.state.mobileNavActive })} />
    }
}
