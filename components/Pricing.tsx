import React from 'react';

const pricing = [
  {
    plan: "Basic",
    price: "$9.99/month",
    features: ["Feature A", "Feature B", "Feature C"]
  },
  {
    plan: "Premium",
    price: "$19.99/month",
    features: ["Feature A", "Feature B", "Feature C", "Feature D"]
  }
];

const Pricing = () => {
  return (
    <section className="pricing py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {pricing.map((plan, index) => (
            <div key={index} className="pricing-item p-4 bg-white rounded shadow text-center">
              <h3 className="text-xl font-semibold">{plan.plan}</h3>
              <p className="text-2xl font-bold mt-2">{plan.price}</p>
              <ul className="mt-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mt-2">{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
