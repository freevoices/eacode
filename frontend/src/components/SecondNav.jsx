import React from 'react'
import Link from 'next/link'

function Sections() {
  return (
    <>
      <div className="bg-white border-b border-gray-300">
        <div className="mx-auto max-w-screen-sm">
          <div className="grid grid-cols-3 gap-2">


            <Link href="/">
              <div className="p-2 flex flex-col items-center btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 32 32"><path d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4z" fill="currentColor"></path><path d="M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z" fill="currentColor"></path></svg>
                <p className="text-xs font-medium">
                  Recientes
                </p>
              </div>
            </Link>


            <Link href="/top">
            <div className="p-2 flex flex-col items-center btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 1024 1024"><path d="M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8c-1.4 1.5-3 1.9-4.1 2c-1.1.1-2.8-.1-4.3-1.5c-1.4-1.2-2.1-3-2-4.8c3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9c-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1a352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9zM713 808.5c-53.7 53.2-125 82.4-201 82.4s-147.3-29.2-201-82.4c-53.5-53.1-83-123.5-83-198.4c0-43.5 9.8-85.2 29.1-124c18.8-37.9 46.8-71.8 80.8-97.9a349.6 349.6 0 0 0 58.6-56.8c25-30.5 44.6-64.5 58.2-101a240 240 0 0 0 12.1-46.5c24.1 22.2 44.3 49 61.2 80.4c33.4 62.6 48.8 118.3 45.8 165.7a74.01 74.01 0 0 0 24.4 59.8a73.36 73.36 0 0 0 53.4 18.8c19.7-1 37.8-9.7 51-24.4c13.3-14.9 24.8-30.1 34.4-45.6c14 17.9 25.7 37.4 35 58.4c15.9 35.8 24 73.9 24 113.1c0 74.9-29.5 145.4-83 198.4z" fill="currentColor"></path></svg>
              <p className="text-xs font-medium">
                Top
              </p>
            </div>
            </Link>


            <Link href="/old">
            <div className="p-2 flex flex-col items-center btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 16 16"><g fill="none"><path d="M3.09 6H5.5a.5.5 0 0 0 0-1H4a5 5 0 1 1-.98 3.455a.5.5 0 1 0-.995.09A6 6 0 1 0 3.5 4.03V3a.5.5 0 0 0-1 0v2.5A.5.5 0 0 0 3 6h.09zM7.5 5a.5.5 0 0 1 .5.5V8h1.5a.5.5 0 1 1 0 1h-2a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5z" fill="currentColor"></path></g></svg>
              <p className="text-xs font-medium">
                Viejos
              </p>
            </div>
            </Link>

          </div>
        </div>
      </div>
    </>
  )
}

export default Sections