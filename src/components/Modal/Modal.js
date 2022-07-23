import React from "react";

// Styles
import './Modal.css'

// Components
import MeetTheTeam from "../../views/MeetTheTeam/MeetTheTeam";
import Faq from "../../views/FAQ/Faq";
import JoinUs from "../../views/JoinUs/JoinUs";
import AboutUs from "../../views/AboutUs/AboutUs";
import Design from "../../views/Design/Design";
import RoadMap from "../../views/RoadMap/RoadMap";

const Modal = ({modalToRender,hideModal}) => {
    
    if(modalToRender==='about'){
        return <AboutUs hideModal={hideModal}/>
    }
    if(modalToRender==='road'){
        return <RoadMap hideModal={hideModal}/>
    }
    if(modalToRender==='faq'){
        return <Faq hideModal={hideModal}/>
    }
    if(modalToRender==='join'){
        return <JoinUs  hideModal={hideModal}/>
    }
    if(modalToRender==='behind'){
        return <Design hideModal={hideModal}/>
    }
    if(modalToRender==='meet'){
        return <MeetTheTeam hideModal={hideModal}/>
    }else{
        return (
            <div>
                Algo salio mal :c recargue la pagina
            </div>
        )
    }
    

    // return (
    //     <div className="modal">
    //         {showModal()}
    //     </div>
    // )
    
}

export default Modal