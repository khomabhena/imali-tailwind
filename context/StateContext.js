import React, { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext()

export const StateContext = ({children}) => {
    const [usdBalance, setUsdBalance] = useState(0)
    const [randBalance, setRandBalance] = useState(0)
    const [input, setInput] = useState('Enter Withdrawal Amount')
    const [textarea, setTextarea] = useState('Reason for withdrawing')
    const [button, setButton] = useState('Withdraw')
    const [text, setText] = useState('Total Income:')

  return (
    <Context.Provider
        value={{
          usdBalance, setUsdBalance, randBalance, setRandBalance, input, setInput, textarea, setTextarea, button, setButton, text, setText
        }}
    >{children}</Context.Provider>  
  )
}

export const useStateContext = () => useContext(Context)