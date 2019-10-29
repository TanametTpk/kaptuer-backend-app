import React from 'react'
import PropTypes from 'prop-types';

const VStack = ({ maxWidth = "100%", backgroundColor, minWidth, children, style }) => {
    return (
        <div className="VStack-container" style={{ maxWidth, minWidth, backgroundColor, ...style }}>
            {children}
        </div>
    )
}

VStack.propTypes = {
    maxWidth: PropTypes.string,
    minWidth: PropTypes.string,
    customStyle: PropTypes.object
}

export const HStack = ({ maxHeight = "100%", minHeight, style, children }) => {
    return (
        <div className="HStack-container" style={{ maxHeight, minHeight, ...style }}>
            {children}
        </div>
    )
}

HStack.propTypes = {
    maxHeight: PropTypes.string,
    minHeight: PropTypes.string,
    customStyle: PropTypes.object
}

export default VStack