import { NextPage } from 'next'
import SdgSection from './sdg-section'
import Heading from '../common/heading'
import Image from 'next/image'
import YoutubeEmbed from '../common/youtube-embed'

interface Props {}

const Sdgs: NextPage<Props> = ({}) => {
  return (
    <div>
      <SdgSection  
        sdgImgUrl='/imgs/fast-fashion/a1.png'
        bgGradient='radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 47%, rgba(75,53,16,1) 100%)'
        // bgGradient='red'
        heading='Goal: Combat climate change.'
        className=''
      >
        <div className='grid grid-cols-2'>
          <div className='text-center h-full flex items-center justify-center'>
            <div>
              The global fashion industry is responsible for 
              <p
                className='text-9xl'
                >
                10%
              </p>
              of annual carbon emissions
            </div>
          </div>

          <div className='flex justify-center items-center'>
            {/* <Image
              src={''}
              alt='sdg no. 12'
            /> */}
            <YoutubeEmbed videoId='H2bxO-PgcT0' />
          </div>
        </div>
      </SdgSection>
      <SdgSection  
        sdgImgUrl='/imgs/fast-fashion/a2.png'
        bgGradient='radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 47%, rgba(56,108,60,1) 100%)'
        // bgGradient='red'
        heading='Ensuring sustainable consumption and production patterns.'
        className=''
      >
        <div className='grid grid-cols-2'>
          <div className='flex justify-center'>
            <Image
              src={'/imgs/fast-fashion/sdg13.png'}
              alt='sdg no. 13'
              width={500}
              height={500}
              className='h-60 w-auto'
            />
          </div>

          <div className='text-center flex items-center justify-center'>
            <div>
              Matrials used to make cloth
              <p
                className='text-9xl'
                >
                87%
              </p>
              of them endup in landfill
            </div>
          </div>
        </div>
      </SdgSection>
      <SdgSection  
        sdgImgUrl='/imgs/fast-fashion/a3.png'
        bgGradient='radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 47%, rgba(23,97,115,1) 100%)'
        // bgGradient='red'
        className=''
      >
        <Image 
          src={'/imgs/fast-fashion/info.png'}
          alt='info'
          width={500}
          height={500}
          className='rounded-3xl mx-auto'
        />
      </SdgSection>
    </div>
  )
}

export default Sdgs