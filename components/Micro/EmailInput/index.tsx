'use client'

import { Input } from '@/components/ui/input'
import { EnvelopeClosedIcon, CheckCircledIcon, CrossCircledIcon } from '@radix-ui/react-icons'
import React, { useRef, useState } from 'react'

type Props = {}

const EmailInput = (props: Props) => {
  const ref = useRef<HTMLInputElement>(null)
  const [email, setEmail] = useState('')

  const validateEmail = (email: string) => {
    const regex = /\S+@\S+\.\S+/
    const advancedRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/
    if (regex.test(email) && advancedRegex.test(email)) {
      return true
    } else {
      return false
    }
  }

  return (

    <div onClick={() => {
      ref.current?.focus()
    }} className='flex border-[2px] relative w-fit items-center rounded-3xl px-[0.5rem] border-white/50'>
      <EnvelopeClosedIcon className='h-[2.5vh] w-[8vh] px-[1rem]  text-white' />
      <div className='border-l-[2px] border-white/50 px-[0.5rem] my-[0.8rem]'>
        <p className='text-white/50 font-[600] text-sm ml-[0.5rem]'>Email address</p>
        <Input value={email} onChange={(e) => {
          setEmail(e.target.value.trim())
        }} ref={ref} className='w-[25vw] font-[600]' placeholder='example@qwicsee.com' />
      </div>
      <div className='absolute right-0 top-0 bottom-0 flex items-center'>
        {validateEmail(email) ? <CheckCircledIcon className='h-[2.5vh] w-[8vh] px-[1rem]  text-[#2cbe88]' /> : null}
        {!validateEmail(email) && email.length > 0 ? <CrossCircledIcon className='h-[2.5vh] w-[8vh] px-[1rem]  text-[#e53e3e]' /> : null}
      </div>
    </div>

  )
}

export default EmailInput