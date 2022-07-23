import React from "react";

// Componenets
import CrossButton from "../../components/CrossButton/CrossButton";

// Assets
import road_title from '../../assets/img/road_title.png'
import pre_mint_title from '../../assets/img/pre_mint_title.png'
import post_mint_title from '../../assets/img/post_mint_title.png'
import utilty_title from '../../assets/img/utilty_title.png'

// Styles
import './RoadMap.css'
import '../../assets/css/animations.css'

// Components
import PhaseCount from "../../components/PhaseCount/PhaseCount";
import DoubleTextCard from '../../components/DoubleTextCard/DoubleTextCard'
import TextIconCard from '../../components/TextIconCard/TextIconCard'
import TextOnlyCard from "../../components/TextOnlyCard/TextOnlyCard";
import SmallOnlyTextCard from "../../components/SmallOnlyTextCard/SmallOnlyTextCard";
import LargeOnlyText from "../../components/LargeOnlyText/LargeOnlyText";

const RoadMap = ({hideModal}) => {

    return (
        <div>
            <CrossButton hideModal={hideModal}/>
            <div className="road-container">
                <div className="horizontal-road-container">
                    <div className="road-text-container">
                        <div className="design-title-container fade-in second-move-up">
                            <img src={road_title} />
                        </div>
                        <div className="design-text">
                            <div style={{marginLeft:'30px',marginTop:'50px'}}>
                                <text>
                                We are all aware of the struggles coming into the Web 3.0 ecosystem. Funding and Talent being at the core of these challenges. Des Arts is here to provide the infrastructure and resources to build Web 3.0 for the future. We want each of our holders to have direct access to what is needed to become successful, in and out of the metaverse. 
                                </text>
                            </div>
                            <div style={{marginTop:'50px',marginLeft:'30px'}}>
                                <text>
                                The current structures involve several intermediaries and procedures that have proven to be difficult for the common Web 3.0 enthusiast. 
                                </text>
                            </div>
                        </div>
                    </div>
                    <div className="mental-map">
                        
                    </div>
                </div>
                <div className="pre-mint">
                    <div className="design-title-container">
                        <img src={pre_mint_title} />
                    </div>  
                    <div className="phase-wrapper">
                        <PhaseCount text={'PHASE 1'}/>
                    </div>
                    <h1 className="road-h1">Earn trust, create platform.</h1>
                    <div className="space-evenly-container">
                        <DoubleTextCard title={'Proof of funds'} text={'Reveal at least two of our wallets'} />
                        <DoubleTextCard title={'Create Platform'} text={'For future holders to communicate, brainstorm, vote and pitch'} />
                        <DoubleTextCard title={'Reveal the Garden'} text={'Reveal HQ'} />
                    </div>
                    <div className="phase-wrapper">
                        <PhaseCount text={'PHASE 2'}/>
                    </div>
                    <h1 className="road-h1">The Mint</h1>
                    <div className="space-evenly-container">
                        <TextIconCard icon={'wallet'} text={'Reveal Project Pegasus and invest in one disruptive venture, pre-mint.'}/>
                        <TextIconCard icon={'cpu'} text={'Create Platform that allow users to pitch ideas	and etc…'}/>
                        <TextIconCard icon={'eye'} text={'Reveal all potential NFT projects'}/>
                        <TextIconCard icon={'seed'} text={'Reveal The Garden'}/>
                    </div>
                </div>
                <div className="post-mint">
                    <div className="design-title-container">
                        <img src={post_mint_title} />
                    </div> 
                    <div className="phase-wrapper">
                        <PhaseCount text={'PHASE 3'}/>
                    </div>
                    <h1 className="road-h1">Vote for projects and form four different groups</h1>
                    <div className="space-evenly-container">
                        <TextOnlyCard text={'Assign community members to each project'}/>
                        <TextOnlyCard text={'Reveal PLATFORM'}/>
                    </div>
                    <div className="phase-wrapper">
                        <PhaseCount text={'PHASE 4'}/>
                    </div>
                    <h1 className="road-h1">Give back to the community</h1>
                    <div className="space-evenly-container">
                        <TextOnlyCard text={'Earning from four projects'}/>
                    </div>
                    <div className="phase-wrapper">
                        <PhaseCount text={'PHASE 5'}/>
                    </div>
                    <h1 className="road-h1">Initiate Des Arts Ventures</h1>
                    <div className="space-evenly-container">
                        <TextOnlyCard text={'Initiate Project Pegasus'}/>
                    </div>

                    <div className="final-divs">
                        <div className="space-evenly-container-wrapper">
                            <div className="space-evenly-container">
                                <SmallOnlyTextCard text={'At 25% minted,vote for '} coloredText={'Project 1'} color={'#62F379'}/>
                                <SmallOnlyTextCard text={'At 50% minted,vote for '} coloredText={'Project 2'} color={'#FFD748'}/>
                                <SmallOnlyTextCard text={'At 75% minted,vote for '} coloredText={'Project 3'} color={'#568DFF'}/>
                                <SmallOnlyTextCard text={'At 100% minted,vote for '} coloredText={'Project 4'} color={'#AA7EFF'}/>
                            </div>
                        </div>
                        <div className="vertical-space-evenly">
                            <LargeOnlyText title={''} text={'Divide community into 4 different groups'} />
                            <LargeOnlyText title={'Assign Leadership Position'} text={'Find Talent within community Assign Experts to guide the groups Des Arts team available to support all project leaders'} />
                            <LargeOnlyText title={'Launch The Projects'} text={'Earnings to be distributed to the community'} />
                            <LargeOnlyText title={'Project Pegasus'} text={'Holders to pitch Ideas Des Arts to secure funding, talent, mentorship'} />
                        </div>
                    </div>
                </div>
                <div className="utility">
                    <div className="design-title-container">
                        <img src={utilty_title} />
                    </div> 
                    <div className="final-text-container">
                        <h1 className="final-text-title">
                            The token represents a stake in a venture pioneered by the community through a thorough voting system.  Token by token, Des Arts’ community is headed towards breaking the barriers of conventional teamwork by founding and scaling a decentralized venture through a majority vote structure. 
                        </h1>
                    </div>
                    <div className="final-elements">
                        <div>
                            <h1 className="road-h1">Des Arts grants:</h1>
                            <p className="final-text-text">Early Access to upcoming projects</p>
                            <p className="final-text-text">Involvement in project development and execution</p>
                            <p className="final-text-text">Access to funds and marketing routes</p>
                            <p className="final-text-text">Pitch ideas</p>
                            <p className="final-text-text">Vote</p>
                            <p className="final-text-text">Backend support </p>
                            <p className="final-text-text">Chain end support</p>
                            <p className="final-text-text">Front end support</p>
                            <p className="final-text-text">Access to Des Arts ventures</p>
                        </div>
                        <div style={{marginLeft:'200px'}}>
                            <h1 className="road-h1">Learn and Earn:</h1>
                            <p className="final-text-text">NFT development</p>
                            <p className="final-text-text">How to launch and lead a project</p>
                            <p className="final-text-text">Learn about the Web 3.0 ecosystem</p>
                            <p className="final-text-text">Earnings distributed to the community.</p>
                            <p className="final-text-text"> Understand how a VC operates</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default RoadMap