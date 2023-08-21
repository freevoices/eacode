import React from 'react'
import SecondNav from '@/components/SecondNav'
import SecretList from '@/components/SecretList'
import { IoTimeOutline } from 'react-icons/io5'
import Filter from '@/components/layout/Filter'
import SendButton from '@/components/layout/SendButton'

function IndexPage() {
  return (
    <>
      <SecondNav />

      <div className="mx-auto max-w-screen-sm py-4">
        <SendButton />

        <div className="mb-4 flex justify-center">
          <div className="rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 font-semibold">
            <IoTimeOutline className="h-5 w-5 mr-2 inline" />
            Recientes
          </div>
        </div>

        <Filter />

        <SecretList />
      </div>
    </>
  )
}

export default IndexPage