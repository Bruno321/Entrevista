import React, { useState, useEffect } from "react";

// Styles
import './MeetTheTeam.css'

// Components
import TeamMemberCard from "../../components/TeamMemberCard/TeamMemberCard";
import CrossButton from "../../components/CrossButton/CrossButton";

const MeetTheTeam = () => {
    const data = [
        {
            img:'',
            name:'Patrick C.',
            position: 'CEO',
            icons:['twitter','linkedin','instagram'],
            type:'project'
        },
        {
            img:'',
            name:'Seika L.',
            position: 'COO',
            icons:['twitter','linkedin','instagram'],
            type:'project'
        },
        {
            img:'',
            name:'Zayed Z.',
            position: 'CTO',
            icons:['twitter','linkedin','instagram'],
            type:'project'
        },
        {
            img:'',
            name:'Markus CMO',
            position: 'CEO',
            icons:['email'],
            type:'project'
        },
        {
            img:'',
            name:'Yuichiro N.',
            position: 'Metalia CEO',
            icons:['twitter','linkedin','instagram'],
            type:'investor'
        },
        {
            img:'',
            name:'Kengo N.',
            position: 'Investor',
            icons:['twitter','linkedin','instagram'],
            type:'investor'
        },
        {
            img:'',
            name:'To Be Revealed',
            position: 'Investor',
            icons:['twitter','linkedin','instagram'],
            type:'revealInvestor'
        },
        {
            img:'',
            name:'To Be Revealed',
            position: 'Investor',
            icons:['twitter','linkedin','instagram'],
            type:'revealInvestor'
        },
        {
            img:'',
            name:'To Be Revealed',
            position: 'Investor',
            icons:['twitter','linkedin','instagram'],
            type:'revealInvestor'
        },
        {
            img:'',
            name:'To Be Revealed',
            position: 'Investor',
            icons:['twitter','linkedin','instagram'],
            type:'revealInvestor'
        },
    ]
    const [managmentList,setManagmentList] = useState([])
    const [investorsList,setInvestorsList] = useState([])

    useEffect(()=>{
        let arr1 = []
        data.map((e)=>{
            if(e.type==='project' || e.type==='revealProject'){
                arr1.push(e)
            }
        })
        setManagmentList(arr1)
        let arr2 = []
        data.map((e)=>{
            if(e.type==='investor' || e.type==='revealInvestor'){
                arr2.push(e)
            }
        })
        setInvestorsList(arr2)
    },[])

    console.log(managmentList)
    console.log(investorsList)
    return (
        <div className="vertical-container">
            <div>
                <div>
                    <h1>Project Managment Team</h1>
                </div>
                <div className="horizontal-container">
                    {managmentList.map((e)=>{
                        return <TeamMemberCard data={e}/>
                    })}
                    <CrossButton />
                </div>
            </div>
            <div >
                <div>

                <h1>Investors /VCs</h1>
                </div>
                <div className="horizontal-container">
                        {investorsList.map((e)=>{
                        return <TeamMemberCard data={e}/>
                    })}
                </div>
                <p>More investors and VC's to be revealed</p>
            </div>
        </div>
    )
}

export default MeetTheTeam