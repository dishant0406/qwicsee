'use client'

import { useViewState } from '@/lib/Zustand'
import useParentWidth from '@/lib/hooks/useParentWidth'
import React from 'react'

type Props = {}

const WorkSpace = (props: Props) => {
  const { ref, width } = useParentWidth()
  const { selectedMode } = useViewState()

  const { vw } = width

  return (
    <div className='flex-grow pt-[120px] bg-[#345255] flex flex-col items-center p-[3%] pb-0'>
      <div ref={ref} className={`h-full transition-all duration-300 ${selectedMode === 'Desktop' ? 'w-[80vw]' : 'w-[30vw]'
        }  rounded-xl rounded-b-none bg-white`}>

      </div>
    </div>
  )
}

export default WorkSpace