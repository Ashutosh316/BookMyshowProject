import React from 'react';
import './App.css';
import BsState from './context/bookShowState';
import Home from './pages/home';
function App() {
  return (
    <div className="App">
      <BsState>
    <Home/>
    </BsState>
    </div>
  );
}

export default App;
