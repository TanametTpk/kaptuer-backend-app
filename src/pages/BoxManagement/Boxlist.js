import React from 'react'
import Box from './Box'

const Boxlist = ({boxes, onMore}) => {

    let colorList = [
        "#4FC1E9",
        "#ED5565",
        "#FC6E51",
        "#F6BB42"
    ]

    return (
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(350px, 1fr))" , gap:"20px 50px", margin:"24px 0"}}>
            {boxes && boxes.map((box, index) => <Box onMore={onMore} img={box.img} title={box.name} description={box.description} imgColor={colorList[index%colorList.length]} />)}
        </div>
    )
}

export default Boxlist
