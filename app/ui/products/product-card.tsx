'use client'

import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { motion, useInView } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { toggleSearchBar } from '@/redux/features/nav/searchBarSlice'
import { ROUTES } from '@/app/lib/constants/routes'
import { useRef } from 'react'

export default function Product({
  product,
  className,
  navSearch,
}: {
  product: any
  className?: string
  navSearch?: boolean
}) {
    // const searchBar = useSelector(selectSearchBar)
    const dispatch = useDispatch()
    let handleClick = () => {
        if (navSearch) {
            dispatch(toggleSearchBar())
        }
    }
    
    // ANIMATIONS

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const productVariants = {
      hidden: {
        opacity: 0, 
        y: 50
      },
      show: {
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.5
        }
      },
    }

    const imageVariants = {
      normal: {
        height: '350px',
      },
      hovered: {
        height: '400px',
      }
    }

    return (
        <motion.div
          ref={ref}
          variants={productVariants}
          initial={'hidden'}
          animate={isInView ? 'show' : 'hidden'}
          whileHover='hovered'
          className={`flex justify-center ${className}`}
        >
          <Link
            className='group flex flex-col justify-center' 
            href={ROUTES.PRODUCT_DETAILS(product.id)}
            key={product.id}
            onClick={handleClick}
          >
            <motion.div
              initial={false}
              // initial={'normal'}
              className={clsx(
                'w-[250px] h-[300px] md:w-[300px] md:h-[350px] overflow-hidden',
                // 'flex items-center',
              )}
            >
              {/* Another div to put variants in it */}
              <motion.div
                className='h-full w-full'
                variants={imageVariants}
              >
                <Image
                  src={product.image} 
                  alt={product.name}
                  width={500}
                  height={500}
                  className={clsx(
                    'w-full h-full',
                    'object-cover',
                  )}
                /> 
              </motion.div>
            </motion.div>
            <br />
            <div className='row-span-5 sm:row-span-2 text-center'>
                <h4
                  className='uppercase text-md tracking-widest row-span-2'
                >
                  {product.name}
                </h4>
                <p
                  className='text-slate-600 text-sm row-span-1'
                >
                  <span
                    className='text-red-400 line-through'
                  >
                    750.00 EGP
                  </span>
                  <span
                    className='pl-2'
                  >
                    {product.price} EGP
                  </span>
                </p>
            </div>
          </Link>
        </motion.div>
    )
}