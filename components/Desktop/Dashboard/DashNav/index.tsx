'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import { PlusCircledIcon } from '@radix-ui/react-icons'
import { useNewFolioModalStore } from '@/lib/Zustand/hooks/ModalStates'

type Props = {}

const DashNav = (props: Props) => {
  const { toggleOpen } = useNewFolioModalStore()
  return (
    <div className='w-full px-[3%] flex justify-between items-center h-[80px] border-b border-white/10'>
      <p className='text-white/80 text-xl'>
        Welcome, <span className='text-white font-[600]'>John</span>
      </p>
      <Button onClick={toggleOpen} className='h-[40px] flex text-bgray bg-white/80 rounded-3xl font-medium'>
        <PlusCircledIcon className='h-[2.5vh] w-[2.5vh] mr-[0.5rem]' />
        New QuickFolio
      </Button>
    </div>
  )
}

export default DashNav