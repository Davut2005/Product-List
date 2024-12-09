import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductStore } from '../store/productStore';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { products } = useProductStore();
  const product = products.find((p) => p.id === id);

  if (!product) return <p className="text-center text-red-500">Product not found</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <button
        onClick={() => navigate('/products')}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Back to Products
      </button>
    </div>
  );
};

export default ProductDetail;
