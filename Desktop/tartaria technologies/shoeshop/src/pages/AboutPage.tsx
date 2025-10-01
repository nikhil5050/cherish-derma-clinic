import React from 'react';
import { Award, Users, Globe, Heart } from 'lucide-react';

const AboutPage = () => {
  const milestones = [
    { year: '1985', title: 'Foundation', description: 'Started as a small artisan workshop in Italy' },
    { year: '1995', title: 'First Export', description: 'Expanded to international markets' },
    { year: '2005', title: 'Award Recognition', description: 'Received International Craftsmanship Award' },
    { year: '2015', title: 'Digital Transformation', description: 'Launched online presence and e-commerce' },
    { year: '2024', title: 'Sustainable Future', description: 'Leading in eco-friendly luxury footwear' },
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Uncompromising quality in every stitch and detail',
    },
    {
      icon: Users,
      title: 'Heritage',
      description: 'Three generations of master craftsmanship',
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Responsible sourcing and eco-friendly practices',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Love for the art of fine shoemaking',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-serif font-bold text-amber-900 mb-6">Our Heritage</h1>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
              For nearly four decades, we have been crafting exceptional footwear that embodies 
              the perfect blend of traditional Italian craftsmanship and contemporary design.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://pin.it/6fGANu2dA"
                alt="Master Craftsman at Work"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-amber-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Founded in 1985 in the heart of Italy's leather district, our company began as a small 
                workshop where master artisan Giuseppe Milano pursued his passion for creating extraordinary shoes. 
                What started with a single craftsman has evolved into a renowned luxury brand that honors 
                traditional techniques while embracing modern innovation.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Every pair of our shoes tells a story of dedication, precision, and timeless elegance. 
                We believe that true luxury lies not in mass production, but in the careful attention 
                to detail that only comes from hands-on craftsmanship.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we continue Giuseppe's legacy by creating shoes that are not just footwear, 
                but works of art that will accompany our customers through life's most important moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every shoe we craft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-amber-900 mb-6">Master Craftsmanship</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Each pair of our shoes requires over 200 individual steps and 8-12 hours of skilled work. 
                Our master craftsmen use techniques passed down through generations, combined with modern 
                innovations to create footwear that is both beautiful and durable.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-amber-900 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-amber-900 mb-1">Hand-Selected Materials</h4>
                    <p className="text-gray-600 text-sm">Only the finest Italian leather and premium components</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-amber-900 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-amber-900 mb-1">Traditional Techniques</h4>
                    <p className="text-gray-600 text-sm">Blake and Goodyear welted construction methods</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-amber-900 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-amber-900 mb-1">Quality Control</h4>
                    <p className="text-gray-600 text-sm">Every shoe inspected by our quality masters</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1599004/pexels-photo-1599004.jpeg"
                alt="Leather crafting"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img
                src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
                alt="Shoe construction"
                className="w-full h-48 object-cover rounded-lg shadow-md mt-8"
              />
              <img
                src="https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg"
                alt="Final inspection"
                className="w-full h-48 object-cover rounded-lg shadow-md -mt-4"
              />
              <img
                src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg"
                alt="Finished product"
                className="w-full h-48 object-cover rounded-lg shadow-md mt-4"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;