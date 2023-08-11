import React from 'react'

function Send() {
  return (
    <>
      <div className="bg-gray-100" data-theme="light">

        <div className="mx-auto max-w-screen-sm py-8 px-4">
          
          <div className="bg-yellow-50 px-4 py-3 text-sm font-base text-yellow-900 mb-4">
            <p>Tu identidad no será revelada públicamente.</p>
          </div>

          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight mb-8">🤫 Tu secreto</h2>

          <p className="inline mr-2 font-semibold">Tengo</p>
          <input type="text inline" placeholder=" " class="input input-bordered input-sm w-12 max-w-xs" />

          <p className="inline mr-2 ml-2 font-semibold">años y soy</p>
          <select
            id="gender"
            name="gender"
            autoComplete="gender-name"
            className="input input-bordered input-sm w-50 max-w-xs"
          >
            <option>...</option>
            <option>Hombre</option>
            <option>Mujer</option>
          </select>

          <div className="mt-4">
            <textarea
              id="secret"
              name="secret"
              placeholder="Tu secreto..."
              rows={3}
              className="block input input-bordered input-sm w-full h-60"
              defaultValue={''}
            />
          </div>

          <button class="btn btn-success w-full mt-4">Enviar</button>

        </div>
      </div>
    </>
  )
}

export default Send