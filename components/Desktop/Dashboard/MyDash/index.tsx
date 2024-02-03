'use client'

import React from 'react'
import SiteCard from '../../SiteCard'
import { Button } from '@/components/ui/button'
import { useNewFolioModalStore } from '@/lib/Zustand/hooks/ModalStates'

type Props = {}

const MyDash = (props: Props) => {
  const { toggleOpen } = useNewFolioModalStore()
  const sites = [
    {
      name: 'Johns Portfolio',
      lastEditedDate: new Date(2024, 1, 15)
    },
    {
      name: 'My Portfolio',
      lastEditedDate: new Date()
    },
    {
      name: 'Resume Website',
      lastEditedDate: new Date(2023, 8, 28)
    }
  ]
  return (
    <div className='flex-grow flex-wrap pt-[100px] flex-col flex p-[3%]'>
      <div className='w-full flex flex-col items-center mt-[2vh] justify-center'>
        <p className='text-white font-[600] text-[3vw]'>
          Welcome to your dashboard
        </p>
        <p className='text-white/60 text-[1.2vw] text-center'>
          Track user activity, website performance, and start new projects
        </p>
        <div className='flex  gap-[1rem] mt-[4vh]'>
          <Button onClick={toggleOpen} size={'lg'} className='bg-black  hover:bg-black hover:text-white text-white rounded-xl px-[3rem] h-[50px]'>
            Create New QwicFolios
          </Button>
          <Button size={'lg'} className='bg-[#303030]  hover:bg-[#303030]/50 text-white rounded-xl px-[3rem] h-[50px]'>
            View Analytics
          </Button>
        </div>
      </div>
      <div className='w-full mt-[15vh]'>
        <p className='text-white mb-[4vh] text-[1.5vw]'>
          Your QwicFolios
        </p>
        <div className='flex flex-wrap gap-[2rem]'>
          {
            sites.map((site, index) => (
              <SiteCard key={index} name={site.name} lastEditied={site.lastEditedDate} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default MyDash