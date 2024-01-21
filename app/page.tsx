import DashNav from '@/components/Desktop/Dashboard/DashNav'
import SideBar from '@/components/Desktop/SideBar'
import { DotsVerticalIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex relative min-h-[100vh] w-full pl-[8vw] justify-between'>
      <SideBar />
      <div className='flex flex-col min-h-[100vh] w-full'>
        <DashNav />
        <div className='flex-grow flex p-[3%]'>
          <div className='flex flex-col gap-[0.5rem] w-[10vw]'>
            <Image alt='bg' className='object-cover h-[25vh] w-[10vw]' src='/assets/bg/quicksee-bg.png' width={200} height={200} />
            <p className='text-white/50 w-full px-[3%] truncate text-sm'>
              My Portfolio
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
