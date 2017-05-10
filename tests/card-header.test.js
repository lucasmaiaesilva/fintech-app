// Libs
import React from 'react'
import {render} from 'enzyme'
import {expect} from 'chai'

import CardHeader from '../src/components/Card/card-header'

describe('<CardHeader />', () => {
  const wrapper = render(<CardHeader name='peso' flag='argentina-flag' />)
  it('should component exist', () => {
    expect(wrapper).to.exist
  })
})
