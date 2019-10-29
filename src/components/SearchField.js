import React from 'react'
import PropTypes from 'prop-types'
import { search } from '../asset/svg'

const SearchField = ({ icon, onClick }) => (

  <div className="searchField">

    {/*Search Input*/}
    <label className="search-label" >
      <input
        type="text"
        // value=""                        
        placeholder="Search..."

      />
    </label>
    <div className="search-icon-container">

  
        <img src={search} className="search-icon" alt="iconSearch" onClick={onClick} /> 
        
        
        


  </div>


  </div >

)


SearchField.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.object
}

export default SearchField;
