import { NextPage } from 'next'
import Heading from '../common/heading'
import Image from 'next/image'

const teamMembers = [
  { name: 'Mohamed', img: '/imgs/members/mohamed.jpeg', id: 1 },
  { name: 'Raghad', img: '/imgs/members/raghad.jpeg', id: 2 },
  { name: 'David', img: '/imgs/members/david.jpeg', id: 3 },
  { name: 'Omar', img: '/imgs/members/omar.jpeg', id: 4 },
  { name: 'Makady', img: '/imgs/members/makady.jpeg', id: 5 },
]

const TeamSection: NextPage = ({}) => {
  return (
    <div
      className='w-5/6 mx-auto mt-32 mb-44'
    >
      <Heading 
        level={2}
        className='mx-auto w-fit'
      >
        Made by infinity team
      </Heading>
      <div
        className=''
      >
        <div
          className='overflow-hidden grid grid-cols-2 md:grid-cols-5 gap-4'
        >
          {teamMembers.map(member => 
            <div className='space-y-4' key={member.id}>
              <div className='overflow-hidden relative min-h-80 w-full rounded-3xl'>
                <Image
                  src={member.img}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className=''
                />
              </div>
              <p
                className='w-fit mx-auto'
              >
                {member.name}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TeamSection