import React from 'react';

import MyComponent1 from './Components/MyComponent1';
import MyComponent2 from './Components/MyComponent2';
import MyClassComponent1 from './Components/MyClassComponent1';
import MyClassComponent2 from './Components/MyClassComponent2';

export const App = () => {
  return (
    <div>
      <MyComponent1 />
      <MyComponent2 />
      <MyClassComponent1 />
      <MyClassComponent2/>
      Hi I am react 
    </div>
  );
}

export default App;
 
