import React from 'react'
import Link from 'next/link'
//import Image from 'next/image'

import {
    IoMenu, IoPerson,
} from 'react-icons/io5'

//<Image src="/img/logo.svg" width={120} height={120} alt="Logo" />
const navigation = [
    { name: 'Legales', href: '/legal' },
    { name: 'Nosotros', href: '/about' },
    //{ name: 'Nosotros', href: '/about', current: false },
]

function Navigation() {
    return (
        <>
            <div className="bg-red-700 sticky top-0 z-[99]">
                <div className="navbar bg-red-700 mx-auto max-w-screen-sm">
                    <div className="flex-none">
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost">
                                <IoMenu className='h-5 w-5' />
                            </label>
                            <ul
                                tabIndex="0"
                                className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-52"
                            >

                                {navigation.map((item) => (
                                    <li
                                        key={item.name}
                                    >
                                        <Link href={item.href}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 ml-2">
                        <Link href="/">
                            <div className="normal-case text-xl">
                                <img
                                    className="h-4 sm:h-5 w-auto"
                                    src="/img/logo.svg"
                                    alt="Secretos Logo"
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="flex-none">
                        <Link href="/communities">
                            <button className="inline-flex items-center rounded-full bg-red-900 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700">
                                <IoPerson className='h-4 sm:h-5 w-auto mr-2' />
                                Comunidades
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navigation