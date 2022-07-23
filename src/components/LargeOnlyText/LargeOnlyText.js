import React from "react";

// Styles 
import './LargeOnlyText.css'

const LargeOnlyText = ({title,text}) => {
    return (
        <div className="large-only-container">   
            <div>
                <h1>
                    {title}
                </h1>
            </div>
            <div>
                <text >
                    {text}
                </text>
            </div>
        </div>
    )
}

export default LargeOnlyText