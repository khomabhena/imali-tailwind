import React from 'react'
import Card from './card'
import Link from 'next/link'

const Learning = () => {
    const data = {
        bucket: 'Learning',
        balance: '405',
        spent: '45'
    }

    const list = [
        '$45 Codecademy',
    ]

  return (
    <div>
      <Link href='/buckets/learning'>
        <Card data={data} list={list} />
      </Link>
    </div>
  )
}

export default Learning