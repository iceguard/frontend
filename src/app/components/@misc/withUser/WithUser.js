import React, { Component } from 'react'
import { connect } from 'react-redux'

class WithUser extends Component {
    render() {
        const { user } = this.props

        return <>{this.props.children(user)}</>
    }
}

const mapStateToProps = state => ({
    user: state.user,
})

export default connect(mapStateToProps)(WithUser)
