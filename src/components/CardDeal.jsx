import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className='sm:block hidden' /> in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Financial freedom is a right for everyone. But how do you find the right card? Who knows! We can try help you though.
      </p>

      <Button styles='mt-10'/>
    </div>
  </section>
)


export default CardDeal