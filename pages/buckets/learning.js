import BucketLayout from '@/components/bucket-layout'
import Income from '@/components/income'
import { useStateContext } from '@/context/StateContext'
import React, { useEffect } from 'react'

const Learning = () => {
  const {setUsdBalance, setRandBalance, setText} = useStateContext()

    useEffect(() => {
      setUsdBalance(500)
      setRandBalance(1400)
      setText('Learning Balance:')
    })

    const list = [
        '$80 Food',
        '$80 Rent',
    ]

  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <Income />
        <BucketLayout list={list} />
    </div>
  )
}

export default Learning