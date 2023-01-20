import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <div>
      LOGO
      </div>  
    <div>
      <Link to='/' >HOME</Link>
      <Link to='/artist' ></Link>
    </div>
    </div>
  )
}

export default Navbar