import React from 'react'
import { Product1 } from './Product1'

export const Home1 = ({uname}) => {
  return (
    <div>
        <h2> Hi I am child and username is 
            {uname}
        </h2>
        <Product1 um = {uname} />
    </div>
  )
}