import React, { useContext } from 'react'
import { myContext } from './App'

export const Product2 = () => {
    const rst = useContext(myContext)
  return (
    <div>
        <h3> Hi  I am  product2  and the result is
            {rst}
        </h3>
    </div>
  )
}
