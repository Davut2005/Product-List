import React from 'react';
import { useProductStore } from '../store/productStore';
import { FaHeart, FaTrash } from 'react-icons/fa';

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  liked: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, description, liked }) => {
  const { toggleLike, deleteProduct } = useProductStore();

  const handleLike = () => toggleLike(id);
  const handleDelete = () => deleteProduct(id);

  return (
    <div className="flex flex-col justify-between p-4 border rounded-md shadow-md bg-white">
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 text-sm truncate">{description}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <FaHeart
          onClick={handleLike}
          className={`cursor-pointer ${liked ? 'text-red-500' : 'text-gray-400'}`}
        />
        <FaTrash
          onClick={handleDelete}
          className="text-gray-500 hover:text-red-500 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ProductCard;
