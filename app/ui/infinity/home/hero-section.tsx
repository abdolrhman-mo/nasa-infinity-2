import { NextPage } from 'next'
import Image from 'next/image'

const HeroSection: NextPage = ({}) => {
  return (
    <Image 
      src={'/imgs/hero.jpeg'}
      alt='hero'
      width={2000}
      height={2000}
    />
  )
}

export default HeroSection