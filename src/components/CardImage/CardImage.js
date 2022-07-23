import React from "react";

// Styles
import './CardImage.css'

const CardImage = ({data,handleClick}) => {
    
    return (
        <img id={data.id} className="card-image" src={require(`../../assets/img/${data.img}.png`)} onClick={handleClick}/>
    )
}

export default CardImage