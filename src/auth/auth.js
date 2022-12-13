import React, { useState } from 'react'
import Forgot from './forgot'
import { Login } from './login'
import Register from './register'
import Tabs from '../personal/tabs'

function Auth() {

   const [currentForm, setCurrentForm] = useState('login')

   const toggleForm = (formName) => {
      setCurrentForm(formName)
   }

   return (
      <>
         {
            currentForm === "login" ? <Login onFormSwitch={toggleForm} />
               : currentForm === 'register' ? <Register onFormSwitch={toggleForm} />
                  : currentForm === 'forgot' ? <Forgot onFormSwitch={toggleForm} />
                     // : currentForm === 'verifyed' ? <Tabs onFormSwitch={toggleForm} />
                     : <Login />
         }
      </>
   )
}

export default Auth