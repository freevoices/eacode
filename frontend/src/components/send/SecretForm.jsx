import React from 'react'
import Link from 'next/link';
import {
    IoPaperPlane,
} from 'react-icons/io5'

function SecretSend() {
    return (
        <>
            <Link href="/send">
                <button className="btn btn-ghost">
                    <IoPaperPlane className='h-5 w-5'/>
                    Escribir
                </button>
            </Link>
        </>
    )
}

export default SecretSend