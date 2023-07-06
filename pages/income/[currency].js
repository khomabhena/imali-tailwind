// import Income from '@/components/income'
import Income from '@/components/income'
import { useRouter } from 'next/router'
import React from 'react'

const Currency = () => {
    const router = useRouter()
    const {email, currency } = router.query
    
  return (
    <>
        <Income email={email} currency={currency} />
    </>
  )
}

export default Currency