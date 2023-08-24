import React from 'react'
import SecondNav from '@/components/secrets/SecondNav'
import { IoFlameOutline } from 'react-icons/io5'
import Filter from '@/components/secrets/Filter'
import SendButton from '@/components/secrets/SendButton'

import SecretList from '@/components/secrets/SecretList'

function IndexPage() {
  return (
    <>
      <SecondNav selectNav="Top" />

      <div className="mx-auto max-w-screen-sm pb-4">
        <SendButton />
        <Filter />
        <SecretList apiQuery="/secrets?sort=likes:desc" />
      </div>
    </>
  )
}

export default IndexPage