import React from 'react'

async function loadComments() {
  const res = await fetch(
    `https://ea-backend.onrender.com/api/secrets?sort=createdAt:desc&pagination[page]=1`
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
          <div key={comment.id} className="bg-base-100 shadow-sm mt-4">
            <div className={`bg-gray-200 flex flex-col`}>
              <div className="grid grid-cols-3 gap-4 py-1 pl-4 pr-1">

                <div className="flex items-center text-gray-700">
                  <p>{comment.attributes.gender}</p>
                  <p className="text-lg font-bold ml-1 inline mr-1">
                    {comment.attributes.age}
                  </p>
                  <p className="inline text-sm">años</p>
                </div>

                <div className="flex items-center justify-center text-gray-500">
                  <p className="font-bold text-center text-sm">@{comment.id}</p>
                </div>

                <div className="flex items-center justify-end text-gray-700">
                  <button className="btn btn-ghost text-sm">
                    {comment.attributes.likes}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 12 12"><g fill="none"><path d="M5.41 2.515a2.39 2.39 0 0 0-3.2.213c-.95.974-.946 2.558.008 3.536L5.75 9.887c.146.15.384.15.53 0l3.513-3.602a2.548 2.548 0 0 0-.01-3.535a2.396 2.396 0 0 0-3.45-.009l-.336.345l-.34-.35a2.498 2.498 0 0 0-.246-.22zm1.638.924a1.396 1.396 0 0 1 2.018.009c.577.592.577 1.553.009 2.14l-.001.001l-3.06 3.138l-3.08-3.16a1.547 1.547 0 0 1-.008-2.141a1.394 1.394 0 0 1 2.014.009l.34.349a1 1 0 0 0 1.433 0l.335-.345z" fill="currentColor"></path></g></svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex bg-gray-50 border-b border-gray-200">
              <div className="w-1/2 py-2 px-4 text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z" fill="currentColor"></path></svg>
               hace {comment.attributes.createdAt}
              </div>
              <div className="w-1/2 py-2 px-4 text-right text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" viewBox="0 0 512 512"><path d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z" fill="currentColor"></path></svg>
                {comment.attributes.uni}
              </div>
            </div>

            <div className="py-3 px-4 text-base">
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