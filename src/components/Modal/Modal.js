import React from "react";

// Styles
import './Modal.css'

// Components
import MeetTheTeam from "../../views/MeetTheTeam/MeetTheTeam";
import Faq from "../../views/FAQ/Faq";
import JoinUs from "../../views/JoinUs/JoinUs";
import AboutUs from "../../views/AboutUs/AboutUs";

const Modal = ({modalToRender}) => {
    const showModal = () => {
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

    return (
        <div className="modal">
            {showModal()}
        </div>
    )
    
}

export default Modal