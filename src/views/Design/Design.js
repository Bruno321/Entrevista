import React from "react";

// Components
import CrossButton from "../../components/CrossButton/CrossButton";
import CardImage from "../../components/CardImage/CardImage";

// Styles
import './Design.css'
import '../../assets/css/animations.css'

// Assets
import design_title from '../../assets/img/design_title.png'
import left_arrow from '../../assets/img/left_arrow.png'
import right_arrow from '../../assets/img/right_arrow.png'

const Design = ({hideModal}) => {

    const data = [
        {img:'pj0',id:0},
        {img:'pj1',id:1},
        {img:'pj2',id:2},
        {img:'pj3',id:3},
        {img:'pj4',id:4},
        {img:'pj5',id:5},
        {img:'pj6',id:6},
        {img:'pj7',id:7},
        {img:'pj8',id:8},
        {img:'pj9',id:9},
        {img:'pj10',id:10},
        {img:'pj11',id:11},
        {img:'pj12',id:12},
        {img:'pj13',id:13},
    ]

    return (
        <>
            <CrossButton hideModal={hideModal} />
            <div className="design-container">
                <div>
                    <div className="design-title-container fade-in second-move-up">
                        <img src={design_title} />
                    </div>

                    <div className="design-text-container">
                        <text className="design-text">
                            Our collection presents influential individuals such as Aristotle, Einstein, Da Vinci, and Jeanne D’Arc amongst many other remarkable personalities. These extraordinary characters achieved the pinnacle of creativity through science, philosophy, and wisdom in their pursuit of elevating human consciousness.
                        </text>
                        <div style={{marginTop:'13px'}}>
                            <text  className="design-text">
                                We at Des Arts recognize these individuals as the embodiment of Art: we do not categorize art and we do not constrain the Artist.
                            </text>
                        </div>
                    </div>

                    <div className="card-images-container">
                        <div className="arrow-container">
                            <img src={left_arrow} />
                        </div>
                        <div className="scrollabe-card-wrapper">
                                {data.map((e)=>{
                                    return (
                                        <div className="design-card-container">
                                            <CardImage data={e} />
                                        </div>
                                    )
                                })}
                        </div>
                        <div className="arrow-container">
                            <img src={right_arrow} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 

export default Design