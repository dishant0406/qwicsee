'use client'

import NewSiteModal from '@/components/Modal/NewSiteModal'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Template = ({ children }: Props) => {
  return (
    <>
      {children}
      <NewSiteModal />
    </>
  )
}

export default Template