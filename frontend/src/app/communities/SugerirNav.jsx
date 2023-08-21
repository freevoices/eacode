import React from 'react'

import {FaPlus} from 'react-icons/fa6'

function SugerirNav() {
    return (
        <>
            <div className="bg-white border-b border-gray-300 sticky top-16">
                <div className="mx-auto max-w-screen-sm px-4 py-1">

                    <button className="btn btn-ghost text-red-700">
                        <FaPlus/>
                        SUGERIR UNA COMUNIDAD
                    </button>

                </div>
            </div>
        </>
    )
}

export default SugerirNav