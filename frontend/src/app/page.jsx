import React from 'react'
import SecondNav from '@/components/secrets/SecondNav'
import SecretList from '@/components/secrets/SecretList'
import Filter from '@/components/secrets/Filter'
import SendButton from '@/components/secrets/SendButton'

function IndexPage() {
  return (
    <>
      <SecondNav selectNav="Recientes" />

      <div className="mx-auto max-w-screen-sm pb-4">
        <SendButton />
        <Filter />
        <SecretList apiQuery="/secrets?sort=createdAt:desc" />
      </div>
    </>
  )
}

export default IndexPage