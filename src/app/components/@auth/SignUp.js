import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Form, FormInfoBar, FormInput, FormSubmit } from '@core/form'

export default class SignUp extends Component {
    constructor() {
        super()

        this.state = {
            signUpSuccess: false,
            form: {
                infoMessage: '',
                email: {
                    label: 'E-Mail',
                    name: 'email',
                    type: 'email',
                    value: '',
                    required: true,
                    errorMessage: '',
                    hasError: false,
                },
                password: {
                    label: 'Passwort',
                    name: 'password',
                    type: 'password',
                    value: '',
                    required: true,
                    errorMessage: '',
                    hasError: false,
                },
                passwordRepeat: {
                    label: 'Passwort wiederholen',
                    name: 'passwordRepeat',
                    type: 'password',
                    value: '',
                    required: true,
                    errorMessage: '',
                    hasError: false,
                },
            },
        }
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

    passwordValuesDoMatch = () => {
        const { password, passwordRepeat } = this.state.form
        return password.value === passwordRepeat.value
    }

    handleSubmit = event => {
        event.preventDefault()
        const form = { ...this.state.form }

        if (!this.passwordValuesDoMatch()) {
            form.password.hasError = true
            form.password.errorMessage = 'Passwörter stimmen nicht überein'
            form.passwordRepeat.hasError = true
            form.passwordRepeat.errorMessage = 'Passwörter stimmen nicht überein'

            this.updateFormState(form)
            return
        } else {
            form.password.hasError = false
            form.password.errorMessage = ''
            form.passwordRepeat.hasError = false
            form.passwordRepeat.errorMessage = ''
        }

        firebase
            .auth()
            .createUserWithEmailAndPassword(form.email.value, form.password.value)
            .then(() => {
                this.setState({
                    signUpSuccess: true,
                })
            })
            .catch(error => {
                const errorCode = error.code

                if (errorCode === 'auth/email-already-in-use') {
                    form.email.hasError = true
                    form.email.errorMessage = 'Diese E-Mail-Adresse wird bereits verwendet'
                } else if (errorCode === 'auth/invalid-email') {
                    form.email.hasError = true
                    form.email.errorMessage = 'E-Mail Adresse ist ungültig'
                } else if (errorCode === 'auth/weak-password') {
                    form.password.hasError = true
                    form.password.errorMessage = 'Schwaches Passwort'
                    form.passwordRepeat.hasError = true
                    form.passwordRepeat.errorMessage = 'Schwaches Passwort'
                } else if (errorCode === 'auth/operation-not-allowed') {
                    form.infoMessage = 'Diese Operation ist nicht erlaubt'
                } else {
                    form.infoMessage = errorCode.infoMessage
                }

                this.updateFormState(form)
            })
    }

    render() {
        const form = this.state.form
        const { signUpSuccess } = this.state

        return signUpSuccess ? (
            <p>Sie haben sich erfolgreich registriert. Willkommen!</p>
        ) : (
            <>
                <h2>Registieren</h2>
                <Form onSubmit={this.handleSubmit}>
                    <FormInfoBar infoMessage={form.infoMessage} />
                    <FormInput
                        label={form.email.label}
                        name={form.email.name}
                        type={form.email.type}
                        required={form.email.required}
                        intitialValue={form.email.value}
                        errorMessage={form.email.errorMessage}
                        onChange={this.updateInputValue}
                        hasError={form.email.hasError}
                    />
                    <FormInput
                        label={form.password.label}
                        name={form.password.name}
                        type={form.password.type}
                        required={form.password.required}
                        intitialValue={form.password.value}
                        errorMessage={form.password.errorMessage}
                        onChange={this.updateInputValue}
                        hasError={form.password.hasError}
                    />
                    <FormInput
                        label={form.passwordRepeat.label}
                        name={form.passwordRepeat.name}
                        type={form.passwordRepeat.type}
                        required={form.passwordRepeat.required}
                        intitialValue={form.passwordRepeat.value}
                        errorMessage={form.passwordRepeat.errorMessage}
                        onChange={this.updateInputValue}
                        hasError={form.passwordRepeat.hasError}
                    />
                    <FormSubmit value="Jetzt registieren" />
                </Form>
            </>
        )
    }
}
