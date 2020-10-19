import React from 'react'
import renderer from 'react-test-renderer'
import Error404 from '../404'

it('renders correctly', () => {
  const tree = renderer.create(<Error404 />).toJSON()
  expect(tree).toMatchSnapshot()
})
