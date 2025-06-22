import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DetectionSection from './components/DetectionSection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <DetectionSection />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
