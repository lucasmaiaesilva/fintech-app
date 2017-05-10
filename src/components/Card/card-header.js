import React from 'react'
import PropTypes from 'prop-types'

const CardHeader = ({name, flag}) => (
  <div className='card-header'>
    <div className='card-header-title'>
      {name}
    </div>
    <div className='card-header-flag'>
      <img src={flag} alt='flag' />
    </div>
  </div>
)

CardHeader.propTypes = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired
}

export default CardHeader
