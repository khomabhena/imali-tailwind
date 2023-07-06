import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Currency = () => {
    const [currencies, setCurrencies] = useState([])
    useEffect(() => {
        const getCurrency = async () => {
            const response = await fetch(`http://localhost:3030/api/v1/currency/colwanymab@gmail.com`)
            const data = await response.json()
            console.log(data)
            setCurrencies(data)
        }

        getCurrency()
    },[])
  return (
    <div className=' mt-8'>
        <ul className='list-decimal list-outside flex flex-col gap-4 text-sky-400'>
            {
                currencies?.map((item, index) => (
                    <li key={index} className=' border cursor-pointer rounded-md w-60 border-slate-800 bg-slate-950/20 px-4 py-2 list-item'><Link href={`income/${item._id}`}><span className=' mr-8 font-semibold'>{item.symbol}</span><span>{item.code}</span></Link></li>
                ))
            }
        </ul>

        {/* Create Currency */}
        <form className=' mt-12 flex flex-col gap-4'>
            <label className=' mt-8 text-slate-400 font-semibold text-lg'>Create New Currency</label>
            <input className=' px-4 py-2 border bg-transparent border-sky-800 rounded-md' type="text" id="" placeholder='Symbol ie $' />
            <input className=' px-4 py-2 border bg-transparent border-sky-800 rounded-md' type="text" id="" placeholder='Code ie USD' />
            <button type='submit' className=' bg-slate-900/70 h-min py-2 px-8 text-slate-300 rounded-md shadow-md shadow-sky-800'>Create Currency</button>
        </form>   
    </div>
  )
}

export default Currency