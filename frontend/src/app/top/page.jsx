import React from 'react'
import SecondNav from '@/components/SecondNav'
import SecretListTop from '@/app/top/SecretListTop'
import { IoFlameOutline } from 'react-icons/io5'
import Filter from '@/components/layout/Filter'

function IndexPage() {
  return (
    <>
        <SecondNav />

        <div className="mx-auto max-w-screen-sm py-4">

          <div className="mb-4 flex justify-center">
            <div className="rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 font-semibold">
              <IoFlameOutline className="h-5 w-5 inline mr-2" />
              Top
            </div>
          </div>

          <Filter/>

          <div className="bg-yellow-50 px-4 py-3 text-sm font-base text-yellow-900">
            <p>Estás viendo secretos de los estudiantes de todo el Perú 🌎</p>
          </div>


          <SecretListTop />
        </div>
    </>
  )
}

export default IndexPage