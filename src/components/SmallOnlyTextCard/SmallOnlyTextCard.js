import React from "react";

// Styles 
import './SmallOnlyTextCard.css'

const SmallOnlyTextCard = ({text,coloredText,color}) => {
    return (
        <div className="small-only-container">  
            <div>
                <p className="normal-text">{text} </p>
                <p style={{color:color}}>{coloredText} </p>
            </div> 
        </div>
    )
}

export default SmallOnlyTextCard