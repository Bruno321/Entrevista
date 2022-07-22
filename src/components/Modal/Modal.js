import React from "react";

// Components
import MeetTheTeam from "../../views/MeetTheTeam/MeetTheTeam";
const Modal = ({modalToRender}) => {
    if(modalToRender==='about'){
        return 
    }
    if(modalToRender==='road'){
        return 
    }
    if(modalToRender==='faq'){
        return 
    }
    if(modalToRender==='join'){
        return 
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