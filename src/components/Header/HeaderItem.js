import React from 'react'
import PropTypes from 'prop-types';


export default function HeaderItem(props) {
    let { active=false, href, title, disable, type, className='', ...style } = props
    type = (type && type.toLowerCase()) || ''
    return(
        <a 
            className={ `item ${active ? "active" : ""} ${className}` } 
            href={href}
            style={ style } 
            disable={disable}
            >
            {title}
        </a>
    )
}

HeaderItem.propTypes = {
    active: PropTypes.bool,
    href: PropTypes.string,
    title:PropTypes.string,
    disable:PropTypes.bool,
    type:PropTypes.string,
}