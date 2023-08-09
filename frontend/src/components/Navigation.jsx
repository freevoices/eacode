import React from 'react'
import Link from 'next/link'

function Navigation() {
    return (
        <>
            <div className="bg-neutral">
                <div className="navbar bg-neutral mx-auto max-w-screen-md">
                    <div className="flex-none">
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block w-5 h-5 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex="0"
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li><Link href="/legal">Legales</Link></li>
                                <li><Link href="/rules">Reglas</Link></li>
                                <li><Link href="/about">Sobre nosotros</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1">
                        <Link href="/">
                        <div className="btn btn-ghost normal-case text-xl">
                            EstudianteAnonimo
                        </div>
                        </Link>
                    </div>
                    <div className="flex-none">
                        <Link href="/send">
                        <button className="btn btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 20l-3-3H7a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-2l-3 3" />
                                    <path d="M8 9h8" />
                                    <path d="M8 13h6" />
                                </g>
                            </svg>
                            Escribir
                        </button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navigation