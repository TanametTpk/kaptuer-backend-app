import React from 'react'
import PropTypes from 'prop-types'

const RoundButton = ({onClick, children,style}) => (
  
    <button className="roundButton" onClick={onClick} style={style}>
        {children}
    </button>
  
)

RoundButton.propTypes = {

    onClick: PropTypes.func,
    style: PropTypes.object
    
}

export default RoundButton