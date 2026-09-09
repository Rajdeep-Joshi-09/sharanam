import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const SpecialitiesPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1 }
    );
    pageRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 'skin-hair',
      title: 'Skin & Hair Problems',
      icon: 'spa',
      color: 'text-[#cc3b38]',
      bg: 'bg-[#fcebeb]',
      tagline: 'Effective, natural remedies for clear skin and healthy hair without chemical side effects.',
      conditions: [
        'Acne & Pimples',
        'Eczema & Dermatitis',
        'Hair Fall & Alopecia Areata',
        'Psoriasis & Scaly Lesions',
        'Chronic Urticaria & Skin Hives',
        'Pigmentation & Dark Spots',
      ],
    },
    {
      id: 'respiratory-allergies',
      title: 'Allergies & Respiratory Issues',
      icon: 'air',
      color: 'text-[#2c7a94]',
      bg: 'bg-[#e6f4f8]',
      tagline: 'Strengthening internal immunity to relieve seasonal and chronic respiratory trouble.',
      conditions: [
        'Bronchial Asthma & Wheezing',
        'Acute & Chronic Sinusitis',
        'Allergic Rhinitis & Morning Sneezing',
        'Chronic Bronchitis & Dry Cough',
        'Dust & Seasonal Allergies',
        'Recurrent Sore Throat & Tonsillitis',
      ],
    },
    {
      id: 'digestive-disorders',
      title: 'Digestive Disorders',
      icon: 'health_and_safety',
      color: 'text-[#cc3b38]',
      bg: 'bg-[#fcebeb]',
      tagline: 'Restoring gut balance, improving digestion, and preventing chronic gastric ailments.',
      conditions: [
        'Hyperacidity & Heartburn (GERD)',
        'Irritable Bowel Syndrome (IBS)',
        'Chronic Indigestion & Bloating',
        'Habitual Constipation',
        'Abdominal Cramps & Flatulence',
        'Gastric Mucosal Sensitivity',
      ],
    },
    {
      id: 'mental-wellness',
      title: 'Stress, Anxiety & Sleep Issues',
      icon: 'psychology',
      color: 'text-[#2c7a94]',
      bg: 'bg-[#e6f4f8]',
      tagline: 'Gentle, habit-free natural remedies for emotional stability and restful sleep.',
      conditions: [
        'Chronic Stress & Work Burnout',
        'Anxiety & Nervous Restlessness',
        'Insomnia & Sleep Disturbances',
        'Mental Fatigue & Brain Fog',
        'Mood Swings & Irritability',
        'Stress-Induced Headaches',
      ],
    },
    {
      id: 'women-child-health',
      title: "Women's & Child Health Concerns",
      icon: 'female',
      color: 'text-[#cc3b38]',
      bg: 'bg-[#fcebeb]',
      tagline: 'Specialized constitutional care for hormonal balance and paediatric immunity.',
      conditions: [
        'PCOS / PCOD & Ovaries Management',
        'Premenstrual Syndrome (PMS)',
        'Irregular & Painful Menstruation',
        'Child Immunity Enhancement',
        'Recurrent Colds & Fevers in Kids',
        'Childhood Digestive & Appetite Issues',
      ],
    },
  ];

  return (
    <div ref={pageRef} className="bg-[#faf7f5] pb-20">
      {/* Hero Header */}
      <header className="bg-white py-14 border-b border-gray-200 px-6">
        <div className="max-w-7xl mx-auto text-center reveal active">
          <span className="text-[#cc3b38] font-bold font-['Inter'] text-[13px] tracking-widest uppercase mb-2 block">
            Sharnam Clinic Services
          </span>
          <h1 className="font-['Playfair_Display'] text-[34px] md:text-[46px] font-bold text-[#1f2937] mb-4">
            Our Medical Specialities
          </h1>
          <p className="font-['Inter'] text-[16px] md:text-[18px] text-[#4b5563] max-w-3xl mx-auto leading-relaxed">
            Dr. Dhairya Urmish Mehta provides individualized homeopathic care focusing on fundamental healing. Explore our core clinical treatment areas below.
          </p>
        </div>
      </header>

      {/* Specialities Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {services.map((service, idx) => (
            <div
              key={service.id}
              id={service.id}
              className="reveal bg-white p-8 md:p-10 rounded-[32px] border border-gray-200 shadow-sm hover:shadow-md transition-all"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-4">
                  <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center`}>
                    <span className={`material-symbols-outlined ${service.color} text-[32px]`}>
                      {service.icon}
                    </span>
                  </div>
                  <h2 className="font-['Playfair_Display'] text-[26px] font-bold text-[#1f2937]">
                    {service.title}
                  </h2>
                  <p className="font-['Inter'] text-[15px] text-[#4b5563] leading-relaxed">
                    {service.tagline}
                  </p>

                  <div className="pt-2">
                    <Link
                      to="/book-appointment"
                      className="inline-flex items-center gap-2 bg-[#cc3b38] text-white px-5 py-2.5 rounded-xl font-['Inter'] text-[14px] font-semibold hover:bg-[#b52f2c] transition-colors"
                    >
                      Book Consultation
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-[#faf7f5] p-6 md:p-8 rounded-2xl border border-gray-200/80">
                  <h4 className="font-['Inter'] text-[13px] font-bold uppercase tracking-wider text-[#2c7a94] mb-4">
                    Conditions & Symptoms Treated
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.conditions.map((item) => (
                      <div key={item} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-200/60 shadow-2xs font-['Inter'] text-[14px] text-[#1f2937]">
                        <span className="material-symbols-outlined text-[#cc3b38] text-[18px] shrink-0">
                          check_circle
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Book Consult Footer CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-[#1f2937] text-white p-8 md:p-12 rounded-[32px] text-center space-y-4">
          <h3 className="font-['Playfair_Display'] text-[28px] font-bold">
            Have a Specific Symptom or Condition?
          </h3>
          <p className="font-['Inter'] text-[15px] text-gray-300 max-w-2xl mx-auto">
            Book an appointment with Dr. Dhairya Mehta for a comprehensive homeopathic evaluation tailored to your exact medical history.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              to="/book-appointment"
              className="bg-[#cc3b38] text-white px-8 py-3 rounded-xl font-['Inter'] text-[14px] font-bold hover:bg-[#b52f2c] transition-colors"
            >
              Book Appointment Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialitiesPage;
