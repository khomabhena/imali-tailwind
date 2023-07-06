import React from 'react'
import { Oval } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <div>
        <Oval height={30} width={30} color="#000" wrapperStyle={{}} wrapperClass="" visible={true} ariaLabel='oval-loading' secondaryColor="#ffffff" strokeWidth={2} strokeWidthSecondary={2} />
    </div>
  )
}

export default Spinner