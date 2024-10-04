'use client'

import '@/app/ui/global.css'
import clsx from 'clsx'
import Nav from '@/app/ui/layout/nav/nav'
import Footer from '@/app/ui/layout/footer'
import { useAppSelector } from '@/redux/hooks'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isOverlayVisible = useAppSelector(state => state.popup.isOverlayVisible)

  return (
      <body 
        className={clsx(
          (isOverlayVisible) ? 'overflow-hidden' : '',
          'bg-mainColor'
        )}
        style={{ background: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 53%, rgba(89,4,4,1) 100%)' }}
      >
        <Nav />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
  );
}
