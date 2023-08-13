'use client'
import React, { useEffect, useState } from 'react';
import {
    IoHeartOutline,
    IoHeart,
    IoFemale,
    IoMale,
    IoMaleFemale,
    IoTimeOutline,
    IoSchool,
} from 'react-icons/io5';
import Spinner from '../../components/layout/Spinner';
import TiempoTranscurrido from '@/components/layout/Time';

const API_ENDPOINT = 'https://api.secretos.pro/api/secrets';

function Comment(props) {
    const { gender, age } = props.attributes;

    const genderIcon =
        gender === 'woman' ? <IoFemale /> : gender === 'man' ? <IoMale /> : <IoMaleFemale />;

    const genderClass =
        gender === 'woman' ? "pink" : gender === 'man' ? "sky" : "gray";

    return (
        <div className="bg-base-100 shadow-sm mt-4">

            <div className={`bg-${genderClass}-200 text-${genderClass}-700 flex flex-col`}>
                <div className="grid grid-cols-3 gap-4 py-1 pl-4 pr-2">
                    <div className="flex items-center">
                        <p className="inline text-sm">
                            <i className={'text-lg'}>{genderIcon}</i>
                        </p>
                        <p className="text-lg font-bold inline mr-1 ml-1">{age}</p>
                        <p className="inline text-sm">años</p>
                    </div>

                    <div className="flex items-center justify-center">
                        <p className="font-bold text-center text-sm">@{props.id}</p>
                    </div>

                    <div className="flex items-center justify-end ">
                        <button
                            className="btn btn-square btn-ghost text-sm"
                            value={props.likes}
                            onClick={() => props.updateLikes(props.index, props.id)}>
                            <span>{props.likeList[props.index].qty}</span>
                            <i className={'text-lg'}>
                                {!props.likeList[props.index].clicked ? (
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
                    <TiempoTranscurrido fechaApi={props.createdAt} />
                </div>
                <div className="w-1/2 py-2 px-4 text-right text-xs">
                    <IoSchool className="h-4 w-4 inline mr-2" />
                    {props.uni}
                </div>
            </div>

            <div className="py-3 px-4 text-base">
                <p>{props.message}</p>
            </div>

        </div>
    );
}

function CommentList() {
    const [comments, setComments] = useState({ results: [], loading: true });
    const [pagination, setPagination] = useState({});
    const [likeList, setLikeList] = useState([]);

    useEffect(() => {
        async function loadComments() {
            try {
                const res = await fetch(`${API_ENDPOINT}?sort=likes:desc&pagination[page]=1`);
                const data = await res.json();

                const newComments = {
                    results: data.data,
                    loading: false,
                };

                setComments(newComments);
                setPagination(data.meta.pagination);

                const newLikeList = data.data.map((post) => ({
                    qty: Number(post.attributes.likes),
                    clicked: false,
                }));
                setLikeList(newLikeList);
            } catch (error) {
                console.error(error);
            }
        }

        loadComments();
    }, []);

    async function updateLikes(index, id) {
        const updatedLikeList = likeList.map((like, i) => {
            if (index === i) {
                const selectedLikeQty = !like.clicked ? like.qty + 1 : Math.max(like.qty - 1, 0);
                return { qty: selectedLikeQty, clicked: !like.clicked };
            }
            return like;
        });

        try {
            const res = await fetch(`${API_ENDPOINT}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data: { likes: updatedLikeList[index].qty } }),
            });

            if (res.ok) {
                setLikeList(updatedLikeList);
            }
        } catch (error) {
            console.error(error);
        }
    }

    if (comments.loading) {
        return <Spinner />;
    }

    const { results: posts } = comments;
    const { page } = pagination;

    return (
        <div>
            {posts.map((post, i) => (
                <Comment
                    key={post.id}
                    attributes={post.attributes}
                    id={post.id}
                    likes={Number(post.attributes.likes)}
                    createdAt={post.attributes.createdAt}
                    uni={post.attributes.uni}
                    message={post.attributes.message}
                    index={i}
                    likeList={likeList}
                    updateLikes={updateLikes}
                />
            ))}
        </div>
    );

}

export default CommentList;
