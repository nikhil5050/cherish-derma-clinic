import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { belts } from '../products/belts';


const AccessoriesPage = () => {
  const categories = [
    { name: 'All Belts', count: belts.length, active: true },
    { name: 'Formal Belts', count: 3, active: false },
    { name: 'Casual Belts', count: 2, active: false },
    { name: 'Luxury Belts', count: 1, active: false },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-serif font-bold text-amber-900 mb-6">Premium Accessories</h1>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
              Complete your sophisticated look with our handcrafted leather belts, 
              made from the finest materials with attention to every detail.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  category.active
                    ? 'bg-amber-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-900'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Belts Collection */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">Leather Belts Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our exquisite collection of handcrafted leather belts, designed to complement 
              your formal and casual attire with timeless elegance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {belts.map((belt) => (
              <Link
                key={belt.id}
                to={`/product/${belt.id}`}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
                  <div className="relative overflow-hidden">
                    <img
                      src={belt.image}
                      alt={belt.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {belt.originalPrice > belt.price && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        SALE
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-colors">
                        <ArrowRight className="w-4 h-4 text-amber-900" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < belt.rating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <h3 className="font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">
                      {belt.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{belt.category}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                      <span>{belt.material}</span>
                      <span>Width: {belt.width}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-amber-900">${belt.price}</span>
                      {belt.originalPrice > belt.price && (
                        <span className="text-gray-400 line-through">${belt.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">Why Choose Our Belts</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">✂</span>
              </div>
              <h3 className="font-bold text-amber-900 mb-2">HANDCRAFTED QUALITY</h3>
              <p className="text-gray-600 text-sm">Each belt is carefully crafted by skilled artisans</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🐄</span>
              </div>
              <h3 className="font-bold text-amber-900 mb-2">PREMIUM LEATHER</h3>
              <p className="text-gray-600 text-sm">Made from finest Italian and premium leather</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <h3 className="font-bold text-amber-900 mb-2">LIFETIME DURABILITY</h3>
              <p className="text-gray-600 text-sm">Built to last with proper care and maintenance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessoriesPage;