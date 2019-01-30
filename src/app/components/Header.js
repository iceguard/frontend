import React from 'react'
import Link from 'next/link'

export default ({ pathname }) => (
  <header>
    <Link href='/'>
      <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
    </Link>{' '}
    <Link href='/login'>
      <a className={pathname === '/login' ? 'is-active' : ''}>Login</a>
    </Link>
  </header>
)
