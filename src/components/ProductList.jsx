import React, { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products, onSelect }) {
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 10; 
  const totalItems = 30; 
  const productsToDisplay = products.slice(0, totalItems);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const productsForCurrentPage = productsToDisplay.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1); 
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); 
    }
  };

  return (
    <div>
      
      <div className="grid grid-cols-3 gap-4">
        {productsForCurrentPage.map((p) => (
          <ProductCard key={p.id} product={p} onSelect={onSelect} />
        ))}
      </div>

      
      <div className="flex justify-between mt-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="flex items-center justify-center">
          Page {currentPage} of 3
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === 3}
          className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
