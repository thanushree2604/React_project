import React from 'react'
import { ProductList1 } from './ProductList1'

export const Product1 = ({un}) => {
    
  return (
    <div>
        <h3> Hi I am Grand child and username is -
            {un}
        </h3>
        <ProductList1 ue = {un} />
    </div>
  )
}
