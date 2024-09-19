import React from 'react';

const names = ['James', 'John', 'Paul', 'Ringo', 'George'];

function App() {
  return (
    <div>
      <ul>
        {names.filter(name => name.includes('J'))
          .map(filteredName => (
            <li key={filteredName}>{filteredName}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
