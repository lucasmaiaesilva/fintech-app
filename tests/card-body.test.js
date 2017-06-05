import React from 'react'
import {render} from 'enzyme'
import {expect} from 'chai'
import CardBody from '../src/components/Card/card-body'

describe('<CardBody />', () => {
  const primProps = {
    acronym: '$',
    quantity: 1500
  }
  const wrapper = render(<CardBody {...primProps} />)
  it('should component exist', () => {
    expect(wrapper).to.exist
  })
  it('render without crashing', () => {
    expect(wrapper.length).to.be.equal(1)
  })
  it('did the acronym property exists on the proptype of the component?', () => {
    expect(CardBody.propTypes).have.a.property('acronym')
  })
  it('did the quantity property exists on the proptype of the component?', () => {
    expect(CardBody.propTypes).have.a.property('quantity')
  })
})
