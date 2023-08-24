import React from 'react'
import SecondNav from '@/components/secrets/SecondNav'
import Filter from '@/components/secrets/Filter'
import SecretList from '@/components/secrets/SecretList'

import SendButton from '@/components/secrets/SendButton'

function IndexPage() {
  return (
    <>
      <SecondNav selectNav="Viejos" />

      <div className="mx-auto max-w-screen-sm pb-4">
        <SendButton />
        <Filter />
        <SecretList apiQuery="/secrets?sort=createdAt:asc" />
      </div>

    </>
  )
}

export default IndexPage