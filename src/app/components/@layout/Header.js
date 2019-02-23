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
                            <h1>Ice Guard Surveillance System</h1>
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
                                                <a className={pathname === '/login' ? 'is-active' : ''}>Login</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/signup">
                                                <a className={pathname === '/signup' ? 'is-active' : ''}>Sign Up</a>
                                            </Link>
                                        </li>
                                        {/* <li>
                                            <Link href="/resetpassword">
                                                <a className={pathname === '/resetpassword' ? 'is-active' : ''}>Reset password</a>
                                            </Link>
                                        </li> */}
                                    </>
                                ) : null}
                            </ul>
                            {user.email ? (
                                <div>
                                    <p>Curent user: {user.email}</p>
                                    <button onClick={() => firebase.auth().signOut()}>Logout</button>
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
