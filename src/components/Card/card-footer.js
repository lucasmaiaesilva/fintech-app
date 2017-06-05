import React from 'react'
import PropTypes from 'prop-types'

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

CardFooter.propTypes = {
  total_value: PropTypes.number.isRequired,
  website: PropTypes.string.isRequired
}

export default CardFooter
