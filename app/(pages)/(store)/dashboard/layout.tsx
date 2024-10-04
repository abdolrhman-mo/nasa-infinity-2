'use client'

import '@/app/ui/global.css'
import { poppins } from '@/app/ui/fonts'
import Nav from '@/app/ui/dashboard/nav'
import SideBar from '@/app/ui/dashboard/sidebar'
import OverLay from '@/app/ui/layout/nav/overlay'
import clsx from 'clsx'
import { useAppSelector } from '@/redux/hooks'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const isOverlayVisible = useAppSelector(state => state.popup.isOverlayVisible)

  return (
    <body className={clsx(
      'antialiased',
      {
        'overflow-hidden': isOverlayVisible
      }
    ) + ` ${poppins.className}`}>
      <OverLay />
      <Nav />
      <div className="grid grid-cols-1 md:grid-cols-6 pt-14 bg-slate-50 min-h-screen">
        <SideBar />
        <div className='col-span-5 w-5/6 mx-auto py-8'>
          {children}
        </div>
      </div>
    </body>
  )
}
