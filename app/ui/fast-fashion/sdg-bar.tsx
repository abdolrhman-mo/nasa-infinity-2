import { NextPage } from 'next'
import Image from 'next/image'

const sdgs = [
  {
    number: 12,
    name: 'responsible consumption and production',
    img: '/imgs/fast-fashion/sdg12.png'
  },
  {
    number: 13,
    name: 'climate action',
    img: '/imgs/fast-fashion/bar2.png'
  },
  {
    number: 6,
    name: 'clean water and sanitation',
    img: '/imgs/fast-fashion/bar3.png'
  },
]

interface Props {
  sdgImgUrl: string
}

const SdgBar: NextPage<Props> = ({
  sdgImgUrl,
}) => {
  return (
    <Image 
      src={sdgImgUrl}
      alt='statistic'
      width={500}
      height={500}
      className='w-full'
    />
  )
}

export default SdgBar