import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/products.js';

dotenv.config();
console.log("MONGODB_URI VALUE:", process.env.MONGODB_URI);


const mobiles = [
  {
    name: "iPhone 15 Pro",
    brand: "Apple",
    model: "15 Pro",
    description: "Latest flagship iPhone with A17 Pro chip and titanium design.",
    price: 1200,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    inStock: 10,
  },
  {
    name: "iPhone 15",
    brand: "Apple",
    model: "15",
    description: "Powerful iPhone with A16 Bionic chip and advanced camera system.",
    price: 800,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop&sat=-20",
    inStock: 15,
  },
  {
    name: "iPhone 14 Pro Max",
    brand: "Apple",
    model: "14 Pro Max",
    description: "Premium iPhone with Dynamic Island and 48MP camera.",
    price: 1100,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop&sat=-10",
    inStock: 8,
  },
  {
    name: "Samsung Galaxy S24",
    brand: "Samsung",
    model: "S24",
    description: "Latest flagship Samsung with AI features and premium design.",
    price: 1100,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
    inStock: 10,
  },
  {
    name: "Samsung Galaxy S25",
    brand: "Samsung",
    model: "S25",
    description: "Latest compact flagship from Samsung, with Snapdragon 8 Elite",
    price: 83000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop&sat=-50",
    inStock: 90,
  },
  {
    name: "Samsung Galaxy S23 Ultra",
    brand: "Samsung",
    model: "S23 Ultra",
    description: "2023 flagship from Samsung, with Snapdragon 8 Gen 2 and S Pen",
    price: 75000,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop&sat=-30",
    inStock: 10,
  },
  {
    name: "Samsung Galaxy A55",
    brand: "Samsung",
    model: "A55",
    description: "Mid-range Samsung with excellent camera and long battery life.",
    price: 450,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop&sat=-40",
    inStock: 25,
  },
  {
    name: "Google Pixel 8 Pro",
    brand: "Google",
    model: "8 Pro",
    description: "Google's flagship with advanced AI and exceptional camera quality.",
    price: 900,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop&sat=-60",
    inStock: 12,
  },
  {
    name: "Google Pixel 8",
    brand: "Google",
    model: "8",
    description: "Compact Pixel with Google's best AI features and camera.",
    price: 700,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop&sat=-70",
    inStock: 18,
  },
  {
    name: "OnePlus 12",
    brand: "OnePlus",
    model: "12",
    description: "Flagship killer with Snapdragon 8 Gen 3 and fast charging.",
    price: 800,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop&sat=-50",
    inStock: 14,
  },
  {
    name: "OnePlus Nord CE 4",
    brand: "OnePlus",
    model: "Nord CE 4",
    description: "Budget-friendly OnePlus with great performance and design.",
    price: 350,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop&sat=-60",
    inStock: 30,
  },
  {
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    model: "14 Ultra",
    description: "Xiaomi's premium flagship with Leica optics and powerful specs.",
    price: 950,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop&sat=-80",
    inStock: 9,
  },
  {
    name: "Xiaomi Redmi Note 13 Pro",
    brand: "Xiaomi",
    model: "Redmi Note 13 Pro",
    description: "Popular mid-range phone with excellent value for money.",
    price: 300,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop&sat=-70",
    inStock: 35,
  },
  {
    name: "Nothing Phone 2",
    brand: "Nothing",
    model: "Phone 2",
    description: "Unique design with Glyph interface and clean Android experience.",
    price: 600,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop&sat=-90",
    inStock: 16,
  },
  {
    name: "Motorola Edge 40",
    brand: "Motorola",
    model: "Edge 40",
    description: "Motorola's premium offering with curved display and fast charging.",
    price: 550,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop&sat=-80",
    inStock: 22,
  },
];

const mongoURI = process.env.MONGO_URI || process.env.MONGODB_URI;

mongoose
  .connect(mongoURI)
  .then(async () => {
    await Product.deleteMany({});
    await Product.insertMany(mobiles);
    console.log("Database seeded with mobiles");
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
