import axios from 'axios'
import React, { useState } from 'react'
import './index.scss'


function Register(props) {
   const [state, setState] = useState({
      first_name: '',
      last_name: '',
      role: '',
      username: '',
      password: '',
      password2: ''
   })

   const handleSubmit = (e) => {
      e.preventDefault()
   }

   const handleChange = (e) => {
      setState(prevState => {
         return {
            ...prevState,
            [e.target.name]: e.target.value
         }
      })
   }

   async function FetchData() {
      return await axios.post('https://api.gits.uz/api/auth/registration/', state)
   }

   return (
      <div className='container'>
         <div className="auth-container">
            <div className="btn-wrapper">
               <button onClick={() => props.onFormSwitch('login')} style={{ color: '#666' }}>Kirish</button>
               <button style={{ borderBottom: "2px solid #326A32" }} disabled>Registratsiya qilish</button>
            </div>
            <form onSubmit={handleSubmit}>
               <div className="about-wrapper">
                  <input
                     value={state.first_name}
                     onChange={(e) => setState({ ...state, first_name: e.target.value })} type="text" placeholder="Ismingiz" id="name" name="first_name" />
                  <input value={state.last_name} name='last_name' onChange={(e) => setState({ ...state, last_name: e.target.value })} type="text" placeholder="Familiyangiz" id="surname" />
               </div>

               <label>
                  <input onChange={handleChange} placeholder='Foydalanuvchi' list="Foydalanuvchilar" name="role" /></label>
               <datalist id="Foydalanuvchilar" >
                  <option value="Foydalanuvchi" />
                  <option value="Gid" />
                  <option value="Og'zaki tarjimon" />
                  <option value="Yozma tarjimon" />
               </datalist>

               <input value={state.username} onChange={(e) => setState({ ...state, username: e.target.value })} type="text" placeholder="E-mail ni kiriting" id="email" name="email" />
               <input autoComplete='false' value={state.password} onChange={(e) => setState({ ...state, password: e.target.value })} type="password" placeholder="Parolingizni kiriting" id="password" name="password" />
               <input autoComplete='false' value={state.password2} onChange={(e) => setState({ ...state, password2: e.target.value })} type="password" placeholder="Parolingizni tasdiqlang" id="password-verify" name="password-verify" />
               <button onClick={() => FetchData()} className="register-btn" type="submit">Ro'yxatdan o'tish</button>
            </form>
         </div>
      </div>
   )
}

export default Register