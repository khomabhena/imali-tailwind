import { useStateContext } from '@/context/StateContext'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Layout = ({ children }) => {

  const { text, randBalance, usdBalance } = useStateContext()

  return (
    <div className=' px-4 md:px-8 bg-gradient-to-r from-cyan-900 to-sky-950 min-h-screen w-full flex flex-col items-center'>
        <div className=' mt-4 w-full flex flex-col items-center'>
          <Link href='/'>
            <Image className=' h-14 md:h-16 w-auto' src='/imali-logo-white-transparent.png' height={200} width={300} alt="" />
          </Link>
          <ul className=' flex mt-4 gap-8 font-semibold text-lg text-slate-300'>
            <li className=' border px-4 rounded-md border-slate-500 py-1'><Link href='/'>Currency</Link></li>
            {/* <li className=' border px-4 rounded-md border-slate-500 py-1'><Link href='/income'>Income</Link></li> */}
          </ul>
        </div>
        {children}
    </div>
  )
}

export default Layout