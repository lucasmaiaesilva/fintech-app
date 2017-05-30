import React from 'react'

const CardFooter = ({total_value, website}) => (
  <div className='cards__cardFooter'>
    <div className='cards__footerValue'>
      {`BRL ${total_value}`}
    </div>
    <div className='cards__footerRef'>
      <a href={website}>{website}</a>
    </div>
  </div>
)

export default CardFooter
