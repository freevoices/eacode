'use client'

import { useEffect, useState } from 'react'

import { HiChat, HiShare } from 'react-icons/hi';

import { FaGavel, FaHeart, FaRegHeart } from 'react-icons/fa6';

import Spinner from '@/components/layout/Spinner'
import TiempoTranscurrido from '@/components/layout/Time'

import apiURL from '@/utils/api';


function CommentList() {
    const [comments, setComments] = useState({ results: {}, loading: true })
    const [pagination, setPagination] = useState({})
    const [likeList, setLikeList] = useState([])

    const { page } = pagination

    useEffect(() => {
        async function loadComments() {
            const res = await fetch(
                `${apiURL}/secrets?sort=createdAt:desc&pagination[page]=1`
            )
            const data = await res.json()

            setComments((prevState) => ({
                ...prevState,
                results: data.data,
                loading: false,
            }))

            setPagination((prevState) => ({
                ...prevState,
                ...data.meta.pagination,
            }))

            setLikeList(
                data.data.map((post) => {
                    return {
                        qty: Number(post.attributes.likes),
                        clicked: false,
                    }
                })
            )
        }

        loadComments()
    }, [])

    async function updateLikes(index, id) {
        let selectedLike = !likeList[index].clicked
            ? likeList[index].qty + 1
            : Math.max(likeList[index].qty - 1, 0)

        selectedLike = { qty: selectedLike, clicked: !likeList[index].clicked }

        try {
            const res = await fetch(
                `${apiURL}/secrets/${id}`,
                {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ data: { likes: selectedLike.qty } }),
                }
            )

            if (res.ok) {
                const updateLikes = likeList.map((like, i) => {
                    if (index === i) {
                        return selectedLike
                    }

                    return like
                })

                setLikeList(updateLikes)
            }
        } catch (error) {
            console.log(error)
        }
    }

    if (comments.loading) {
        return <Spinner />
    }

    if (!comments.loading && comments.results) {
        const posts = comments.results

        return (
            <div>
                {posts.map((post, i) => {
                    const { gender, age, likes, createdAt, uni, message } =
                        post.attributes

                    return (
                        <div
                            key={post.id}
                            className="bg-base-100 shadow-sm mt-2"
                        >
                            <div
                                className={`${gender === 'Mujer'
                                    ? 'bg-white text-pink-700'
                                    : gender === 'Hombre'
                                        ? 'bg-white text-sky-700'
                                        : ' bg-white text-gray-700'
                                    } flex flex-col pt-4 px-4`}
                            >
                                <div className="flex items-center text-sm font-semibold">
                                    <p>{gender} de {age}</p>
                                    <p className="ml-2 text-gray-600">🎓 {uni}</p>
                                    <p className='text-gray-600 ml-1.5 inline'>•</p>
                                    <TiempoTranscurrido fechaApi={createdAt} />
                                </div>
                            </div>

                            <div className="py-3 px-4 text-base">
                                <p>{message}</p>
                            </div>


                            <div className="flex pt-2 pb-3 px-4">

                                <div className="w-1/2 flex">
                                    <div className='hidden'>

                                    <button className="inline-flex items-center text-sm font-semibold mr-4 text-slate-400">
                                        <HiShare className='h-5 w-5' />
                                    </button>

                                    <button className="inline-flex items-center text-sm font-semibold mr-4 text-slate-400">
                                        <FaGavel className='h-5 w-5' />
                                    </button>

                                    <button className="inline-flex items-center text-sm font-semibold text-slate-400">
                                        <HiChat className='h-5 w-5' />
                                    </button>
                                    </div>

                                </div>

                                <div className="w-1/2 flex justify-end">
                                    <button
                                        className="btn btn-xs btn-ghost text-sm font-semibold text-slate-400"
                                        value={likeList[i].qty}
                                        onClick={() =>
                                            updateLikes(i, post.id)
                                        }
                                    >
                                        
                                        {!likeList[i].clicked ? (
                                            <>
                                                {likeList[i].qty}
                                                <FaRegHeart className='h-5 w-5' />
                                            </>
                                        ) : (
                                            <>
                                                <p className='text-red-700'>{likeList[i].qty}</p>
                                                <FaHeart className='h-5 w-5 text-red-700' />
                                            </>
                                        )}
                                    </button>
                                </div>

                            </div>

                        </div>
                    )
                })}
            </div>
        )
    }
}

export default CommentList