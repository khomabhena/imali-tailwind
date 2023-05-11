import React from 'react'

const BucketLayout = ({list}) => {
  return (
    <div className=' w-full'>
        <h2 className=' w-full mt-24 text-2xl font-semibold text-slate-300'>Total Spending</h2>
        <div className='w-full'>
            <ol className=' mt-4 self-start text-slate-400 text-xl list-decimal list-inside'>
                {
                    list?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ol>
        </div>
    </div>
  )
}

export default BucketLayout