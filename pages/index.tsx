// pages/index.tsx
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

const Home = ({ data }) => {
  return (
    <>
      <Hero />
      <Features features={data.features} />
      <Testimonials testimonials={data.testimonials} />
      <Pricing pricing={data.pricing} />
      <Contact />
    </>
  );
};

export async function getStaticProps() {
  const data = await import('../data.json');
  return {
    props: {
      data
    }
  }
}

export default Home;
