import React, { useState } from 'react'
import { Home1 } from './Home1'
const App = () => {
  const username = useState("Thanu")
  return (
    <div>
      <h1> Hi I am parent and username is
        {username}
        </h1>
        <Home1 uname = {username} />
    </div>
  )
}

export default App