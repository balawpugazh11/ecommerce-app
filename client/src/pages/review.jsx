import React, { useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const review = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment: "Amazing quality! The iPhone I received exceeded my expectations. Fast delivery and excellent customer service.",
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 5,
    comment: "Best prices I've found online. The earbuds are fantastic and the shipping was super quick!",
    date: "1 week ago"
  },
  {
    id: 3,
    name: "Emily Davis",
    rating: 4,
    comment: "Great selection of products. The checkout process was smooth and my order arrived on time.",
    date: "3 days ago"
  },
  {
    id: 4,
    name: "David Wilson",
    rating: 5,
    comment: "Outstanding experience! The product quality is top-notch and the support team is very helpful.",
    date: "5 days ago"
  }
];

const Review = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    rating: '',
    comment: ''
  });

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // Normally here you would call your API or update state
    alert('Review submitted: ' + JSON.stringify(formData));
    setShowForm(false);
    setFormData({ name: '', rating: '', comment: '' });
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 text-lg">Real reviews from satisfied customers</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {review.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {/* Comment */}
              <p className="text-gray-700 mb-4 text-sm leading-relaxed ">
                "{review.comment}"
              </p>
              {/* Customer Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{review.avatar}</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{review.name}</h4>
                    <p className="text-gray-500 text-xs">{review.date}</p>
                     <h3 className='text-black text-md'>{review.rating}⭐</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            onClick={() => setShowForm(true)}
          >
            Write a Review
          </button>
        </div>

        {/* Review Form Modal (basic overlay) */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
            <div className="bg-white p-8 rounded-lg w-full max-w-md shadow-lg relative">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              >
                &times;
              </button>
              <h3 className="text-xl font-bold mb-4">Write a Review</h3>
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border rounded px-4 py-2"
                  required
                />
                <select
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  className="w-full border rounded px-4 py-2"
                  required
                >
                  <option value="">Rating</option>
                  <option value="5">5 - Excellent</option>
                  <option value="4">4 - Good</option>
                  <option value="3">3 - Average</option>
                  <option value="2">2 - Poor</option>
                  <option value="1">1 - Bad</option>
                </select>
                <textarea
                  name="comment"
                  rows="4"
                  placeholder="Your Review"
                  value={formData.comment}
                  onChange={handleInputChange}
                  className="w-full border rounded px-4 py-2"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Review;
