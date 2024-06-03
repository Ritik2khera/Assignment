import React from 'react';

const Hero = () => {
  return (
    <section className="hero bg-blue-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold">Discover Our App</h1>
        <p className="mt-4 text-lg">The best app for all your needs.</p>
        <div className="mt-8">
          <a href="/download" className="bg-white text-blue-500 py-2 px-4 rounded">Download Now</a>
          <a href="#features" className="bg-gray-700 text-white py-2 px-4 rounded ml-4">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
