import React from 'react'
import Card from './card'
import Link from 'next/link'

const Emergency = () => {
    const data = {
        bucket: 'Emergency',
        balance: '500',
        spent: '100'
    }

    const list = [
        '$100 New Tyre',
    ]

  return (
    <div>
      <Link href='/buckets/emergency'>
        <Card data={data} list={list} />
      </Link>
    </div>
  )
}

export default Emergency