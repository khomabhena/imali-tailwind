import React, { useEffect, useState } from 'react'
import TypeCard from './type-card'
import { fetchMyData } from '@/fetch/fetchMyData'

const Type = ({ email, currency, totalIncome, currencyDetails }) => {
  const [types, setTypes] = useState([])
  useEffect(() => {

    getType()
  }, [totalIncome])

  const getType = async () => {
      const { status, data } = await fetchMyData(`/api/v1/type`, {})

      if (status == 200) 
        setTypes(data)

  }

  return (
    <div className=' mt-16 mb-12'>
      <h2 className=' text-2xl text-slate-300 font-semibold'>Buckets</h2>
      <div className=' mt-4 flex flex-wrap gap-4 justify-start'>
          {
            types?.map(item => (
              <TypeCard key={item._id} data={item} 
                email={email} type={item._id} 
                currency={currency} currencyDetails={currencyDetails} />
            ))
          }
      </div>
    </div>
  )
}

export default Type