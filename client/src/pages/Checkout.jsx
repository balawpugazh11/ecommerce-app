import React, { useState } from "react";

const Checkout = () => {
  const [shipping, setShipping] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  // Simulated total — get this from cart in real app
  const totalAmount = 85699;

  const handleChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    if (!shipping.fullName.trim()) newErrors.fullName = "Full name required";
    if (!shipping.address.trim()) newErrors.address = "Address required";
    if (!shipping.city.trim()) newErrors.city = "City required";
    if (!shipping.state.trim()) newErrors.state = "State required";
    if (!shipping.pincode.trim()) newErrors.pincode = "Pincode required";
    if (!/^\d{6}$/.test(shipping.pincode))
      newErrors.pincode = "Enter 6 digit pincode";
    if (!shipping.phone.trim()) newErrors.phone = "Mobile number required";
    if (!/^\d{10}$/.test(shipping.phone))
      newErrors.phone = "Enter 10 digit phone number";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundErrors = validate();
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      setSuccess("");
      return;
    }
    setSuccess("Order placed! (In real app, payment step comes here)");
    setShipping({
      fullName: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      phone: "",
    });
    setErrors({});
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Checkout</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Shipping & Payment */}
        <form
          className="bg-white rounded-lg shadow p-8 flex-1"
          onSubmit={handleSubmit}
          noValidate
        >
          <h2 className="text-xl font-bold mb-6">Shipping Information</h2>
          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4">
              {success}
            </div>
          )}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                className={`mt-1 block w-full rounded border px-3 py-2 ${
                  errors.fullName
                    ? "border-red-400 ring-1 ring-red-200"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                value={shipping.fullName}
                onChange={handleChange}
                autoComplete="name"
              />
              {errors.fullName && (
                <div className="text-xs text-red-500 mt-1">{errors.fullName}</div>
              )}
            </div>
            <div>
              <label className="font-medium">Address</label>
              <input
                type="text"
                name="address"
                className={`mt-1 block w-full rounded border px-3 py-2 ${
                  errors.address
                    ? "border-red-400 ring-1 ring-red-200"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                value={shipping.address}
                onChange={handleChange}
                autoComplete="street-address"
              />
              {errors.address && (
                <div className="text-xs text-red-500 mt-1">{errors.address}</div>
              )}
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="font-medium">City</label>
                <input
                  type="text"
                  name="city"
                  className={`mt-1 block w-full rounded border px-3 py-2 ${
                    errors.city
                      ? "border-red-400 ring-1 ring-red-200"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                  value={shipping.city}
                  onChange={handleChange}
                />
                {errors.city && (
                  <div className="text-xs text-red-500 mt-1">{errors.city}</div>
                )}
              </div>
              <div className="flex-1">
                <label className="font-medium">State</label>
                <input
                  type="text"
                  name="state"
                  className={`mt-1 block w-full rounded border px-3 py-2 ${
                    errors.state
                      ? "border-red-400 ring-1 ring-red-200"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                  value={shipping.state}
                  onChange={handleChange}
                />
                {errors.state && (
                  <div className="text-xs text-red-500 mt-1">{errors.state}</div>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="font-medium">Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  maxLength={6}
                  className={`mt-1 block w-full rounded border px-3 py-2 ${
                    errors.pincode
                      ? "border-red-400 ring-1 ring-red-200"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                  value={shipping.pincode}
                  onChange={handleChange}
                />
                {errors.pincode && (
                  <div className="text-xs text-red-500 mt-1">{errors.pincode}</div>
                )}
              </div>
              <div className="flex-1">
                <label className="font-medium">Phone</label>
                <input
                  type="text"
                  name="phone"
                  maxLength={10}
                  className={`mt-1 block w-full rounded border px-3 py-2 ${
                    errors.phone
                      ? "border-red-400 ring-1 ring-red-200"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                  value={shipping.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
                {errors.phone && (
                  <div className="text-xs text-red-500 mt-1">{errors.phone}</div>
                )}
              </div>
            </div>
            {/* Payment Info - ready for future */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">Payment (coming soon)</h3>
              <p className="text-gray-500 text-sm">
                This is a demo. You'll see real payment options once integrated!
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg mt-7 hover:bg-blue-700 transition-colors"
            >
              Place Order
            </button>
          </div>
        </form>
        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow p-8 w-full md:w-80 self-start">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <ul className="text-gray-700 mb-6 text-sm">
            <li className="flex justify-between mb-3">
              <span>Items Total</span>
              <span>₹{totalAmount.toLocaleString()}</span>
            </li>
            <li className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </li>
            <li className="flex justify-between mt-3 font-bold border-t pt-3">
              <span>Total</span>
              <span>₹{totalAmount.toLocaleString()}</span>
            </li>
          </ul>
          <p className="text-green-600 font-semibold">100% Secure &amp; Safe Checkout</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
