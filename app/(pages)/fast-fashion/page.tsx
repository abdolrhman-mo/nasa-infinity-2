import { NextPage } from 'next'
import Link from 'next/link'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <body>
      <p>fast fashion</p>
      <Link href={'/fast-fashion/store'}>View our store</Link>
    </body>
  )
}

export default Page