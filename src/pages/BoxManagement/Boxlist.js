import React from 'react'
import Box from './Box'

const Boxlist = ({boxes}) => {
    return (
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(350px, 1fr))" , gap:"20px 50px", margin:"24px 0"}}>
            {boxes && boxes.map((box) => <Box img={box.img} title={box.name} description={box.description} />)}
        </div>
    )
}

export default Boxlist
