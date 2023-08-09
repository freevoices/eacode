import React from 'react'

async function loadComments() {
  const res = await fetch(
    `http://localhost:1337/api/comments?sort=createdAt:desc&pagination[page]=1`
  );
  const data = await res.json();
  return data.data
}

async function CommentList() {
  const comments = await loadComments();
  //console.log(comments)

  const page = 1;

  return (
    <>
      <div>
        {comments.map(comment => (
          <div key={comment.id} className="bg-base-100 shadow-sm mt-6">
            <div className={`bg-blue-200 flex flex-col`}>
              <div className="grid grid-cols-3 gap-4 py-1 px-4">
                <div className="flex items-center">
                  <p>{comment.attributes.gender}</p>
                  <p className="text-lg font-bold ml-1 inline mr-1">
                    {comment.attributes.age}
                  </p>
                  <p className="inline">años</p>
                </div>

                <div className="flex items-center justify-center">
                  <p className="font-medium text-center">Anonimo #{comment.id}</p>
                </div>

                <div className="flex items-center justify-end">
                  <button className="btn btn-ghost btn-circle">
                    {comment.attributes.likes}
                    <p>icon</p>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex bg-gray-50 border-b border-gray-200">
              <div className="w-1/2 py-2 px-6">
                <p>icon</p>
                <p className="text-sm inline">hace {comment.attributes.createdAt}</p>
              </div>
              <div className="w-1/2 py-2 px-6 text-right text-sm">
                <p className="text-sm">{comment.attributes.uni}</p>
              </div>
            </div>

            <div className="py-3 px-6">
              <p>{comment.attributes.message}</p>
            </div>
          </div>
        ))}


        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="mt-6 px-4">
            <div className="join">
              <button className="join-item btn">«</button>
              <button className="join-item btn">Pagina {page}</button>
              <button className="join-item btn">»</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default CommentList