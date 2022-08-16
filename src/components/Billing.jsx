import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => (
    <section id='product' className={layout.sectionReverse}>
    {/* sectionReverse just styles our img/text with 'flex-col-reverse' for mobile devices. This allows the text to be on top of the images in mobile. */}
      <div className={layout.sectionImgReverse}>
        <img 
          src={bill}
          alt='billing'
          className='w=[100%] h=[100%] relative z-[5]'
        />

        {/* These <divs> are for the background gradient appearing off to the left of our images */}
        <div className='w-[50%] h-[50%] absolute z-[3] -left-1/2 top-0 rounded-full white__gradient '/>
        <div className='w-[50%] h-[50%] absolute z-[0] -left-1/2 bottom-0 rounded-full pink__gradient '/>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className='sm:block hidden' /> billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market, which is right for you? Let us help you find the right card!
        </p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img 
            src={apple}
            alt='apple store'
            className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
          />   
          <img 
            src={google}
            alt='google store'
            className='w-[128px] h-[42px] object-contain cursor-pointer'
          />
        </div>
      </div>
    </section>
)


export default Billing