import React,{useState} from "react";
// Components
import CrossButton from "../../components/CrossButton/CrossButton";

// Styles
import './Faq.css'

// Assets
import faq_title from '../../assets/img/faq_title.svg'
import faq_arrow from '../../assets/img/faq_arrow.png'
const Faq = ({hideModal}) => {


    const [showAnswer,setShowAnswer] = useState(false)
    const [notDefault,setNotDefault] = useState(2)

    const handleClick = () => {
        setShowAnswer(!showAnswer)
        setNotDefault(1)
    }

    const handleAnimation = () =>{
        if(showAnswer){
            return 'rotate-arrow-down'
        }
        else{
            return 'rotate-arrow-up'
        }
    }
    return (
        <>
            <CrossButton hideModal={hideModal}/>
            <div className="faq-container">
                <div className="title-faq-container">
                    <div style={{width:'50%'}}>
                        <img src={faq_title}/>
                    </div>
                </div>
                <div>
                    <div className="faq-question">
                        <div className="set-hover" onClick={handleClick}>
                            <img src={faq_arrow} className={notDefault==1 ? handleAnimation() : null}/>
                            <h2 className="h2">How can I join the Metapolitan Club?</h2>
                        </div>
                        <div className={showAnswer ? 'show-faq' : 'hidden-faq'}>
                            <h2 className="faq-text">
                                You will be able to mint a Des Arts NFT on our website. Join our Discord to be the first to find out.
                            </h2>
                        </div>
                    </div>
                    <div className="faq-question">
                        <div className="set-hover">
                            <img src={faq_arrow}/>
                            <h2 className="h2">When will I be able to mint my NFT?</h2>
                        </div>
                    </div>
                    <div className="faq-question">
                        <div className="set-hover">
                            <img src={faq_arrow}/>
                            <h2 className="h2">How many Des Arts NFTs will be available?</h2>
                        </div>
                    </div>
                    <div className="faq-question">
                        <div className="set-hover">
                            <img src={faq_arrow}/>
                            <h2 className="h2">What Blockchain will you be using?</h2>
                        </div>
                    </div>
                    <div className="faq-question">
                        <div className="set-hover">
                            <img src={faq_arrow}/>
                            <h2 className="h2">What are your secondary royalty fees?</h2>
                        </div>
                    </div>
                    <div className="faq-question">
                        <div className="set-hover">
                            <img src={faq_arrow}/>
                            <h2 className="h2">Who is backing Des Arts Ventures?</h2>
                        </div>
                    </div>
                    <div className="faq-question">
                        <div className="set-hover">
                            <img src={faq_arrow}/>
                            <h2 className="h2">How do I pitch my idea? </h2>
                        </div>
                    </div>
                    <div className="faq-question">
                        <div className="set-hover">
                            <img src={faq_arrow}/>
                            <h2 className="h2">How do I get Whitelisted?</h2>
                        </div>
                    </div>
                    <div className="faq-question">
                        <div className="set-hover">
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