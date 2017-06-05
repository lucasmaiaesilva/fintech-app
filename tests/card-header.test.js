import React from 'react'
import {render} from 'enzyme'
import {expect} from 'chai'
import CardHeader from '../src/components/Card/card-header'

describe('<CardHeader />', () => {
  const primProps = {
    name: 'peso',
    flag: 'argentina-flag'
  }
  const wrapper = render(<CardHeader {...primProps} />)
  it('should component exist', () => {
    expect(wrapper).to.exist
  })
  it('render without crashing', () => {
    expect(wrapper.length).to.be.equal(1)
  })
  it('did the name property exists on the proptype of the component?', () => {
    expect(CardHeader.propTypes).have.a.property('name')
  })
  it('did the flag property exists on the proptype of the component?', () => {
    expect(CardHeader.propTypes).have.a.property('flag')
  })
})
