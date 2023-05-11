import React from 'react'
import Card from './card'
import Necessity from './necessity'
import Investment from './investment'
import Learning from './learning'
import Emergency from './emergency'
import Fun from './fun'

const Buckets = ({ children }) => {
  return (
    <div className=' mt-24 w-full grid grid-cols-1 md:grid-cols-4 gap-8'>
        <Necessity />
        <Investment />
        <Learning />
        <Emergency />
        <Fun />
    </div>
  )
}

export default Buckets