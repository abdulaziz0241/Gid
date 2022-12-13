import React from 'react'
import Footer from '../footer/footer'
import Navbar from '../nav'
import { Outlet } from 'react-router-dom'

function Layout() {
   return (
      <>
         <Navbar />

         <Outlet />

         <Footer />
      </>
   )
}

export default Layout