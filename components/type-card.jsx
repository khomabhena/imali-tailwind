import React from 'react'

const TypeCard = () => {
  return (
    <div className=' flex-1 w-60 basis-60 border border-sky-800 shadow-md shadow-sky-800 rounded-md cursor-pointer'>
        <div className=' flex justify-between items-center bg-sky-950 rounded-md px-4 py-4'>
            <div className='text-slate-300 text-lg'>Necessity</div>
            <div className='text-slate-300 text-xl font-semibold'>$250</div>
        </div>

        <div className=' flex justify-between px-4 border-slate-400 py-4'>
            <p className=' font-semibold text-lg text-slate-400'>Total Spent:</p>
            <p className=' font-bold text-lg text-slate-400'>$20</p>
        </div>
    </div>
  )
}

export default TypeCard