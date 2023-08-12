import React from 'react'
import SecondNav from '@/components/SecondNav'
import SecretListOld from '@/app/old/SecretListOld'
import { IoFilter } from 'react-icons/io5'

function IndexPage() {
  return (
    <>
      <div className="bg-gray-100" data-theme="light">
        <SecondNav />

        <div className="mx-auto max-w-screen-sm py-4">

          <div className="mb-4 flex justify-center">
            <div className="rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline" viewBox="0 0 16 16"><g fill="none"><path d="M3.09 6H5.5a.5.5 0 0 0 0-1H4a5 5 0 1 1-.98 3.455a.5.5 0 1 0-.995.09A6 6 0 1 0 3.5 4.03V3a.5.5 0 0 0-1 0v2.5A.5.5 0 0 0 3 6h.09zM7.5 5a.5.5 0 0 1 .5.5V8h1.5a.5.5 0 1 1 0 1h-2a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5z" fill="currentColor"></path></g></svg>
              Viejos
            </div>
          </div>

          <button className="btn mb-4 btn-success ml-2 btn-sm">
          <IoFilter className="h-4 w-4 inline" />
            Filtros
          </button>

          
          <div className="bg-yellow-50 px-4 py-3 text-sm font-base text-yellow-900">
              <p>Estás viendo secretos de los estudiantes de todo el Perú 🌎</p>
          </div>
          

          <SecretListOld />
        </div>
      </div>
    </>
  )
}

export default IndexPage