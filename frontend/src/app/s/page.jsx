import React from 'react'
import SecondNav from '@/components/secrets/SecondNav'
import Filter from '@/components/secrets/Filter'
import SecretList from '@/components/secrets/SecretList'

import SendButton from '@/components/secrets/SendButton'
import { FaCheck } from 'react-icons/fa6'

function IndexPage() {

  return (
    <>
      <div className="bg-white border-b border-gray-300 sticky top-16">
        <div className="mx-auto max-w-screen-sm px-4 py-4 flex items-center text-green-600">
          <FaCheck className='mr-2' />
          <p className='font-semibold'>LEYENDO</p>
        </div>
      </div>

      <div className="mx-auto max-w-screen-sm pt-4">
        <SendButton />
        <Filter />
        <SecretList apiQuery="/secrets?sort=createdAt:asc" />
      </div>

    </>
  )
}

export default IndexPage