import React from 'react'
import SecondNav from '@/components/SecondNav'
import SecretList from '@/components/SecretList'

function IndexPage() {
  return (
    <>
      <div className="bg-gray-100" data-theme="light">
        <SecondNav />

        <div className="mx-auto max-w-screen-sm py-4">

          <div className="mb-4 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2" viewBox="0 0 32 32"><path d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4z" fill="currentColor"></path><path d="M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z" fill="currentColor"></path></svg>
              Recientes
            </div>
          </div>

          <button className="btn mb-4 btn-success ml-2 btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"><g fill="none"><path d="M12.25 13.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5h4.5zm2-4.25a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h8.5zm2-4.25a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5h12.5z" fill="currentColor"></path></g></svg>
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