import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="pt-24 pb-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-palm-50 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative mb-12 lg:mb-0 order-last lg:order-first">
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative border-4 border-sand-100 transform rotate-2 hover:rotate-0 transition duration-500">
                        {/* Reliable Unsplash Image: Evening/String Lights/Patio Vibe */}
                        <img 
                            src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                            alt="Evening Gazebo Sanctuary with Twinkle Lights" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/60 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 text-white">
                            <p className="font-serif text-3xl font-bold mb-1">The Sanctuary</p>
                            <p className="text-sm font-medium uppercase tracking-wider text-palm-300">Kilo's Private Garden</p>
                        </div>
                    </div>
                    {/* Decorative leaf icon */}
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white rounded-full flex items-center justify-center text-4xl text-palm-700 shadow-lg z-20">
                        <i className="fa-solid fa-spa"></i>
                    </div>
                </div>

                <div className="flex flex-col justify-center">
                    <h2 className="text-palm-700 font-bold tracking-widest uppercase mb-3">Meet Your Therapist</h2>
                    <h3 className="text-4xl font-serif font-bold text-ocean-900 mb-6">Healing with Aloha</h3>
                    
                    <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                        <p>
                            Born and raised here on the island, I understand the unique rhythm of our life. From the long hours standing on concrete floors in the hospitality industry to the physical demands of surfing and hiking, our bodies carry the story of our days.
                        </p>
                        <p>
                            My backyard sanctuary isn't a sterile clinic; it's a space connected to the land. I blend traditional <strong>Lomi Lomi</strong> techniques passed down from my kupuna with modern deep tissue work to create a session that is both therapeutic and deeply grounding.
                        </p>
                        <p>
                            My goal isn't just to "fix" a muscle, but to give you a quiet hour where the only thing you have to do is breathe.
                        </p>
                    </div>

                    {/* Aligned Stats Section */}
                    <div className="mt-8 pt-8 border-t border-sand-200 flex flex-row gap-12">
                        <div>
                            <span className="block text-3xl font-bold text-ocean-800">12+</span>
                            <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">Years Experience</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-bold text-ocean-800">2k+</span>
                            <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">Local Clients</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Wave Transition Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] text-sand-50 fill-current">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
        </div>
    </section>
  );
};

export default About;