import React from 'react'
import { Link } from 'react-router-dom'
import styled from '../Navbar/style.module.scss'
import { AiOutlineUser } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useState } from 'react';
import {Toaster} from 'react-hot-toast'
const Navbar = () => {
 const [isOpen,setIsOpen] = useState(false)
  return (
    <div className={styled.navbar}>
    <div className={styled.navbar_left} >
      <Link to='/' >
      <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/storefront-2@2x.svg" alt="" />
      <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/nft-marketplace-1@2x.svg" alt="" />
      </Link>
      </div>  
    <div className={styled.navbar_right}>
     <ul>
      <li>
      <Link to='/' >Marketplace</Link>
      </li>
      <li><Link to='/artist' >Rankings</Link></li>
      <li><Link to='/add' >Add Artist</Link></li>
     </ul>
     <button><AiOutlineUser/> <span>Sign Up</span></button>
    </div>

   <button onClick={()=>{setIsOpen(true)}}   className={styled.hamburger}><GiHamburgerMenu/></button>
      <div className={styled.menu} style={{visibility:isOpen === false? 'hidden':'visible'}}>
      <ul>
      <li>
      <Link to='/' >Marketplace</Link>
      </li>
      <li><Link to='/artist' >Rankings</Link></li>
      <li><Link to='/add' >Add Artist</Link></li>
      <button><AiOutlineUser/> <span>Sign Up</span></button>
     </ul>
  <button className={styled.closeBtn} onClick={()=>{setIsOpen(false)}}><AiOutlineCloseCircle/></button>
      </div>
      <Toaster
  position="bottom-right"
  reverseOrder={false}
/>
    </div>
  )
}

export default Navbar