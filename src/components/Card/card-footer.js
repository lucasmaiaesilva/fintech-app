import React from 'react'

const CardFooter = ({total_value, website}) => (
  <div className='card-footer'>
    <div className='card-footer-value'>
      {`BRL ${total_value}`}
    </div>
    <div className='card-footer-ref'>
      <a href={website}>{website}</a>
    </div>
  </div>
)

export default CardFooter
