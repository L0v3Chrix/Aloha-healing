import React, { useState, useEffect } from 'react';
import { fetchAvailableSlots, createBooking } from '../services/ghlService';
import { TimeSlot } from '../types';

const Calendar: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [slots, setSlots] = useState<TimeSlot[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
    const [bookingStatus, setBookingStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    // Simple calendar logic for current month
    const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
    const today = new Date();

    useEffect(() => {
        // When date changes, fetch slots
        const loadSlots = async () => {
            setLoading(true);
            setSlots([]);
            setSelectedSlot(null);
            try {
                const fetchedSlots = await fetchAvailableSlots(selectedDate);
                setSlots(fetchedSlots);
            } catch (error) {
                console.error("Failed to load slots", error);
            } finally {
                setLoading(false);
            }
        };
        loadSlots();
    }, [selectedDate]);

    const handleDateClick = (day: number) => {
        const newDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
        if (newDate < new Date(today.setHours(0,0,0,0))) return; // Disable past dates
        setSelectedDate(newDate);
    };

    const handleBook = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedSlot) return;

        setBookingStatus('submitting');
        await createBooking({
            ...formData,
            serviceId: 'general-service', // In a real app, this would be dynamic
            slotId: selectedSlot.id,
            date: selectedSlot.time
        });
        setBookingStatus('success');
    };

    const renderCalendarGrid = () => {
        const grid = [];
        // Empty cells for days before start of month
        for (let i = 0; i < firstDayOfMonth; i++) {
            grid.push(<div key={`empty-${i}`} className="h-10"></div>);
        }
        // Days
        for (let day = 1; day <= daysInMonth; day++) {
            const currentDayDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
            const isSelected = day === selectedDate.getDate();
            const isPast = currentDayDate < new Date(today.setHours(0,0,0,0));

            grid.push(
                <button
                    key={day}
                    disabled={isPast}
                    onClick={() => handleDateClick(day)}
                    className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-medium transition
                        ${isSelected ? 'bg-palm-700 text-white shadow-lg' : 'hover:bg-sand-200 text-ocean-900'}
                        ${isPast ? 'text-gray-300 cursor-not-allowed' : ''}
                    `}
                >
                    {day}
                </button>
            );
        }
        return grid;
    };

    if (bookingStatus === 'success') {
        return (
            <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-lg mx-auto text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fa-solid fa-check text-green-600 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-ocean-900 mb-2">Booking Confirmed!</h3>
                <p className="text-gray-600 mb-6">
                    Mahalo, {formData.name}. We have sent a confirmation text to {formData.phone}.
                </p>
                <button 
                    onClick={() => { setBookingStatus('idle'); setFormData({name:'', email:'', phone:''}); setSelectedSlot(null); }}
                    className="text-palm-700 font-bold hover:underline"
                >
                    Book another appointment
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
            {/* Calendar Section */}
            <div className="flex-1">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-ocean-900 font-serif">
                        {selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </h3>
                    <div className="flex gap-2">
                        {/* Simplified Month Nav for demo */}
                        <button className="text-gray-400 hover:text-palm-600"><i className="fa-solid fa-chevron-left"></i></button>
                        <button className="text-gray-400 hover:text-palm-600"><i className="fa-solid fa-chevron-right"></i></button>
                    </div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                    {['S','M','T','W','T','F','S'].map(d => (
                        <div key={d} className="text-xs font-bold text-gray-400 uppercase">{d}</div>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                    {renderCalendarGrid()}
                </div>
                
                <div className="mt-6 pt-6 border-t border-sand-200">
                    <h4 className="font-bold text-ocean-800 mb-4">Available Times</h4>
                    {loading ? (
                        <div className="flex justify-center py-4"><i className="fa-solid fa-circle-notch fa-spin text-palm-500"></i></div>
                    ) : slots.length > 0 ? (
                        <div className="grid grid-cols-3 gap-2">
                            {slots.map(slot => (
                                <button
                                    key={slot.id}
                                    onClick={() => setSelectedSlot(slot)}
                                    className={`py-2 px-3 text-sm rounded-lg border transition ${
                                        selectedSlot?.id === slot.id 
                                        ? 'bg-ocean-100 border-ocean-500 text-ocean-900 ring-1 ring-ocean-500' 
                                        : 'border-sand-200 text-gray-600 hover:border-palm-500 hover:text-palm-700'
                                    }`}
                                >
                                    {new Date(slot.time).toLocaleTimeString([], {hour: 'numeric', minute:'2-digit'})}
                                </button>
                            ))}
                        </div>
                    ) : (
                        <p className="text-sm text-gray-500 italic">No availability on this date.</p>
                    )}
                </div>
            </div>

            {/* Form Section */}
            <div className="md:w-80 bg-sand-50 rounded-xl p-6 border border-sand-200 flex flex-col">
                <h4 className="font-bold text-ocean-900 mb-4">Your Details</h4>
                {selectedSlot ? (
                    <form onSubmit={handleBook} className="space-y-4 flex-1 flex flex-col">
                         <div className="bg-white p-3 rounded-lg border border-sand-200 mb-2 shadow-sm">
                            <span className="block text-xs text-gray-500 uppercase font-bold">Selected Time</span>
                            <span className="block text-ocean-800 font-medium">
                                {selectedDate.toLocaleDateString()} at {new Date(selectedSlot.time).toLocaleTimeString([], {hour:'numeric', minute:'2-digit'})}
                            </span>
                        </div>
                        
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Name</label>
                            <input 
                                required
                                type="text" 
                                className="w-full p-2 rounded-lg border border-sand-300 focus:border-palm-500 focus:ring-1 focus:ring-palm-500 outline-none"
                                value={formData.name}
                                onChange={e => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Phone</label>
                            <input 
                                required
                                type="tel" 
                                className="w-full p-2 rounded-lg border border-sand-300 focus:border-palm-500 focus:ring-1 focus:ring-palm-500 outline-none"
                                value={formData.phone}
                                onChange={e => setFormData({...formData, phone: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email</label>
                            <input 
                                required
                                type="email" 
                                className="w-full p-2 rounded-lg border border-sand-300 focus:border-palm-500 focus:ring-1 focus:ring-palm-500 outline-none"
                                value={formData.email}
                                onChange={e => setFormData({...formData, email: e.target.value})}
                            />
                        </div>

                        <div className="mt-auto pt-4">
                            <button 
                                type="submit"
                                disabled={bookingStatus === 'submitting'}
                                className="w-full bg-palm-600 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-palm-700 transition disabled:opacity-50"
                            >
                                {bookingStatus === 'submitting' ? 'Confirming...' : 'Complete Booking'}
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-gray-400 text-center">
                        <i className="fa-regular fa-calendar-check text-4xl mb-3"></i>
                        <p className="text-sm">Please select a time slot to continue.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Calendar;