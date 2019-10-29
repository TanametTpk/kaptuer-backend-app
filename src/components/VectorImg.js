import React from 'react'

function VectorImg({ img, left, right, top, zIndex = '1' }) {
  return (
    <img src={img} alt={img} style={{
      position: "absolute",
      left: left,
      right: right,
      top: top,
      zIndex: zIndex
    }} />
  )
}

export default VectorImg
