import React from 'react';
import Calendar from './Calendar';

const Booking: React.FC = () => {
  return (
    <section id="book" className="py-24 bg-ocean-900 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-palm-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Reserve Your Sanctuary Time</h2>
                <p className="text-ocean-100 text-lg max-w-2xl mx-auto">
                    Select a date below to see live availability. We integrate directly with GoHighLevel to ensure instant confirmation via text and email.
                </p>
            </div>

            <Calendar />
            
            <div className="text-center mt-12 text-sm text-ocean-300">
                <p><i className="fa-solid fa-lock mr-2"></i>Secure booking powered by GoHighLevel API</p>
            </div>
        </div>
    </section>
  );
};

export default Booking;