import React from 'react'
import UserNavbar from '../components/UserNavbar/UserNavbar'

const Layout = ({children}) => {
  return (
    <div>
      <UserNavbar/>
      {children}
      
    </div>
  )
}

export default Layout
