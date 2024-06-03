import React from 'react';

const Contact = () => {
  return (
    <section className="contact py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <form className="mt-8 max-w-xl mx-auto">
          <input type="email" placeholder="Your Email" className="w-full p-4 border rounded mb-4" />
          <textarea placeholder="Your Message" className="w-full p-4 border rounded mb-4"></textarea>
          <button type="submit" className="bg-blue-500 text-white py-4 px-8 rounded">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
