import React from 'react'

const List = ({ list }) => {
  return (
    <div>
        <ol className=' text-slate-400 mt-12 mx-4 text-base list-decimal list-inside'>
            {
                list?.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ol>
    </div>
  )
}

export default List