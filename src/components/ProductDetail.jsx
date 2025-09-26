import React, { useState } from 'react';

export default function ProductDetail({ product, onBack, addToCart, cart }) {
  const [totalAmount, setTotalAmount] = useState(0); 
  
  const buyNow = (product) => {
    setTotalAmount(totalAmount + product.price); 
    alert(`You are buying ${product.title} for $${product.price}.`);
  };

  return (
    <div className="p-4 border rounded-lg shadow">
      <button className="mb-2 text-blue-500 underline" onClick={onBack}>
        ← Back
      </button>
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-64 h-64 object-cover my-4"
      />
      <p>{product.description}</p>
      <p className="mt-2 font-semibold">Price: ${product.price}</p>
      <p className="text-sm">Brand: {product.brand} | Category: {product.category}</p>
      <p className="text-sm">Rating: ⭐ {product.rating}</p>

      
      <button
        onClick={() => addToCart(product)} 
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
      >
        Add to Cart
      </button>

      <button
        onClick={() => buyNow(product)} 
        className="bg-green-600 text-white px-4 py-2 rounded mt-4 ml-4"
      >
        Buy Now
      </button>

      {totalAmount > 0 && (
        <div className="mt-4 text-lg font-semibold">
          Total for Buy Now: ${totalAmount}

          
        </div>
      )}
    </div>
  );
}
