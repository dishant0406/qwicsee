'use client'

import { useNewFolioStore } from '@/lib/Zustand'
import React from 'react'

const Step2 = () => {
  const { newFolio, setNewFolio } = useNewFolioStore()

  const handleSelect = (type: string) => {
    setNewFolio({
      ...newFolio,
      layout: type as NewFolioType["layout"]
    })
  }

  return (
    <>
      <div className='w-full flex justify-between'>
        <button onClick={() => handleSelect('left')} className='flex gap-[0.5rem]'>
          <div className={`h-[15vh] transition-all duration-300 rounded-lg w-[2vw] ${newFolio.layout === 'left' ? 'bg-white' : 'bg-white/50'
            }`}></div>
          <div className={`h-[15vh] transition-all duration-300 rounded-lg w-[6vw] ${newFolio.layout === 'left' ? 'bg-white' : 'bg-white/50'
            }`}>
          </div>
        </button>
        <button onClick={() => handleSelect('right')} className='flex gap-[0.5rem]'>
          <div className={`h-[15vh] transition-all duration-300 rounded-lg w-[6vw] ${newFolio.layout === 'right' ? 'bg-white' : 'bg-white/50'

            }`}>
          </div>
          <div className={`h-[15vh] transition-all duration-300 rounded-lg w-[2vw] ${newFolio.layout === 'right' ? 'bg-white' : 'bg-white/50'
            }`}></div>
        </button>
        <button onClick={() => handleSelect('top')} className='flex flex-col gap-[0.5rem]'>
          <div className={`h-[5vh] transition-all duration-300 rounded-lg w-[8vw] ${newFolio.layout === 'top' ? 'bg-white' : 'bg-white/50'

            }`}></div>
          <div className={`h-[calc(10vh-0.5rem)] transition-all duration-300 rounded-lg w-[8vw] ${newFolio.layout === 'top' ? 'bg-white' : 'bg-white/50'
            }`}>
          </div>
        </button>
      </div>
    </>
  )
}

export default Step2