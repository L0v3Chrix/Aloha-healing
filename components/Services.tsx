import React from 'react';
import { Service } from '../types';

const services: Service[] = [
    {
        id: '1',
        title: 'Traditional Lomi Lomi',
        duration: '60 min',
        price: 120,
        description: 'Reconnect with the island. Flowing, rhythmic forearm strokes to improve circulation and release the stress of the week.',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: '2',
        title: 'The Industry Reset',
        duration: '75 min',
        price: 135,
        description: 'Deep tissue work specifically for servers, housekeepers, and drivers. We target the lower back, feet, and shoulders.',
        image: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: '3',
        title: 'Pohaku Hot Stone',
        duration: '90 min',
        price: 150,
        description: 'Heated lava stones from our own earth, placed to melt away deep tension. The ultimate day-off treat.',
        image: 'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="pt-12 pb-24 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-palm-700 font-bold tracking-widest uppercase mb-3">Service Menu</h2>
                <h3 className="text-4xl font-serif font-bold text-ocean-900">Mālama Your Body</h3>
                <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                    Pricing listed is our standard Kama'aina rate. Ask about our packages for hospitality ohana.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service) => (
                    <div key={service.id} className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col border border-sand-100">
                        <div className="h-64 overflow-hidden relative shrink-0">
                            <img 
                                src={service.image} 
                                alt={service.title} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                            />
                            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-ocean-900 font-bold shadow-sm border border-ocean-50">
                                ${service.price}
                            </div>
                        </div>
                        <div className="p-8 flex flex-col flex-1">
                            <div className="flex justify-between items-baseline mb-4">
                                <h4 className="text-xl font-bold text-ocean-900 font-serif">{service.title}</h4>
                                <span className="text-sm text-gray-500 font-medium bg-sand-50 px-2 py-1 rounded-md border border-sand-200">{service.duration}</span>
                            </div>
                            <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                                {service.description}
                            </p>
                            <button className="w-full py-3 border border-ocean-200 rounded-lg text-ocean-800 font-semibold hover:bg-ocean-800 hover:text-white transition-all transform active:scale-[0.98]">
                                Book This Service
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Services;