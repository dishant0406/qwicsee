'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import { GearIcon } from '@radix-ui/react-icons'
import { useNewFolioModalStore } from '@/lib/Zustand/hooks/ModalStates'
import Image from 'next/image'

type Props = {}

const DashNav = (props: Props) => {
  const options = [
    'Dashboard',
    'Analytics',
    'Activity',
    'Support',
  ]
  return (
    <div className='w-full bg-bdgray z-[3] fixed top-0 right-0 px-[2%] flex justify-between items-center h-[80px] border-b border-white/80'>

      <Image src={'/assets/logo/logo-dark-trans.png'}
        className='h-[7vh] w-[7vh]'
        alt='logo' width={100} height={100} />

      <div className='flex gap-[2rem] h-full items-center'>
        {
          options.map((option, index) => (
            <p key={index} className='text-white/80 '>
              {option}
            </p>
          ))
        }
        <div className='flex gap-[0.5rem] h-full items-center'>
          <Button size={'lg'} className='bg-black hover:bg-black hover:text-white text-white rounded-xl px-[1.8rem] h-[45px]'>
            Profile
          </Button>
          <Button size={'lg'} className='bg-[#303030] hover:bg-[#303030]/50 text-white rounded-xl px-[1.8rem] h-[45px]'>
            Notifications
          </Button>
          <Button size={'lg'} className='bg-[#303030] hover:bg-[#303030]/50 text-white rounded-xl px-[1rem] h-[45px]'>
            <GearIcon className='h-[2.5vh] w-[2.5vh]' />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DashNav