import Image from 'next/image'
import React from 'react'
import { DotsVerticalIcon } from '@radix-ui/react-icons'

type Props = {
  name: string,
  lastEditied: Date
}

const dateToLastEdited = (date: Date) => {
  const now = new Date();
  const diff = Math.abs(now.getTime() - date.getTime());

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30); // Approximation
  const years = Math.floor(days / 365); // Approximation

  if (seconds < 60) {
    return seconds === 1 ? '1 second ago' : `${seconds} seconds ago`;
  } else if (minutes < 60) {
    return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
  } else if (hours < 24) {
    return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
  } else if (days < 7) {
    return days === 1 ? 'Yesterday' : `${days} days ago`;
  } else if (weeks < 4) {
    return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
  } else if (months < 12) {
    return months === 1 ? '1 month ago' : `${months} months ago`;
  } else {
    return years === 1 ? '1 year ago' : `${years} years ago`;
  }
}


const SiteCard = ({ name, lastEditied }: Props) => {
  return (
    <div className='flex relative flex-col gap-[0.5rem] w-[25vh]'>
      <button className='flex absolute top-1 right-1 justify-center items-center p-[0.5rem] bg-black/50 rounded-full'>
        <DotsVerticalIcon className='text-white' />
      </button>
      <Image alt='bg' className='object-cover rounded-md overflow-hidden h-[25vh] w-[25vh]' src='/assets/bg/quicksee-bg.png' width={200} height={200} />
      <p className='text-white w-full px-[3%] truncate text-base'>
        {name}
      </p>
      <p className='text-white/50 mt-[-0.5rem] w-full px-[3%] truncate text-[12px]'>
        Last Edited: {dateToLastEdited(lastEditied)}
      </p>
    </div>
  )
}

export default SiteCard