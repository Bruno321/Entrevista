import React, { useState, useEffect } from "react";

// Styles
import './MeetTheTeam.css'

// Components
import TeamMemberCard from "../../components/TeamMemberCard/TeamMemberCard";
import CrossButton from "../../components/CrossButton/CrossButton";

const MeetTheTeam = ({hideModal}) => {
    const data = [
        {
            img:'user_1',
            name:'Patrick C.',
            position: 'CEO',
            icons:['twitter','linkedin','instagram'],
            type:'project'
        },
        {
            img:'user_2',
            name:'Seika L.',
            position: 'COO',
            icons:['twitter','linkedin','instagram'],
            type:'project'
        },
        {
            img:'user_3',
            name:'Zayed Z.',
            position: 'CTO',
            icons:['twitter','linkedin','instagram'],
            type:'project'
        },
        {
            img:'user_4',
            name:'Markus CMO',
            position: 'CEO',
            icons:['email'],
            type:'project'
        },
        {
            img:'user_5',
            name:'Yuichiro N.',
            position: 'Metalia CEO',
            icons:['twitter','linkedin','instagram'],
            type:'investor'
        },
        {
            img:'user_6',
            name:'Kengo N.',
            position: 'Investor',
            icons:['twitter','linkedin','instagram'],
            type:'investor'
        },
        {
            img:'unknown_user',
            name:'To Be Revealed',
            position: 'Investor',
            icons:['twitter','linkedin','instagram'],
            type:'revealInvestor'
        },
        {
            img:'unknown_user',
            name:'To Be Revealed',
            position: 'Investor',
            icons:['twitter','linkedin','instagram'],
            type:'revealInvestor'
        },
        {
            img:'unknown_user',
            name:'To Be Revealed',
            position: 'Investor',
            icons:['twitter','linkedin','instagram'],
            type:'revealInvestor'
        },
        {
            img:'unknown_user',
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

    return (
        <>
            <CrossButton hideModal={hideModal}/>
            <div className="meet-container">
                <div>
                    <h1 className="meet-title">Project Managment Team</h1>
                        <div style={{width:'100%',display:'flex', justifyContent:'center',alignItems:'center'}}>
                            {managmentList.map((e)=>{
                                return (
                                        <TeamMemberCard data={e}/>
                                )
                            })}
                        </div>
                </div>
                <div >
                    <h1 className="meet-title">Investors /VCs</h1>
                    <div style={{width:'100%',display:'flex', justifyContent:'center',alignItems:'center'}} >
                            {investorsList.map((e)=>{
                            return <TeamMemberCard data={e}/>
                        })}
                    </div>
                    <div className="text-container">
                        <text className="meet-text">More investors and VC's to be revealed</text>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MeetTheTeam