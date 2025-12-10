import React from 'react';

const Rupiah = (value) => {
  if (typeof value !== 'number') return value;
  return value.toLocaleString('id-ID');
};

const ProductCard = ({ name, price, isAvailable }) => {
  return (
    <>
      <div className="product-card">
        <h3 className="product-name">{name}</h3>
        <div className="product-price">
          {isAvailable ? (
            <span>{`Rp. ${Rupiah(price)}`}</span>
          ) : (
            <span className="out-of-stock">Stok Habis</span>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;