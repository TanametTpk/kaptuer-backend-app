import React from 'react'
import PropTypes from 'prop-types';

const Section = ({height , backgroundColor , style, className="", children}) => {
    return(
        <section className={"section-container " + className} style={{ backgroundColor, height , ...style }}>
            {children}
        </section>
    )

}

Section.propTypes = {
    customClass: PropTypes.string,
    height: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    style: PropTypes.object,
}

export default Section