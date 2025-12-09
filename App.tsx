import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Booking from './components/Booking';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-sand-50 selection:bg-palm-200 selection:text-palm-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <FAQ />
        <Reviews />
        <Booking />
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
}

export default App;