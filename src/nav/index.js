import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoImg from '../assets/images/logo.png'
import './index.scss'
import '.././App.scss'
import { Dropdown, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import PersonIcon from '../assets/images/'
import { BsPerson } from 'react-icons/bs'


const items = [
   {
      key: '1',
      label: (
         <Link to={'/main'} rel="noopener noreferrer" href="https://www.antgroup.com">
            Profil
         </Link>
      ),
   }
];
const App = () => (
   <Dropdown
      menu={{
         items,
      }}
   >
      <Link className='user-name-wrapper' to={'/main'}>
         <Space>
            <div className="user-name">
               <BsPerson className='bsPerson' />
               Keldiboyev Abdulaziz
            </div>
         </Space>
      </Link>
   </Dropdown>
);


function Navbar() {
   return (
      <main>
         <div className="navvv">
            <div className='nav-bar'>
               <Link to={'/'}>
                  <img src={logoImg} alt="logo" />
               </Link>
               <nav className='navbar'>
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

               <App />


               <div className="navbarrr">
                  <input id="toggle" type="checkbox"></input>
                  <label htmlFor="toggle" className="hamburger">
                     <div className="top-bun"></div>
                     <div className="meat"></div>
                     <div className="bottom-bun"></div>
                  </label>

                  <div className="nav">
                     <div className="nav-wrapper">
                        <nav>
                           <NavLink to={'/select'}>
                              Gid yoki tarjimonni tanlash
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

                           <App />
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </main>
   )
}

export default Navbar