import React from 'react'
import Card from './card'
import Link from 'next/link'

const Necessity = () => {
    const data = {
        bucket: 'Necessity',
        balance: '45',
        spent: '160'
    }

    const list = [
        '$80 Food',
        '$80 Rent',
    ]
  return (
    <div>
      <Link href='/buckets/necessity'>
        <Card data={data} list={list} />
      </Link>
    </div>
  )
}

export default Necessity