import Link from 'next/link'
import React, { PureComponent } from 'react'

export default class Header extends PureComponent {
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
          </header>
        )
    } 
}
