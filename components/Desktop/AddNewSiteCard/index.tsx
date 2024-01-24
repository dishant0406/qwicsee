'use client'

import { useNewFolioModalStore } from '@/lib/Zustand/hooks/ModalStates'
import { PlusIcon } from '@radix-ui/react-icons'
import React from 'react'

type Props = {}

const AddNewSiteCard = (props: Props) => {
  const { toggleOpen } = useNewFolioModalStore()
  return (
    <button onClick={toggleOpen} className='h-[25vh] rounded-md w-[10vw] flex items-center justify-center bg-white/80'>
      <PlusIcon className='text-bgray/50 w-[4vh] h-[4vh]' />
    </button>
  )
}

export default AddNewSiteCard