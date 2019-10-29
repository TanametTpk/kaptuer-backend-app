import React from 'react'
import PropTypes from 'prop-types'

const TitleField = ({title , textStyle , children}) => (
    <div className="title-field">
        <div className="title"><b style={textStyle} >{title}</b></div>
        {children}
    </div>
)

TitleField.propTypes = {
    title: PropTypes.string,
    textStyle: PropTypes.object
  }

export default TitleField