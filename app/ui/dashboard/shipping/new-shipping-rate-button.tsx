'use client'

import Button from '../../common/button'
import { NextPage } from 'next'
import { PlusIcon } from '@heroicons/react/24/outline'
import { useAppDispatch } from '@/redux/store'
import { setActivePopup } from '@/redux/features/popup/popupSlice'

interface Props {}

const NewShippingRateButton: NextPage<Props> = ({}) => {
  const dispatch = useAppDispatch()
  
  const handleClick = () => {
    dispatch(setActivePopup({ activePopup: 'shippingRateForm' }))
  }

  return (
    <Button onClick={handleClick} theme='light' className='flex justify-between py-3 rounded-xl h-fit'>
      <span>Add Shipping Rate</span>
      <PlusIcon className='h-6 inline-block' />
    </Button>
  )
}

export default NewShippingRateButton