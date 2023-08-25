'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { IoPaperPlane } from 'react-icons/io5'

import apiURL from '@/utils/api';
import SendNav from './SendNav';


const initialState = {
    gender: 'Persona',
    age: 13,
    message: '',
    community: 'general',
}

const genderList = [
    {
        value: 'Hombre',
        label: 'Hombre',
    },
    {
        value: 'Mujer',
        label: 'Mujer',
    },
]

function Send() {
    const [formInfo, setFormInfo] = useState(initialState)
    const router = useRouter()

    //disable buton
    const isFormIncomplete = !(
        formInfo.age > 0 &&
        formInfo.message.trim().length > 0
    )

    function handleFormInfo({ target }) {
        setFormInfo((prevState) => {
            return {
                ...prevState,
                [target.name]: target.value,
            }
        })
    }

    async function sendMessage(e, body) {
        console.log(body)
        e.preventDefault()

        try {
            const res = await fetch(
                `${apiURL}/secrets`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ data: { ...body } }),
                }
            )

            console.log(res)
        } catch (error) {
            console.log(error)
        }
        router.push('/')
        setFormInfo(initialState)
    }

    return (
        <>
            <SendNav />
            <div>
                <form
                    className="mx-auto max-w-screen-sm py-6 px-4 text-sm"
                    onSubmit={(e) => sendMessage(e, formInfo)}
                >
                    <p className="inline mr-2 font-medium">Soy</p>

                    <select
                        id="gender"
                        name="gender"
                        className="input input-bordered input-sm w-fit max-w-xs"
                        onChange={handleFormInfo}
                        required
                    >
                        <option value="Persona">...</option>
                        {genderList.map(({ value, label }) => (
                            <option value={value} key={'option-' + value}>
                                {label}
                            </option>
                        ))}
                    </select>


                    <p className="inline mr-2 ml-2">y tengo</p>
                    <input
                        type="number"
                        placeholder="18"
                        className="input input-bordered input-sm w-fit max-w-xs"
                        name="age"
                        min="13"
                        max="99"
                        onChange={handleFormInfo}
                        required
                    />

                    <p className="inline mr-2 ml-2">años</p>

                    <div className='pt-4'>
                        <p className="inline mr-2 font-semibold">Elige una comunidad</p>
                        <select
                            id="community"
                            name="community"
                            className="input input-bordered input-sm w-fit max-w-xs"
                            onChange={handleFormInfo}
                            required
                        >
                            <option value="general">General</option>
                            <option value="chupao">Chupao</option>
                            <option value="gaming">Gaming</option>
                            <option value="hot">Hot</option>
                            <option value="amistad">Amistad</option>
                            <option value="sobrelaapp">SobreLaApp</option>
                        </select>
                    </div>

                    <div className="mt-4">
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Tu secreto..."
                            className="block input input-bordered input-sm w-full h-40"
                            defaultValue={''}
                            onChange={handleFormInfo}
                            required
                        />
                    </div>

                    <button className="btn btn-success w-full mt-4" type="submit" disabled={isFormIncomplete}>
                        <IoPaperPlane className='h-5 w-5' />
                        Enviar
                    </button>
                    {/* <button class="btn btn-success w-full mt-4">Enviar</button> */}

                    <div className="bg-yellow-50 px-4 py-3 text-sm font-base text-yellow-900 mt-4">
                        <p>100% anonimo</p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Send