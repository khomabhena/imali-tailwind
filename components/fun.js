import React from 'react'
import Card from './card'
import Link from 'next/link'

const Fun = () => {
    const data = {
        bucket: 'Fun',
        balance: '45',
        spent: '28'
    }

    const list = [
        '$5 Beer',
        '$20 fuel',
        '$3 Everest'
    ]
  return (
    <div>
      <Link href='/buckets/fun'>
        <Card data={data} list={list} />
      </Link>
    </div>
  )
}

export default Fun