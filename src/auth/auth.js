import React, { useEffect, useState } from 'react'
import Forgot from './forgot'
import { Login } from './login'
import Register from './register'
import { useNavigate } from 'react-router-dom'
import Tabs from '../personal/tabs'
import Navbar from '../nav'

function Auth() {
   const navigate = useNavigate()
   const [currentForm, setCurrentForm] = useState('login')
   const [token, setToken] = useState(null)
   const toggleForm = (formName) => {
      setCurrentForm(formName)
   }
   useEffect(() => {
      let somethingToken = localStorage.getItem('token')
      if (somethingToken) {
         navigate('/main')
      }
      setToken(somethingToken)
   }, [])


   return (
      <>

         {
            !token ?
               <>
                  {currentForm === "login" ? <Login onFormSwitch={toggleForm} />
                     : currentForm === 'register' ? <Register onFormSwitch={toggleForm} />
                        : currentForm === 'forgot' ? <Forgot onFormSwitch={toggleForm} />
                           : <Login />}
               </> : null
         }
      </>
   )
}

export default Auth