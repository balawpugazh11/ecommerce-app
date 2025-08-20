import React from "react";
import { Link } from "react-router-dom";
import bannerImage from "../assets/banner.jpg";
import bgVideo from "../assets/bg-video.mp4";

function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* HERO Banner */}
      <section className="relative rounded-lg overflow-hidden">
        <img
          src={bannerImage}
          alt="Big banner showing iphones"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow mb-2 animate-fadeIn">
            Welcome to Our Store
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-white text-lg md:text-xl mb-4 drop-shadow">
            Discover the best iPhones at unbeatable prices.
          </p>
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            aria-label="Shop iPhones now"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* BG VIDEO FEATURE */} 
      <section className="relative mt-10 rounded-lg overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-64 md:h-96 object-cover"
          poster={bannerImage}
          aria-label="Showcasing premium iphone technology"
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white text-2xl md:text-4xl font-bold text-center mb-2 animate-fadeIn">
            Premium Quality
          </h2>
          <p className="text-white text-lg md:text-xl text-center mb-4 animate-fadeIn delay-150">
            Experience the latest technology.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
