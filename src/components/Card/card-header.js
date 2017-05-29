import React from 'react'
import PropTypes from 'prop-types'

const CardHeader = ({name, flag}) => (
  <div className='cards__cardHeader'>
    <div>
      {name}
    </div>
    <div>
      <img src={flag} alt='flag' />
    </div>
  </div>
)

CardHeader.propTypes = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired
}

export default CardHeader
