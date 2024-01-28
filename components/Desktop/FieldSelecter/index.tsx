'use client'

import { useFieldSelectorModalStore } from '@/lib/Zustand/hooks/ModalStates'
import React, { useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import useClickAway from '@/lib/hooks/useClickAway'

type Props = {}

const FieldSelecter = (props: Props) => {
  const { open, toggleOpen } = useFieldSelectorModalStore()
  const [newComponentOpen, setNewComponentOpen] = useState(false)
  const [items, setItems] = useState([
    'Space',
    'Heading 1',
    'Heading 2',
    'Horizontal Rule',
  ]);

  useEffect(() => {
    if (!open) {
      setNewComponentOpen(false)
    }
  }
    , [open])

  return (
    <>
      <div
        className={`h-[calc(100vh-80px)] z-[1] ${!open ? 'left-[-38vw]' : 'left-[8vw]'
          } transition-all duration-500
        border border-t-0 border-white/10 fixed bottom-0 px-[1%]  flex flex-col  items-center py-[3vh] w-[30vw] bg-bgray`}>
        <div className='w-full  relative h-full flex flex-col items-center'>

          <div className='w-full mt-[1vh]'>
            <div className='w-full flex justify-start gap-[0.5rem] items-center'>
              <button onClick={toggleOpen}>
                <ChevronLeftIcon className='h-[3vh] w-[3vh] text-white/80' />
              </button>
              <p className='text-white font-[600] '>Components</p>
            </div>
            <div className='w-full mt-[2vh]'>

            </div>

          </div>

          <div className={`w-full transition-all duration-300 h-[calc(100%-3vh)] ${newComponentOpen ? 'bottom-[-5%]' : 'bottom-[-89%]'} flex flex-col bg-bgray px-[2%] py-[2%] items-center rounded-b-none border-b-0 rounded-2xl absolute left-0 border border-white/50`}>
            <button onClick={() => setNewComponentOpen(e => !e)} className='flex h-[7vh] rounded-xl w-full items-center px-[4%] justify-between bg-white/80'>
              <p className='text-bgray font-medium '>Add Component</p>
              <ChevronUpIcon className={`${newComponentOpen ? 'transform rotate-180' : ''
                } h-[3vh] w-[3vh] transition-all duration-300 text-bgray`} />
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default FieldSelecter