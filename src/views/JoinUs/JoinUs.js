import React from "react";
// Components
import CrossButton from "../../components/CrossButton/CrossButton";

// Styles
import './JoinUs.css'

// Assets
import join_title from '../../assets/img/join_title.svg'
import faq_arrow from '../../assets/img/faq_arrow.png'

const JoinUs = () => {
    return (
        <>
            <CrossButton />
            <div className="join-container">
                <div className="join-left-wrapper">
                    <div>
                        <img src={join_title}/>
                    </div>
                    <div className="join-text-container">
                        <h1 className="join-h1">We welcome our holders to journey with us into a community filled with creativity, diversity, and belonging.</h1>
                        <br/>
                        <h1 className="join-h1">A Metapolitan club in which networking is propelled into a whole other dimension…Literally.</h1>
                        <br/>
                    </div>
                    <button>
                        Join Our Discord
                    </button>
                </div>
                <div className="join-right-wrapper">
                    <div className="join-text-container">
                        <h1 className="join-h1">Join Us</h1>
                    </div>
                </div>
            </div>
        </>
    )
}


export default JoinUs