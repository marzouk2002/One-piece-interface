import React from 'react'
import { PropTypes } from 'prop-types'

export default function Message({ msg, type }) {
    return (
        <div className={`alert alert-dismissible alert-${type}`} role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <strong>{ msg }</strong> 
      </div>
    )
}

Message.protoType = {
  msg: PropTypes.sting,
  type: PropTypes.sting
}