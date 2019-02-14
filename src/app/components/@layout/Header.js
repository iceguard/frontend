import Link from 'next/link'
import React, { PureComponent } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import WithUser from '@misc/WithUser'

export default class Header extends PureComponent {
    render() {
        const { pathname } = this.props

        return (
            <WithUser>
                {user => {
                    return (
                        <header>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
                                    </Link>
                                </li>
                                {!user.email ? (
                                    <>
                                        <li>
                                            <Link href="/login">
                                                <a className={pathname === '/login' ? 'is-active' : ''}>Anmelden</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/signup">
                                                <a className={pathname === '/signup' ? 'is-active' : ''}>Registieren</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/resetpassword">
                                                <a className={pathname === '/resetpassword' ? 'is-active' : ''}>Passwort zurücksetzen</a>
                                            </Link>
                                        </li>
                                    </>
                                ) : null}
                            </ul>
                            {user.email ? (
                                <div>
                                    <p>User: {user.email}</p>
                                    <button onClick={() => firebase.auth().signOut()}>Abmelden</button>
                                </div>
                            ) : null}
                            <hr />
                        </header>
                    )
                }}
            </WithUser>
        )
    }
}
