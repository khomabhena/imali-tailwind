import Income from '@/components/income'
import { useRouter } from 'next/router'
import React from 'react'

const Currency = ({   }) => {
    const router = useRouter()
    const {email, currency } = router.query
    
  return (
    <div>
        <Income />
    </div>
  )
}

export default Currency