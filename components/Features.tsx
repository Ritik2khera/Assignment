import React from 'react';

const features = [
  {
    title: "Feature One",
    description: "Description of feature one.",
    icon: "https://via.placeholder.com/100"
  },
  {
    title: "Feature Two",
    description: "Description of feature two.",
    icon: "https://via.placeholder.com/100"
  }
];

const Features = () => {
  return (
    <section className="features py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-item text-center">
              <img src={feature.icon} alt={feature.title} className="mx-auto" />
              <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
              <p className="mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
