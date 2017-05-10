// Libs
import React from 'react'
import {render} from 'enzyme'
import {expect} from 'chai'

// Component
import NewsForm from '../src/components/NewsForm'

describe('<NewsForm />', () => {
  const wrapper = render(<NewsForm />)
  it('looking for a form tag', () => {
    expect(wrapper.find('form')).to.exist
  })
  it('should form have a submit button', () => {
    expect(wrapper.find('button').attr().type).to.be.equal('submit')
  })
})
