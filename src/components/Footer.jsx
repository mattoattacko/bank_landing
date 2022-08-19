import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia, homeNav } from '../constants'

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>

      {/* logo container */}
      <div className='flex-1 flex flex-col justify-start mr-10'>
        {homeNav.map((nav, index) => (
          <a href={`#${nav.id}`}>
              {nav.title}
          <img 
          src={logo} 
          alt='hoobank'
          key={nav.id} 
          className='w-[266px] h-[72px] object-contain' 
          />
          </a>
          
        ))}
       
      
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to make payments <br /> easy, reliable, and secure.
        </p>
      </div>

      {/* footer links container */}
      <div className='flex-[1.5] flex flex-row flex-wrap w-full justify-between md:mt-0 mt-10'>
        {footerLinks.map((footerLink) => (
          <div 
            key={footerLink.key} 
            className='flex flex-col ss:my-0 my-4 min-w-[150px]'
          >
            <h4 className='font-poppins font-medium text-[18px] leading-[18px] text-white'>
              {footerLink.title}
            </h4>
            <ul className='list-none mt-4'>
              {footerLink.links.map((link,index) => (
                <li 
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}  `}
                  // 'index !==' stuff above is to add a property to the last link in the list. if you don't do this, the last link will have a bottom margin of 0, and we don't want that.
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* social media container */}
    <div className='flex w-full justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
      <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white '>
      Copyright © 2022 Hoobank. All Rights Reserved.
      </p>

      {/* icons */}
      <div className='flex flex-row md:mt-0 mt-6 '>
        {socialMedia.map((social, index) => (
          <img 
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer hover:opacity-60 ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
          />
        ))}
      </div>
    </div>
  </section>
)


export default Footer