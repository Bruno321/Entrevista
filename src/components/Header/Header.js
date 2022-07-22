import React from 'react';

// Styles
import './Header.css'

// Assets
import title from '../../assets/img/title.png'
import twitter from '../../assets/img/twitter.png'
import discord from '../../assets/img/discord.png'
import instagram from '../../assets/img/instagram.png'
import email from '../../assets/img/email.png'

const Header = () => {
 
    return(
        <div className='header'>
          <div className='title-container'>
            <img src={title}></img>
          </div>
          <div className='social-media-container'>
            <img src={twitter}></img>
            <img src={discord}></img>
            <img src={instagram}></img>
            <img src={email}></img>
          </div>
        </div>
    )
    
}

export default Header