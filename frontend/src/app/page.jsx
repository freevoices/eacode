import React from 'react'
import SecretList from '@/components/SecretList'
import Message from '@/components/Message'
import Sections from '@/components/Sections'

function IndexPage() {
  return (
    <>
      <div className="bg-gray-100" data-theme="light">
        <Sections/>

        <div className="mx-auto max-w-screen-md py-4">
          <Message />
          <SecretList />
        </div>

      </div>
    </>
  )
}

export default IndexPage