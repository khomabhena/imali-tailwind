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
  return (
    <>
      <Currency />
    </>
  )
}
