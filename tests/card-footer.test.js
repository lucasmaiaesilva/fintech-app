import React from 'react'
import {render} from 'enzyme'
import {expect} from 'chai'
import CardFooter from '../src/components/Card/card-footer'

describe('<CardFooter />', () => {
  const primProps = {
    total_value: 234.45,
    website: '#'
  }
  const wrapper = render(<CardFooter {...primProps} />)
  it('should component exist', () => {
    expect(wrapper).to.exist
  })
  it('render without crashing', () => {
    expect(wrapper.length).to.be.equal(1)
  })
  it('did the total_value property exists on the proptype of the component?', () => {
    expect(CardFooter.propTypes).have.a.property('total_value')
  })
  it('did the website property exists on the proptype of the component?', () => {
    expect(CardFooter.propTypes).have.a.property('website')
  })
})
