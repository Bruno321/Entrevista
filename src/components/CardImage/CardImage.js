import React from "react";

// Styles
import './CardImage.css'

const CardImage = ({data}) => {
    return (
        <img className="card-image" src={require(`../../assets/img/${data.img}.png`)}></img>
    )
}

export default CardImage