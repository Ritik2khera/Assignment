import React from 'react';

const testimonials = [
  {
    name: "User One",
    feedback: "This app is fantastic! It has changed my life.",
    avatar: "https://via.placeholder.com/50"
  },
  {
    name: "User Two",
    feedback: "I can't imagine my daily routine without this app.",
    avatar: "https://via.placeholder.com/50"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item p-4 bg-white rounded shadow">
              <img src={testimonial.avatar} alt={testimonial.name} className="rounded-full mx-auto" />
              <p className="mt-4 text-center">{testimonial.feedback}</p>
              <p className="mt-2 text-center font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
