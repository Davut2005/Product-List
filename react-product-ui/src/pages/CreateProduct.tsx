import React, { useState } from 'react';
import { useProductStore } from '../store/productStore';
import { useNavigate } from 'react-router-dom';

const CreateProduct: React.FC = () => {
  const { addProduct } = useProductStore();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (!title || !description) return;
    addProduct({
      id: Date.now().toString(),
      title,
      description,
      liked: false,
    });
    navigate('/products');
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg">
      <h1 className="text-xl font-bold mb-4">Create Product</h1>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
