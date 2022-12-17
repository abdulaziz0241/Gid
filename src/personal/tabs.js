import React, { useState } from "react"
import Applications from "./applications/applications"
import Datas from "./datas/datas"
import Settings from "./settings/settings"
import Verifyed from "./verifyed"
import Layout from '../layout/index'


function Tabs() {
   const [currentTab, setCurrentTab] = useState('verify')

   const toggleTab = (tabName) => {
      setCurrentTab(tabName)
   }

   return (
      <>
         {
            currentTab === "verify" ? <Verifyed onTabSwitch={toggleTab} />
               : currentTab === 'applications' ? <Applications onTabSwitch={toggleTab} />
                  : currentTab === 'data' ? <Datas onTabSwitch={toggleTab} />
                     : currentTab === 'settings' ? <Settings onTabSwitch={toggleTab} />
                        : <Verifyed />
         }
      </>
   )
}

export default Tabs