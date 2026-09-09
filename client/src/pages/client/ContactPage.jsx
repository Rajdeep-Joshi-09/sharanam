import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

const ContactPage = () => {
  const pageRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'General Consultation Inquiry', message: '' });
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    setTimeout(() => {
      toast.success('Thank you for contacting Sharnam Clinic! We will respond shortly.');
      setFormData({ name: '', email: '', phone: '', subject: 'General Consultation Inquiry', message: '' });
      setLoading(false);
    }, 600);
  };

  return (
    <div ref={pageRef} className="bg-[#faf7f5] pb-16">
      {/* Hero Header */}
      <header className="bg-white py-14 border-b border-gray-200 px-6">
        <div className="max-w-7xl mx-auto text-center reveal active">
          <span className="text-[#cc3b38] font-bold font-['Inter'] text-[13px] tracking-widest uppercase mb-2 block">
            Sharnam Clinic Location & Contact
          </span>
          <h1 className="font-['Playfair_Display'] text-[34px] md:text-[48px] font-bold text-[#1f2937] mb-4">
            Contact & Directions
          </h1>
          <p className="font-['Inter'] text-[16px] md:text-[18px] text-[#4b5563] max-w-2xl mx-auto leading-relaxed">
            Get in touch with <strong className="text-[#1f2937]">Dr. Dhairya Urmish Mehta</strong> or visit our clinic at Samanway Westfields, Vadodara.
          </p>
        </div>
      </header>

      {/* Main Contact Details & Form Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6 reveal active">
          {/* Address */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4 hover:border-[#cc3b38]/40 transition-all">
            <div className="bg-[#fcebeb] text-[#cc3b38] p-3.5 rounded-xl shrink-0">
              <span className="material-symbols-outlined text-[24px]">location_on</span>
            </div>
            <div>
              <h3 className="font-['Inter'] text-[13px] font-bold text-[#cc3b38] uppercase tracking-wider mb-1">
                Clinic Address
              </h3>
              <p className="font-['Playfair_Display'] text-[18px] font-bold text-[#1f2937] leading-snug">
                Sharnam Clinic
              </p>
              <p className="font-['Inter'] text-[14px] text-[#4b5563] mt-1 leading-relaxed">
                Ground Floor, Shop No.: 46, Samanway Westfields, TP-2, Vasna - Bhayli Main Rd, opp. Rajpath Complex, Bhayli, Vadodara, Gujarat 391410
              </p>
            </div>
          </div>

          {/* Phone & Hotline */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4 hover:border-[#2c7a94]/40 transition-all">
            <div className="bg-[#e6f4f8] text-[#2c7a94] p-3.5 rounded-xl shrink-0">
              <span className="material-symbols-outlined text-[24px]">call</span>
            </div>
            <div>
              <h3 className="font-['Inter'] text-[13px] font-bold text-[#2c7a94] uppercase tracking-wider mb-1">
                Phone Number
              </h3>
              <a href="tel:+916355548616" className="font-['Playfair_Display'] text-[22px] font-bold text-[#1f2937] hover:text-[#cc3b38] transition-colors block">
                +91 6355 548 616
              </a>
              <p className="font-['Inter'] text-[13px] text-[#4b5563] mt-0.5">
                Appointments & Inquiries
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4 hover:border-[#2c7a94]/40 transition-all">
            <div className="bg-[#e6f4f8] text-[#2c7a94] p-3.5 rounded-xl shrink-0">
              <span className="material-symbols-outlined text-[24px]">mail</span>
            </div>
            <div>
              <h3 className="font-['Inter'] text-[13px] font-bold text-[#2c7a94] uppercase tracking-wider mb-1">
                Email Address
              </h3>
              <a href="mailto:dhairyam30@gmail.com" className="font-['Playfair_Display'] text-[18px] font-semibold text-[#1f2937] hover:text-[#cc3b38] transition-colors block">
                dhairyam30@gmail.com
              </a>
            </div>
          </div>

          {/* Consultation Hours */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4 hover:border-[#cc3b38]/40 transition-all">
            <div className="bg-[#fcebeb] text-[#cc3b38] p-3.5 rounded-xl shrink-0">
              <span className="material-symbols-outlined text-[24px]">schedule</span>
            </div>
            <div>
              <h3 className="font-['Inter'] text-[13px] font-bold text-[#cc3b38] uppercase tracking-wider mb-1">
                Timings
              </h3>
              <p className="font-['Inter'] text-[15px] font-semibold text-[#1f2937]">
                Monday to Saturday: 10:00 AM – 7:00 PM
              </p>
              <p className="font-['Inter'] text-[15px] font-semibold text-[#1f2937]">
                Sunday: 10:00 AM – 2:00 PM
              </p>
              <span className="inline-block mt-2 text-[12px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                With Prior Appointment
              </span>
            </div>
          </div>
        </div>

        {/* Right: Message / Inquiry Form */}
        <div className="lg:col-span-7 reveal active" style={{ transitionDelay: '150ms' }}>
          <div className="bg-white p-8 md:p-10 rounded-[32px] border border-gray-200 shadow-lg">
            <h2 className="font-['Playfair_Display'] text-[28px] font-bold text-[#1f2937] mb-2">
              Send a Message
            </h2>
            <p className="font-['Inter'] text-[15px] text-[#4b5563] mb-6">
              Have a question regarding homeopathic consultation or timings? Send us a message and Dr. Dhairya Mehta’s team will assist you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 font-['Inter']">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] font-bold text-[#1f2937] mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#cc3b38] focus:ring-2 focus:ring-[#cc3b38]/10 transition-all text-[15px]"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-[#1f2937] mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#cc3b38] focus:ring-2 focus:ring-[#cc3b38]/10 transition-all text-[15px]"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] font-bold text-[#1f2937] mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#cc3b38] focus:ring-2 focus:ring-[#cc3b38]/10 transition-all text-[15px]"
                    placeholder="yourname@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-[#1f2937] mb-1.5">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#cc3b38] focus:ring-2 focus:ring-[#cc3b38]/10 transition-all text-[15px]"
                  >
                    <option value="General Consultation Inquiry">General Consultation Inquiry</option>
                    <option value="Skin & Hair Care">Skin & Hair Care</option>
                    <option value="Allergies & Respiratory">Allergies & Respiratory</option>
                    <option value="Digestive Health">Digestive Health</option>
                    <option value="Stress & Anxiety">Stress & Anxiety</option>
                    <option value="Women or Child Health">Women or Child Health</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-bold text-[#1f2937] mb-1.5">Your Message *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#cc3b38] focus:ring-2 focus:ring-[#cc3b38]/10 transition-all text-[15px] resize-none"
                  placeholder="Describe your health concern or questions..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto bg-[#cc3b38] text-white px-8 py-3.5 rounded-xl text-[14px] font-bold shadow-md hover:bg-[#b52f2c] transition-all disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white p-6 md:p-8 rounded-[32px] border border-gray-200 shadow-md reveal">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="font-['Playfair_Display'] text-[24px] font-bold text-[#1f2937]">
                Sharnam Clinic Google Map Location
              </h2>
              <p className="font-['Inter'] text-[14px] text-[#4b5563]">
                Ground Floor, Shop No: 46, Samanway Westfields, Vasna-Bhayli Main Road, Vadodara
              </p>
            </div>
            <a
              href="https://www.google.com/maps/place/Sharnam+Clinic/@22.2903243,73.1274051,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2c7a94] text-white px-5 py-2.5 rounded-xl font-['Inter'] text-[13px] font-semibold hover:bg-[#236378] transition-all shrink-0"
            >
              <span className="material-symbols-outlined text-[18px]">map</span>
              Open in Google Maps App
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border border-gray-200 h-[400px]">
            <iframe
              title="Sharnam Clinic Google Map"
              src="https://maps.google.com/maps?q=Sharnam+Clinic,+Samanway+Westfields,+Vasna-Bhayli+Main+Road,+Vadodara&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
