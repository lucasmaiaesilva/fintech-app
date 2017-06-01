import React from 'react'

const CardFooter = ({total_value, website}) => (
  <div className='cards__card--footer'>
    <div className='cards__card--footer-value'>
      {`BRL ${total_value}`}
    </div>
    <div className='cards__footer-ref'>
      <a href={website}>{website}</a>
    </div>
  </div>
)

export default CardFooter
