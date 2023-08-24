import React from 'react'
import Link from 'next/link'
import {
  IoTimeOutline,
  IoFlameOutline,
  IoReloadOutline,
} from 'react-icons/io5'

function Sections({ selectNav }) {

  return (
    <>
      <div className="bg-white border-b border-gray-300 sticky top-16">
        <div className="mx-auto max-w-screen-sm">
          <div className="grid grid-cols-3 gap-2">


            <Link href="/">
              <div className={`${selectNav === 'Recientes'
                ? 'text-red-700'
                : 'text-inherit'
                } p-1.5 flex flex-col items-center btn-ghost hover:text-red-700`}

              >

                <IoTimeOutline className="h-6 w-6" />
                <p className="text-xs font-medium">Recientes</p>
              </div>
            </Link>


            <Link href="/top">
              <div className={`${selectNav === 'Top'
                ? 'text-red-700'
                : 'text-inherit'
                } p-1.5 flex flex-col items-center btn-ghost hover:text-red-700`}

              >

                <IoFlameOutline className="h-6 w-6" />
                <p className="text-xs font-medium">Top</p>
              </div>
            </Link>


            <Link href="/old">
              <div className={`${selectNav === 'Viejos'
                ? 'text-red-700'
                : 'text-inherit'
                } p-1.5 flex flex-col items-center btn-ghost hover:text-red-700`}

              >
                <IoReloadOutline className="h-6 w-6" />
                <p className="text-xs font-medium">Viejos</p>
              </div>
            </Link>

          </div>
        </div>
      </div>

      <div className="mb-4 flex justify-center pt-4">
        <div className="rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 font-semibold">

          {selectNav === 'Top' ? (
            <IoTimeOutline className="h-5 w-5 mr-2 inline" />
          ) : selectNav === 'Viejos' ? (
            <IoReloadOutline className="h-5 w-5 mr-2 inline" />
          ) : (
            <IoTimeOutline className="h-5 w-5 mr-2 inline" />
          )}

          {selectNav}
        </div>
      </div>
    </>
  )
}

export default Sections