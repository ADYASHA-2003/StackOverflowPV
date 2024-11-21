import React from 'react'
import IconButton from "./Reusable/IconButton"
import "../App.css"
import { IoSearch } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { HiOutlineTrophy } from "react-icons/hi2";
import { BiMessageDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className='navbar' style={{display:"flex", padding:"30px",gap:"50px"}}>
      {/* Logo */}
      <div className='logo'>
        <img src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png" alt="stackoverflowlogopng" width={150}/>
      </div>

      {/* Search Bar */}
      <div className='search-bar'>
        <div className='search-input'>
          <input type="text" placeholder='Search Your Answers Here...' className='input-field'/>
        </div>
        <div className='search-icon'>
        <IoSearch />
        </div>
      </div>

      {/* nav-icons menu*/}
      <div className='nav-icons'>
      <div className='nav-menu1'>
        <p>Products</p>
      </div>
      <FiMessageSquare />
      <HiOutlineTrophy />
      <BiMessageDetail />
      <CgProfile />
      </div>
    </div>
  )
}

export default Navbar
