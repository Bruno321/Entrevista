import React from "react";

// Styles
import './TeamMemberCard.css'

const TeamMemberCard = ({data}) => {
    // recibe que tipo de icono tendra (max 4 y q sea space evenly)

    const renderIcon = () => {
        
    }

    return (
        <div  className="card-container">
            {/* pasada por props */}
            <img></img>
            <p>{data.name}</p>
            <p>{data.position}</p>
            {/* funcion para mostrar iconos */}
        </div>
    )
}

export default TeamMemberCard