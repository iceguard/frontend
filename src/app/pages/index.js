import React, { Component } from 'react'
import App from '../components/App'
import { connect } from 'react-redux'

class IndexPage extends Component {
    render() {
        return (
            <App>
                <p>Welcome Page</p>
            </App>
        )
    }
}

const mapStateToProps = state => {
    return {
        displayName: state.user.displayName,
    }
}

export default connect(mapStateToProps)(IndexPage)
