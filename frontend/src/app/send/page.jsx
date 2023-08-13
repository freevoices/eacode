'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { IoPaperPlane } from 'react-icons/io5'

const initialState = {
    gender: 'other',
    age: 0,
    message: '',
    uni: 'NONE',
}

const genderList = [
    {
        value: 'man',
        label: 'Hombre',
    },
    {
        value: 'woman',
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
                'https://api.secretos.pro/api/secrets',
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
            <div className="bg-gray-100" data-theme="light">
                <form
                    className="mx-auto max-w-screen-sm py-6 px-4"
                    onSubmit={(e) => sendMessage(e, formInfo)}
                >
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight mb-4">
                        🤫 Tu secreto
                    </h2>

                    <p className="inline mr-2 font-semibold">Tengo</p>
                    <input
                        type="number"
                        placeholder="18"
                        className="input input-bordered input-sm w-16 max-w-xs"
                        name="age"
                        min="13" 
                        max="99"
                        onChange={handleFormInfo}
                        required
                    />

                    <p className="inline mr-2 ml-2 font-semibold">años y soy</p>
                    <select
                        id="gender"
                        name="gender"
                        className="input input-bordered input-sm w-auto max-w-xs"
                        onChange={handleFormInfo}
                        required
                    >
                        <option value="other">...</option>
                        {genderList.map(({ value, label }) => (
                            <option value={value} key={'option-' + value}>
                                {label}
                            </option>
                        ))}
                    </select>

                    <div className='pt-4'>
                    <p className="inline mr-2 font-semibold">y estudio en</p>
                    <select
                        id="uni"
                        name="uni"
                        className="input input-bordered input-sm w-auto max-w-xs"
                        onChange={handleFormInfo}
                        required
                    >
                        <option value="NONE">...</option>
                        <option value="UPAO">UPAO</option>
                        <option value="UCV">UCV</option>
                        <option value="UNT">UNT</option>
                        <option value="UPN">UPN</option>
                        <option value="PUCP">PUCP</option>
                        <option value="UDEP">UDEP</option>
                        <option value="UNMSM">UNMSM</option>
                        <option value="UTEC">UTEC</option>
                        <option value="ULIMA">ULIMA</option>
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
                        <p>Tu identidad nunca será revelada públicamente.</p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Send