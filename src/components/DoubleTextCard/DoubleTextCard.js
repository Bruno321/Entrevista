import React from "react";

// Styles 
import './DoubleTextCard.css'

const DoubleTextCard = ({title,text}) => {
    return (
        <div className="double-text-card-container">   
            <div className="double-text-card-title" style={{paddingTop:'20px'}}>
                <h1>
                    {title}
                </h1>
            </div>
            
            <div className="double-text-card-text">
                <text >{text}</text>
            </div>
        </div>
    )
}

export default DoubleTextCard