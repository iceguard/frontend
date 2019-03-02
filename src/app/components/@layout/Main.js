import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import Header from '@layout/Header'
import { setUser } from '../../store/actions'
import { connect } from 'react-redux'

const prod = process.env.NODE_ENV == 'prod'

class Main extends Component {
    constructor() {
        super()

        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: prod ? 'AIzaSyDiDcpdC2LC2ogVF9m5UTq5xXXNgZ8J3Us' : 'AIzaSyDS9cPHMt9L_d5QyQ2Moztp8PFUfu9R8PM',
                authDomain: prod ? 'ice-guard-prod.firebaseapp.com' : 'ice-guard-test.firebaseapp.com',
                databaseURL: prod ? 'https://ice-guard-prod.firebaseio.com' : 'https://ice-guard-test.firebaseio.com',
                projectId: prod ? 'ice-guard-prod' : 'ice-guard-test',
                storageBucket: prod ? 'ice-guard-prod.appspot.com' : 'ice-guard-test.appspot.com',
                messagingSenderId: prod ? '646781153721' : '29822743006',
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
