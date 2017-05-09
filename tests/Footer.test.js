// Libs
import React from 'react'
import {shallow} from 'enzyme'
// shallow is used to test a single component without worry with his childs
import {expect} from 'chai'

// components
import Footer from '../src/components/Footer'

describe('<Footer />', () => {
  it('rendered the author props', () => {
    const wrapper = shallow(<Footer author='unique' />)
    expect(wrapper.text()).to.contain('unique')
  })
  it('Is propTypes name exist', () => {
    expect(Footer.propTypes).to.have.property('author')
  })
})
