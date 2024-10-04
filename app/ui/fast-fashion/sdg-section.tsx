import { NextPage } from 'next'
import Image from 'next/image'
import SdgBar from './sdg-bar'
import Heading from '../common/heading'

interface Props {
  sdgImgUrl: string
  bgGradient: string
  heading?: string
  className: string
  children: React.ReactNode
}

const SdgSection: NextPage<Props> = ({
  sdgImgUrl,
  bgGradient,
  heading,
  className,
  children,
}) => {
  return (
    <div className=''>
      <SdgBar sdgImgUrl={sdgImgUrl} />
      <div
        style={{ background: bgGradient }}
        className={'text-white py-16 ' + className }
      >
        {heading ?
          <Heading 
            level={3}
            className='text-white w-fit mx-auto mb-14'
          >
            {heading}
          </Heading> :
          ''
        }
        {children}
      </div>
    </div>
  )
}

export default SdgSection