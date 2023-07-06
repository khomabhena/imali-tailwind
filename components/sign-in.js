import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Spinner from './spinner'
import signIn from '@/firebase/signin'
import { toastNormal } from './toast'
import { useAuthContext } from '@/context/AuthContext'

const SignInComponent = () => {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const { user } = useAuthContext()
    console.log(user)

    const handleForm = async (event) => {
        event.preventDefault()
        setError('')
        setLoading(true)

        const { result, error } = await signIn(email, password)

        if (error) {
            setError(error.code.includes('user-not-found') 
                ? signUp() 
                : error.code.includes('network') 
                ? 'Network Connection Error'
                : 'Incorrect Email or Password')

            setLoading(false)
            return console.log(error.code)
        } else {
            return router.push("/applicant/profile")
        }

    }

    const signUp = async () => {
      const { result, error } = await signUp(email, password)

      if (error) {
          return console.log(error)
      }

      setError('')
      toastNormal('User not found, signing you up')
    }

  return (
    <div className=' px-4 md:px-8 bg-gradient-to-r from-cyan-900 to-sky-950 min-h-screen w-full flex flex-col items-center'>
      <div className='mt-12 w-full flex justify-between'>
        <Link href='/'>
          <Image className=' h-20 md:h-24 w-auto' src='/imali-logo-white.png' height={200} width={300} alt="" />
        </Link>
      </div>
      <div className=''>
          <h1 className=' text-center  text-slate-200 font-semibold text-2xl'>Welcome!</h1>
          <p className=' text-center text-slate-300 text-base'>Sign in or Sign up</p>
      </div>

      {/* Error */}
      <div className={`${error === '' ? 'hidden' : 'block'} bg-red-500 text-center py-4 px-12 rounded-md mt-4 bg-opacity-80 text-slate-200`}>
          {error}
      </div>

      {/* Spinner Loader */}
      <div className={`${loading ? 'flex' : 'hidden'} flex justify-center h-8 mt-4 text-center`}>
        <Spinner />
      </div>

      <form onSubmit={handleForm} className=' px-8 md:px-12 mt-8'>
        <div className=' flex flex-col gap-4'>
          <div className='flex flex-1 flex-col gap-2'>
              <label className=' text-slate-300'>Email</label>
              <input onChange={(e) => setEmail(e.target.value)} required className=' text-slate-100  rounded-md px-4 py-2 bg-slate-900 bg-opacity-40' type="email" placeholder='Enter your email address' />
          </div>
          <div className=' flex flex-1 flex-col gap-2'>
              <label className=' text-slate-300'>Password</label>
              <input onChange={(e) => setPassword(e.target.value)} required className=' text-slate-600  rounded-md px-4 py-2 bg-slate-900 bg-opacity-40' type="password" placeholder='Enter your password' />
          </div>
        </div>

        <div className=' flex flex-col gap-2'>
          <div className=' mt-2'>
              <button type='submit' className=' bg-sky-600 text-center cursor-pointer w-full mt-12 h-min py-2 px-8 text-slate-50 rounded-md shadow-md'>Login</button>
          </div>
          <div className=' mt-2 hidden'>
              <button type='submit' className=' bg-sky-600 bg-opacity-10 text-center cursor-pointer w-full mt-4 h-min py-2 px-8 text-slate-50 rounded-md shadow-md'>Not Now</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignInComponent