import Image from 'next/image'
import { Inter } from 'next/font/google'
import Income from '@/components/income'
import Type from '@/components/type'
import { useEffect } from 'react'
import { useStateContext } from '@/context/StateContext'
import { useAuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/router'
import Currency from '@/components/currency'

export default function Home() {
  const router = useRouter()
  const {setUsdBalance, setRandBalance, setText, setInput, setTextarea, setButton} = useStateContext()
  const { user } = useAuthContext()
  console.log('User Info');
  console.log(user)

    useEffect(() => {
      setUsdBalance(100)
      setRandBalance(2400)
      setText('Total Income:')

      // if (user == null) {
      //   router.push('/')
      //   return
      // }

    })

  return (
    <>
      <Currency />
      {/* <Income input='Enter Income Amount' textarea='Income Source' button='Enter' /> */}
      {/* <Buckets /> */}
    </>
  )
}
