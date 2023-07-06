import { fetchMyData } from '@/fetch/fetchMyData'
import { postMyData } from '@/fetch/postMyData'
import Link from 'next/link'
import React, { useEffect, useState, useRef } from 'react'

const Currency = () => {
    const email = 'colwanymab@gmail.com'
    const [currencies, setCurrencies] = useState([])
    const [symbol, setSymbol] = useState('')
    const [code, setCode] = useState('')
    const refSymbol = useRef('')
    const refCode = useRef('')

    useEffect(() => {
        getCurrencies()
    },[])

    const getCurrencies = async () => {
        // const response = await fetch(`http://localhost:3030/api/v1/currency/${email}`)
        const { status, data } = await fetchMyData(`/api/v1/currency/${email}`)
        
        if (status === 200) {
            setCurrencies(data)
        }
    }

    const handleCreateCurrency = async (e) => {
        e.preventDefault()
        // const response = await fetch(`http://localhost:3030/api/v1/currency`, {
        //     method: 'POST',
        //     body: JSON.stringify({ code, symbol, email }),
        //     headers: { 
        //         'Content-Type': 'application/json'
        //     }
        // })
        const { status, data } = await postMyData(`/api/v1/currency`, { code, symbol, email })

        if (status == 200) {
            getCurrencies()
            refSymbol.current.value = ''
            refCode.current.value = ''
        }
    }

  return (
    <div className=' mt-8'>
        <ul className='list-decimal list-outside flex flex-col gap-4 text-sky-400'>
            {
                currencies?.map(({_id, symbol, code}) => (
                    <Link href={{
                            pathname: '/income/[currency]',
                            query: {
                                currency: _id,
                                email: email
                            }
                        }} 
                        key={_id} 
                        className=' border cursor-pointer rounded-md w-60 border-slate-800 bg-slate-950/20 px-4 py-2 list-item'>
                            <span className=' mr-8 font-semibold'>{symbol}</span><span>{code}</span>
                    </Link>
                ))
            }
        </ul>

        {/* Create Currency */}
        <form onSubmit={handleCreateCurrency} className=' mt-12 flex flex-col gap-4'>
            <label className=' mt-8 text-slate-400 font-semibold text-lg'>Create New Currency</label>
            <input ref={refSymbol} onChange={(e) => setSymbol(e.target.value)} className=' text-slate-300 px-4 py-2 border bg-transparent border-sky-800 rounded-md' type="text" id="" placeholder='Symbol ie $' />
            <input ref={refCode} onChange={(e) => setCode(e.target.value)} className=' text-slate-300 px-4 py-2 border bg-transparent border-sky-800 rounded-md' type="text" id="" placeholder='Code ie USD' />
            <button type='submit' className=' bg-slate-900/70 h-min py-2 px-8 text-slate-300 rounded-md shadow-md shadow-sky-800'>Create Currency</button>
        </form>   
    </div>
  )
}

export default Currency