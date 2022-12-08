import React, { useState } from 'react'
import './index.scss'

function Forgot(props) {
   const [email, setEmail] = useState('')
   const [pass, setPass] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault()
   }

   return (
      <div className='container'>
         <div className="auth-container">

            <div className='restore'>Parolni tiklash</div>
            <div className='verify'>*E-mail ga tasdiqlash kodini yuboramiz</div>

            <form onSubmit={handleSubmit}>
               <input className="e-inp" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mailni kiriting" id="email" name="email" />
               <input className="e-inp" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Parolini kiriting" id="password" name="password" />

               <button className="restore-btn" type="submit">Kodni yuborish</button>
            </form>
         </div>
      </div>
   )
}

export default Forgot