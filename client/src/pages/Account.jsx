import React from 'react';

const user = {
  name: "John Doe",
  email: "johndoe@email.com",
  address: "123 Main Street, Chennai",
  phone: "9876543210"
};
// Simulate authentication – replace with your actual user/auth logic!
const isLoggedIn = true;

const Account = () => {
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Account</h1>
          <p className="text-gray-600">Please log in to view your account.</p>
          <a
            href="/login"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Account</h1>
        <p className="text-gray-500 mb-6">Manage your profile and settings</p>
        <div className="mb-6">
          <div className="mb-4">
            <div className="text-gray-800 font-semibold mb-1">Name:</div>
            <div className="text-gray-700">{user.name}</div>
          </div>
          <div className="mb-4">
            <div className="text-gray-800 font-semibold mb-1">Email:</div>
            <div className="text-gray-700">{user.email}</div>
          </div>
          <div className="mb-4">
            <div className="text-gray-800 font-semibold mb-1">Phone:</div>
            <div className="text-gray-700">{user.phone}</div>
          </div>
          <div>
            <div className="text-gray-800 font-semibold mb-1">Address:</div>
            <div className="text-gray-700">{user.address}</div>
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            // onClick={() => handleEditProfile()}
          >
            Edit Profile
          </button>
          <button
            className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            // onClick={() => handleLogout()}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
