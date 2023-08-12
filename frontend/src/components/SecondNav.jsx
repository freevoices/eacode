import React from 'react'
import Link from 'next/link'
import {
  IoTimeOutline,
  IoFlameOutline,
} from 'react-icons/io5'

function Sections() {
  return (
    <>
      <div className="bg-white border-b border-gray-300">
        <div className="mx-auto max-w-screen-sm">
          <div className="grid grid-cols-3 gap-2">


            <Link href="/">
              <div className="p-2 flex flex-col items-center btn-ghost hover:text-red-700">
                <IoTimeOutline className="h-6 w-6" />
                <p className="text-xs font-medium">Recientes</p>
              </div>
            </Link>


            <Link href="/top">
              <div className="p-2 flex flex-col items-center btn-ghost hover:text-red-700">
                <IoFlameOutline className="h-6 w-6" />
                <p className="text-xs font-medium">Top</p>
              </div>
            </Link>


            <Link href="/old">
              <div className="p-2 flex flex-col items-center btn-ghost hover:text-red-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 16 16"><g fill="none"><path d="M3.09 6H5.5a.5.5 0 0 0 0-1H4a5 5 0 1 1-.98 3.455a.5.5 0 1 0-.995.09A6 6 0 1 0 3.5 4.03V3a.5.5 0 0 0-1 0v2.5A.5.5 0 0 0 3 6h.09zM7.5 5a.5.5 0 0 1 .5.5V8h1.5a.5.5 0 1 1 0 1h-2a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5z" fill="currentColor"></path></g></svg>
                <p className="text-xs font-medium">Viejos</p>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </>
  )
}

export default Sections