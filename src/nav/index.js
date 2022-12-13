import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoImg from '../assets/images/logo.png'
import './index.scss'
import '.././App.scss'

function Navbar() {
   return (
      <main>
         <div className="nav">
            <div className='nav-bar'>
               <Link to={'/'}>
                  <img src={logoImg} alt="logo" />
               </Link>
               <nav>
                  <NavLink to={'/select'}>
                     Tanlash
                  </NavLink>
                  <NavLink to={'/blog'}>
                     Blog
                  </NavLink>
                  <NavLink to={'/application'}>
                     Ariza qoldirish
                  </NavLink>
                  <NavLink to={'/transport'}>
                     Transport
                  </NavLink>
               </nav>
            </div>
         </div>
      </main>
   )
}

export default Navbar