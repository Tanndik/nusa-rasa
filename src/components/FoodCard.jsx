import React from "react";
import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col">
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/600x400/CCCCCC/000000?text=Gambar+Rusak`;
        }}
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-stone-800">{food.name}</h3>
        <p className="text-stone-600 mt-2 text-sm flex-grow">
          {food.description}
        </p>
        <Link
          to={`/resep/${food.id}`}
          className="bg-green-800 text-white font-bold py-2 px-6 rounded-lg mt-4 hover:bg-green-900 transition-colors duration-300 shadow-md text-center w-full"
        >
          Coba Masak
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
