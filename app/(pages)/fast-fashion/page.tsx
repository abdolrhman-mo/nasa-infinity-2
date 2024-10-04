import About from '@/app/ui/fast-fashion/about'
import Hero from '@/app/ui/fast-fashion/hero'
import Sdgs from '@/app/ui/fast-fashion/sdgs'
import TakeAction from '@/app/ui/fast-fashion/take-action'
import { rockwell } from '@/app/ui/fonts'
import Nav from '@/app/ui/layout/nav/nav'
import { NextPage } from 'next'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <body className={`${rockwell.className}`}>
      {/* <Nav /> */}
      <Hero />
      <About />
      <Sdgs />
      <TakeAction />
    </body>
  )
}

export default Page