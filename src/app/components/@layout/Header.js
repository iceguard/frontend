import Link from 'next/link'
import React, { PureComponent } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { connect } from 'react-redux'

class Header extends PureComponent {
    render() {
        const { pathname } = this.props

        return (
            <header>
                <ul>
                    <li>
                        <Link href="/">
                            <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
                        </Link>
                    </li>
                    {!this.props.user.email ? (
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
                        </>
                    ) : null}
                </ul>
                {this.props.user.email ? (
                    <div>
                        <p>User: {this.props.user.email}</p>
                        <button onClick={() => firebase.auth().signOut()}>Abmelden</button>
                    </div>
                ) : null}
                <hr />
            </header>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
})

export default connect(mapStateToProps)(Header)
