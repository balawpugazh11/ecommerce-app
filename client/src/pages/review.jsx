import React from 'react';

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment: "Amazing quality! The iPhone I received exceeded my expectations. Fast delivery and excellent customer service.",
      avatar: "👩‍💼",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Mike Chen",
      rating: 5,
      comment: "Best prices I've found online. The earbuds are fantastic and the shipping was super quick!",
      avatar: "👨‍💻",
      date: "1 week ago"
    },
    {
      id: 3,
      name: "Emily Davis",
      rating: 4,
      comment: "Great selection of products. The checkout process was smooth and my order arrived on time.",
      avatar: "👩‍🎨",
      date: "3 days ago"
    },
    {
      id: 4,
      name: "David Wilson",
      rating: 5,
      comment: "Outstanding experience! The product quality is top-notch and the support team is very helpful.",
      avatar: "👨‍🔬",
      date: "5 days ago"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={index < rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));
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
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {/* Rating */}
              <div className="flex items-center mb-3">
                <div className="flex text-lg">
                  {renderStars(review.rating)}
                </div>
                <span className="ml-2 text-sm text-gray-500">{review.rating}/5</span>
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "{review.comment}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{review.avatar}</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{review.name}</h4>
                    <p className="text-gray-500 text-xs">{review.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Write a Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default Review;