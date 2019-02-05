import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

export default class FirebaseAuth extends Component {
    constructor() {
        super()

        this.state = {
            isSignedIn: false,
        }

        this.uiConfig = {
            signInFlow: 'popup',
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                // firebase.auth.GithubAuthProvider.PROVIDER_ID
            ],
        }

        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: 'AIzaSyD-Y1Ow8LDAGEWLsihFP1Df9WeGLKV8FEc',
                authDomain: 'next-229711.firebaseapp.com',
            })
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
        })
    }

    render() {
        const { isSignedIn } = this.state

        return (
            <div>
                {isSignedIn ? (
                    <>
                        <div>Signed In!</div>
                        <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                        <h2>Welcome {firebase.auth().currentUser.displayName}</h2>
                    </>
                ) : (
                    <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
                )}
            </div>
        )
    }
}
