import React from 'react'
import Card from './card'
import Link from 'next/link'

const Investment = () => {
    const data = {
        bucket: 'Investment',
        balance: '250',
        spent: '9000'
    }

    const list = [
        '$9000 Card',
    ]

  return (
    <div>
      <Link href='/buckets/investment'>
        <Card data={data} list={list} />
      </Link>
    </div>
  )
}

export default Investment