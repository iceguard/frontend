import React, { Component } from 'react'
import Main from '@layout/Main'
import style from './index.css'

export default class IndexPage extends Component {
    render() {
        return (
            <Main>
                <h2 className={style.test}>Welcome to Ice Guard System!!</h2>
            </Main>
        )
    }
}
