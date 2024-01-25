'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { MixIcon, ExitIcon, ExclamationTriangleIcon, GearIcon, Pencil2Icon, GlobeIcon, ChatBubbleIcon } from '@radix-ui/react-icons'
import { useFieldSelectorModalStore } from '@/lib/Zustand/hooks/ModalStates'
import FieldSelecter from '../FieldSelecter'
import { useSideBarOptions } from '@/lib/Zustand'

type Props = {}

const SideIcon = ({
  Icon, isSelected = false, onClick = () => { }, className, name
}: {
  Icon: React.FC<any>,
  isSelected?: boolean,
  onClick?: () => void,
  className?: string,
  name?: string
}) => {
  return (
    <button title={name} onClick={onClick} className={`p-[1rem] transition-all duration-300 rounded-full ${isSelected ? 'bg-white/80 text-bgray' : 'text-white/80'
      }`}>
      <Icon className={`h-[2.5vh] w-[2.5vh] ${className}`} />
    </button>
  )
}

const SideBar = (props: Props) => {
  const { setSideBarOptions, sideBarOptions } = useSideBarOptions()

  const { setOpen: fieldSelectorOpen } = useFieldSelectorModalStore()

  const handleSideBarOptionClick = (name: string) => {
    const newOptions = sideBarOptions.map((option) => {
      if (option.name === name) {
        return {
          ...option,
          isSelected: true,
        }
      } else {
        return {
          ...option,
          isSelected: false,
        }
      }
    })

    if (name === 'Editor') {
      fieldSelectorOpen(true)
    } else {
      fieldSelectorOpen(false)
    }

    setSideBarOptions(newOptions)
  }

  return (
    <>
      <div className='h-[100vh] fixed left-0 z-[2] flex flex-col justify-between items-center py-[3vh] w-[8vw] bg-[#002024]'>
        <div className='w-full flex flex-col items-center'>
          <Image src={'/assets/logo/logo-dark-trans.png'}
            className='h-[8vh] w-[8vh]'
            alt='logo' width={100} height={100} />

          <div className='flex flex-col items-center justify-center mt-[10vh]'>

            {
              sideBarOptions.map((option) => {
                return (
                  option.isVisible ? <SideIcon
                    key={option.name}
                    name={option.name}
                    Icon={option.Icon}
                    isSelected={option.isSelected}
                    onClick={() => {
                      handleSideBarOptionClick(option.name)
                    }}
                  /> : null
                )
              })
            }

          </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center'>
          <div className='flex flex-col gap-[3vh] items-center justify-center mt-[10vh]'>
            <ExclamationTriangleIcon className='h-[2.5vh] w-[2.5vh] text-white/80' />
            <ExitIcon className='h-[2.5vh] w-[2.5vh] text-white/80' />
            <img
              className='h-[5vh] w-[5vh] rounded-full'
              src='https://avatars.githubusercontent.com/u/54866762?v=4' />


          </div>
        </div>
      </div>
      <FieldSelecter />
    </>
  )
}

export default SideBar