import { StarIcon } from '@heroicons/react/20/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import { NextPage } from 'next'

interface Props {}

const StarsRating: NextPage<Props> = ({}) => {
  return (
    <div className='flex w-fit mx-auto bg-white py-1 px-2 rounded-3xl -mt-9 mb-1'>
      <StarIcon className='text-yellow-300 h-8' />
      <StarIcon className='text-yellow-300 h-8' />
      <StarIcon className='text-yellow-300 h-8' />
      <StarIcon className='text-yellow-300 h-8' />
      <StarIconOutline className='text-yellow-300 h-8' />
    </div>
  )
}

export default StarsRating