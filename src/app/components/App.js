import React, { Component } from 'react'
import Header from './Header'

export default class App extends Component {
    render() {
        return (
            <main>
                <Header />
                {this.props.children}
            </main>
        )
    }
}
