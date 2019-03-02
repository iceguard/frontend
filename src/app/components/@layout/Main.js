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
                apiKey: 'AIzaSyDiDcpdC2LC2ogVF9m5UTq5xXXNgZ8J3Us',
                authDomain: 'ice-guard-prod.firebaseapp.com',
                databaseURL: 'https://ice-guard-prod.firebaseio.com',
                projectId: 'ice-guard-prod',
                storageBucket: 'ice-guard-prod.appspot.com',
                messagingSenderId: '646781153721',
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
