import React from 'react'

const CardBody = ({acronym, quantity}) => (
  <div className='card-body'>
    <span className='money'>
      {acronym}
    </span>
    <span className='card-body-value'>
      {quantity}
    </span>
  </div>
)

export default CardBody
