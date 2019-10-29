import React from 'react'
import PropTypes from 'prop-types'

const TeamMember = ({ image, name, position, width }) => (
  <div className="team-member-container">

    <div className="image-container">
      <img src={image} className="team-member-image" alt="member1" width={width} />
    </div>

    <div style={{ width: "100%", backgroundColor: "white", padding: "2px" , textAlign:"center" }}>

      <p className="team-member-name">{name}</p>
      <p className="team-member-position">{position}</p>

    </div>

  </div>
)

TeamMember.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  width: PropTypes.string,
}

export default TeamMember