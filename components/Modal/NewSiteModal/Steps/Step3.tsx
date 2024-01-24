'use client'

import { Switch } from '@/components/ui/switch'
import React from 'react'

type Props = {
  formData: any
  setFormData: any
}

const Step3 = ({ formData, setFormData }: Props) => {

  let str = formData.theme === 'light' ? 'bg-white' : 'bg-black'
  let childStr = formData.theme === 'light' ? 'bg-[#dcdcdc]' : 'bg-[#434343]'

  return (
    <div className='w-full flex justify-between'>
      <div className={`flex flex-col transition-all overflow-hidden duration-300 relative p-[2rem] ${str} rounded-md  w-full gap-[0.5rem]`}>
        <div className={`h-[5vh] transition-all duration-300 rounded-lg w-full ${childStr}`}></div>
        <div className={`h-[5vh] transition-all duration-300 rounded-lg w-full ${childStr}`}></div>
        <div className='w-full flex gap-[0.5rem]'>
          <div className={`h-[5vh] transition-all duration-300 rounded-lg w-[50%] ${childStr}`}></div>
          <div className={`h-[5vh] transition-all duration-300 rounded-lg w-[50%] ${childStr}`}></div>
        </div>
        <div className={`h-[15vh] transition-all duration-300 rounded-lg w-full ${childStr}`}></div>
        <div className='absolute backdrop-blur-[2px] top-0 left-0 w-full h-full flex justify-center p-[0.5rem] items-center'>
          <Switch checked={formData.theme === 'dark'} onCheckedChange={e => {
            setFormData({
              ...formData,
              theme: e ? 'dark' : 'light'
            })
          }} />
        </div>
      </div>
    </div>
  )
}

export default Step3