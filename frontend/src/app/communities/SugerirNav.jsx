import React from 'react'

import { FaPlus } from 'react-icons/fa6'

function SugerirNav() {
    return (
        <>
            <div className="bg-white border-b border-gray-300 sticky top-16">
                <div className="mx-auto max-w-screen-sm px-4 py-1">

                    <a href='https://forms.gle/3f3Pas3vR2e77qFK7' target='_blank'>
                        <button className="btn btn-ghost text-red-700">
                            <FaPlus />
                            SUGERIR UNA COMUNIDAD
                        </button>
                    </a>

                </div>
            </div>
        </>
    )
}

export default SugerirNav