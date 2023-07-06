import { fetchMyData } from '@/fetch/fetchMyData'
import React, { useEffect, useState } from 'react'

const BucketDetails = ({ type, currency, email, currencyDetails }) => {
    const [withdrawals, setWithdrawals] = useState([])

    useEffect(() => {
        getWithdrawals()
    })

    const getWithdrawals = async () => {
        const { status, data } = await fetchMyData(`/api/v1/bucket/withdrawals`, { email, type, currency })

        if (status == 200)
            setWithdrawals(data)
    }
  return (
    <div className=' mt-16 mb-12'>
      <h2 className=' text-2xl text-slate-300 font-semibold'>Total Spending/Withdrawals</h2>
      <div className=' mt-4 flex flex-wrap gap-4 justify-start'>
          <ul className=' mx-8 list-outside text-slate-400 list-decimal'>
            {
                withdrawals?.map(item => (
                    <li key={item._id} className=' list-item'>
                        <div className=' flex gap-4'>
                            <div className=' w-32 text-slate-300 font-semibold text-lg'>{currencyDetails.symbol}{item.amount}</div>
                            <span className=' text-slate-500'>{item.reason}</span>
                        </div>
                    </li>
                ))
            }
          </ul>
      </div>
    </div>
  )
}

export default BucketDetails