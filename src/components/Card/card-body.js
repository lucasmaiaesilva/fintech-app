import React from 'react'
import PropTypes from 'prop-types'

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

CardBody.propTypes = {
  acronym: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
}

export default CardBody
