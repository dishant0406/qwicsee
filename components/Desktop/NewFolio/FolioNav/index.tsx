'use client'

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { RocketIcon, EyeOpenIcon, MobileIcon, DesktopIcon } from '@radix-ui/react-icons'
import { useNewFolioModalStore } from '@/lib/Zustand/hooks/ModalStates'
import { useViewState } from '@/lib/Zustand'

type Props = {}

const FolioNav = (props: Props) => {
  const { toggleOpen } = useNewFolioModalStore()
  const { mode, toggleMode } = useViewState()



  return (
    <div className='w-[calc(100vw-8vw)] z-[1] bg-bgray px-[3%] fixed top-0 right-0 flex justify-between items-center h-[80px] border-b border-white/10'>
      <div>
        <p className='text-white/80 font-[600]'>
          Portfolio Website
        </p>
        <p className='text-white/50 text-[14px]'>
          John's Workspace
        </p>
      </div>
      <div className='flex h-full gap-[1rem] items-center'>
        {
          mode.map((item, index) => (
            <button onClick={() => toggleMode(item.name)} key={item.name} className={`flex transition-all duration-300 items-center p-[0.8rem] ${item.active ? 'bg-white/80' : ''
              } rounded-full`}>
              <item.icon className={`h-[2.5vh] transition-all duration-300 w-[2.5vh] ${item.active ? 'text-bgray' : 'text-white/50'
                }`} />
            </button>
          ))
        }
      </div>
      <div className='flex gap-[1rem] items-center'>

        <Button onClick={toggleOpen} className='h-[40px] flex text-bgray bg-white/80 rounded-3xl font-medium'>
          <EyeOpenIcon className='h-[2.5vh] w-[2.5vh] mr-[0.5rem]' />
          Preview
        </Button>
        <Button onClick={toggleOpen} className='h-[40px] flex text-bgray bg-white/80 rounded-3xl font-medium'>
          Publish
          <RocketIcon className='h-[2.5vh] w-[2.5vh] ml-[0.5rem]' />
        </Button>
      </div>
    </div>
  )
}

export default FolioNav