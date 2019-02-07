import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import Header from './Header'
import { setUser } from '../actions'
import { connect } from 'react-redux'

class App extends Component {
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
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.onAuthChange({
                    displayName: user.displayName,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    isAnonymous: user.isAnonymous,
                    phoneNumber: user.phoneNumber,
                    photoURL: user.photoURL,
                    uid: user.uid,
                })
            } else {
                this.props.onAuthChange({
                    displayName: null,
                    email: null,
                    emailVerified: null,
                    isAnonymous: null,
                    phoneNumber: null,
                    photoURL: null,
                    uid: null,
                })
            }
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
)(App)
