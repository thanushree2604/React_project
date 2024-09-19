import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
export const App = () => {
    const [count, setcount] = useState(1)
    useEffect(()=>console.log("you are clicked"),[count])
  return (
    <div>
        {count}
        <button onClick={()=> setcount(count+1)}> change </button>
    </div>
  )
}
export default App;