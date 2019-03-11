import { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'

class WithAuth extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        if (this.props.user && !this.props.user.uid) {
            Router.push({
                pathname: '/login',
            })
        }
    }

    render() {
        return this.props.children
    }
}

const mapStateToProps = state => ({
    user: state.user,
})

export default connect(mapStateToProps)(WithAuth)
