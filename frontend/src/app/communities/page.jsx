'use client'

import { useEffect, useState } from 'react'

import Spinner from '@/components/layout/Spinner'

import apiURL from '@/utils/api';
import SugerirNav from './SugerirNav';


function CommentList() {
  const [comments, setComments] = useState({ results: {}, loading: true })

  useEffect(() => {
    async function loadComments() {
      const res = await fetch(
        `${apiURL}/categories?populate=*`
      )
      const data = await res.json()

      setComments((prevState) => ({
        ...prevState,
        results: data.data,
        loading: false,
      }))
    }

    loadComments()
  }, [])

  if (comments.loading) {
    return <Spinner />
  }

  if (!comments.loading && comments.results) {
    const posts = comments.results

    return (
      <>

        <SugerirNav />
        <div className="mx-auto max-w-screen-sm h-screen py-0 sm:py-8">
        <div className="bg-white">
          <ul className='divide-y divide-gray-100'>
            {posts.map((post, i) => {
              const { name, details, url} =
                post.attributes

              return (

                <li key={post.id} className="flex justify-between py-4 px-4">
                  <div className="flex min-w-0 gap-x-3">
                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={url} alt="Categorias" />
                    <div className="min-w-0 flex-auto">
                      <p className="text-base leading-6 text-gray-900 inline">s/</p>
                      <p className="text-base font-semibold leading-6 text-gray-900 inline">{name}</p>
                      <p className="mt-1 text-sm leading-5 text-gray-500">{details}</p>
                    </div>
                  </div>
                </li>



              )
            })}
          </ul>
        </div>
        </div>
      </>
    )
  }
}

export default CommentList