'use client'

import React, { useEffect, useState } from 'react';
import {
    IoHeartOutline,
    IoHeart,
    IoFemale,
    IoMale,
    IoMaleFemale,
    IoTimeOutline,
} from 'react-icons/io5';
import Spinner from './layout/Spinner';

function CommentList() {
    const [comments, setComments] = useState({ results: [], loading: true });
    const [likeList, setLikeList] = useState([]);

    useEffect(() => {
        async function loadComments() {
            try {
                const res = await fetch(
                    'https://api.secretos.pro/api/secrets?sort=createdAt:desc&pagination[page]=1'
                );
                const data = await res.json();

                const formattedComments = data.data.map((post) => {
                    return {
                        id: post.id,
                        gender: post.attributes.gender,
                        age: post.attributes.age,
                        likes: Number(post.attributes.likes),
                        createdAt: post.attributes.createdAt,
                        uni: post.attributes.uni,
                        message: post.attributes.message,
                    };
                });

                setComments({ results: formattedComments, loading: false });

                const formattedLikes = formattedComments.map((post) => ({
                    qty: post.likes,
                    clicked: false,
                }));

                setLikeList(formattedLikes);
            } catch (error) {
                console.error(error);
            }
        }

        loadComments();
    }, []);

    async function updateLikes(index, id) {
        const updatedLikes = likeList.map((like, i) =>
            i === index
                ? { qty: !like.clicked ? like.qty + 1 : Math.max(like.qty - 1, 0), clicked: !like.clicked }
                : like
        );

        setLikeList(updatedLikes);

        try {
            const res = await fetch(`https://api.secretos.pro/api/secrets/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data: { likes: updatedLikes[index].qty } }),
            });

            if (!res.ok) {
                throw new Error('Failed to update likes');
            }
        } catch (error) {
            console.error(error);
        }
    }

    if (comments.loading) {
        return <Spinner />;
    }

    return (
        <div>
            {comments.results.map((post, i) => (
                <div key={post.id} className={`bg-base-100 shadow-sm mt-4`}>
                    <div
                        className={`${post.gender === 'woman'
                                ? 'bg-pink-200 text-pink-700'
                                : post.gender === 'man'
                                    ? 'bg-sky-200 text-sky-700'
                                    : 'bg-gray-200 text-gray-700'
                            } flex flex-col`}
                    >
                        <div className="grid grid-cols-3 gap-4 py-1 pl-4 pr-1">
                            <div className="flex items-center">
                                <p className="inline text-sm">
                                    <i className={'text-lg'}>
                                        {post.gender === 'woman' ? (
                                            <IoFemale />
                                        ) : post.gender === 'man' ? (
                                            <IoMale />
                                        ) : (
                                            <IoMaleFemale />
                                        )}
                                    </i>
                                </p>
                                <p className="text-lg font-bold inline mr-1 ml-1">{post.age}</p>
                                <p className="inline text-sm">años</p>
                            </div>

                            <div className="flex items-center justify-center">
                                <p className="font-bold text-center text-sm">@{post.id}</p>
                            </div>

                            <div className="flex items-center justify-end ">
                                <button
                                    className="btn btn-ghost text-sm"
                                    value={likeList[i].qty}
                                    onClick={() => updateLikes(i, post.id)}
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
                                    <IoTimeOutline className='inline h-4 w-4 mr-1' />
                                    hace {post.createdAt}
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
                                    {post.uni}
                                </div>
                            </div>

                    <div className="py-3 px-4 text-base">
                        <p>{post.message}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CommentList;
