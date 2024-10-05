import { NextPage } from 'next'
import CustomLink from '../common/custom-link'

interface Props {}

const TakeAction: NextPage<Props> = ({}) => {
  return (
    <div 
      style={{ background: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 47%, rgba(23,97,115,1) 100%)' }} 
      className='py-14'
    >
      <div className="bg-white rounded-3xl w-5/6 md:w-1/2 mx-auto p-10 text-center">
        Got clothes you no longer wear?
        Why not sell them
        and give them a new life with someone else
        Plus, you get to make a little extra money
        while keeping your clothes out of the trash.
        Win-win!
        <br />
        <br />
        <br />
        <CustomLink href='/fast-fashion/store' className='!w-fit mx-auto bg-blue-950'>
          Take Action!
        </CustomLink>
      </div>
    </div>
  )
}

export default TakeAction