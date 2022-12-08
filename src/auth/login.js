import React, { useState } from "react"
import './index.scss'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = ({ onFormSwitch }) => {
   const [LoginValue, setLoginValue] = useState({
      username: '',
      password: ''
   })

   async function fetchData(e) {
      e.preventDefault()
      return await axios.post('https://api.gits.uz/api/auth/token/', LoginValue).then(res => {
         if (res.data.access) {
            onFormSwitch('verifyed')
         }
         console.log(res?.data);
      }).catch(e => {
         notify()
      })
   }

   function notify() {
      toast.error('🦄 Wow so easy!', {
         position: "bottom-center",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
      })
   }

   return (
      <div className="container">
         <div className="auth-container">
            <div className="btn-wrapper">
               <button className="enter-btn" style={{ borderBottom: "2px solid #326A32" }} disabled>Kirish</button>
               <button className="reg-btn" style={{ color: '#666' }} onClick={() => onFormSwitch('register')}>Registratsiya qilish</button>
            </div>
            <form onSubmit={fetchData} name="loginBox" target="#here" method="post">
               <input className="e-inp" value={LoginValue.username} onChange={(e) => setLoginValue({ ...LoginValue, username: e.target.value })} type="email" placeholder="E-mailni kiriting" id="email" name="email" />
               <input autoComplete="false" className="e-inp" value={LoginValue.password} onChange={(e) => setLoginValue({ ...LoginValue, password: e.target.value })} type="password" placeholder="Parolini kiriting" id="password" name="password" />

               <div className="forgot-container">
                  <div className="remember-wrapper">
                     <input style={{ cursor: "pointer" }} type="checkbox" name="remember" id="remember" />
                     <label style={{ cursor: "pointer" }} htmlFor="remember">Eslab qolish</label>
                  </div>

                  <button type="button" onClick={() => onFormSwitch('forgot')}>Parolni unutdim</button>
               </div>

               <button className="kirish-btn" type="submit">Kirish</button>
            </form>
         </div>
         <ToastContainer />
      </div >
   )
}