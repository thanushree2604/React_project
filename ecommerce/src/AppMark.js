import React from 'react'

export const App = () => {
    const marks = [20,30,40,50,60]
  return (
    <div>
        {marks.map((mark,index)=>(<li>{mark}</li>))}
    </div>
  )
}
export default App;