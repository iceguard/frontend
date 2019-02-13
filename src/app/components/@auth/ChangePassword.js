import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Form, FormInfoBar, FormInput, FormSubmit } from '@core/form'

export default class ChangePassword extends Component {
    constructor() {
        super()
        const { oobCode } = this.props

        this.state = {
            changePasswordSuccess: false,
            actionCodeIsValid: false,
            form: {
                infoMessage: '',
                newPassword: {
                    label: 'Neues Passwort',
                    name: 'password',
                    type: 'password',
                    value: '',
                    required: true,
                    errorMessage: '',
                    hasError: false,
                },
                newPasswordRepeat: {
                    label: 'Neues Passwort wiederholen',
                    name: 'passwordRepeat',
                    type: 'password',
                    value: '',
                    required: true,
                    errorMessage: '',
                    hasError: false,
                },
            },
        }

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
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: {
                    ...this.state.form[event.target.name],
                    value: event.target.value,
                },
            },
        })
    }

    handleSubmit = event => {
        event.preventDefault()
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
            .ChangePassword(newPassword)
            .then(() => {
                this.setState({
                    changePasswordSuccess: true,
                })
            })
            .catch(error => {
                const errorCode = error.code
                const form = { ...this.state.form }

                if (errorCode === 'auth/invalid-email') {
                    form.email.hasError = true
                    form.email.errorMessage = 'E-Mail Adresse ist ungültig'
                } else if (errorCode === 'auth/user-not-found') {
                    form.infoMessage = 'Kein User für diese E-Mail Adresse vorhanden'
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
