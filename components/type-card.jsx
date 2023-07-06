import { fetchMyData } from '@/fetch/fetchMyData'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const TypeCard = ({data, type, email, currency, currencyDetails}) => {
  const [balance, setBalance] = useState(0)
  const [withdrawals, setWithdrawals] = useState(0)
  
  useEffect(() => {
    getBalance()
    getWithdrawals()
  })

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

  return (
    
      <div className=' flex-1 w-60 basis-60 border border-sky-800 shadow-md shadow-sky-800 rounded-md cursor-pointer'>
          <Link href={{
            pathname: '/bucket/[type]',
            query: {
              type,
              email,
              currency
            }
          }}>
            <div className=' flex justify-between items-center bg-sky-950 rounded-md px-4 py-4'>
                <div className='text-slate-300 text-lg'>{data.name}</div>
                <div className='text-slate-300 text-xl font-semibold'>{currencyDetails.symbol}{(Math.round((balance + Number.EPSILON) * 100) / 100).toFixed(2)}</div>
            </div>
            <div className=' flex justify-between px-4 border-slate-400 py-4'>
                <p className='  text-lg text-slate-400'>Total Spent:</p>
                <p className=' text-base text-slate-400'>{currencyDetails.symbol}{(Math.round((withdrawals + Number.EPSILON) * 100) / 100).toFixed(2)}</p>
            </div>
          </Link>
      </div>
  )
}

export default TypeCard