import React from 'react'
import renderer from 'react-test-renderer'
import Login from '../Login.js'

describe('The component', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<Login />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
