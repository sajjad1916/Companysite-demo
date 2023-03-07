import './App.css';
import About from './components/About/About';
import Clients from './components/Clients/Clients';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Porfolio/Portfolio';
import Service from './components/Service/Service';

function App() {
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

export default App;
