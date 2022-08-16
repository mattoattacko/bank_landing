import React from 'react'
import { feedback } from '../constants' //an array with some objects
import styles from '../style'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => (
  <section
    id='clients'
    className={`flex-col relative ${styles.flexCenter} ${styles.paddingY}`}
  >
    {/* Gradient Div */}
    <div />

    {/* contains title and context */}
    <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
      <h1 className={styles.heading2}>
        What people are <br className='sm:block hidden'/> saying about us
      </h1>
      <div className='w-full md:mt-0 mt-6'>
        <p className={`text-left max-w-[450px] ${styles.paragraph}`}>
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>
    </div>

    {/* Feedback Cards */}
    <div className='flex flex-wrap justify-center sm:justify-start w-full feedback-container relative z-[1]'>
      {feedback.map((card) => (
        <FeedbackCard 
          key={card.id}
          {...card}
        />
      ))}
    </div>
  </section>
)


export default Testimonials