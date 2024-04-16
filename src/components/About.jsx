import React from 'react';

function AboutSection() {
  return (
    <section className="py-12 border-4 border-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-xl" id='about'> 
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-semibold text-center text-white">About Go Green Gardening</h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute top-0 left-0 text-5xl font-bold text-green-800 transform -translate-x-4 -translate-y-4 opacity-50">&ldquo;</div>
            <div className="absolute bottom-0 right-0 text-5xl font-bold text-green-800 transform translate-x-4 translate-y-4 opacity-50">&rdquo;</div>
            <p className="text-lg leading-relaxed text-white">
              At Go Green Gardening, we are passionate about creating beautiful outdoor spaces that not only enhance your surroundings but also contribute positively to the environment. Our mission is to promote sustainable gardening practices that prioritize biodiversity, conservation, and environmental stewardship.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white">
              We believe in harnessing the power of nature to create thriving gardens that are both visually stunning and ecologically beneficial. By incorporating organic gardening methods, water conservation techniques, and native plant landscaping, we strive to minimize our environmental impact while maximizing the beauty and productivity of your outdoor space.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white">
              Whether you're looking to transform your backyard into a vibrant oasis, cultivate your own organic produce, or simply maintain a lush and sustainable garden, Go Green Gardening is here to help you achieve your goals. Join us in embracing the beauty and benefits of sustainable gardening practices today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
