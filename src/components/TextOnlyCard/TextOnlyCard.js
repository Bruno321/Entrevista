import React from "react";

// Styles 
import './TextOnlyCard.css'

const TextOnlyCard = ({text}) => {
    return (
        <div className="text-only-container">   
                <text >
                    {text}
                </text>
        </div>
    )
}

export default TextOnlyCard