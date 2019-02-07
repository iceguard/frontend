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
                <Link href="/">
                    <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
                </Link>{' '}
                {!this.props.user.email ? (
                    <Link href="/signup">
                        <a className={pathname === '/signup' ? 'is-active' : ''}>Sign Up</a>
                    </Link>
                ) : null}
                {this.props.user.email ? (
                    <>
                        <p>User: {this.props.user.email}</p>
                        <button onClick={() => firebase.auth().signOut()}>Logout</button>
                    </>
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
