import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavMenu.css';
import { CgMenuRight } from 'react-icons/cg';
import { VscClose } from 'react-icons/vsc';
import { useState } from 'react';

export default function NavMenu() {
  return (
    <div className='nav'>
        <ul className='navlinks'>
            <li className='link'>
                <NavLink to="/">Home</NavLink>
            </li>
            <li className='link'>
                <NavLink to="/about">About</NavLink>
            </li>
            <li className='link'>
                <NavLink to="/projects">Projects</NavLink>
            </li>
            <li className='link'>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
        {/* <div id='moblie'>
            <CgMenuRight />
            <VscClose />
        </div> */}
    </div>


  )
}
