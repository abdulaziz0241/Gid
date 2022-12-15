import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routes.path'



export function Routers() {
   return <RouterProvider router={routers} />
}