import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>

      {/* logo container */}
      <div className='flex-1 flex flex-col justify-start mr-10'>
        <img 
          src={logo} 
          alt='hoobank' 
          className='w-[266px] h-[72px] object-contain' 
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to make the payments <br /> easy, reliable and secure.
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
            <ul>
              {footerLink.links.map((link,index) => (
                <li key={link.name}>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)


export default Footer