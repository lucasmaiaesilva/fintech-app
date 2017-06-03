import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import Footer from '../src/components/Footer'

describe('<Footer />', () => {
  const primProps = {
    author: ''
  }
  it('render without crashing', () => {
    const wrapper = shallow(<Footer {...primProps} />)
    expect(wrapper.length).to.be.equal(1)
  })
  it('Did the component render the author prop', () => {
    const wrapper = shallow(<Footer author='paulo' />)
    expect(wrapper.contains(<p>Feito por: paulo</p>)).to.be.equal(true)
  })
  it('Did the component have a author property', () => {
    expect(Footer.propTypes).to.have.property('author')
  })
  // it('Did the component return an error if author prop is not a string', () => {
  //   const wrapper = shallow(<Footer author={2} />)
  //   const before = wrapper.unrendered.props.author
  //   expect(wrapper).to.throw()
  // })
})
