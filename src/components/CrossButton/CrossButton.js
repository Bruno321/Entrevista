import React from "react";

// Styles
import './CrossButton.css'

// Assets
import cross_button from '../../assets/img/cross_button.png'

const CrossButton = () => {
    // Mandar animacion, si no es mandanda asiganrle la default
    // asignar animacion x clase
    return (
        <div className="img" style={{
            backgroundImage: `url(${cross_button})`
            }}
            // onClick={}
            >
        </div>
    )
}

export default CrossButton