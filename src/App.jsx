import React from "react";
import FoodCard from "./components/FoodCard";
import { foodData } from "./data/foodData.js";

function App() {
  return (
    <div className="min-h-screen bg-[#F5F5DC]/40 font-sans flex flex-col">
      <header
        className="w-full bg-cover bg-center py-24 sm:py-32 flex justify-center items-center relative"
        style={{ backgroundImage: "url('/forest.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative bg-[#F5F5DC]/80 backdrop-blur-md rounded-xl shadow-2xl p-8 text-center max-w-4xl mx-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-green-900 tracking-tight">
            Nusa Rasa
          </h1>
          <p className="text-md sm:text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            Jelajahi kekayaan rasa otentik dari berbagai penjuru Indonesia, dari
            sabang sampai merauke.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-8 py-12 flex-grow">
        <h2 className="text-3xl font-bold text-stone-800 text-center mb-10">
          Rekomendasi Makanan Populer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodData.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </main>

      <footer className="text-center py-6 bg-[#F5F5DC]/60 mt-12">
        <p className="text-stone-600">
          © {new Date().getFullYear()} Kuliner Nusantara. Dibuat dengan ❤️ di
          Indonesia.
        </p>
      </footer>
    </div>
  );
}

export default App;
