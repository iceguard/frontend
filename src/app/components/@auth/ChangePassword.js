import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Form, FormInfoBar, FormInput, FormSubmit } from '@core/form'

export default class ChangePassword extends Component {
    constructor() {
        super()

        this.state = {
            changePasswordSuccess: false,
            actionCodeIsValid: false,
            form: {
                infoMessage: '',
                newPassword: {
                    label: 'Neues Passwort',
                    name: 'newPassword',
                    type: 'password',
                    value: '',
                    required: true,
                    errorMessage: '',
                    hasError: false,
                },
                newPasswordRepeat: {
                    label: 'Neues Passwort wiederholen',
                    name: 'newPasswordRepeat',
                    type: 'password',
                    value: '',
                    required: true,
                    errorMessage: '',
                    hasError: false,
                },
            },
        }
    }

    componentDidMount() {
        const { oobCode } = this.props

        firebase
            .auth()
            .checkActionCode(oobCode)
            .then(() => {
                this.setState({
                    actionCodeIsValid: true,
                })
            })
            .catch(() => {
                this.setState({
                    actionCodeIsValid: false,
                })
            })
    }

    updateFormState = form => {
        this.setState({
            form: {
                ...this.state.form,
                ...form,
            },
        })
    }

    updateInputValue = event => {
        const form = { ...this.state.form }

        form[event.target.name].value = event.target.value
        this.updateFormState(form)
    }

    handleSubmit = event => {
        event.preventDefault()
        const { oobCode } = this.props
        const newPassword = this.state.form.newPassword.value
        const newPasswordRepeat = this.state.form.newPasswordRepeat.value

        if (newPassword !== newPasswordRepeat) {
            const form = { ...this.state.form }
            form.infoMessage = 'Passwörter stimmen nicht überein'

            this.updateFormState(form)
            return
        }

        firebase
            .auth()
            .confirmPasswordReset(oobCode, newPassword)
            .then(() => {
                this.setState({
                    changePasswordSuccess: true,
                })
            })
            .catch(error => {
                const errorCode = error.code
                const form = { ...this.state.form }

                if (errorCode === 'aauth/expired-action-code') {
                    form.infoMessage = 'Action Code ist abgelaufen'
                } else if (errorCode === 'auth/invalid-action-code') {
                    form.infoMessage = 'Action Code ist ungültig'
                } else if (errorCode == 'auth/user-disabled') {
                    form.infoMessage = 'User wurde deaktiviert'
                } else if (errorCode == 'auth/user-not-found') {
                    form.infoMessage = 'User wurde nicht gefunden'
                } else if (errorCode == 'auth/weak-password') {
                    form.infoMessage = 'Schwaches Passwort'
                } else {
                    form.infoMessage = errorCode
                }

                this.updateFormState(form)
            })
    }

    render() {
        const { form, changePasswordSuccess } = this.state

        if (changePasswordSuccess) {
            return <p>Ihr Password wurde geändert</p>
        }

        return (
            <>
                <h2>Passwort ändern</h2>
                <Form onSubmit={this.handleSubmit}>
                    <FormInfoBar infoMessage={form.infoMessage} />
                    <FormInput
                        label={form.newPassword.label}
                        name={form.newPassword.name}
                        type={form.newPassword.type}
                        required={form.newPassword.required}
                        intitialValue={form.newPassword.value}
                        errorMessage={form.newPassword.errorMessage}
                        onChange={this.updateInputValue}
                        hasError={form.newPassword.hasError}
                    />
                    <FormInput
                        label={form.newPasswordRepeat.label}
                        name={form.newPasswordRepeat.name}
                        type={form.newPasswordRepeat.type}
                        required={form.newPasswordRepeat.required}
                        intitialValue={form.newPasswordRepeat.value}
                        errorMessage={form.newPasswordRepeat.errorMessage}
                        onChange={this.updateInputValue}
                        hasError={form.newPasswordRepeat.hasError}
                    />
                    <FormSubmit value="Password ändern" />
                </Form>
            </>
        )
    }
}
