import React, { useState } from 'react';
import { Star, ArrowRight } from 'lucide-react';

const product = {
  id: 1,
  name: 'Oxford Elegance Classic',
  price: 299,
  originalPrice: 399,
  image: 'https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg',
  category: 'Formal',
  rating: 5,
  description:
    'Handcrafted from premium Italian leather, the Oxford Elegance Classic offers timeless style and unmatched comfort for every formal occasion.',
  sizes: ['6', '7', '8', '9', '10', '11'],
  colors: ['Black', 'Brown', 'Tan'],
};

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  const canOrder = selectedSize && selectedColor && quantity > 0;

  const handleOrder = () => {
    const message = `👞 *Order Inquiry: ${product.name}*

*Selected Options:*
• Size: ${selectedSize}
• Color: ${selectedColor}
• Quantity: ${quantity}

💵 *Price:* $${product.price} each

Please confirm availability and next steps. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+919529666812?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-amber-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-10 p-8">
        {/* Product Image */}
        <div className="flex flex-col items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-2xl shadow-md mb-6"
          />
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < product.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-serif font-bold text-amber-900 mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.category}</p>
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-3xl font-bold text-amber-900">${product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-gray-400 line-through text-xl">${product.originalPrice}</span>
            )}
          </div>
          <p className="text-gray-700 mb-8">{product.description}</p>
          {/* Options */}
          <div className="mb-6">
            <label className="block font-medium mb-2 text-amber-900">Size</label>
            <div className="flex space-x-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-full border font-medium ${
                    selectedSize === size
                      ? 'bg-amber-900 text-white border-amber-900'
                      : 'bg-white text-amber-900 border-amber-300 hover:bg-amber-100'
                  } transition-colors`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <label className="block font-medium mb-2 text-amber-900">Color</label>
            <div className="flex space-x-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 rounded-full border font-medium ${
                    selectedColor === color
                      ? 'bg-amber-900 text-white border-amber-900'
                      : 'bg-white text-amber-900 border-amber-300 hover:bg-amber-100'
                  } transition-colors`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <label className="block font-medium mb-2 text-amber-900">Quantity</label>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-24 px-4 py-2 rounded-full border border-amber-300 focus:border-amber-900 outline-none"
            />
          </div>
          {/* WhatsApp Order Button */}
          <button
            disabled={!canOrder}
            onClick={handleOrder}
            className={`w-full flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg transition-colors ${
              canOrder
                ? 'bg-amber-900 text-white hover:bg-amber-800'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <span className="mr-2">💬</span>
            Confirm Order via WhatsApp
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
