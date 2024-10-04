import { NextPage } from 'next'
import Heading from '../common/heading'

interface Props {}

const About: NextPage<Props> = ({}) => {
  return (
    <div className='text-center my-16'>
      <Heading level={2} className='my-4 !text-blue-950'>Fast fashion effect on our planet</Heading>
      <p>Discover the power of your choices for a sustainable future</p>
      <p>The fashion industry shapes our world, but it also has a profound impact on our planet.</p>
      <p>Every piece of clothing tells a story, and by choosing sustainable practices, we can write a better chapter for our environment.</p>
      <p>Below we demonstrate how fast fashion intersects with the Sustainable Development Goals (SDGs)</p>
    </div>
  )
}

export default About