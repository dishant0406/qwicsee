'use client'

import { useFieldSelectorModalStore } from '@/lib/Zustand/hooks/ModalStates'
import React from 'react'
import { PlusCircledIcon, ChevronLeftIcon } from '@radix-ui/react-icons'
import useClickAway from '@/lib/hooks/useClickAway'

type Props = {}

const FieldSelecter = (props: Props) => {
  const { open, toggleOpen } = useFieldSelectorModalStore()
  const [items, setItems] = React.useState([
    'Space',
    'Heading 1',
    'Heading 2',
    'Horizontal Rule',
  ]);
  return (
    <div
      className={`h-[calc(100vh-80px)] z-[1] ${!open ? 'left-[-38vw]' : 'left-[8vw]'
        } transition-all duration-500
      border border-t-0 border-white/10 fixed bottom-0 px-[2%]  flex flex-col  items-center py-[3vh] w-[30vw] bg-bgray`}>
      <button className='flex h-[7vh] rounded-xl w-full items-center px-[4%] justify-between bg-white/80'>
        <p className='text-bgray font-medium '>Add Component</p>
        <PlusCircledIcon className='h-[3vh] w-[3vh] text-bgray' />
      </button>
      <div className='w-full mt-[3vh]'>
        <div className='w-full flex justify-start gap-[0.5rem] items-center'>
          <button onClick={toggleOpen}>
            <ChevronLeftIcon className='h-[3vh] w-[3vh] text-white/80' />
          </button>
          <p className='text-white font-[600] '>Components</p>
        </div>
        <div className='w-full mt-[2vh]'>

        </div>

      </div>
    </div>
  )
}

export default FieldSelecter