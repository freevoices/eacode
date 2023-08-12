import React from 'react'
import SecondNav from '@/components/SecondNav'
import SecretList from '@/components/SecretList'
import { IoFilter, IoTimeOutline } from 'react-icons/io5'

function IndexPage() {
  return (
    <>
      <div className="bg-gray-100" data-theme="light">
        <SecondNav />

        <div className="mx-auto max-w-screen-sm py-4">

          <div className="mb-4 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 font-semibold">
              <IoTimeOutline className="h-5 w-5 mr-2 inline" />
              Recientes
            </div>
          </div>

          <button className="btn mb-4 btn-success ml-2 btn-sm">
          <IoFilter className="h-4 w-4 inline" />
            Filtros
          </button>


          <div className="bg-yellow-50 px-4 py-3 text-sm font-base text-yellow-900">
            <p>Estás viendo secretos de los estudiantes de todo el Perú 🌎</p>
          </div>


          <SecretList />
        </div>
      </div>
    </>
  )
}

export default IndexPage