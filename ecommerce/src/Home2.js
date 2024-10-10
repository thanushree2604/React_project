import React, { useContext } from 'react'

import { myContext } from './App'
export const Home2 = ({uname}) => {
    const r  = useContext(myContext)
  return (
    <div>
        <h2> Hi I am home and result is 
            {r}
        </h2>
    </div>
  )
}