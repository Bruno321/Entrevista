import React from "react";
// Components
import CrossButton from "../../components/CrossButton/CrossButton";

// Styles
import './AboutUs.css'
import '../../assets/css/animations.css'

// Assets
import about_title from '../../assets/img/about_title.svg'
import faq_arrow from '../../assets/img/faq_arrow.png'

const AboutUs = ({hideModal}) => {
    return (
        <>
            <CrossButton hideModal={hideModal}/>
            <div className="about-container ">
                <div className="about-title-container ">
                    <img src={about_title} className='fade-in second-move-up'/>
                </div>
                <div className="about-text-wrapper">
                    <div style={{textAlign: 'justify',textJustify: 'inter-word'}}>
                        <b className="about-title">Des Arts NFT is a collection of 8,888 NFTs built on the Ethereum blockchain.</b>
                        <p className="about-text">
                        The Metapolitan Society offers you the special opportunity to not only make new connections but also work towards building a prosperous future for the Metaverse in which art and entrepreneurialism are reinvented. As such, Des Arts brings a variety of backgrounds and unparalleled experiences to the art world, redefining conventional norms.
                        </p>
                    </div>
                    <div >
                        <div style={{display:'flex',alignItems: "center",marginTop:'20px'}}> 
                            <img src={faq_arrow}/>
                            <b className="about-final" style={{marginLeft:'10px'}}>Whitepapper</b>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs