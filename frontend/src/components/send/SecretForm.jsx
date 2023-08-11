import React from 'react'
import Link from 'next/link';

function SecretSend() {
    return (
        <>
            <Link href="/send">
                <button className="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 32 32"><path d="M27.71 4.29a1 1 0 0 0-1.05-.23l-22 8a1 1 0 0 0 0 1.87l8.59 3.43L19.59 11L21 12.41l-6.37 6.37l3.44 8.59A1 1 0 0 0 19 28a1 1 0 0 0 .92-.66l8-22a1 1 0 0 0-.21-1.05z" fill="currentColor"></path></svg>
                    Escribir
                </button>
            </Link>
        </>
    )
}

export default SecretSend