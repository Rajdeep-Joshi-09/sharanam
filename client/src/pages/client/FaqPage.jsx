import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const FaqPage = () => {
  const pageRef = useRef(null);
  const [openIdx, setOpenIdx] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1 }
    );
    pageRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      q: 'How does Homeopathy work in treating chronic diseases?',
      a: 'Homeopathy operates on the principle of "Like Cures Like" (Similia Similibus Curentur). Highly diluted natural remedies stimulate the body\'s innate self-healing vital force, targeting root constitutional causes rather than just masking symptoms.',
      linkText: 'Learn more about our clinical philosophy on the About page',
      linkUrl: '/about',
    },
    {
      q: 'Are homeopathic remedies safe for children, pregnant women, and elderly patients?',
      a: 'Yes, absolutely. Homeopathic remedies are non-toxic, free of synthetic chemical additives, non-addictive, and have no adverse side effects when prescribed by a qualified physician. They are suitable for all age groups.',
      linkText: 'View our dedicated pediatric and family services',
      linkUrl: '/services',
    },
    {
      q: 'What are the clinic OPD hours and appointment rules?',
      a: 'To avoid long waiting times and ensure thorough case evaluation, consultations are conducted with prior appointment.',
      linkText: 'Check full clinic timings and book your slot on the Appointment page',
      linkUrl: '/book-appointment',
    },
    {
      q: 'What specific conditions does Dr. Dhairya Mehta treat at Sharnam Clinic?',
      a: 'Dr. Dhairya Mehta specializes in skin disorders (acne, eczema, psoriasis), respiratory allergies, sinusitis, digestive troubles (acidity, IBS), women\'s health (PCOS), and chronic joint pain.',
      linkText: 'Explore our full list of treatments on the Services page',
      linkUrl: '/services',
    },
    {
      q: 'Should I stop taking my existing conventional medications when starting Homeopathy?',
      a: 'No. You should never stop your existing prescribed conventional medications abruptly. Dr. Dhairya Mehta will evaluate your health history during your consultation and advise a gradual, safe transition as your body responds to homeopathic healing.',
      linkText: 'Meet our doctor & check qualifications',
      linkUrl: '/doctors',
    },
    {
      q: 'How long does a homeopathic treatment take to show results?',
      a: 'Acute ailments like mild colds or recent allergies often show improvement within hours or days. Chronic conditions like psoriasis, eczema, or asthma require consistent constitutional treatment over a few months for permanent recovery.',
      linkText: 'Read disease specifics in our Health Info Library',
      linkUrl: '/health-info',
    },
    {
      q: 'What dietary or lifestyle precautions are required during homeopathic treatment?',
      a: 'Generally, strong substances like mint, camphor, or raw onions should not be consumed immediately before or after taking remedies. Specific dietary guidelines are tailored during your personal consultation.',
      linkText: 'Schedule a consultation today',
      linkUrl: '/book-appointment',
    },
    {
      q: 'Where is Sharnam Clinic located and how can I navigate there?',
      a: 'Sharnam Clinic is situated at Samanway Westfields, TP-2, Vasna - Bhayli Main Road, opposite Rajpath Complex in Vadodara.',
      linkText: 'View map and directions on our Contact page',
      linkUrl: '/contact',
    },
  ];

  return (
    <div ref={pageRef} className="bg-[#faf7f5] pb-20 text-[#1f2937]">
      {/* Header Banner */}
      <header className="bg-white py-14 border-b border-gray-200 px-6">
        <div className="max-w-4xl mx-auto text-center reveal active">
          <span className="text-[#cc3b38] font-bold font-['Inter'] text-[13px] tracking-widest uppercase mb-2 block">
            Help & Guidance • Sharnam FAQ
          </span>
          <h1 className="font-['Playfair_Display'] text-[36px] sm:text-[48px] font-bold text-[#1f2937] mb-3">
            Frequently Asked Questions
          </h1>
          <p className="font-['Inter'] text-[16px] sm:text-[18px] text-[#4b5563] leading-relaxed">
            Quick answers to common questions about homeopathic care, consultations, and clinic policies.
          </p>
        </div>
      </header>

      {/* Accordion List */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm transition-all duration-200 reveal"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-['Playfair_Display'] text-[18px] sm:text-[20px] font-bold text-[#1f2937] hover:text-[#cc3b38] transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#fcebeb] text-[#cc3b38] flex items-center justify-center text-[14px] shrink-0 font-['Inter'] font-bold">
                      Q{idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <span
                    className={`material-symbols-outlined text-[#2c7a94] text-[24px] transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#cc3b38]' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 font-['Inter'] text-[15px] text-[#4b5563] leading-relaxed border-t border-gray-100">
                    <p className="pt-4">{faq.a}</p>
                    {faq.linkText && (
                      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[14px] text-[#cc3b38] font-semibold">
                        <span className="material-symbols-outlined text-[16px]">link</span>
                        <Link to={faq.linkUrl} className="hover:underline">
                          {faq.linkText} →
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Still Have Questions Box */}
      <section className="max-w-4xl mx-auto px-6 pt-4">
        <div className="bg-white rounded-3xl p-8 border border-gray-200 text-center shadow-md reveal">
          <h3 className="font-['Playfair_Display'] text-[24px] font-bold text-[#1f2937] mb-2">
            Have a Specific Question Not Answered Here?
          </h3>
          <p className="font-['Inter'] text-[15px] text-[#4b5563] mb-6">
            Feel free to contact our clinic directly or book a personal consultation with Dr. Dhairya Mehta.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-[#2c7a94] text-white px-6 py-3 rounded-xl font-['Inter'] text-[14px] font-semibold hover:bg-[#236378] transition-all"
            >
              Contact Us Directly
            </Link>
            <Link
              to="/book-appointment"
              className="bg-[#cc3b38] text-white px-6 py-3 rounded-xl font-['Inter'] text-[14px] font-semibold hover:bg-[#b52f2c] transition-all"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;
