import React from 'react'

export const CardColumn = ({ width , style, children }) => {
    return(
        <div className="card-column" style={{width , ...style}}>
            {children}
        </div>
    )

}

export const CardItem = ({ style, children }) => {
    return(
        <div className="card-item" style={{...style}}>
            {children}
        </div>
    )
}

export const Card = ({ height , style, children , onClick }) => {
    return(
        <div className="card-container" onClick={onClick} style={{height , ...style}}>
            {children}
        </div>
    )
}