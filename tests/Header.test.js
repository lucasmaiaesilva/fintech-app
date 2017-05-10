// Libs
import React from 'react'
import {render} from 'enzyme'
import {expect} from 'chai'

// component
import Header from '../src/components/Header'

describe('<Header />', () => {
  it('should component exist', () => {
    const wrapper = render(<Header />)
    expect(wrapper.text()).to.be.equal('header')
  })
})
