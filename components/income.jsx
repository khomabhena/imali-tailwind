import { fetchMyData } from '@/fetch/fetchMyData'
import { postMyData } from '@/fetch/postMyData'
import { Router } from 'next/router'
import React, { useState, useEffect, useRef } from 'react'
import Type from './type'
import IncomeDetails from './income-details'

const Income = ({email, currency}) => {
    const refAmount = useRef('')
    const refSource = useRef('')
    const [amount, setAmount] = useState(0)
    const [source, setSource] = useState('')
    const [currencyDetails, setCurrencyDetails] = useState({})
    const [totalIncome, setTotalIncome] = useState(0)
    
    useEffect(() => {
        const getCurrencyDetails = async () => {
            const { status, data } = await fetchMyData(`/api/v1/currency/details/${currency}`)
    
            if (status == 200) {
                setCurrencyDetails(data)
            }
        }

        getCurrencyDetails()
        getTotalIncome()
    })


    const getTotalIncome = async () => {
        const { status, data } = await fetchMyData(`/api/v1/income/total`, { email, currency })

        if (status == 200) {
            setTotalIncome(data)
        }
    }

    const handleClick = async (e) => {
        e.preventDefault()
        const { status, data } = await postMyData(`/api/v1/income`, { email, amount, currency, source })

        if (status == 200) {
            refAmount.current.value = ''
            refSource.current.value = ''
            getTotalIncome()
        }
    }

  return (
    <div className=' w-full'>
        <form onSubmit={handleClick} className=' mt-12 flex gap-4 justify-center'>
            <div className={` text-right w-16 text-slate-300 text-xl font-semibold`}>{currencyDetails.symbol}</div>
            <div className=' flex flex-col gap-4'>
                <input ref={refAmount} onChange={(e) => setAmount(e.target.value)} className=' text-slate-300 px-4 py-2 border bg-transparent border-sky-800 rounded-md' type="number" id="" placeholder='Enter income amount' />
                <textarea rows={2} ref={refSource} onChange={(e) => setSource(e.target.value)} className=' text-slate-300 px-4 py-2 border bg-transparent border-sky-800 rounded-md' type="text" id="" placeholder='Income source' />
                <button type='submit' className=' bg-slate-900/70 h-min py-2 px-8 text-slate-300 rounded-md shadow-md shadow-sky-800'>Enter Income</button>
                <div className=' flex justify-between gap-8 mt-4 text-slate-400  text-lg'>
                    <p>Total Income:</p>
                    <p className=' font-semibold text-slate-300'>{currencyDetails.symbol}{totalIncome}</p>
                </div>
            </div>    
            <div className={` w-16 text-slate-300 text-xl font-semibold`}>{currencyDetails.code}</div>
        </form>

        <Type email={email} currency={currency} totalIncome={totalIncome} currencyDetails={currencyDetails} />
        <IncomeDetails email={email} currency={currency} totalIncome={totalIncome} currencyDetails={currencyDetails} />
    </div>
  )
}

export default Income