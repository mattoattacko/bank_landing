import React, { useState } from 'react'

import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(false) //mobile menu toggle

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img 
        src={logo} 
        alt='hoobank' 
        className='w-[124px] h-[32px]'         
      />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li 
            key={nav.id}
            // if our navLink is the last one, dont add any right margin
            className={`
              font-poppins
              font-normal
              cursor-pointer
              text-[16px]
              ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10' }
              text-white
            `}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Nav Menu */}
      <div className=''>
        {/* img close/open menu. If the toggle is on, show closed menu. Else show the menu icon */}
        <img 
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          // onClick={() => setToggle(!toggle)} In React, we shouldn't update state using previous version of the same state. Better to create a callback function
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
    </nav>
  )
}

export default Navbar