import React from "react";
// Components
import CrossButton from "../../components/CrossButton/CrossButton";

// Styles
import './Faq.css'

// Assets
import faq_title from '../../assets/img/faq_title.svg'
import faq_arrow from '../../assets/img/faq_arrow.png'
const Faq = () => {
    console.log('hola')
    return (
        <>
            <CrossButton />
            <div className="faq-container">
                <div className="title-faq-container">
                    <div style={{width:'50%'}}>
                        <img src={faq_title}/>
                    </div>
                </div>
                <div>
                    <div className="faq-question">
                        <div>
                            <img src={faq_arrow}/>
                            <h2 className="h2">How can I join the Metapolitan Club?</h2>
                        </div>
                        {/* hidden */}
                        <div style={{display:'none'}}>
                            <h2>You will be able to mint a Des Arts NFT on our website. Join our Discord to be the first to find out.</h2>
                        </div>
                    </div>
                    <div className="faq-question">
                        <div>
                            <img src={faq_arrow}/>
                            <h2 className="h2">When will I be able to mint my NFT?</h2>
                        </div>
                    </div>
                    <div className="faq-question">
                        <div>
                            <img src={faq_arrow}/>
                            <h2 className="h2">How many Des Arts NFTs will be available?</h2>
                        </div>
                    </div>
                    <div className="faq-question">
                        <div>
                            <img src={faq_arrow}/>
                            <h2 className="h2">What Blockchain will you be using?</h2>
                        </div>
                    </div>
                    <div className="faq-question">
                        <div>
                            <img src={faq_arrow}/>
                            <h2 className="h2">What are your secondary royalty fees?</h2>
                        </div>
                    </div>
                    <div className="faq-question">
                        <div>
                            <img src={faq_arrow}/>
                            <h2 className="h2">Who is backing Des Arts Ventures?</h2>
                        </div>
                    </div>
                    <div className="faq-question">
                        <div>
                            <img src={faq_arrow}/>
                            <h2 className="h2">How do I pitch my idea? </h2>
                        </div>
                    </div>
                    <div className="faq-question">
                        <div>
                            <img src={faq_arrow}/>
                            <h2 className="h2">How do I get Whitelisted?</h2>
                        </div>
                    </div>
                    <div className="faq-question">
                        <div>
                            <img src={faq_arrow}/>
                            <h2 className="h2">When will Project Pegasus be revealed?</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq