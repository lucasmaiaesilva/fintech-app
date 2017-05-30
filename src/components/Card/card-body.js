import React from 'react'

const CardBody = ({acronym, quantity}) => (
  <div className='cards__cardBody'>
    <span className='cards__money'>
      {acronym}
    </span>
    <span className='cards__bodyValue'>
      {quantity}
    </span>
  </div>
)

export default CardBody
