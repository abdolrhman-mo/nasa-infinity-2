import { NextPage } from 'next'
import Heading from '../common/heading'
import Button from '../common/button'
import CustomLink from '../common/custom-link'

interface Props {}

const Hero: NextPage<Props> = ({}) => {
  return (
    <div className={`text-center bg-[url('/imgs/fast-fashion/hero.jpeg')] text-white min-h-[90vh] flex items-center`}>
      <div className='w-full'>
        <p>2nd Most Polluting industry</p>
        <Heading level={1} className='my-2 mb-6 text-white'>Fast fashion</Heading>
        <div className='flex space-x-4 w-5/6 md:w-1/2 mx-auto'>
          {/* <CustomLink href='#about' className='rounded-3xl bg-white !text-blue-950'>know more</CustomLink> */}
          <CustomLink href='/' className='rounded-3xl bg-blue-950 text-white !w-fit mx-auto'>take action</CustomLink>
        </div>
      </div>
    </div>
  )
}

export default Hero