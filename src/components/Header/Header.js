import React from 'react'
const Header = (props) => {
    let { className='', posY } = props;
    return(
        <div className={`header-container ${className} ${posY === 0 ? "":"scroll" }`} style={ {...props , } }>
            {props.children}
        </div>
    )
}


export default Header