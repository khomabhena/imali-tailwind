import { fetchMyData } from '@/fetch/fetchMyData'
import React, { useEffect, useState, useRef } from 'react'
import BucketDetails from './bucket-details'
import { postMyData } from '@/fetch/postMyData'

const Bucket = ({ type, email, currency }) => {
    const [currencyDetails, setCurrencyDetails] = useState({})
    const refAmount = useRef('')
    const refReason = useRef('')
    const [typeDetails, setTypeDetails] = useState({})
    const [amount, setAmount] = useState(0)
    const [reason, setReason] = useState('')
    const [balance, setBalance] = useState(0)
    const [withdrawals, setWithdrawals] = useState(0)
    const [error, setError] = useState('')
    
    useEffect(() => {
        const getCurrencyDetails = async () => {
            const { status, data } = await fetchMyData(`/api/v1/currency/details/${currency}`)
    
            if (status == 200) {
                setCurrencyDetails(data)
            }
        }

        getTypeDetails()
        getCurrencyDetails()
        getBalance()
        getWithdrawals()
    }, [])

    const getTypeDetails = async () => {
        const {status, data} = await fetchMyData(`/api/v1/type/${type}`, {})
        if (status == 200) {
            console.log(data)
            setTypeDetails(data)
        }
    }

    const getBalance = async () => {
        const { status, data } = await fetchMyData(`/api/v1/bucket/balance`, { email, currency, type })
    
        if (status == 200)
          setBalance(data.balance)
    }

    const getWithdrawals = async () => {
        const { status, data } = await fetchMyData(`/api/v1/bucket/withdrawals`, { email, currency, type })
    
        if (status == 200) {
          const val = data.map(item => item.amount).reduce((sum, val) => sum + val, 0)
          setWithdrawals(val)
        }
    }

    const handleWithdrawal = async (e) => {
        e.preventDefault()
        setError('')
        const { status, data } = await postMyData(`/api/v1/bucket/withdraw`, { email, type, amount, currency, reason })

        if (status == 200) {
            refAmount.current.value = ''
            refReason.current.value = ''
            getWithdrawals()
            getBalance()
        } else {
            setError(data.message)
        }
    }
  return (
    <div className=' w-full'>
        <form onSubmit={handleWithdrawal} className=' mt-12 flex gap-4 justify-center'>
            <div className={` text-right w-16 text-slate-300 text-xl font-semibold`}>{currencyDetails.symbol}</div>
            <div className=' flex flex-col gap-4'>
                <input ref={refAmount} onChange={(e) => setAmount(e.target.value)} className=' text-slate-300 px-4 py-2 border bg-transparent border-sky-800 rounded-md' type="number" id="" placeholder='Enter amount' />
                <textarea rows={2} ref={refReason} onChange={(e) => setReason(e.target.value)} className=' text-slate-300 px-4 py-2 border bg-transparent border-sky-800 rounded-md' type="text" id="" placeholder='Reason for withdrawing' />
                <button type='submit' className=' bg-slate-900/70 h-min py-2 px-8 text-slate-300 rounded-md shadow-md shadow-sky-800'>Withdraw Amount</button>
                <div className=' flex justify-between gap-8 text-red-500  text-lg'>
                    <p>{error}</p>
                </div>
                <div className=' flex justify-between gap-8 mt-4 text-slate-400  text-lg'>
                    <p>{typeDetails.name} Income:</p>
                    <p className=' font-semibold text-slate-300'>{currencyDetails.symbol}{(Math.round((balance + Number.EPSILON) * 100) / 100).toFixed(2)}</p>
                </div>
                <div className=' flex justify-between gap-8 text-slate-400  text-lg'>
                    <p>Total Spent:</p>
                    <p className=' font-semibold text-slate-300'>{currencyDetails.symbol}{(Math.round((withdrawals + Number.EPSILON) * 100) / 100).toFixed(2)}</p>
                </div>
            </div>    
            <div className={` w-16 text-slate-300 text-xl font-semibold`}>{currencyDetails.code}</div>
        </form>

        <BucketDetails email={email} type={type} currency={currency} currencyDetails={currencyDetails} />
    </div>
  )
}

export default Bucket