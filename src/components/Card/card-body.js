import React from 'react'

const CardBody = ({acronym, quantity}) => (
  <div className='cards__card--body'>
    <span className='cards__money'>
      {acronym}
    </span>
    <span className='cards__card--body-value'>
      {quantity}
    </span>
  </div>
)

export default CardBody
