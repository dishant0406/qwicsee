'use client'

import { useNewFolioStore, useViewState } from '@/lib/Zustand'
import useParentWidth from '@/lib/hooks/useParentWidth'
import React from 'react'

type Props = {}

const WorkSpace = (props: Props) => {
  const { ref, width } = useParentWidth()
  const { selectedMode } = useViewState()
  const { newFolio } = useNewFolioStore()

  const { vw } = width

  return (
    <div className='flex-grow pt-[120px] bg-[#345255] flex flex-col items-center p-[3%] pb-0'>
      <div ref={ref} className={`h-full overflow-hidden transition-all duration-300 ${selectedMode === 'Desktop' ? 'w-[80vw]' : 'w-[30vw]'
        }  rounded-xl rounded-b-none bg-white`}>
        {newFolio.layout === 'left' && <div className='h-full w-full flex'>
          <div className='w-[20%] h-full border-r border-bdgray'>

          </div>
          <div className='w-[80%] h-full bg-white'></div>
        </div>}
        {newFolio.layout === 'right' && <div className='h-full w-full flex'>
          <div className='w-[80%] h-full bg-white'></div>
          <div className='w-[20%] h-full border-l border-bdgray'>
          </div>
        </div>}
        {
          newFolio.layout === 'top' && <div className='h-full w-full flex-col flex'>
            <div className='w-full h-[40vh] border-b border-bdgray'></div>
            <div className='w-full h-full '></div>
          </div>
        }
      </div>
    </div>
  )
}

export default WorkSpace