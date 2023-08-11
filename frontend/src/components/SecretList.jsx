'use client'

import { useEffect, useState } from 'react'
import {
    IoHeartOutline,
    IoHeart,
    IoFemale,
    IoMale,
    IoMaleFemale,
} from 'react-icons/io5'
import Spinner from './layout/Spinner'

function CommentList() {
    const [comments, setComments] = useState({ results: {}, loading: true })
    const [pagination, setPagination] = useState({})
    const [likeList, setLikeList] = useState([])

    useEffect(() => {
        async function loadComments() {
            const res = await fetch(
                `https://ea-backend.onrender.com/api/secrets?sort=createdAt:desc&pagination[page]=1`
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
                `https://ea-backend.onrender.com/api/secrets/${id}`,
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
        const { page } = pagination

        return (
            <div>
                {posts.map((post, i) => {
                    const { gender, age, likes, createdAt, uni, message } =
                        post.attributes

                    return (
                        <div
                            key={post.id}
                            className="bg-base-100 shadow-sm mt-4"
                        >
                            <div
                                className={`${
                                    gender === 'woman'
                                        ? 'bg-pink-200 text-pink-700'
                                        : gender === 'man'
                                        ? 'bg-sky-200 text-sky-700'
                                        : ' bg-gray-200 text-gray-700'
                                } flex flex-col`}
                            >
                                <div className="grid grid-cols-3 gap-4 py-1 pl-4 pr-1">
                                    <div className="flex items-center">
                                        <p className="inline text-sm">
                                            <i className={'text-lg'}>
                                                {gender === 'woman' ? (
                                                    <IoFemale />
                                                ) : gender === 'man' ? (
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

                                    <div className="flex items-center justify-end ">
                                        <button
                                            className="btn btn-ghost text-sm"
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
                                <div className="w-1/2 py-2 px-4 text-xs">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 inline mr-1"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                    hace {createdAt}
                                </div>
                                <div className="w-1/2 py-2 px-4 text-right text-xs">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 inline mr-1"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                    {uni}
                                </div>
                            </div>

                            <div className="py-3 px-4 text-base">
                                <p>{message}</p>
                            </div>
                        </div>
                    )
                })}

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div className="mt-6 px-4">
                        <div className="join">
                            <button className="join-item btn">«</button>
                            <button className="join-item btn">
                                Pagina {page}
                            </button>
                            <button className="join-item btn">»</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentList
