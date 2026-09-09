import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BusinessCard from '../../components/client/BusinessCard';

const AboutPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1 }
    );
    pageRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={pageRef} className="bg-[#faf7f5] pb-16">
      {/* Header Banner */}
      <header className="pt-12 pb-16 px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 reveal active space-y-4">
            <span className="inline-block px-4 py-1.5 bg-[#fcebeb] text-[#cc3b38] rounded-full font-['Inter'] text-[13px] font-bold uppercase tracking-wider">
              Practitioner Profile & Philosophy
            </span>
            <h1 className="font-['Playfair_Display'] text-[36px] md:text-[48px] font-bold text-[#1f2937] leading-tight">
              About <span className="text-[#cc3b38]">Dr. Dhairya Urmish Mehta</span>
            </h1>
            <p className="font-['Inter'] text-[18px] font-medium text-[#2c7a94]">
              Bachelor in Homeopathic Medicine & Surgery (BHMS), C.C.H, B.L.S
            </p>
            <p className="font-['Inter'] text-[16px] text-[#4b5563] leading-relaxed max-w-2xl">
              Dr. Dhairya Urmish Mehta is a dedicated homeopathic consultant and physician registered under Reg. No: G-30237. At Sharnam Clinic, he specializes in identifying and treating the root cause of acute and chronic health conditions through holistic homeopathic remedies.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/book-appointment"
                className="bg-[#cc3b38] text-white px-6 py-3 rounded-xl font-['Inter'] text-[14px] font-semibold hover:bg-[#b52f2c] transition-all shadow-md"
              >
                Book Prior Appointment
              </Link>
              <a
                href="tel:+916355548616"
                className="border border-[#2c7a94] text-[#2c7a94] px-6 py-3 rounded-xl font-['Inter'] text-[14px] font-semibold hover:bg-[#e6f4f8] transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                +91 6355 548 616
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 reveal active flex justify-center" style={{ transitionDelay: '150ms' }}>
            <BusinessCard />
          </div>
        </div>
      </header>

      {/* Holistic Philosophy */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal space-y-6">
            <span className="text-[#cc3b38] font-bold font-['Inter'] text-[13px] tracking-wider uppercase block">
              Core Principles
            </span>
            <h2 className="font-['Playfair_Display'] text-[32px] font-bold text-[#1f2937]">
              "We focus on treating the root cause of diseases with holistic care."
            </h2>
            <p className="font-['Inter'] text-[16px] text-[#4b5563] leading-relaxed">
              Homeopathy is a system of natural medicine that works by stimulating the body's self-healing mechanisms. Rather than suppressing individual symptoms with temporary measures, Dr. Dhairya Mehta evaluates each patient's physical symptoms, mental state, and lifestyle constitution to select precise, gentle remedies.
            </p>
            <div className="space-y-3 font-['Inter'] text-[14px]">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#cc3b38]">check_circle</span>
                <span><strong>No Harmful Side Effects:</strong> Natural remedies suitable for all ages.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#cc3b38]">check_circle</span>
                <span><strong>Individualized Treatment:</strong> Customized plans based on individual constitution.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#cc3b38]">check_circle</span>
                <span><strong>Long-Term Relief:</strong> Prevents recurrence of chronic conditions.</span>
              </div>
            </div>
          </div>

          <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-6" style={{ transitionDelay: '150ms' }}>
            {[
              {
                icon: 'spa',
                title: 'Gentle & Non-Invasive',
                desc: 'Therapies designed to soothe the body without harsh chemical burden.',
              },
              {
                icon: 'family_restroom',
                title: 'All-Age Suitability',
                desc: 'Extremely safe for infants, pregnant women, adults, and senior citizens.',
              },
              {
                icon: 'psychology',
                title: 'Mind-Body Connection',
                desc: 'Acknowledges emotional stress and lifestyle factors influencing physical illness.',
              },
              {
                icon: 'medical_services',
                title: 'Chronic Illness Care',
                desc: 'Specialized focus on recurring skin, allergy, respiratory, and digestive problems.',
              },
            ].map((card) => (
              <div key={card.title} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <span className="material-symbols-outlined text-[#2c7a94] text-[32px] mb-3">{card.icon}</span>
                <h4 className="font-['Playfair_Display'] text-[18px] font-bold text-[#1f2937] mb-2">{card.title}</h4>
                <p className="font-['Inter'] text-[13px] text-[#4b5563] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Details & Contact Card */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#faf7f5] rounded-[32px] p-8 md:p-12 border border-gray-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[#cc3b38] font-bold font-['Inter'] text-[13px] uppercase tracking-wider block">
                Appointment Guidelines
              </span>
              <h3 className="font-['Playfair_Display'] text-[28px] font-bold text-[#1f2937]">
                Consultations at Sharnam Clinic
              </h3>
              <p className="font-['Inter'] text-[15px] text-[#4b5563] leading-relaxed">
                To ensure adequate time is given for a thorough medical history and constitutional assessment, consultations are conducted <strong>with prior appointment</strong>.
              </p>
              <div className="flex flex-wrap items-center gap-6 font-['Inter'] text-[14px] text-[#1f2937] pt-2">
                <div>
                  <strong className="text-[#2c7a94] block">Phone / Mobile:</strong>
                  <a href="tel:+916355548616" className="text-[#cc3b38] font-bold hover:underline">
                    +91 6355 548 616
                  </a>
                </div>
                <div>
                  <strong className="text-[#2c7a94] block">Email:</strong>
                  <a href="mailto:dhairyam30@gmail.com" className="text-[#1f2937] hover:underline">
                    dhairyam30@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                to="/book-appointment"
                className="bg-[#cc3b38] text-white py-3.5 px-6 rounded-xl font-['Inter'] text-[15px] font-semibold text-center hover:bg-[#b52f2c] transition-all shadow-md"
              >
                Schedule Appointment
              </Link>
              <Link
                to="/contact"
                className="bg-[#2c7a94] text-white py-3.5 px-6 rounded-xl font-['Inter'] text-[15px] font-semibold text-center hover:bg-[#236378] transition-all shadow-md"
              >
                View Map & Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
