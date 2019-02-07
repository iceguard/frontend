import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import Header from './Header'
import { setUser } from '../store/actions'
import { connect } from 'react-redux'

class Main extends Component {
    constructor() {
        super()

        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: 'AIzaSyD-Y1Ow8LDAGEWLsihFP1Df9WeGLKV8FEc',
                authDomain: 'next-229711.firebaseapp.com',
            })
        }
    }

    componentDidMount() {
        const { onAuthChange } = this.props

        firebase.auth().onAuthStateChanged(user => {
            onAuthChange({
                displayName: user ? user.displayName : null,
                email: user ? user.email : null,
                emailVerified: user ? user.emailVerified : null,
                isAnonymous: user ? user.isAnonymous : null,
                phoneNumber: user ? user.phoneNumber : null,
                photoURL: user ? user.photoURL : null,
                uid: user ? user.uid : null,
            })
        })
    }

    render() {
        return (
            <main>
                <Header />
                {this.props.children}
            </main>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    onAuthChange: user => dispatch(setUser(user)),
})

export default connect(
    null,
    mapDispatchToProps
)(Main)
