import React from 'react'
import "../../sass/elements/Card.scss"

function Card({ children, expand=false, clickable=false, clickHandler=null}) {
    console.log(expand)
    return (
        <div 
        className={`cardNew ${expand ? "cardNew__expanded": "cardNew__collapsed"} ${clickable ? "clickable":""}`}
        onClick={clickHandler}>
            { children }
        </div>
    )
}

export default Card
