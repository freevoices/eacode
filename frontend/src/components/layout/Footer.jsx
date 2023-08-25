import React from 'react'
import Image from 'next/image'
import {
    IoLogoInstagram,
    IoLogoTiktok,
} from 'react-icons/io5'

function Footer() {
    return (
        <>
            <div className="bg-neutral">
                <footer className="footer pt-8 pb-20 p-4 bg-neutral text-neutral-content mx-auto max-w-screen-sm">
                    <div>
                        <Image
                            src="/img/icon.svg"
                            width={50}
                            height={50}
                            alt="Logo"
                            className="pb-4"
                        />
                        <p>
                            Secretos.pro
                            <br />
                            Hecho ❤️ en Perú
                        </p>
                    </div>
                    <div>
                        <span className="footer-title">Social</span>
                        <div className="grid grid-flow-col gap-4">
                            <a href="https://www.instagram.com/secretos.pro/" target="_blank">
                                <IoLogoInstagram className='h-6 w-6' />
                            </a>
                            <a href="https://www.tiktok.com/@secretos.pro" target="_blank">
                                <IoLogoTiktok className='h-6 w-6' />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>

        </>
    )
}

export default Footer