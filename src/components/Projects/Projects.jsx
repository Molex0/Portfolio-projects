import React from 'react'
import Card from './Card'
import p1 from '../../img/project1.png'
import p2 from '../../img/project2.png'
import p3 from '../../img/project3.png'
import p4 from '../../img/project4.png'
import './Projects.css'


const Projects = () => {
  return (
      <section className='projects' id='projects'>
          <div className="container projects__container">
              <h1 className='projects__title'>Projects</h1>
              <h4 className='projects__text'>There are some projects that I've made during mastering Frontend Development</h4>
              <div className='projects-grid'>
                  <Card id={1} image = {p1} title='Responsive React App' link='https://dev.to/github/how-to-use-github-pages-to-host-your-website-even-with-multiple-repos-27k2'/>
                  <Card id={2} image = {p2} title='Meme Generator'link=''/>
                  <Card id={3} image = {p3} title='Responsive App' link='https://molex0.github.io/ProjectCSS-host/'/>
                  <Card id={4} image = {p4} title='React Tenzies Game'link=''/>
              </div>
          </div>
      </section>
  )
}

export default Projects