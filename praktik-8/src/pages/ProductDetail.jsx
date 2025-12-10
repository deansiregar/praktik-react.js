import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  // Data dummy (disamakan dengan Products.jsx agar datanya nyambung)
  const products = [
    { id: 1, name: 'Laptop', price: 12000000, category: 'Electronics', description: 'Laptop performa tinggi untuk segala kebutuhan.' },
    { id: 2, name: 'Smartphone', price: 5000000, category: 'Electronics', description: 'Smartphone terbaru dengan fitur canggih.' },
    { id: 3, name: 'Headphones', price: 800000, category: 'Electronics', description: 'Headphone dengan fitur noise cancelling.' },
    { id: 4, name: 'Book', price: 150000, category: 'Education', description: 'Buku panduan lengkap belajar React.' },
    { id: 5, name: 'Desk Lamp', price: 300000, category: 'Home', description: 'Lampu meja untuk menerangi ruang kerja Anda.' },
  ];

  // Cari produk berdasarkan ID dari URL
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="page product-detail">
        <h2>Product not found</h2>
        <Link to="/products" className="btn btn-primary">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="page product-detail">
      <h1>{product.name}</h1>
      <div className="product-info">
        <p className="category">Category: {product.category}</p>
        <p className="price">Rp {product.price.toLocaleString('id-ID')}</p>
        <p><strong>Description:</strong> {product.description}</p>
      </div>
      <div className="product-actions">
        <Link to="/products" className="btn btn-secondary">
          &larr; Back to List
        </Link>
        <button className="btn btn-primary" onClick={() => alert('Added to cart!')}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;