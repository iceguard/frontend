import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Form, FormInfoBar, FormInput, FormSubmit } from '@core/form'

export default class ResetPassword extends Component {
    constructor() {
        super()

        this.state = {
            passwordResetLinkSent: false,
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

    handleSubmit = event => {
        event.preventDefault()
        const emailValue = this.state.form.email.value

        firebase
            .auth()
            .sendPasswordResetEmail(emailValue)
            .then(() => {
                this.setState({
                    passwordResetLinkSent: true,
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
                    form.email.errorMessage = errorCode.infoMessage
                }

                this.updateFormState(form)
            })
    }

    render() {
        const { form, passwordResetLinkSent } = this.state

        if (passwordResetLinkSent) {
            return (
                <p>
                    Wir haben Ihnen ein E-Mail an <strong>{form.email.value}</strong> gesendet.
                </p>
            )
        }

        return (
            <>
                <h2>Passwort zurücksetzen</h2>
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
                    <FormSubmit value="Passwort zurücksetzen" />
                </Form>
            </>
        )
    }
}
