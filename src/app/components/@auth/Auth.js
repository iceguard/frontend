import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import WithRouter from '@misc/WithRouter'

export default class Auth extends Component {
    constructor() {
        super()

        this.renderChangePassword = this.renderChangePassword.bind(this)
    }

    render() {
        return (
            <WithRouter>
                {router => {
                    const { mode, oobCode } = router.query

                    if (mode === 'resetPassword' && oobCode) {
                        firebase
                            .auth()
                            .checkActionCode(oobCode)
                            .then(() => {
                                console.log(this)
                                this.renderChangePassword()
                            })
                            .catch(error => {
                                console.log('not ok')
                                console.log(error)
                            })
                    }
                }}
            </WithRouter>
        )
    }

    renderChangePassword() {
        console.log('sdf')
        return <p>Change password ...</p>
    }
}
