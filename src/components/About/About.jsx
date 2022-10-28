import React from 'react'
import './About.css'
import MyPhoto from '../../img/myPhoto.png'
import Resume from './pdf1.pdf'
import  RunningString from './RunningString'

const About = () => {
  const onButtonClick = () => {
    fetch(Resume).then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = Resume;
            alink.click();
        })
    })
  }
  return (
    <section className='about' id='about'>
      <div className='container about__container'>
        <div className="about__left">
          <img src={MyPhoto} alt="me" />
        </div>
        <div className="about__right">
            <div className="about__text"> 
              <h1>Hey! I'am Havrylyuk Illia </h1>
              <h4>
              I'am third grade student at the KPI who's looking for the first job as a Frontend Developer
              </h4>
            </div>
          <button className='about-btn' type="submit" onClick={onButtonClick}>Download My Resume</button>
        </div>
        <h1 className='running_header'>I Have Already Worked With</h1>
      </div>
      <RunningString/>
    </section>
  )
}

export default About
