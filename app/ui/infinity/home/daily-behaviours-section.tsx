'use client'

import { NextPage } from 'next'
import Heading from '../common/heading'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'

const behaviours = [
  { title: 'fast fashion', img: '/imgs/behaviours/fast-fashion.jpeg', link: '/fast-fashion' },
  { title: 'plastic bottles', img: '/imgs/behaviours/plastic.jpeg', link: '/#' },
  { title: 'water consumption', img: '/imgs/behaviours/water.jpeg', link: '/#' },
]

const DailyBehavioursSection: NextPage = ({}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const prevIndex = (activeIndex - 1 + behaviours.length) % behaviours.length
  const nextIndex = (activeIndex + 1) % behaviours.length

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + behaviours.length) % behaviours.length)
  }

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % behaviours.length)
  }

  return (
    <div
      className={`bg-[url('/imgs/behaviours-bg.jpeg')] bg-cover`}
    >
      <div
        className='w-5/6 mx-auto py-20'
      >
        <Heading level={2} className='mx-auto w-fit !my-0 pb-12 text-center'>
          Daily Behaviours that affect our environment
        </Heading>

        <div className='carousel-container flex items-center justify-center'>
          <button onClick={handlePrev} className='prev-button mr-4'>
            <ChevronLeftIcon className='h-6' />
          </button>

          <div className='carousel flex items-center justify-center'>
            {/* Previous Image */}
            <motion.div
              className='image-container opacity-50 w-32 mx-2 hidden md:flex justify-center cursor-pointer'
              key={prevIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={handlePrev}
            >
              <div className='h-40 w-24 md:h-56 md:w-32 overflow-hidden relative'>
                <Image 
                  src={behaviours[prevIndex].img} 
                  alt="Previous" 
                  layout="fill"
                  objectFit="cover"
                  className='absolute inset-0 rounded-2xl'  
                />
              </div>
            </motion.div>

            {/* Active Image */}
            <Link
              href={behaviours[activeIndex].link}
            >
              <motion.div
                className='image-container overflow-hidden mx-2'
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <div className='h-56 w-32 md:h-80 md:w-44 overflow-hidden relative rounded-2xl shadow-xl'>
                  <Image 
                    src={behaviours[activeIndex].img} 
                    alt="Active" 
                    layout="fill"
                    objectFit="cover"
                    className='absolute inset-0'
                  />
                </div>
                <p
                  className='pt-4 text-center capitalize'
                >
                  {behaviours[activeIndex].title}
                </p>
              </motion.div>
            </Link>

            {/* Next Image */}
            <motion.div
              className='image-container opacity-50 w-32 mx-2 hidden md:flex justify-center cursor-pointer'
              key={nextIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={handleNext}
            >
              <div className='h-40 w-24 md:h-56 md:w-32 overflow-hidden relative'>
                <Image 
                  src={behaviours[nextIndex].img} 
                  alt="Next" 
                  layout="fill"
                  objectFit="cover"
                  className='absolute inset-0 rounded-2xl'
                />
              </div>
            </motion.div>
          </div>

          <button onClick={handleNext} className='next-button ml-4'>
            <ChevronRightIcon className='h-6' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default DailyBehavioursSection
