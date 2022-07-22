import React from "react";

// Components
import MeetTheTeam from "../../views/MeetTheTeam/MeetTheTeam";
import Faq from "../../views/FAQ/Faq";
import JoinUs from "../../views/JoinUs/JoinUs";
import AboutUs from "../../views/AboutUs/AboutUs";

const Modal = ({modalToRender}) => {
    if(modalToRender==='about'){
        return <AboutUs />
    }
    if(modalToRender==='road'){
        return 
    }
    if(modalToRender==='faq'){
        return <Faq/>
    }
    if(modalToRender==='join'){
        return <JoinUs />
    }
    if(modalToRender==='behind'){
        return 
    }
    if(modalToRender==='meet'){
        return <MeetTheTeam/>
    }else{
        return (
            <div>
                Algo salio mal :c recargue la pagina
            </div>
        )
    }
}

export default Modal