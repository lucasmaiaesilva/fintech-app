// libs
import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'

// components
import Card from '../src/components/Card'
import CardHeader from '../src/components/Card/card-header'
import CardBody from '../src/components/Card/card-body'
import CardFooter from '../src/components/Card/card-footer'

describe('<Card />', () => {
  it('PropTypes of object props exist', () => {
    expect(Card.propTypes).to.exist
  })
  it('checking for all child structures', () => {
    const wrapper = shallow(<Card />)
    const before = wrapper.containsAllMatchingElements([
      <CardHeader />,
      <CardBody />,
      <CardFooter />
    ])
    expect(before).to.be.equal(true)
  })
})
