import React from 'react';

const Footer: React.FC = () => {
  const smsNumber = "3214668774";
  const smsBody = "Holy coconuts Chris! 🥥 This demo is smoother than a hot stone massage. You totally nailed the vibe. Stop what you're doing and take my money—we need to build this! 🤙";
  const smsLink = `sms:${smsNumber}?body=${encodeURIComponent(smsBody)}`;

  return (
    <footer id="contact" className="bg-ocean-950 text-ocean-50 pt-16 pb-8 border-t border-ocean-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 md:gap-8">
                <div className="col-span-1 md:col-span-2">
                     <div className="flex items-center gap-2 mb-6">
                        <i className="fa-solid fa-leaf text-palm-500 text-3xl"></i>
                        <span className="font-serif font-bold text-3xl text-white tracking-wide">Aloha Healing</span>
                    </div>
                    <p className="text-gray-300 mb-8 max-w-sm leading-relaxed text-lg">
                        Restoring balance for our community through traditional healing arts. 
                        A humble sanctuary for those who call this island home.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="w-12 h-12 rounded-full bg-ocean-900 flex items-center justify-center hover:bg-palm-600 transition text-white text-lg">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full bg-ocean-900 flex items-center justify-center hover:bg-palm-600 transition text-white text-lg">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full bg-ocean-900 flex items-center justify-center hover:bg-palm-600 transition text-white text-lg">
                            <i className="fa-brands fa-google"></i>
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm border-b border-ocean-800 pb-2 inline-block">Location</h4>
                    <ul className="space-y-4 text-base text-gray-300">
                        <li className="flex items-start gap-4">
                            <div className="mt-1 w-6 flex justify-center"><i className="fa-solid fa-location-dot text-palm-500"></i></div>
                            <span>Central Island Area<br/><span className="text-sm text-gray-400">(Full address sent upon booking)</span></span>
                        </li>
                        <li className="flex items-center gap-4">
                             <div className="w-6 flex justify-center"><i className="fa-solid fa-phone text-palm-500"></i></div>
                            <span className="hover:text-white transition cursor-pointer">(808) 555-0199</span>
                        </li>
                        <li className="flex items-center gap-4">
                             <div className="w-6 flex justify-center"><i className="fa-solid fa-envelope text-palm-500"></i></div>
                            <span className="hover:text-white transition cursor-pointer">aloha@healing.demo</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm border-b border-ocean-800 pb-2 inline-block">Hours</h4>
                    <ul className="space-y-3 text-base text-gray-300">
                        <li className="flex justify-between border-b border-ocean-900 pb-2">
                            <span>Mon - Fri</span>
                            <span className="text-white font-medium">9:00 AM - 7:00 PM</span>
                        </li>
                        <li className="flex justify-between border-b border-ocean-900 pb-2">
                            <span>Saturday</span>
                            <span className="text-white font-medium">10:00 AM - 5:00 PM</span>
                        </li>
                        <li className="flex justify-between pt-1">
                            <span>Sunday</span>
                            <span className="text-palm-400 font-medium">Family Day (Closed)</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            {/* Persuasive Developer CTA */}
            <div className="mt-16 pt-8 border-t border-ocean-900 flex flex-col items-center space-y-4">
                <a 
                    href={smsLink}
                    className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-palm-600 to-ocean-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                    <span className="absolute inset-0 bg-white/20 translate-x-[-100%] skew-x-[-15deg] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
                    <i className="fa-solid fa-mobile-screen-button text-xl animate-bounce"></i>
                    <span>I NEED A SITE LIKE THIS RIGHT NOW!</span>
                </a>
                <p className="text-sm text-gray-500">&copy; 2024 Aloha Healing & Wellness.</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;