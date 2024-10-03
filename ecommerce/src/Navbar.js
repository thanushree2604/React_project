import React from 'react'
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <div>
        <ul className='navbar'>
            <li> <Link to ="/">Home</Link></li>
            <li> <Link to ="/about">About</Link></li>
            <li> <Link to ="/dashboard">Dashboard</Link></li>
        </ul>
    </div>
  )
}
