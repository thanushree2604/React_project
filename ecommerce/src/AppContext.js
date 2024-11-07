import React, { createContext, useState } from 'react'
import { Product2 } from './Product2'
import { ProductList2 } from './ProductList2'
import { Home2 } from './Home2'

export const myContext = createContext()
const App = () => {

  const result = useState("Passed")
  return (
    <div>
      <myContext.Provider value = {result}>
      <Product2 />
      <ProductList2  />
      <Home2 />
      </myContext.Provider>
    </div>
  )
}

export default App