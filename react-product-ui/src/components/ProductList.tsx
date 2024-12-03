import React, { useState } from 'react';
import { useProductStore } from '../store/productStore';
import ProductCard from './ProductCard';

const ProductList: React.FC = () => {
  const { products } = useProductStore();
  const [filter, setFilter] = useState<'all' | 'liked'>('all');

  const filteredProducts = products.filter((product) =>
    filter === 'liked' ? product.liked : true
  );

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-md ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('liked')}
          className={`px-4 py-2 rounded-md ${filter === 'liked' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Liked
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
