import React from "react";
import { Link } from "react-router-dom";
import FeaturedProducts from "../components/FeaturedProducts";
import { review } from "./Review";


function Home() {
  return (
    <main className="max-w-7xl mx-auto px-2 sm:px-4 py-8 space-y-14 bg-black">

      {/* HERO Banner */}
      <section className="relative rounded-lg overflow-hidden mb-8 shadow-lg">
    <img src="/banner.jpg" alt="Banner" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center p-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-xl">
            Welcome to Our Store
          </h1>
          <p className="text-lg md:text-xl font-medium mb-4 drop-shadow">
            Discover premium iPhones at unbeatable prices.
          </p>
          <Link
            to="/products"
            className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-700 hover:to-green-900 px-7 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300 transition-all"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Customer Reviews Teaser */}
      <section className="my-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {review.map((review, idx) => (
            <div
              key={review.id}
              className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow hover:shadow-lg p-6 transition"
            >
              <p className="italic text-gray-700 text-lg">“{review.comment}”</p>
              <div className="mt-3 text-sm font-medium text-right text-green-600">
                - {review.name}
              </div>
            </div>
          ))}
        </div>
           <div className="text-center mt-6">
    <a 
        href="/review"
        className="text-white font-bold hover:border-b-2 border-green-600"
    >
        Read all reviews
    </a>
    </div>
      </section>
    </main>
  );
}

export default Home;
