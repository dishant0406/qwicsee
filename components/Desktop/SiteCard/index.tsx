import Image from 'next/image'
import React from 'react'
import { DotsVerticalIcon } from '@radix-ui/react-icons'

type Props = {
  name: string
}

const SiteCard = ({ name }: Props) => {
  return (
    <div className='flex relative flex-col gap-[0.5rem] w-[10vw]'>
      <button className='flex absolute top-1 right-1 justify-center items-center p-[0.5rem] bg-black/50 rounded-full'>
        <DotsVerticalIcon className='text-white' />
      </button>
      <Image alt='bg' className='object-cover rounded-md overflow-hidden h-[25vh] w-[10vw]' src='/assets/bg/quicksee-bg.png' width={200} height={200} />
      <p className='text-white/50 w-full px-[3%] truncate text-sm'>
        {name}
      </p>
    </div>
  )
}

export default SiteCard