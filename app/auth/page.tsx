import Image from 'next/image'
import React from 'react'
import EmailInput from '@/components/Micro/EmailInput'
import { Button } from '@/components/ui/button'
import GoogleIcon from '@/components/Micro/SVG/Google'
import GithubIcon from '@/components/Micro/SVG/Github'

type Props = {}

const Auth = (props: Props) => {
  return (
    <div className='min-h-[100vh] w-full flex bg-bgray'>
      <div className='w-1/2 min-h-[100vh] bg-bgray flex flex-col px-[5%] py-[3%]'>
        <div className='w-full flex justify-center'>
          <Image alt='logo' src='/assets/logo/logo-dark-trans.png' className='h-[15vh] w-[15vh]' width={200} height={200} />
        </div>
        <div className='flex-grow flex flex-col items-center justify-center'>
          <p className='text-3xl font-[600] text-white'>Welcome to QwicSee</p>
          <p className='text-md font-medium text-white/50'>Welcome back, please login to continue.</p>
          <div className='w-fit px-[5%] mt-[5%]'>
            <EmailInput />
            <Button className='mt-[1rem] w-full rounded-2xl h-[9vh] font-medium'>Login</Button>
          </div>
          <div className='flex w-full justify-center items-center mt-[3vh]'>
            <hr className='w-[25%] border-white/50' />
            <p className='text-white/50 mx-[1rem]'>or Continue with</p>
            <hr className='w-[25%] border-white/50' />
          </div>
          <div className='flex w-full justify-center gap-[1rem] items-center mt-[2vh]'>
            <button className='p-[0.8rem] rounded-full border border-white/50'>
              <GoogleIcon className='h-[4vh] w-[4vh]' />
            </button>
            <button className='p-[0.8rem] flex items-center justify-center rounded-full border border-white/50'>
              <GithubIcon fill='#fff' className='h-[4vh]  w-[4vh]' />
            </button>
          </div>
        </div>
      </div>
      <Image alt='bg' className='min-h-[100vh] w-1/2 object-cover' src='/assets/bg/quicksee-bg.png' width={500} height={500} />
    </div>
  )
}

export default Auth