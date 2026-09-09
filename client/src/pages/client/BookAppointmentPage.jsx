import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

const BookAppointmentPage = () => {
  const pageRef = useRef(null);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    speciality: 'Skin & Hair Care',
    date: '',
    time: '11:00 AM',
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  const specialitiesList = [
    'Skin & Hair Care (Acne, Eczema, Hair Fall)',
    'Allergies & Respiratory (Asthma, Sinusitis)',
    'Digestive Disorders (Acidity, IBS)',
    'Stress, Anxiety & Sleep Issues',
    "Women's & Child Health (PCOS, Immunity)",
  ];

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM',
    '04:00 PM', '05:00 PM', '06:00 PM', '06:30 PM'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1 }
    );
    pageRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success('Appointment request submitted successfully! Dr. Dhairya Mehta\'s team will call you to confirm your slot.');
      setIsSubmitting(false);
      setStep(1);
      setFormData({
        speciality: 'Skin & Hair Care',
        date: '',
        time: '11:00 AM',
        name: '',
        phone: '',
        email: '',
        notes: '',
      });
    }, 600);
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div ref={pageRef} className="bg-[#faf7f5] pb-20">
      {/* Hero */}
      <header className="bg-white py-12 border-b border-gray-200 px-6">
        <div className="max-w-3xl mx-auto text-center reveal active">
          <span className="text-[#cc3b38] font-bold font-['Inter'] text-[13px] tracking-widest uppercase mb-2 block">
            Sharnam Clinic • Vadodara
          </span>
          <h1 className="font-['Playfair_Display'] text-[34px] md:text-[44px] font-bold text-[#1f2937] mb-3">
            Book an Appointment
          </h1>
          <p className="font-['Inter'] text-[16px] text-[#4b5563] leading-relaxed">
            Schedule a consultation with <strong className="text-[#1f2937]">Dr. Dhairya Urmish Mehta</strong> (BHMS, C.C.H, B.L.S).
          </p>
        </div>
      </header>

      {/* Progress Indicators */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-2 reveal active">
          {['1. Treatment Area', '2. Preferred Schedule', '3. Patient Details'].map((label, i) => (
            <div key={label} className="flex items-center gap-2 flex-1">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-['Inter'] text-[14px] font-bold transition-colors ${
                  step > i + 1
                    ? 'bg-[#2c7a94] text-white'
                    : step === i + 1
                    ? 'bg-[#cc3b38] text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step > i + 1 ? <span className="material-symbols-outlined text-[18px]">check</span> : i + 1}
              </div>
              <span
                className={`hidden sm:block font-['Inter'] text-[13px] font-semibold ${
                  step === i + 1 ? 'text-[#cc3b38]' : 'text-gray-500'
                }`}
              >
                {label}
              </span>
              {i < 2 && <div className={`flex-1 h-0.5 mx-2 ${step > i + 1 ? 'bg-[#2c7a94]' : 'bg-gray-200'}`} />}
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form Card */}
      <section className="max-w-3xl mx-auto px-6">
        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-[32px] border border-gray-200 shadow-lg reveal active">
          
          {/* Step 1: Speciality & Doctor */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="font-['Playfair_Display'] text-[24px] font-bold text-[#1f2937] mb-1">
                  Select Treatment Speciality
                </h2>
                <p className="font-['Inter'] text-[14px] text-[#4b5563]">
                  Choose the health condition you would like to discuss with Dr. Dhairya Mehta.
                </p>
              </div>

              <div className="space-y-3 font-['Inter']">
                {specialitiesList.map((spec) => (
                  <button
                    key={spec}
                    type="button"
                    onClick={() => setFormData({ ...formData, speciality: spec })}
                    className={`w-full p-4 rounded-xl border-2 text-left text-[15px] font-medium transition-all flex items-center justify-between ${
                      formData.speciality === spec
                        ? 'border-[#cc3b38] bg-[#fcebeb] text-[#cc3b38] font-bold'
                        : 'border-gray-200 hover:border-[#cc3b38]/40 text-[#1f2937]'
                    }`}
                  >
                    <span>{spec}</span>
                    <span className="material-symbols-outlined text-[20px]">
                      {formData.speciality === spec ? 'radio_button_checked' : 'radio_button_unchecked'}
                    </span>
                  </button>
                ))}
              </div>

              {/* Doctor Details Summary Box */}
              <div className="p-4 rounded-2xl bg-[#faf7f5] border border-gray-200 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#2c7a94] text-white flex items-center justify-center font-bold font-['Playfair_Display'] text-xl">
                  DM
                </div>
                <div>
                  <h4 className="font-['Playfair_Display'] text-[16px] font-bold text-[#1f2937]">
                    Dr. Dhairya Urmish Mehta
                  </h4>
                  <p className="font-['Inter'] text-[12px] text-[#2c7a94] font-semibold">
                    BHMS, C.C.H, B.L.S | Reg. No: G-30237
                  </p>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-[#cc3b38] text-white px-8 py-3 rounded-xl font-['Inter'] text-[14px] font-bold hover:bg-[#b52f2c] transition-all"
                >
                  Next Step: Schedule
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Date & Time */}
          {step === 2 && (
            <div className="space-y-6 font-['Inter']">
              <div>
                <h2 className="font-['Playfair_Display'] text-[24px] font-bold text-[#1f2937] mb-1">
                  Choose Preferred Schedule
                </h2>
                <p className="text-[14px] text-[#4b5563]">
                  Consultation Hours: Mon-Sat (10 AM - 7 PM), Sun (10 AM - 2 PM).
                </p>
              </div>

              <div>
                <label className="block text-[13px] font-bold text-[#1f2937] mb-2">Preferred Consultation Date *</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#cc3b38] focus:ring-2 focus:ring-[#cc3b38]/10 text-[15px]"
                  required
                />
              </div>

              <div>
                <label className="block text-[13px] font-bold text-[#1f2937] mb-2">Select Preferred Time Slot *</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData({ ...formData, time })}
                      className={`py-3 px-2 rounded-xl border text-center text-[14px] font-semibold transition-all ${
                        formData.time === time
                          ? 'border-[#cc3b38] bg-[#fcebeb] text-[#cc3b38]'
                          : 'border-gray-200 hover:border-[#cc3b38]/40 text-[#1f2937]'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={prevStep}
                  className="border border-gray-300 text-[#1f2937] px-6 py-2.5 rounded-xl text-[14px] font-semibold hover:bg-gray-50"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!formData.date}
                  className="bg-[#cc3b38] text-white px-8 py-2.5 rounded-xl text-[14px] font-bold disabled:opacity-50 hover:bg-[#b52f2c]"
                >
                  Next Step: Patient Details
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Patient Details */}
          {step === 3 && (
            <div className="space-y-6 font-['Inter']">
              <div>
                <h2 className="font-['Playfair_Display'] text-[24px] font-bold text-[#1f2937] mb-1">
                  Enter Patient Details
                </h2>
                <p className="text-[14px] text-[#4b5563]">
                  Provide your contact details so our clinic can confirm your appointment.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] font-bold text-[#1f2937] mb-1.5">Patient Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#cc3b38] text-[15px]"
                    placeholder="e.g. Rahul Sharma"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-[#1f2937] mb-1.5">Phone / Mobile *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#cc3b38] text-[15px]"
                    placeholder="+91 6355 548 616"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-bold text-[#1f2937] mb-1.5">Email Address (Optional)</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#cc3b38] text-[15px]"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label className="block text-[13px] font-bold text-[#1f2937] mb-1.5">Symptoms / Health Notes (Optional)</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#cc3b38] text-[15px] resize-none"
                  placeholder="Briefly describe your symptoms or medical concern..."
                />
              </div>

              {/* Summary Card */}
              <div className="bg-[#faf7f5] p-5 rounded-2xl border border-gray-200 text-[14px]">
                <h4 className="font-bold text-[#cc3b38] uppercase tracking-wider text-[12px] mb-2">
                  Appointment Summary
                </h4>
                <div className="space-y-1.5 text-[#1f2937]">
                  <div className="flex justify-between"><span className="text-[#4b5563]">Doctor:</span> <span className="font-bold">Dr. Dhairya Urmish Mehta</span></div>
                  <div className="flex justify-between"><span className="text-[#4b5563]">Speciality:</span> <span className="font-semibold">{formData.speciality}</span></div>
                  <div className="flex justify-between"><span className="text-[#4b5563]">Date & Time:</span> <span className="font-semibold">{formData.date} at {formData.time}</span></div>
                </div>
              </div>

              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={prevStep}
                  className="border border-gray-300 text-[#1f2937] px-6 py-2.5 rounded-xl text-[14px] font-semibold hover:bg-gray-50"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#cc3b38] text-white px-8 py-3 rounded-xl text-[14px] font-bold shadow-md hover:bg-[#b52f2c] disabled:opacity-50"
                >
                  {isSubmitting ? 'Confirming...' : 'Confirm Appointment Request'}
                </button>
              </div>
            </div>
          )}
        </form>
      </section>

      {/* Alternative Phone Call CTA */}
      <section className="max-w-3xl mx-auto px-6 pt-8 text-center">
        <p className="font-['Inter'] text-[14px] text-[#4b5563]">
          Prefer to book directly over the phone? Call Sharnam Clinic at{' '}
          <a href="tel:+916355548616" className="text-[#cc3b38] font-bold hover:underline">
            +91 6355 548 616
          </a>
        </p>
      </section>
    </div>
  );
};

export default BookAppointmentPage;
