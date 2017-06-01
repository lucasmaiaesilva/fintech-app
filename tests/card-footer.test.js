import React from 'react'
import {render} from 'enzyme'
import {expect} from 'chai'

import CardFooter from '../src/components/Card/card-footer'

describe('<CardFooter />', () => {
  const wrapper = render(<CardFooter total_value={234.45} website='#' />)
  it('should component exist', () => {
    expect(wrapper).to.exist
  })
})
