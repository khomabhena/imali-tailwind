import React, { useEffect, useState } from 'react'
import TypeCard from './type-card'

const Type = ({ email, currency, totalIncome }) => {

  useEffect(() => {

  }, [totalIncome])

  const getType = async () => {

  }

  return (
    <div className=' mt-16 mb-12'>
      <h2 className=' text-2xl text-slate-300 font-semibold'>Buckets</h2>
      <div className=' mt-4 flex flex-wrap gap-4 justify-start'>
          <TypeCard />
          <TypeCard />
          <TypeCard />
          <TypeCard />
          <TypeCard />
      </div>
    </div>
  )
}

export default Type