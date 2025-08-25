import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Adjust path if needed
import { onAuthStateChanged, signOut } from "firebase/auth";
import { CartProvider, useCart } from "../context/CartContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { cartCount } = useCart();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-30 bg-gray-100 border-b shadow-sm">
      <nav className="max-auto mx-auto flex items-center justify-between py-2 px-4 m-1">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-4 font-bold text-xl text-black"
        >
          <img src="/iconsB.png" alt="Logo" className="h-8 w-8" />
          MobiStore
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/" className="text-black hover:text-green-700">
            Home
          </NavLink>
          <NavLink to="/products" className="text-black hover:text-green-700">
            Products
          </NavLink>

          <Link
            to="/cart"
            className="relative  hover:text-green-700"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>

            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-green-700 text-white rounded-full px-1 text-xs">
                {cartCount}
              </span>
            )}
          </Link>
          {!user ? (
            <>
              <Link
                to="/login"
                className="text-black px-3 py-1 rounded hover:bg-green-700 hover:text-white"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-700 text-white px-3 py-1 rounded hover:bg-green-800"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/profile"
                className="text-black px-3 py-1 rounded hover:bg-green-700 hover:text-white"
              >
                {user.displayName || user.email}
              </Link>
              <button
                onClick={handleLogout}
                className="text-black px-3 py-1 rounded hover:bg-red-700 hover:text-white"
              >
                Log Out
              </button>
            </>
          )}
        </div>
        {/* Mobile hamburger icon */}
        <button
          className="md:hidden text-black p-2"
          onClick={() => setOpen((o) => !o)}
        >
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white px-4 py-4 space-y-3 border-b shadow">
          <NavLink to="/" className="block" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="block"
            onClick={() => setOpen(false)}
          >
            Products
          </NavLink>
          
          <Link
            to="/cart"
            className="block relative"
            onClick={() => setOpen(false)}
          >
            Cart
            {cartCount > 0 && (
              <span className="ml-1 text-xs bg-green-700 text-white rounded-full px-1">
                {cartCount}
              </span>
            )}
          </Link>
          {!user ? (
            <>
              <Link
                to="/login"
                className="block"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block"
                onClick={() => setOpen(false)}
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/profile"
                className="block text-black font-semibold"
                onClick={() => setOpen(false)}
              >
                {user.displayName || user.email}
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
                className="block text-black px-3 py-1 rounded hover:bg-red-700 hover:text-white"
              >
                Log Out
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
