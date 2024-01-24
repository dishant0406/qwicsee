import { Input } from '@/components/ui/input'
import React from 'react'

type Props = {
  formData: any
  setFormData: any
}

const Step1 = ({ formData, setFormData }: Props) => {
  return (
    <>
      <div className='flex flex-col gap-[0.5rem]'>
        <Input
          className='border border-white/10 h-[3rem]'
          placeholder='Enter QuickFolio name'
          value={formData.name}
          onChange={(e) => setFormData({
            ...formData,
            name: e.target.value,
            folio_name: e.target.value.toLowerCase().replace(/ /g, '-')
          })}
        />
      </div>
      <div className='flex flex-col gap-[0.5rem]'>
        <Input
          className='border border-white/10 h-[3rem]'
          placeholder='Enter your folio name'
          value={formData.folio_name}
          onChange={(e) => setFormData({ ...formData, folio_name: e.target.value })}
        />
      </div>
    </>

  )
}

export default Step1