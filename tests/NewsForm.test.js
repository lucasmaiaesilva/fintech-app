import React from 'react'
import {render} from 'enzyme'
import {expect} from 'chai'
import NewsForm from '../src/components/NewsForm'

describe('<NewsForm />', () => {
  const primProps = {
    handleChange: () => '',
    handleSubmit: () => ''
  }
  const wrapper = render(<NewsForm {...primProps} />)
  it('should component exist', () => {
    expect(wrapper).to.exist
  })
  it('render component without crash', () => {
    expect(wrapper.length).to.be.equal(1)
  })
  it('did the handleChange property exists on the proptype of the component?', () => {
    expect(NewsForm.propTypes).to.have.a.property('handleChange')
  })
  it('did the handleSubmit property exists on the proptype of the component?', () => {
    expect(NewsForm.propTypes).to.have.a.property('handleSubmit')
  })
  it('looking for a form tag', () => {
    expect(wrapper.find('form')).to.exist
  })
  it('should form have a submit button', () => {
    expect(wrapper.find('button').attr().type).to.be.equal('submit')
  })
})
