import { useState } from 'react'

const useAnchorElement = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  
  const setAnchor = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const removeAnchor = () => {
    setAnchorEl(null)
  }

  return [anchorEl, setAnchor, removeAnchor];
}

export default useAnchorElement
