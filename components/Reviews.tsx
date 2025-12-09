import React, { useState } from 'react';
import { Review } from '../types';
import { analyzeReviews } from '../services/geminiService';

const mockReviews: Review[] = [
    { id: 1, author: "Kimo A.", rating: 5, text: "Brah, after a double shift at the hotel, this is exactly what I needed. Kilo's gazebo is so peaceful, beats a sterile room any day.", date: "2 days ago", platform: "Google" },
    { id: 2, author: "Leilani S.", rating: 5, text: "Best kept secret in town. Kilo really knows how to work out the knots from carrying trays all day. Mahalo nui!", date: "1 week ago", platform: "Google" },
    { id: 3, author: "Benny R.", rating: 5, text: "Love the open air feel. You can hear the birds and feel the breeze. Solid pressure, good price for locals.", date: "3 weeks ago", platform: "Google" },
    { id: 4, author: "Sarah J.", rating: 5, text: "Finally a place that takes care of US. Kilo makes it easy to book, no resort parking hassle. Just pull into the driveway and relax.", date: "1 month ago", platform: "Google" }
];

const Reviews: React.FC = () => {
    const [analysis, setAnalysis] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleAnalyze = async () => {
        setIsLoading(true);
        const result = await analyzeReviews(mockReviews);
        setAnalysis(result);
        setIsLoading(false);
    };

    return (
        <section id="reviews" className="py-24 bg-sand-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-palm-700 font-bold tracking-widest uppercase mb-3">Community Love</h2>
                        <h3 className="text-4xl font-serif font-bold text-ocean-900">Talk of the Town</h3>
                    </div>
                    <div className="mt-6 md:mt-0 flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                        <span className="text-yellow-400 text-xl mr-2">★★★★★</span>
                        <span className="font-bold text-ocean-900">5.0</span>
                        <span className="mx-2 text-gray-300">|</span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {mockReviews.map((review) => (
                        <div key={review.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                            <div className="flex items-center mb-4">
                                <div className="h-10 w-10 bg-ocean-100 rounded-full flex items-center justify-center text-ocean-700 font-bold">
                                    {review.author[0]}
                                </div>
                                <div className="ml-3">
                                    <p className="font-bold text-sm text-gray-900">{review.author}</p>
                                    <p className="text-xs text-gray-500">{review.date}</p>
                                </div>
                            </div>
                            <div className="text-yellow-400 text-sm mb-2">
                                {"★".repeat(review.rating)}
                            </div>
                            <p className="text-gray-600 text-sm italic">"{review.text}"</p>
                        </div>
                    ))}
                </div>

                {/* Gemini Admin Feature Demo */}
                <div className="bg-ocean-900 rounded-2xl p-8 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <i className="fa-solid fa-sparkles text-palm-400 text-2xl"></i>
                            <h4 className="text-2xl font-bold">Business Owner Insights (Demo)</h4>
                        </div>
                        <p className="text-ocean-200 mb-6 max-w-2xl">
                            Using Gemini AI, we can automatically analyze your Google Reviews to find patterns, suggest improvements, and draft responses to keep your business rating high.
                        </p>
                        
                        {!analysis ? (
                            <button 
                                onClick={handleAnalyze} 
                                disabled={isLoading}
                                className="bg-palm-600 hover:bg-palm-700 text-white px-6 py-3 rounded-lg font-bold transition flex items-center gap-2"
                            >
                                {isLoading ? (
                                    <><i className="fa-solid fa-circle-notch fa-spin"></i> Analyzing...</>
                                ) : (
                                    <><i className="fa-solid fa-wand-magic-sparkles"></i> Generate Business Report</>
                                )}
                            </button>
                        ) : (
                            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-md animate-fade-in">
                                <pre className="whitespace-pre-wrap font-sans text-ocean-50 text-sm leading-relaxed">
                                    {analysis}
                                </pre>
                                <button onClick={() => setAnalysis(null)} className="mt-4 text-sm text-palm-300 hover:text-palm-100 underline">
                                    Clear Report
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;