'use client'

import '@/app/ui/global.css'
import clsx from 'clsx'
import Nav from '@/app/ui/layout/nav/nav'
import Footer from '@/app/ui/layout/footer'
import { useSelector } from 'react-redux'
import { selectSearchBar } from '@/redux/features/nav/searchBarSlice'
import { selectMobileNav } from '@/redux/features/nav/mobileNavSlice'
import { selectNavCart } from '@/redux/features/nav/navCartSlice'
import { useAppSelector } from '@/redux/hooks'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isOverlayVisible = useAppSelector(state => state.popup.isOverlayVisible)

  return (
      <body className={clsx(
        (isOverlayVisible) ? 'overflow-hidden' : '',
        'bg-mainColor'
      )}>
        <Nav />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
  );
}
