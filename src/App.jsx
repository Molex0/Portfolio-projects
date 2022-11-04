import React from 'react'
import { HashRouter, Routes, Route} from 'react-router-dom'

import About from './pages/about/About'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import NotFound from './pages/notFound/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const app = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='trainers' element={<Trainers/>}/>
        <Route path='plans' element={<Plans/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </HashRouter>
  )
}

export default app
