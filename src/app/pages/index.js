import React, { Component } from 'react'
import Main from '@layout/Main'
import { connect } from 'react-redux'

class IndexPage extends Component {
    render() {
        return (
            <Main>
                <h1>Home</h1>
            </Main>
        )
    }
}

const mapStateToProps = state => {
    return {
        displayName: state.user.displayName,
    }
}

export default connect(mapStateToProps)(IndexPage)
