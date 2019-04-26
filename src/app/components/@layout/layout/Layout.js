import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import Router from 'next/router'
import { setUser } from '../../../store/actions'
import { connect } from 'react-redux'
import { Main } from '@layout/main'
import { Header } from '@layout/header'
import styles from './layout.css'

const prod = process.env.NODE_ENV == 'prod'

class Layout extends Component {
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

    componentDidUpdate() {
        const { withAuth = false, user } = this.props

        if (withAuth && user && !user.uid) {
            Router.push({
                pathname: '/login',
            })
        }
    }

    render() {
        const { withAuth = false, user, hasPadding = false } = this.props

        return (
            <div className={styles.pageWrapper}>
                {withAuth && !user.uid ? (
                    <Header />
                ) : (
                    <>
                        <Header />
                        <Main noPadding={hasPadding}>{this.props.children}</Main>
                    </>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
})

const mapDispatchToProps = dispatch => ({
    onAuthChange: user => dispatch(setUser(user)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout)
