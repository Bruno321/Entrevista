import React from "react";

// Styles
import './PhaseCount.css'

const PhaseCount = ({text}) => {
    return (
        <div className="phase-container">
            <h2>{text}</h2>
        </div>
    )
}

export default PhaseCount