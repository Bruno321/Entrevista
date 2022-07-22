import React, {useState} from "react";

// Styles
import './CrossButton.css'

// Assets
import cross_button from '../../assets/img/cross_button.png'

const CrossButton = () => {
    const [animation,setAnimation] = useState("open-animation")
    // Mandar animacion, si no es mandanda asiganrle la default
    // asignar animacion x clase

    const closeModal= () => {
        setAnimation('close-animation')
    }
    return (
        <div className={ 'cross-button ' + animation}>
            <img src={cross_button} onClick={closeModal}></img>
        </div>
    )
}

export default CrossButton