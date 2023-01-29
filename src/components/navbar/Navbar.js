import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg'
import {RiMenu3Line, RiCloseLin} from 'react-icons/ri';


const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src= {logo} alt = "logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#wgpt3'>What is gpt3</a></p>
          <p><a href='#possibility'>Open Ai</a></p>
          <p><a href='#feature'>Case Sturdy</a></p>
          <p><a href='#blog'>Library</a></p>
        </div>
      </div>
         <div className='gpt3__navbar-sign'>
          <p>sign in</p>
          <button type='button'>sign up</button>

         </div>
      </div>
  )
}

export default Navbar;