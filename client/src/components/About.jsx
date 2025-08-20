import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: "Balamurugan",
      role: "Founder & CEO",
      image: "👨‍💼",
      description: "Passionate about bringing the best technology to customers at affordable prices."
    },
    {
      name: "Sarah Johnson",
      role: "Head of Operations",
      image: "👩‍💻",
      description: "Ensuring smooth operations and excellent customer service delivery."
    },
    {
      name: "Mike Chen",
      role: "Tech Lead",
      image: "👨‍🔬",
      description: "Expert in mobile technology and product development."
    }
  ];

  const values = [
    {
      icon: "💎",
      title: "Quality First",
      description: "We never compromise on product quality and authenticity."
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Always staying ahead with the latest technology trends."
    },
    {
      icon: "🤝",
      title: "Customer Focus",
      description: "Your satisfaction is our top priority in everything we do."
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Quick and reliable shipping to get products to you faster."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Bala's Ecommerce</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Your trusted destination for premium mobile gadgets and electronics
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Company Story */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded in 2024, Bala's Ecommerce started with a simple mission: to make premium mobile technology 
                accessible to everyone. What began as a small local shop has grown into a trusted online destination 
                for quality electronics.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We believe that everyone deserves access to the latest technology without breaking the bank. 
                Our commitment to quality, authenticity, and customer satisfaction has made us a favorite among 
                tech enthusiasts and everyday users alike.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-6xl mb-4">📱</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">10,000+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide high-quality mobile gadgets and electronics at competitive prices, 
                while delivering exceptional customer service and building lasting relationships 
                with our customers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the leading ecommerce platform for mobile technology, known for 
                quality, reliability, and customer satisfaction across the country.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Why Choose Bala's Ecommerce?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Authentic Products</h3>
              <p className="text-gray-600">All our products are 100% genuine with manufacturer warranty</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Quick delivery across the country with secure packaging</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Secure Shopping</h3>
              <p className="text-gray-600">Safe and secure payment options with buyer protection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
