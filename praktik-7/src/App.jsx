import React from 'react';
import './App.css';
import BasicFetchingDemo from './components/BasicFetchingDemo';
import AdvancedFetchingDemo from './components/AdvancedFetchingDemo';
import CRUDOperationsDemo from './components/CRUDOperationsDemo';

function App() {
  return (
    <div className="App">
      <h1>Praktik Data Fetching - Pertemuan 7</h1>
      <p style={{textAlign: 'center'}}>Integrasi React dengan RESTful API</p>
      
      <BasicFetchingDemo />
      <hr />
      <AdvancedFetchingDemo />
      <hr />
      <CRUDOperationsDemo />
    </div>
  );
}

export default App;