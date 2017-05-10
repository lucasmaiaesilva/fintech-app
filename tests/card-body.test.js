// Libs
import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'

import CardBody from '../src/components/Card/card-body'

describe('<CardBody />', () => {
  const wrapper = shallow(<CardBody acronym='$' quantity={1500} />)
  it('should component exist', () => {
    expect(wrapper).to.exist
  })
})
