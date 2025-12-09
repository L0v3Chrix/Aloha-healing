import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-20 pb-16 md:pt-32 md:pb-24 flex items-center min-h-[90vh] bg-sand-50 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-ocean-100 rounded-full blur-3xl opacity-50 animate-fade-in"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-palm-500 rounded-full blur-3xl opacity-20 animate-fade-in"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                <div className="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0 animate-fade-in-up">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-palm-100 text-palm-800 font-semibold text-sm mb-6 tracking-wide uppercase shadow-sm">
                        Kilo's Kama'aina Sanctuary
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-serif font-bold text-ocean-900 leading-tight mb-6 drop-shadow-sm">
                        Healing for the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-palm-700 to-ocean-500">
                            People of the Land
                        </span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        A private backyard sanctuary dedicated to those who keep our island moving. 
                        Experience authentic healing with Kilo in our open-air gazebo, surrounded by trade winds, candlelight, and birdsong.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="#book" className="px-8 py-4 bg-ocean-800 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-ocean-900 transition hover:-translate-y-1 hover:shadow-xl">
                            Book Session with Kilo
                        </a>
                        <a href="#services" className="px-8 py-4 bg-white text-ocean-800 border-2 border-ocean-100 rounded-xl font-bold text-lg hover:bg-ocean-50 transition hover:-translate-y-1">
                            Kama'aina Rates
                        </a>
                    </div>
                    <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-500">
                        <i className="fa-brands fa-google text-ocean-600"></i>
                        <span className="font-semibold text-ocean-900">5.0</span>
                        <span>stars from the local community</span>
                    </div>
                </div>

                <div className="lg:col-span-6 relative mt-12 lg:mt-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {/* Collage Layout */}
                    <div className="relative w-full aspect-[4/5]">
                        {/* Main Image (Original) */}
                        <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 z-10 border-4 border-white/50 transition duration-500 hover:rotate-0 hover:scale-[1.02]">
                             <img 
                                src="https://picsum.photos/id/1039/800/1000" 
                                alt="Open Air Nature Sanctuary" 
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Secondary Image (Night/Candles) */}
                        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 z-20 border-4 border-sand-50 transition duration-500 hover:rotate-0 hover:scale-[1.02]">
                            <img 
                                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Evening Gazebo with Candles and Twinkle Lights" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <div className="flex items-center gap-2 mb-1">
                                    <i className="fa-solid fa-moon text-yellow-300"></i>
                                    <span className="text-xs font-bold uppercase tracking-wider text-yellow-300">Evening Sessions</span>
                                </div>
                                <h3 className="font-serif text-xl">Under the Stars</h3>
                            </div>
                        </div>

                        {/* Floating Badge */}
                         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md px-6 py-4 rounded-xl shadow-xl z-30 text-center border border-sand-200 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                            <div className="text-palm-700 font-bold text-2xl">Kilo</div>
                            <div className="text-xs text-ocean-500 uppercase tracking-widest font-bold">Licensed Therapist</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;