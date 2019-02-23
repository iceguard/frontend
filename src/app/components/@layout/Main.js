import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import Header from '@layout/Header'
import { setUser } from '../../store/actions'
import { connect } from 'react-redux'

class Main extends Component {
    constructor() {
        super()

        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: 'AIzaSyBNYyxvZ3Ccg8yonKZPCxboOMu32YvtvoA',
                authDomain: 'ice-guard.firebaseapp.com',
                databaseURL: 'https://ice-guard.firebaseio.com',
                projectId: 'ice-guard',
                storageBucket: 'ice-guard.appspot.com',
                messagingSenderId: '896872120637',
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
