import React from 'react'
import UserNavbar from '../components/UserNavbar/UserNavbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <UserNavbar/>
     <Outlet/>
      
    </div>
  )
}

export default Layout
