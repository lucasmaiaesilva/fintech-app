import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({author}) => (
  <footer>
    <div className='container'>
      <p>Feito por: {author}</p>
    </div>
  </footer>
)

Footer.propTypes = {
  author: PropTypes.string.isRequired
}

export default Footer
