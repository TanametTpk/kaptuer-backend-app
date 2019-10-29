import React from 'react'
import PropTypes from 'prop-types'

const RoundCornerButton = ({onClick, children,style}) => (
  
    <button className="round-corner-button" onClick={onClick} style={style}>
        {children}
    </button>
  
)

RoundCornerButton.propTypes = {

    onClick: PropTypes.func,
    style: PropTypes.object
    
}

export default RoundCornerButton