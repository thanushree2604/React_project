import React, { useContext } from 'react'
import { myContext } from './App'

export const ProductList2 = () => {
    const rs = useContext(myContext)
  return (
    <div>
        <h4> Hi I am some random Component and the result is
            {rs}
        </h4>
    </div>
  )
}
