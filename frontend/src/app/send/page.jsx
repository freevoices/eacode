'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const initialState = {
    gender: '',
    age: 0,
    message: '',
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
    {
        value: 'other',
        label: 'Otro',
    },
]

function Send() {
    const [formInfo, setFormInfo] = useState(initialState)
    const router = useRouter()

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
                'https://ea-backend.onrender.com/api/secrets',
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
                        type="text inline"
                        placeholder=" "
                        class="input input-bordered input-sm w-12 max-w-xs"
                        name="age"
                        onChange={handleFormInfo}
                    />

                    <p className="inline mr-2 ml-2 font-semibold">años y soy</p>
                    <select
                        id="gender"
                        name="gender"
                        autoComplete="gender-name"
                        className="input input-bordered input-sm w-50 max-w-xs"
                        onChange={handleFormInfo}
                    >
                        <option value="">...</option>
                        {genderList.map(({ value, label }) => (
                            <option value={value} key={'option-' + value}>
                                {label}
                            </option>
                        ))}
                    </select>

                    <div className="mt-4">
                        <textarea
                            id="secret"
                            name="message"
                            placeholder="Tu secreto..."
                            rows={3}
                            className="block input input-bordered input-sm w-full h-60"
                            defaultValue={''}
                            onChange={handleFormInfo}
                        />
                    </div>

                    <input
                        type="submit"
                        value="Enviar"
                        className={'btn btn-success w-full mt-4'}
                    />
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
