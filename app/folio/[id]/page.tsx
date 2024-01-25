import FolioNav from '@/components/Desktop/NewFolio/FolioNav'
import SideBar from '@/components/Desktop/SideBar'
import WorkSpace from '@/components/Desktop/WorkSpace'
import React from 'react'

type Props = {}

const SingleFolio = (props: Props) => {
  return (
    <div className='flex relative min-h-[100vh] w-full pl-[8vw] justify-between'>
      <SideBar />
      <div className='flex flex-col relative min-h-[100vh] w-full'>
        <FolioNav />
        <WorkSpace />
      </div>
    </div>
  )
}

export default SingleFolio