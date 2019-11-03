import React from 'react'
import CategoryList from './components/CategoryList'

let data = [
    {name:"Startup" , type:"Startup"},
    {name:"Sales" , type:"Sales"},
    {name:"Projects" , type:"Projects"},
    {name:"Other" , type:"Other"},
]

const CreateApp = ({onNext}) => {
    return (
        <div>
            <h1 style={{fontWeight:"bold" , fontSize:"60px", textAlign:"center", margin:"5% 0"}}>
                Which one can describe <br/>
                your application ?
            </h1>
            <CategoryList categories={data} onClick={onNext} />
        </div>
    )
}

export default CreateApp
