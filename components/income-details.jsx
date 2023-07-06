import { fetchMyData } from '@/fetch/fetchMyData'
import React, { useEffect, useState } from 'react'

const IncomeDetails = ({ email, currency, currencyDetails, totalIncome }) => {
    const [income, setIncome] = useState([])

    useEffect(() => {
        getIncome()
    }, [totalIncome])

    const getIncome = async () => {
        const { status, data } = await fetchMyData(`/api/v1/income`, { email, currency })

        if (status == 200)
            setIncome(data)
    }

  return (
    <div className=' mt-16 mb-12'>
      <h2 className=' text-2xl text-slate-300 font-semibold'>Income Details</h2>
      <div className=' mt-4 flex flex-wrap gap-4 justify-start'>
          <ul className=' mx-8 list-outside text-slate-400 list-decimal'>
            {
                income?.map(item => (
                    <li key={item._id} className=' list-item'>
                        <div className=' flex gap-4'>
                            <div className=' w-32 text-slate-300 font-semibold text-lg'>{currencyDetails.symbol}{item.amount}</div>
                            <span className=' text-slate-500'>{item.source}</span>
                        </div>
                    </li>
                ))
            }
          </ul>
      </div>
    </div>
  )
}

export default IncomeDetails