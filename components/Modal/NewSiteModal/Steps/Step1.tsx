import { Input } from '@/components/ui/input'
import { useNewFolioStore } from '@/lib/Zustand'
import React from 'react'


const Step1 = () => {
  const { newFolio, setNewFolio } = useNewFolioStore()

  return (
    <>
      <div className='flex flex-col gap-[0.5rem]'>
        <Input
          className='border border-white/10 h-[3rem]'
          placeholder='Enter QuickFolio name'
          value={newFolio.name}
          onChange={(e) => setNewFolio({
            ...newFolio,
            name: e.target.value,
            folio_name: e.target.value.toLowerCase().replace(/\s/g, '-')
          })}
        />
      </div>
      <div className='flex flex-col gap-[0.5rem]'>
        <Input
          className='border border-white/10 h-[3rem]'
          placeholder='Enter your folio name'
          value={newFolio.folio_name}
          onChange={(e) => setNewFolio({
            ...newFolio,
            folio_name: e.target.value
          })}
        />
      </div>
    </>

  )
}

export default Step1