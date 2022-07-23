import React from "react";

// Styles 
import './TextIconCard.css'

const TextIconCard = ({icon,text}) => {
    return (
        <div className="text-icon-container">   
            <div>
                <img src={require(`../../assets/img/${icon}.png`)} />
            </div>
            <div className="text-icon-text">
                <text>{text}</text>
            </div>
        </div>
    )
}

export default TextIconCard