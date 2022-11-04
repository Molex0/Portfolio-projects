import './Navbar.css'
import Logo from '../images/logo.png'
import {links} from '../data'
import {Link, NavLink} from 'react-router-dom'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import { useState } from 'react'

const Navbar = () => {
    const[isNavShowing, setIsNavShowing] = useState(false)
  return (
    <nav>
        <div className="container nav__container">
            <Link to={"/"} className='logo' onClick={()=> setIsNavShowing(false)}>
                <img src={Logo} alt='NavLogo'/>
            </Link>
            <ul className={`nav__links ${isNavShowing ? 'show_nav' : 'hide_Nav'}`}>
                {
                    links.map(({name, path}, index) => {
                        return(
                            <li key={index}>
                                <NavLink to={path} onClick={()=> setIsNavShowing(prev => !prev)}>
                                    {name}
                                </NavLink>
                            </li>
                        )
                    })
                }
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

export default Navbar