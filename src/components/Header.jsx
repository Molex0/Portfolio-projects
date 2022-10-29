import React from 'react';
import './App.css';

const Header = () => {
    return(
        <div className='header'>
            <img className='header-img' src={process.env.PUBLIC_URL + 'images/Troll Face.png'} alt="" />
            <h1 className='header-title'>Meme Generator</h1>
            <h4 className='header-project'>React Course - Project 3</h4>
        </div>
    )
}
export default Header