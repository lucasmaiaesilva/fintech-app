import React from 'react'
import PropTypes from 'prop-types'
import CardHeader from './card-header'
import CardBody from './card-body'
import CardFooter from './card-footer'

const Card = (props) => (
  <div className='cards__card'>
    <CardHeader
      name={props.name}
      flag={props.flag}
    />
    <CardBody
      acronym={props.acronym}
      quantity={props.quantity}
    />
    <CardFooter
      total_value={props.total_value}
      website={props.website}
    />
  </div>
)

Card.propTypes = {
  props: PropTypes.shape({
    name: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    acronym: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    total_value: PropTypes.number.isRequired,
    website: PropTypes.string.isRequired
  })
}

export default Card
