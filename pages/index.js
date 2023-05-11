import Image from 'next/image'
import { Inter } from 'next/font/google'
import Income from '@/components/income'
import Buckets from '@/components/buckets'
import { useEffect } from 'react'
import { useStateContext } from '@/context/StateContext'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {setUsdBalance, setRandBalance, setText, setInput, setTextarea, setButton} = useStateContext()

    useEffect(() => {
      setUsdBalance(100)
      setRandBalance(2400)
      setText('Total Income:')
    })

  return (
    <>
      <Income input='Enter Income Amount' textarea='Income Source' button='Enter' />
      <Buckets />
    </>
  )
}
