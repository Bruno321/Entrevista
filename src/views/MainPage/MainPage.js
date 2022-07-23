import React,{useState,useEffect} from 'react'

// Components
import Header from '../../components/Header/Header'
import Modal from '../../components/Modal/Modal'

// Styles
import './MainPage.css'
import '../../assets/css/animations.css'

// Assets
import main_background from '../../assets/img/main_background.png'
import join_background from '../../assets/img/join_background.png'
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
    const [modalDesactivated,setModalDesactivated] = useState(false)
    // el tipo de animacion de regreso dependera de que modal to pop fue usado
    // el tipo de animacion de salida depedneria de que modal to pop fue usado
    // z-index y opacity se manejan por contenedor gigante
    // habra:
    // main title hacia arriba y se desvanece
    // main title se desvanece y ya
    // el regreso es eso pero al revez
    // titulo del modal tambien 
    // titulo hacia abajo y se desvanece
    // main title se desvanece y ya
    const [animation,setAnimation] = useState('')
    const [finalClass,setFinalClass] = useState('')
    const [modalToPop,setModalToPop] = useState('')
    const activateModal = (modalToPop) => {
        if(modalToPop==='join'){
            setBackgroundImage(join_background)
        }
        // iniciar transicion
        if(modalToPop==='about' || modalToPop==='join' || modalToPop==='behind'){
            // animacion upper con su fade out
            setAnimation('move-up ')
        }
        
        setFinalClass('fade-out ' + 'invisible-item')
        setModalActivated(true)
        setModalToPop(modalToPop)
       
       
    }
    const hideModal = () => {
        setBackgroundImage(main_background)
        if(modalToPop==='about' || modalToPop==='join' || modalToPop==='behind'){
            // animacion upper con su fade out
            setAnimation('move-down ')
        }
        if(modalToPop==='meet' || modalToPop==='faq' || modalToPop==='road'){
            // animacion upper con su fade out
            setAnimation('fade-in ')
        }
        setFinalClass('fade-in ' + 'visible-item')
       
        setModalActivated(false)
    }
    const popModal = () => {
        return <Modal modalToRender={modalToPop} hideModal={hideModal} />
    }
    
    return(
        <div style={{backgroundColor:'black'}}>
            <Header />

          <div className='main-container' style={{
            backgroundImage: `url(${backgroundImage})`
            }}>
                <div className={modalActivated ? 'modal-wrapper visible-item' : 'modal-wrapper invisible-item '}>
                    {modalActivated ? popModal() : null}
                </div>
                <div className={'body-wrapper ' + finalClass}>
                    <div className={'left-container ' + animation}>
                        <img src={information_text} className={animation}></img>
                    </div>
                    <div className='right-container'>
                        <div  className='text0' onMouseOver={changueColor} onMouseLeave={resetColor} onClick={()=>activateModal('about')}>
                            <p id='0' style={{color:textColor[0].color}}>About us</p>
                        </div>
                        <div  className='text1' onMouseOver={changueColor} onMouseLeave={resetColor} onClick={()=>activateModal('road')}>
                            <p id='1' style={{color:textColor[1].color}}>Road map</p>
                        </div>
                        <div  className='text2' onMouseOver={changueColor} onMouseLeave={resetColor} onClick={()=>activateModal('faq')}>
                            <p id='2' style={{color:textColor[2].color}}>FAQ</p>
                        </div>
                        <div  className='text3' onMouseOver={changueColor} onMouseLeave={resetColor} onClick={()=>activateModal('join')}>
                            <p id='3' style={{color:textColor[3].color}}>Join Us</p>
                        </div>
                        <div  className='text4' onMouseOver={changueColor} onMouseLeave={resetColor} onClick={()=>activateModal('behind')}>
                            <p id='4' style={{color:textColor[4].color}}>Behind the design</p>
                        </div>
                        <div  className='text5' onMouseOver={changueColor} onMouseLeave={resetColor} onClick={()=>activateModal('meet')}>
                            <p id='5' style={{color:textColor[5].color}}>Meet the Team</p>
                        </div>
                    </div>
                </div>
          </div>
        </div>
    )
    
}

export default MainPage