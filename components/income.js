import { useStateContext } from '@/context/StateContext'
import React, { useState } from 'react'
import { BiDollar } from 'react-icons/bi'
import { HiSwitchVertical } from 'react-icons/hi'

const Income = ({ input, textarea, button }) => {
    const [rand, setRand] = useState(false)
 
    const handleClick = (event) => {
        event.preventDefault()
    }

  return (
    <div className=''>
        <form onSubmit={handleClick} className=' mt-16 flex gap-4'>
            <BiDollar className={`${rand ? 'hidden' : 'block'} text-slate-300`} size={25}  />
            <div className={`${rand ? 'block' : 'hidden'} text-slate-300 text-xl font-semibold`}>R</div>
            <div className=' flex flex-col gap-4'>
              <input placeholder={input || 'Enter Amount'} className=' ring-1 text-slate-300 ring-slate-400 rounded-sm px-4 py-2 bg-transparent' type="number" />
              <textarea rows={2} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder={textarea || 'Reason for withdrawing'} />
              <button type='submit' className=' bg-slate-400 h-min py-2 px-8 text-slate-900 rounded-sm shadow-md'>{button || 'Withdraw'}</button>
            </div>    
            <HiSwitchVertical onClick={() => setRand(prev => !prev)} className=' text-slate-300 cursor-pointer' size={25}  />
        </form>
    </div>
  )
}

export default Income