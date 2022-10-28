import React from 'react'
import './Contact.css'
import {AiOutlineInstagram, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn,FaTelegramPlane} from 'react-icons/fa'

const Contact =() => {
  return (
      <section className='contact' id="contact">
        <div className="container contact__container">
            <div className="contact_main">
              <h1 className='contact_title'>Let's create something together!</h1>
              <p className='right_text'>I'm basically everywhere. So feel free to pick which mode of communication works for you.</p>
              <div className="contact_wrapper">
                  <a href="https://www.instagram.com/iamd0ne/" target="_blank" rel="noreferrer noopener"><AiOutlineInstagram/></a>
                  <a href="https://www.linkedin.com/in/jeck-rassel-6b14b7184/" target="_blank" rel="noreferrer noopener"><FaLinkedinIn/></a>
                  <a href="https://github.com/" target="_blank" rel="noreferrer noopener"><FaTelegramPlane/></a>
                  <a href="https://github.com/" target="_blank" rel="noreferrer noopener"><AiOutlineMail/></a>
              </div>
            </div>
        </div>
      </section>
  )
}

export default Contact