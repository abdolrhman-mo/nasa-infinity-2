import clsx from 'clsx'
import { NextPage } from 'next'
import React from 'react'

interface Props {
  className?: string
  children: React.ReactNode
}

const FloatingContainer: NextPage<Props> = ({ children, className }) => {
  return (
    <div className={clsx(
      "bg-white p-12 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl z-50"
      ) + ` ${className}`}
    >
      {children}
    </div>
  )
}

export default FloatingContainer