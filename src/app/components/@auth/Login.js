import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import Router from 'next/router'
import Link from 'next/link'
import { Form, FormInfoBar, FormInput, FormSubmit } from '@core/form'

export default class Login extends Component {
    constructor() {
        super()

        this.state = {
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
        const form = { ...this.state.form }

        form.email.hasError = false
        form.email.errorMessage = ''
        form.password.hasError = false
        form.password.errorMessage = ''

        this.updateFormState(form)

        firebase
            .auth()
            .signInWithEmailAndPassword(form.email.value, form.password.value)
            .then(() => {
                Router.push('/')
            })
            .catch(error => {
                const errorCode = error.code

                if (errorCode === 'auth/invalid-email') {
                    form.email.hasError = true
                    form.email.errorMessage = 'E-Mail Adresse ist ungültig'
                } else if (errorCode === 'auth/user-disabled') {
                    form.infoMessage = 'User wurde deaktiviert'
                } else if (errorCode === 'auth/user-not-found') {
                    form.email.hasError = true
                    form.email.errorMessage = 'Kein gültiger User für diese E-Mail Adresse'
                } else if (errorCode === 'auth/wrong-password') {
                    form.password.hasError = true
                    form.password.errorMessage = 'Passwort ist ungültig'
                } else {
                    form.infoMessage = errorCode.infoMessage
                }

                this.updateFormState(form)
            })
    }

    render() {
        const form = this.state.form

        return (
            <>
                <h2>Anmelden</h2>
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
                    <FormSubmit value="Anmelden" />
                </Form>
                <Link href="/resetpassword">
                    <a>Passwort vergessen?</a>
                </Link>
            </>
        )
    }
}
