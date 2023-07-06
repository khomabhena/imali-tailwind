import Bucket from '@/components/bucket'
import { useRouter } from 'next/router'
import React from 'react'

const BucketType = () => {
    const router = useRouter()
    const { email, currency, type } = router.query
  return (
    <>
      <Bucket email={email} currency={currency} type={type} />
    </>
  )
}

export default BucketType