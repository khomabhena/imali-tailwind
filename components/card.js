import React from 'react'
import List from './list'

const Card = ({ data, list }) => {
  return (
    <div className=' border border-slate-400 rounded-md mb-12 cursor-pointer'>
        <h2 className=' flex justify-center items-center bg-sky-950 text-slate-200 font-semibold text-lg rounded-md py-4'>{data?.bucket}</h2>
        <div className=' flex justify-center text-slate-200 text-6xl mt-8'>${data?.balance}</div>
        <div className=' flex justify-center text-slate-400 text-2xl'>R{data?.balance}</div>

        <List list={list} />    
    
        <div className=' flex justify-between px-4 mt-12 border-t border-slate-400 py-4'>
            <p className=' font-semibold text-lg text-slate-500'>Total Spent:</p>
            <p className=' font-bold text-lg text-slate-400'>${data?.spent}</p>
        </div>
    </div>
  )
}

export default Card