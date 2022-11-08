import React from 'react'
import {AiOutlineInstagram, AiOutlineGithub} from 'react-icons/ai'
import {FaLinkedinIn,FaTelegramPlane} from 'react-icons/fa'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import { useState} from 'react'
import './NavBar.css'

const NavBar = () => {

  const[isNavShowing, setIsNavShowing] = useState(false)
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 500) {
      setColor(true);
    } 
    else{
      setColor(false)
    }
  };
  window.addEventListener("scroll", changeColor, true);
  
  return (
    <nav className={color ? 'black': 'white'}>
        <div className='container navbar__container'>
            <div className="navbar-icons">
                <a href="https://www.instagram.com/iamd0ne/" target="_blank" rel="noreferrer noopener"><AiOutlineInstagram/></a>
                <a href="https://www.linkedin.com/in/illia-havrylyuk/" target="_blank" rel="noreferrer noopener"><FaLinkedinIn/></a>
                <a href="https://github.com/Molex0/Portfolio-projects" target="_blank" rel="noreferrer noopener"><AiOutlineGithub/></a>
                <a href="https://telegram.me/molex_0" target="_blank" rel="noreferrer noopener"><FaTelegramPlane/></a>
            </div>
            <a href="#about"><h1 className='logo_text'>My Portfolio</h1></a>
            <ul className={`nav__links ${isNavShowing ? 'show_nav' : 'hide_Nav'}`}>
                <li className={color ? 'black': 'white'}>
                  <a href="#about " onClick={()=>{setIsNavShowing(prev => !prev)}}>About</a>
                </li>
                <li className={color ? 'black': 'white'}>
                  <a href="#projects " onClick={()=>{setIsNavShowing(prev => !prev)}}>Projects</a>
                </li>
                <li className={color ? 'black': 'white'}>
                  <a href="#footer " onClick={()=>{setIsNavShowing(prev => !prev)}}>Contact</a>
                </li>
            </ul>

            <button className='nav__toogle-btn' onClick={()=> setIsNavShowing(prev => !prev)}>
                {
                    isNavShowing ? <MdOutlineClose/> : <GoThreeBars/>
                }
            </button>
        </div>
    </nav>
    
  )
}

export default NavBar