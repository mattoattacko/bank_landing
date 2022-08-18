import React, { useState } from 'react'

import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(false) //mobile menu toggle

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <a href='/'>
      <img 
        src={logo} 
        alt='hoobank' 
        className='w-[124px] h-[32px] hover:opacity-80'         
      />
      </a>

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
              text-white
              hover:text-secondary
              ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10' }
            `}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Nav Menu */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        {/* img close/open menu. If the toggle is on, show closed menu. Else show the menu icon */}
        <img 
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          // onClick={() => setToggle(!toggle)} In React, we shouldn't update state using previous version of the same state. Better to create a callback function. This ensures state will be up to date.
          onClick={() => setToggle((prev) => !prev)}
        />

        {/* the actual menu */}
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li 
                key={nav.id}
                // if our navLink is the last one, dont add any right margin
                className={`
                  font-poppins
                  font-normal
                  cursor-pointer
                  text-[16px]
                  ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4' }
                  text-white
                `}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar