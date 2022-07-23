import React from "react";

// Styles
import './TeamMemberCard.css'

const TeamMemberCard = ({data}) => {
    // recibe que tipo de icono tendra (max 4 y q sea space evenly)

    return (
        <div  className="card-container">
            {/* pasada por props */}
            <img src={require(`../../assets/img/${data.img}.png`)} style={{marginBottom:'10px'}}/>
            <p>{ data.type =='revealInvestor' ? 'To Be' : data.name}</p>
            <p>{ data.type =='revealInvestor' ? 'Revealed' : data.position}</p>
            <div className="icons-container">
                {data.icons.map((e)=>{
                    return <img src={require(`../../assets/img/${data.type=='revealInvestor'? 'black_'+e :e}.png`)} style={{width:'25px',height:'25px',marginLeft:'10px'}}/>
                })}
            </div>
        </div>
    )
}

export default TeamMemberCard