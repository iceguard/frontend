import React, { Component } from 'react'
import WithRouter from '@misc/WithRouter'
import ChangePassword from '@auth/changePassword'

export class Auth extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <WithRouter>
                {router => {
                    const { mode, oobCode } = router.query
                    let authView = null

                    if (!mode || !oobCode) {
                        return null
                    }

                    switch (mode) {
                        case 'resetPassword':
                            authView = <ChangePassword mode={mode} oobCode={oobCode} />
                            break
                        default:
                            break
                    }

                    return authView
                }}
            </WithRouter>
        )
    }
}
