import React from 'react'
import {Link } from "react-router-dom";
import { useContext } from 'react';
import { HireContext } from '../App';

import "./Header.css"

function Header() {
  const{username } = useContext(HireContext)
  return (
  <>
  <header>
    <h1><Link to="/" >Full Stack Learning</Link></h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/category">Category</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    <ul>
      <li>
        <Link to="/favourite">Favourite</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
      <li>
        {
          username ?<Link className='openPage' to="">{username}</Link> : <Link to="">Sing Up</Link>
        }
     
      </li>
    </ul>
  </header>
  </>
  )
}

export default Header