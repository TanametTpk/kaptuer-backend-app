import React from 'react'

const Overlay = ({ style , children , event }) => (

  <div className="overlay-container" {...event} style={style}>
    {children}
  </div>

)

export default Overlay;
