'use client'

import { useEffect, useState } from 'react'
import {
    IoHeartOutline,
    IoHeart,
    IoFemale,
    IoMale,
    IoMaleFemale,
    IoLogoWhatsapp,
    IoTimeOutline,
} from 'react-icons/io5'
import Spinner from '@/components/layout/Spinner'
import TiempoTranscurrido from '@/components/secrets/Time'

import Category from '@/components/secrets/Category'

import apiURL from '@/utils/api';

function CommentList({ apiQuery }) {
    const [comments, setComments] = useState({ results: {}, loading: true })
    const [pagination, setPagination] = useState({ page: 1 })
    const [likeList, setLikeList] = useState([])

    const { page } = pagination

    //console.log(apiQuery)

    useEffect(() => {
        async function loadComments() {
            const res = await fetch(
                `${apiURL}${apiQuery}&pagination[page]=${page}`
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
    }, [page])

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
                    const { gender, age, likes, createdAt, community, message } =
                        post.attributes

                    return (
                        <div
                            key={post.id}
                            className="bg-base-100 shadow-sm mb-4"
                        >
                            <div
                                className={`${gender === 'Mujer'
                                    ? 'bg-pink-200 text-pink-700'
                                    : gender === 'Hombre'
                                        ? 'bg-sky-200 text-sky-700'
                                        : ' bg-gray-200 text-gray-700'
                                    } flex flex-col`}
                            >
                                <div className="grid grid-cols-3 gap-4 py-1 pl-4 pr-2">
                                    <div className="flex items-center">
                                        <p className="inline text-sm">
                                            <i className={'text-lg'}>
                                                {gender === 'Mujer' ? (
                                                    <IoFemale />
                                                ) : gender === 'Hombre' ? (
                                                    <IoMale />
                                                ) : (
                                                    <IoMaleFemale />
                                                )}
                                            </i>
                                        </p>
                                        <p className="text-lg font-bold inline mr-1 ml-1">
                                            {age}
                                        </p>
                                        <p className="inline text-sm">años</p>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <p className="font-bold text-center text-sm">
                                            @{post.id}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-end">
                                        <button
                                            className="btn btn-square btn-ghost text-sm"
                                            value={likeList[i].qty}
                                            onClick={() =>
                                                updateLikes(i, post.id)
                                            }
                                        >
                                            <span>{likeList[i].qty}</span>
                                            <i className={'text-lg'}>
                                                {!likeList[i].clicked ? (
                                                    <IoHeartOutline />
                                                ) : (
                                                    <IoHeart />
                                                )}
                                            </i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex bg-gray-50 border-b border-gray-200">
                                <div className="flex w-1/2 py-2 px-4 text-xs items-center">
                                    <IoTimeOutline className='w-4 h-4' />
                                    <TiempoTranscurrido fechaApi={createdAt} />
                                </div>
                                <div className="flex w-1/2 py-2 pr-4 justify-end text-xs">
                                    <p>c/</p>
                                    <p className='capitalize'>{community}</p>
                                </div>
                            </div>

                            <div className="py-3 px-4 text-base">
                                <p>{message}</p>
                            </div>


                            {/* pon aquí el texto que quieras 
                            <div className="flex">

                                <div className="w-1/2 px-4 py-3">
                                    <p className='text-xs hidden'>Comentario</p>
                                </div>

                                <div className="w-1/2 px-4 py-3 flex justify-end">
                                    <button className="btn btn-square btn-xs btn-success text-white">
                                        <IoLogoWhatsapp className="h-4 w-4" />
                                    </button>
                                </div>

                            </div>
*/}

                        </div>
                    )
                })}

                <div className='grid justify-items-center pt-2 pb-4'>
                    <div className="join">
                        <button
                            className="join-item btn"
                            onClick={() => page > 1 && setPagination({ ...pagination, page: page - 1 })}
                        >
                            «
                        </button>
                        <button className="join-item btn">Página {page}</button>
                        <button
                            className="join-item btn"
                            onClick={() => page < pagination.pageCount && setPagination({ ...pagination, page: page + 1 })}
                        >
                            »
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}

export default CommentList