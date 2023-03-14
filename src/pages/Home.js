import React from 'react';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Clients from '../components/Clients/Clients';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Portfolio from '../components/Porfolio/Portfolio';
import Service from '../components/Service/Service';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Clients />
      <Footer />
    </>
  );
}

export default Home
