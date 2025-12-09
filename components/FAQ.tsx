import React from 'react';

const FAQ: React.FC = () => {
    const faqs = [
        {
            question: "Where exactly are you located?",
            answer: "If you hit the ocean, you went too far. I'm in the Central Island area (the good side). Once you book, I'll text you the exact address and gate code. It's a private sanctuary, not a storefront, so look for the big mango tree, not a neon sign."
        },
        {
            question: "Where should I park?",
            answer: "No valet here, brah! There's plenty of free street parking. No validation tickets, no parking structures, and no hunting for a spot. Just pull up, park, and come through the side gate. The chickens might judge your parking job, but I won't."
        },
        {
            question: "What if I need to cancel?",
            answer: "Life happens, the surf comes up, I get it. Just please don't ghost me—I'm not a bad Tinder date. Let me know 24 hours in advance so I can give the spot to someone else in pain. Cancellations within 4 hours might cost you a fee (and some bad karma)."
        },
        {
            question: "What should I wear? (Draping Policy)",
            answer: "It's a massage, not a spectator sport. You can undress to your comfort level. I use professional draping techniques, which means the sheets stay on and you stay covered, except for the part I'm working on. No awkward moments, I promise."
        },
        {
            question: "Do you talk during the massage?",
            answer: "I can talk story if you want, or I can be quiet as a monk. It's your time. Usually, after the first 10 minutes of deep tissue, most people stop talking anyway because they're melting into the table. I take that as a compliment."
        }
    ];

  return (
    <section id="faq" className="py-24 bg-ocean-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-palm-700 font-bold tracking-widest uppercase mb-3">Good to Know</h2>
                <h3 className="text-4xl font-serif font-bold text-ocean-900">FAQs (Unfiltered)</h3>
            </div>

            <div className="grid gap-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition border border-ocean-100">
                        <h4 className="font-bold text-xl text-ocean-900 mb-3 flex items-start gap-3">
                            <i className="fa-regular fa-comment-dots text-palm-500 mt-1"></i>
                            {faq.question}
                        </h4>
                        <p className="text-gray-600 leading-relaxed ml-8">
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <p className="text-gray-500">Have a weirder question?</p>
                <a href="#contact" className="text-palm-700 font-bold hover:underline">Text me or use the chat assistant</a>
            </div>
        </div>
    </section>
  );
};

export default FAQ;