import React from 'react';
import Contador from './components/Contador';
import './css/App.css';

function App() {
  return (
    <div className='App'>
      <Contador valorInicial={100}/>
    </div>
  );
}

export default App;
