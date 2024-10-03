import { NextPage } from 'next'
import Heading from '../common/heading'

const IntroSection: NextPage = ({}) => {
  return (
    <div
      className={`min-h-[70vh] bg-cover bg-[url('/imgs/intro-bg.jpeg')]`}
    >
      <div className="w-5/6 mx-auto grid grid-cols-2 h-[70vh]">
        <div className="flex items-center h-full">
          <Heading level={2} className='!m-0'>Infinit of simple actions could affect ourplanet</Heading>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default IntroSection