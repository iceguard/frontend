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
            <Link href='/'>
              <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
            </Link>{' '}
            <Link href='/login'>
              <a className={pathname === '/login' ? 'is-active' : ''}>Login</a>
            </Link>
            <p>User: {this.props.user.displayName}</p>
            <button onClick={() => firebase.auth().signOut()}>Logout</button>
          </header>
        )
    }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(Header)
