import { useStateContext } from '@/context/StateContext'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Layout = ({ children }) => {

  const { text, randBalance, usdBalance } = useStateContext()

  return (
    <div className=' px-4 md:px-8 bg-gradient-to-r from-cyan-900 to-sky-950 min-h-screen w-full flex flex-col items-center'>
        <div className='mt-12 w-full flex justify-between'>
          <Link href='/'>
            <Image className=' h-20 md:h-24 w-auto' src='/imali-logo-white.png' height={200} width={300} alt="" />
          </Link>
          <div className=' p-4 rounded-md bg-opacity-50 flex gap-4 bg-slate-950'>
            <h2 className=' md:text-lg text-slate-400 font-semibold'>{text}</h2>
            <div className=' text-lg md:text-xl text-slate-300 font-bold'>
              <h3>${usdBalance}</h3>
              <h3>R{randBalance}</h3>
            </div>
          </div>
        </div>
        {children}
    </div>
  )
}

export default Layout