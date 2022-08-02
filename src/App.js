// Package
import React from 'react';

// Component
import Menu from './DisplayData/index';
// Transforming data
import result from './Recursion/index';

const App = () => (
  <div>
    <Menu place={result} />
  </div>
);

// exporting to access data in other files through importing.
export default App;
