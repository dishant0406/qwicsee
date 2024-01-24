'use client'

import React from 'react'

type Props = {
  formData: any
  setFormData: any
}

const Step2 = ({ formData, setFormData }: Props) => {
  const handleSelect = (type: string) => {
    setFormData({
      ...formData,
      layout: type
    })
  }

  return (
    <>
      <div className='w-full flex justify-between'>
        <button onClick={() => handleSelect('left')} className='flex gap-[0.5rem]'>
          <div className={`h-[15vh] transition-all duration-300 rounded-lg w-[2vw] ${formData.layout === 'left' ? 'bg-white' : 'bg-white/50'
            }`}></div>
          <div className={`h-[15vh] transition-all duration-300 rounded-lg w-[6vw] ${formData.layout === 'left' ? 'bg-white' : 'bg-white/50'
            }`}>
          </div>
        </button>
        <button onClick={() => handleSelect('right')} className='flex gap-[0.5rem]'>
          <div className={`h-[15vh] transition-all duration-300 rounded-lg w-[6vw] ${formData.layout === 'right' ? 'bg-white' : 'bg-white/50'

            }`}>
          </div>
          <div className={`h-[15vh] transition-all duration-300 rounded-lg w-[2vw] ${formData.layout === 'right' ? 'bg-white' : 'bg-white/50'
            }`}></div>
        </button>
        <button onClick={() => handleSelect('top')} className='flex flex-col gap-[0.5rem]'>
          <div className={`h-[5vh] transition-all duration-300 rounded-lg w-[8vw] ${formData.layout === 'top' ? 'bg-white' : 'bg-white/50'

            }`}></div>
          <div className={`h-[calc(10vh-0.5rem)] transition-all duration-300 rounded-lg w-[8vw] ${formData.layout === 'top' ? 'bg-white' : 'bg-white/50'
            }`}>
          </div>
        </button>
      </div>
    </>
  )
}

export default Step2