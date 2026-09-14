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
    'Joint Pain & Arthritis Care',
  ];

  const timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM'
  ];

  const fullClinicTimings = [
    { day: 'Monday', morning: '10:00 AM – 01:00 PM', evening: '05:00 PM – 08:30 PM', status: 'Open' },
    { day: 'Tuesday', morning: '10:00 AM – 01:00 PM', evening: '05:00 PM – 08:30 PM', status: 'Open' },
    { day: 'Wednesday', morning: '10:00 AM – 01:00 PM', evening: '05:00 PM – 08:30 PM', status: 'Open' },
    { day: 'Thursday', morning: '10:00 AM – 01:00 PM', evening: '05:00 PM – 08:30 PM', status: 'Open' },
    { day: 'Friday', morning: '10:00 AM – 01:00 PM', evening: '05:00 PM – 08:30 PM', status: 'Open' },
    { day: 'Saturday', morning: '10:00 AM – 01:00 PM', evening: '05:00 PM – 08:30 PM', status: 'Open' },
    { day: 'Sunday', morning: '10:00 AM – 02:00 PM (Prior Appointment)', evening: 'Closed', status: 'Special OPD' },
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
      toast.success('Appointment request submitted successfully! Dr. Dhairya Mehta\'s clinic team will call you to confirm your slot.');
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
    <div ref={pageRef} className="bg-[#faf7f5] pb-20 text-[#1f2937]">
      {/* Hero */}
      <header className="bg-white py-12 border-b border-gray-200 px-6">
        <div className="max-w-4xl mx-auto text-center reveal active">
          <span className="text-[#cc3b38] font-bold font-['Inter'] text-[13px] tracking-widest uppercase mb-2 block">
            Sharnam Clinic • Vadodara
          </span>
          <h1 className="font-['Playfair_Display'] text-[34px] md:text-[44px] font-bold text-[#1f2937] mb-3">
            Book Your Appointment & View Timings
          </h1>
          <p className="font-['Inter'] text-[16px] text-[#4b5563] leading-relaxed">
            Schedule a constitutional health consultation with <strong className="text-[#1f2937]">Dr. Dhairya Urmish Mehta</strong> (BHMS, C.C.H, B.L.S).
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Complete Interactive Appointment Form */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step Progress Bar */}
          <div className="flex items-center justify-between mb-4 reveal active">
            {['1. Speciality', '2. Schedule', '3. Patient Details'].map((label, i) => (
              <div key={label} className="flex items-center gap-2 flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-['Inter'] text-[13px] font-bold transition-colors ${
                    step > i + 1
                      ? 'bg-[#2c7a94] text-white'
                      : step === i + 1
                      ? 'bg-[#cc3b38] text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step > i + 1 ? <span className="material-symbols-outlined text-[16px]">check</span> : i + 1}
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

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-[32px] border border-gray-200 shadow-md reveal active">
            {/* Step 1: Speciality */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-['Playfair_Display'] text-[24px] font-bold text-[#1f2937] mb-1">
                    Select Specialty or Health Concern
                  </h2>
                  <p className="font-['Inter'] text-[14px] text-[#4b5563]">
                    Choose the health condition you wish to consult Dr. Dhairya Mehta about.
                  </p>
                </div>

                <div className="space-y-3">
                  {specialitiesList.map((spec) => (
                    <label
                      key={spec}
                      className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                        formData.speciality === spec
                          ? 'border-[#cc3b38] bg-[#fcebeb] text-[#cc3b38] font-semibold shadow-sm'
                          : 'border-gray-200 hover:border-gray-300 bg-white text-[#1f2937]'
                      }`}
                    >
                      <span className="font-['Inter'] text-[15px]">{spec}</span>
                      <input
                        type="radio"
                        name="speciality"
                        value={spec}
                        checked={formData.speciality === spec}
                        onChange={(e) => setFormData({ ...formData, speciality: e.target.value })}
                        className="accent-[#cc3b38] w-4 h-4"
                      />
                    </label>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-[#cc3b38] text-white px-7 py-3 rounded-xl font-['Inter'] text-[14px] font-semibold hover:bg-[#b52f2c] transition-all flex items-center gap-2"
                  >
                    Continue to Schedule
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-['Playfair_Display'] text-[24px] font-bold text-[#1f2937] mb-1">
                    Preferred Date & Time Slot
                  </h2>
                  <p className="font-['Inter'] text-[14px] text-[#4b5563]">
                    Pick a convenient date and time for your consultation.
                  </p>
                </div>

                <div>
                  <label className="block font-['Inter'] text-[14px] font-bold text-[#1f2937] mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#faf7f5] border border-gray-200 rounded-xl px-4 py-3 font-['Inter'] text-[15px] text-[#1f2937] focus:outline-none focus:border-[#cc3b38]"
                  />
                </div>

                <div>
                  <label className="block font-['Inter'] text-[14px] font-bold text-[#1f2937] mb-2">
                    Available Time Slot
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setFormData({ ...formData, time: slot })}
                        className={`py-2.5 px-3 rounded-xl font-['Inter'] text-[13px] font-medium transition-all ${
                          formData.time === slot
                            ? 'bg-[#2c7a94] text-white font-bold shadow-md'
                            : 'bg-[#faf7f5] text-[#1f2937] border border-gray-200 hover:border-[#2c7a94]'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-['Inter'] text-[14px] font-semibold hover:bg-gray-100"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-[#cc3b38] text-white px-7 py-3 rounded-xl font-['Inter'] text-[14px] font-semibold hover:bg-[#b52f2c] transition-all flex items-center gap-2"
                  >
                    Next: Patient Details
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Patient Info */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-['Playfair_Display'] text-[24px] font-bold text-[#1f2937] mb-1">
                    Patient Contact Information
                  </h2>
                  <p className="font-['Inter'] text-[14px] text-[#4b5563]">
                    Please provide your contact details so our reception can confirm your slot.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block font-['Inter'] text-[14px] font-bold text-[#1f2937] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Meera Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#faf7f5] border border-gray-200 rounded-xl px-4 py-3 font-['Inter'] text-[15px] focus:outline-none focus:border-[#cc3b38]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-['Inter'] text-[14px] font-bold text-[#1f2937] mb-1">
                        Phone / Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#faf7f5] border border-gray-200 rounded-xl px-4 py-3 font-['Inter'] text-[15px] focus:outline-none focus:border-[#cc3b38]"
                      />
                    </div>
                    <div>
                      <label className="block font-['Inter'] text-[14px] font-bold text-[#1f2937] mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="meera@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#faf7f5] border border-gray-200 rounded-xl px-4 py-3 font-['Inter'] text-[15px] focus:outline-none focus:border-[#cc3b38]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-['Inter'] text-[14px] font-bold text-[#1f2937] mb-1">
                      Brief Description of Health Concern
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your symptoms or how long you have been suffering..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#faf7f5] border border-gray-200 rounded-xl px-4 py-3 font-['Inter'] text-[15px] focus:outline-none focus:border-[#cc3b38]"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-['Inter'] text-[14px] font-semibold hover:bg-gray-100"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#cc3b38] text-white px-8 py-3.5 rounded-xl font-['Inter'] text-[15px] font-semibold hover:bg-[#b52f2c] transition-all shadow-lg disabled:opacity-50 flex items-center gap-2"
                  >
                    {isSubmitting ? 'Submitting...' : 'Confirm & Request Slot'}
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Right Column: FULL CLINIC TIMINGS SCHEDULE (THIS IS THE ONLY PLACE TIMINGS ARE SHOWN IN FULL) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-8 rounded-[32px] border border-gray-200 shadow-md reveal active">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <div className="w-12 h-12 rounded-2xl bg-[#fcebeb] text-[#cc3b38] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[28px]">schedule</span>
              </div>
              <div>
                <h3 className="font-['Playfair_Display'] text-[22px] font-bold text-[#1f2937]">
                  Full Clinic Timings Schedule
                </h3>
                <p className="font-['Inter'] text-[13px] text-[#6b7280]">
                  Official OPD Hours • Sharnam Clinic
                </p>
              </div>
            </div>

            {/* Timings Table */}
            <div className="space-y-3 font-['Inter'] text-[14px]">
              {fullClinicTimings.map((t) => (
                <div
                  key={t.day}
                  className={`p-3.5 rounded-2xl border flex flex-col gap-1 ${
                    t.day === 'Sunday'
                      ? 'bg-[#fff8f7] border-[#fcebeb]'
                      : 'bg-[#faf7f5] border-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-[#1f2937]">
                    <span>{t.day}</span>
                    <span
                      className={`text-[12px] px-2.5 py-0.5 rounded-full font-semibold ${
                        t.day === 'Sunday'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {t.status}
                    </span>
                  </div>
                  <div className="flex flex-col text-[13px] text-[#4b5563] pt-1 border-t border-gray-200/50">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2c7a94]" />
                      <strong>Morning OPD:</strong> {t.morning}
                    </span>
                    <span className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#cc3b38]" />
                      <strong>Evening OPD:</strong> {t.evening}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 bg-[#e6f4f8] p-4 rounded-2xl text-[#2c7a94] font-['Inter'] text-[13px] leading-relaxed">
              <strong className="block mb-0.5 font-bold">Important Notice:</strong>
              Consultations are strictly by prior appointment to prevent long waiting times and ensure adequate constitutional case history evaluation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentPage;
