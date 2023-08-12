import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {
    IoMenu, IoPaperPlane,
} from 'react-icons/io5'


//<Image src="/img/logo.svg" width={120} height={120}alt="Logo" />

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
                                <li><Link href="/legal">Legales</Link></li>
                                <li><Link href="/about">Sobre nosotros</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 ml-2">
                        <Link href="/">
                            <div className="normal-case text-xl">
                                <Image src="/img/logo.svg" width={150} height={150} alt="Logo" />
                            </div>
                        </Link>
                    </div>
                    <div className="flex-none">
                        <Link href="/send">
                            <button className="btn btn-ghost">
                                <IoPaperPlane className='h-5 w-5' />
                                <p className='hidden md:block'>Escribir</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navigation