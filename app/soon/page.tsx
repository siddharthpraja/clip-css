import Link from 'next/link'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

const Soon = () => {
  return (
    <div className='h-full overflow-hidden'>
      <Link
        href={"./"}
        className="border px-2 w-max mx-2 flex gap-2 items-center hover:bg-black hover:text-white py-1 rounded-lg my-2"
      >
        <BiArrowBack /> Back
      </Link>
    <div className='flex w-full h-full items-center justify-center font-mono text-3xl font-semibold'>
      Coming Soon
    </div>
    </div>
  )
}

export default Soon
