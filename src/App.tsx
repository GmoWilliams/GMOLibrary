import React from 'react';
import './App.css';
import Navbar from './components/molecules/Navbar'

function App({children}: { children?: React.ReactNode }) {
  return (
    <div className="App">
      <Navbar />
      <div className='App-content'>
        {children}
      </div>
    </div>
  );
}

export default App;
