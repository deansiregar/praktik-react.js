import React, { useState } from 'react';
import './App.css';
import ProductCard from './components/ProductCard.jsx';



function App() {

  const products = [
    { name: 'Kemeja Batik', price: 150000, isAvailable: true },
    { name: 'Sepatu Olahraga', price: 350000, isAvailable: false },
    { name: 'Jam Tangan', price: 1250000, isAvailable: true }
  ];

  return (
    <div className="App">
      <div className="products">
        <h2>Daftar Produk</h2>
        {products.map((p, idx) => (
          <ProductCard
            key={idx}
            name={p.name}
            price={p.price}
            isAvailable={p.isAvailable}
          />
        ))}
      </div>


  
      <div style={{
        padding: '20px',
        margin: '10px 0',
        backgroundColor: '#d4edda', 
        border: `2px solid #c3e6cb`, 
        borderRadius: '5px'
      }}>

      </div>
    </div>
  );
}

export default App;