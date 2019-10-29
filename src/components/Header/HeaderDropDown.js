import React from 'react'
import PropTypes from 'prop-types';

export default function HeaderDropDown(props) {

    const { container , button , content } = props.customStyle || {}

    return(
        <div className="Dropdown-container" style={ container }>

            <button class="Dropdown-button" style={ button }>{props.text}</button>

            <div class="Dropdown-content" style={ content }>
                {props.children}
            </div>

        </div>
    )
}

HeaderDropDown.propTypes = {
    text:PropTypes.string,
    customStyle: PropTypes.object
}
