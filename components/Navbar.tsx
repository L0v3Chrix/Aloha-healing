import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-sand-50/90 backdrop-blur-md fixed w-full z-50 shadow-sm border-b border-sand-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <a href="#" className="flex-shrink-0 flex items-center gap-2 group">
            <i className="fa-solid fa-leaf text-palm-700 text-2xl group-hover:text-palm-600 transition"></i>
            <span className="font-serif font-bold text-2xl text-ocean-900 tracking-wide">Aloha Healing</span>
          </a>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#about" className="text-ocean-900 hover:text-palm-700 font-medium transition">About</a>
            <a href="#services" className="text-ocean-900 hover:text-palm-700 font-medium transition">Services</a>
            <a href="#faq" className="text-ocean-900 hover:text-palm-700 font-medium transition">FAQ</a>
            <a href="#reviews" className="text-ocean-900 hover:text-palm-700 font-medium transition">Reviews</a>
            <a href="#contact" className="text-ocean-900 hover:text-palm-700 font-medium transition">Contact</a>
            <a href="#book" className="bg-palm-700 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-palm-900 transition-all transform hover:-translate-y-0.5">
              Book Now
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-ocean-900 hover:text-palm-700 p-2 focus:outline-none">
              <i className={`fa-solid ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-sand-50 border-t border-sand-200 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-lg text-base font-medium text-ocean-900 hover:bg-sand-200">About Kilo</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-lg text-base font-medium text-ocean-900 hover:bg-sand-200">Services</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-lg text-base font-medium text-ocean-900 hover:bg-sand-200">FAQ</a>
            <a href="#reviews" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-lg text-base font-medium text-ocean-900 hover:bg-sand-200">Reviews</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-lg text-base font-medium text-ocean-900 hover:bg-sand-200">Contact</a>
            <a href="#book" onClick={() => setIsOpen(false)} className="block mt-4 text-center px-3 py-3 rounded-lg text-base font-bold bg-palm-700 text-white shadow-md">Book Appointment</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;