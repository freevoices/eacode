import Link from 'next/link'
import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import { IoPaperPlane } from 'react-icons/io5'

function SendButton() {
  return (
    <>
      <div className='fixed bottom-6 left-0 right-0 flex justify-center z-[99] md:visible invisible'>

        <Link href="/send">
          <button className="inline-flex items-center rounded-full bg-red-700 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700">
            <IoPaperPlane className='h-5 w-5 mr-2' />
            Enviar tu secreto
          </button>
        </Link>

      </div>

      <div className='fixed bottom-6 right-4 flex justify-center z-[99] md:invisible'>

        <Link href="/send">
          <button className="btn btn-lg btn-circle  btn-ghost bg-red-700 text-white hover:bg-red-600">
            <FaPlus className='h-6 w-6' />
          </button>
        </Link>


      </div>
    </>
  )
}

export default SendButton