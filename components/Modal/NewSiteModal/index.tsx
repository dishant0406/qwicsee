'use client'

import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import AddNewSiteCard from '@/components/Desktop/AddNewSiteCard'
import { Button } from '@/components/ui/button'
import Step1 from './Steps/Step1'
import Step2 from './Steps/Step2'
import { ChevronRightIcon, ChevronLeftIcon } from '@radix-ui/react-icons'
import Step3 from './Steps/Step3'
import { useNewFolioModalStore } from '@/lib/Zustand/hooks/ModalStates'
import { useRouter } from 'next/navigation'
import { useNewFolioStore } from '@/lib/Zustand'


type Props = {}

const NewSiteModal = (props: Props) => {
  const [step, setStep] = useState(0)
  const router = useRouter()

  const { open, setOpen } = useNewFolioModalStore()
  const { newFolio } = useNewFolioStore()
  const totalSteps = 3

  const handleStep = (type: string) => {
    if (type === 'BACK') {
      setStep(step - 1)
    } else {
      if (step === totalSteps - 1) {
        setOpen(false)
        router.push(`/folio/${newFolio.folio_name}`)
        setStep(0)
        return
      }
      setStep(step + 1)
    }
  }

  const desciptionText = () => {
    switch (step) {
      case 0:
        return 'Enter the Name of your QuickFolio'
      case 1:
        return 'Select a layout for your QuickFolio'
      case 2:
        return 'Select a theme for your QuickFolio'
    }
  }

  return (
    <Dialog open={open} onOpenChange={(e) => {
      setOpen(e)
    }}>
      <DialogContent className='bg-bdgray'>
        <DialogHeader>
          <DialogTitle>New QuickFolio</DialogTitle>
          <DialogDescription>
            {desciptionText()}
          </DialogDescription>
        </DialogHeader>
        <div className='flex flex-col gap-[1rem] mt-[0.5rem]'>
          {step === 0 && <Step1 />}
          {step === 1 && <Step2 />}
          {step === 2 && <Step3 />}
          <div className='flex gap-[1rem] grow justify-center w-full'>
            <Button disabled={
              step === 0
            } onClick={() => handleStep('BACK')} className='h-[3rem] w-[50%] flex items-center justify-center font-medium'>
              <ChevronLeftIcon className='h-[2vh] w-[2vh] mr-[0.5rem]' />
              Back
            </Button>
            <Button onClick={() => handleStep('NEXT')} className='h-[3rem] flex items-center justify-center w-[50%] font-medium'>
              Next
              <ChevronRightIcon className='h-[2vh] w-[2vh] ml-[0.5rem]' />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default NewSiteModal