import React,{useState} from 'react';

// Components
import Header from '../components/Header/Header';

// Styles
import './MainPage.css'

// Assets
import main_background from '../assets/img/main_background.png'
import information_text from '../assets/img/information_text.svg'

export const MainPage = () => {
    const [backgroundImage,setBackgroundImage] = useState(main_background)
    return(
        <div>
            <Header />
          <div className='main-container' style={{
            backgroundImage: `url(${backgroundImage})`
            }}>
                <div className='left-container'>
                    <img src={information_text}></img>
                </div>
                <div className='right-container'>
                    <p id='text0'>About us</p>
                    <p id='text1'>Roadmap</p>
                    <p id='text2'>FAQ</p>
                    <p id='text3'>Join Us</p>
                    <p id='text4'>Behind the design</p>
                    <p id='text5'>Meet the team</p>
                </div>
          </div>
        </div>
    )
    
}

export default MainPage