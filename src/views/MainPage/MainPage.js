import React,{useState} from 'react'

// Components
import Header from '../../components/Header/Header'
import Modal from '../../components/Modal/Modal'

// Styles
import './MainPage.css'

// Assets
import main_background from '../../assets/img/main_background.png'
import information_text from '../../assets/img/information_text.svg'

const MainPage = () => {
    const [backgroundImage,setBackgroundImage] = useState(main_background)
    const [textColor,setTextColor] = useState([
        {color:'white'},
        {color:'white'},
        {color:'white'},
        {color:'white'},
        {color:'white'},
        {color:'white'},
    ])
    const changueColor = (event) => {
        // event.target.id
        let array = []
        for (let i = 0;i<6;i++){
            if(i===parseInt(event.target.id)){
                array.push({color:'white'})
            }else{
                array.push({color:'gray'})
            }
        }
        setTextColor(array)
    }

    const resetColor = () => {
        setTextColor([
            {color:'white'},
            {color:'white'},
            {color:'white'},
            {color:'white'},
            {color:'white'},
            {color:'white'}])
    }

    const [modalActivated,setModalActivated] = useState(false)
    const [animation,setAnimation] = useState('')
    const [modalToPop,setModalToPop] = useState('')
    const activateModal = (modalToPop) => {
        // iniciar transicion
        setAnimation('upper-fade-out')
        
        // esperar q un timing o algo
        setTimeout(()=>{
            setModalActivated(true)
            setModalToPop(modalToPop)
        },520)
    }
    const popModal = () => {
        return <Modal modalToRender={modalToPop} />
    }
    return(
        <div>
            <Header />
          <div className='main-container' style={{
            backgroundImage: `url(${backgroundImage})`
            }}>
                {modalActivated ? 
                popModal()
                : 
                <>
                    <div className={'left-container ' + animation}>
                    {/* <div className="left-container"> */}
                        <img src={information_text} ></img>
                    </div>
                    <div className='right-container'>
                        <div className='text0'onMouseOver={changueColor} onMouseLeave={resetColor} onClick={()=>activateModal('about')}>
                            <p id='0' style={{color:textColor[0].color}}>About us</p>
                        </div>
                        <div className='text1'onMouseOver={changueColor} onMouseLeave={resetColor} onClick={()=>activateModal('road')}>
                            <p id='1' style={{color:textColor[1].color}}>Road map</p>
                        </div>
                        <div className='text2'onMouseOver={changueColor} onMouseLeave={resetColor} onClick={()=>activateModal('faq')}>
                            <p id='2' style={{color:textColor[2].color}}>FAQ</p>
                        </div>
                        <div className='text3'onMouseOver={changueColor} onMouseLeave={resetColor} onClick={()=>activateModal('join')}>
                            <p id='3' style={{color:textColor[3].color}}>Join Us</p>
                        </div>
                        <div className='text4'onMouseOver={changueColor} onMouseLeave={resetColor} onClick={()=>activateModal('behind')}>
                            <p id='4' style={{color:textColor[4].color}}>Behind the design</p>
                        </div>
                        <div className='text5'onMouseOver={changueColor} onMouseLeave={resetColor} onClick={()=>activateModal('meet')}>
                            <p id='5' style={{color:textColor[5].color}}>Meet the Team</p>
                        </div>
                    </div>
                </> }
                
          </div>
        </div>
    )
    
}

export default MainPage