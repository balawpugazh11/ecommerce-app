  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import Navbar from './components/Navbar';
  import Footer from './components/Footer';
  import Home from './pages/Home';
  import Products from './pages/Products';
  import ProductDetail from './pages/ProductDetail';
  import Cart from './pages/Cart';
  import Login from './pages/Login';
  import Register from './pages/Register';
  import Profile from './pages/profile';
  import Checkout from './components/Checkout';
  import About from './components/About';
  import Review from './pages/Review';
  import { CartProvider } from './context/CartContext'



  function App() {
    return (
      <BrowserRouter>
        <CartProvider>
          <div className="min-h-screen bg-black flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/about" element={<About />} />
                <Route path="/review" element={<Review />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </BrowserRouter>
      
    );
  }


  export default App;