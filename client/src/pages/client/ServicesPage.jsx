import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const pageRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1 }
    );
    pageRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const servicesList = [
    {
      id: 'skin-hair',
      category: 'skin',
      icon: 'dermatology',
      name: 'Skin & Hair Care Therapy',
      description: 'Comprehensive homeopathic treatment for chronic skin conditions, scalp ailments, and allergic dermatitis without steroid creams.',
      whatsIncluded: [
        'Adult & Teenage Acne / Pimples Treatment',
        'Eczema & Atopic Dermatitis Relief',
        'Psoriasis & Scalp Flaking Management',
        'Urticaria & Skin Allergy Care',
        'Hair Loss, Alopecia & Dandruff Control',
      ],
      approach: 'Addresses internal hormonal imbalance and immune sensitivity to achieve long-lasting clear skin.',
    },
    {
      id: 'respiratory',
      category: 'respiratory',
      icon: 'air',
      name: 'Respiratory & ENT Care',
      description: 'Strengthening natural lung immunity and nasal defense to prevent recurring seasonal allergies, sinus pressure, and wheezing.',
      whatsIncluded: [
        'Chronic Allergic Rhinitis & Frequent Sneezing',
        'Sinusitis & Nasal Blockage Relief',
        'Bronchial Asthma & Wheezing Management',
        'Recurrent Tonsillitis & Throat Infections',
        'Dust & Pollen Allergy Immunomodulation',
      ],
      approach: 'Desensitizes the respiratory system naturally so seasonal changes no longer trigger severe flare-ups.',
    },
    {
      id: 'digestive',
      category: 'digestive',
      icon: 'stomach',
      name: 'Digestive & Gastric Wellness',
      description: 'Gentle, natural solutions for chronic acidity, reflux, IBS, and sluggish digestion to restore gut health and gut microbiome balance.',
      whatsIncluded: [
        'GERD, Heartburn & Chronic Acidity',
        'Irritable Bowel Syndrome (IBS)',
        'Chronic Constipation & Bloating',
        'Gastritis & Stomach Ulcer Recovery',
        'Indigestion & Food Intolerance Care',
      ],
      approach: 'Normalizes stomach acid production and gut motility while reducing stress-induced gastric distress.',
    },
    {
      id: 'women-health',
      category: 'women',
      icon: 'female',
      name: 'Women’s & Hormonal Health',
      description: 'Holistic care for female endocrine health, menstrual irregularities, PCOS, and menopausal transitions.',
      whatsIncluded: [
        'PCOS / PCOD & Ovarian Cysts',
        'Irregular & Painful Menstrual Cycles',
        'Menopausal Hot Flashes & Mood Swings',
        'Hormonal Acne & Weight Gain',
        'Fibroids & Premenstrual Syndrome (PMS)',
      ],
      approach: 'Restores natural endocrine rhythm without synthetic hormone replacement therapy.',
    },
    {
      id: 'chronic-pain',
      category: 'chronic',
      icon: 'joint',
      name: 'Joint & Chronic Pain Management',
      description: 'Natural pain relief and anti-inflammatory homeopathic care for joint stiffness, arthritis, and backache.',
      whatsIncluded: [
        'Rheumatoid & Osteoarthritis Relief',
        'Cervical & Lumbar Spondylosis',
        'Gout & Uric Acid Management',
        'Sciatica & Lower Back Pain',
        'Fibromyalgia & Muscle Stiffness',
      ],
      approach: 'Reduces joint swelling and morning stiffness while promoting cartilage health and mobility.',
    },
    {
      id: 'pediatric',
      category: 'pediatric',
      icon: 'child_care',
      name: 'Pediatric & Child Health',
      description: 'Ultra-gentle, sweet homeopathic pills designed for babies, toddlers, and young children to boost natural immunity.',
      whatsIncluded: [
        'Recurrent Cold, Cough & Fever in Children',
        'Childhood Asthma & Allergic Cough',
        'Poor Appetite & Digestive Troubles',
        'Teething Complaints & Bedwetting',
        'Immunity Enhancement for School-Going Children',
      ],
      approach: 'Zero chemical burden, safe for infants, and highly effective for developing immune systems.',
    },
    {
      id: 'mental-wellness',
      category: 'mental',
      icon: 'psychology',
      name: 'Mental Wellness & Stress Care',
      description: 'Constitutional remedies to calm the nervous system, alleviate chronic anxiety, and improve restorative sleep.',
      whatsIncluded: [
        'Chronic Stress & Work Burnout',
        'Anxiety & Panic Tendencies',
        'Insomnia & Sleep Disturbances',
        'Mild Depression & Mood Swings',
        'Tension Headaches & Migraines',
      ],
      approach: 'Balances neurotransmitter sensitivity naturally without dependency or drowsiness.',
    },
    {
      id: 'lifestyle-preventive',
      category: 'chronic',
      icon: 'vital_signs',
      name: 'Preventive & Lifestyle Health',
      description: 'Supportive homeopathic care for metabolic balance, thyroid dysfunction, and immune enhancement.',
      whatsIncluded: [
        'Hypothyroidism & Hyperthyroidism Support',
        'Immunity Strengthening Post-Illness',
        'Chronic Fatigue & Low Energy',
        'Metabolic Health & Detoxification',
        'Seasonal Illness Prevention',
      ],
      approach: 'Enhances metabolic efficiency and defense mechanisms against recurring infections.',
    },
  ];

  const filteredServices = activeCategory === 'all'
    ? servicesList
    : servicesList.filter((s) => s.category === activeCategory);

  return (
    <div ref={pageRef} className="bg-[#faf7f5] pb-20 text-[#1f2937]">
      {/* Header Banner */}
      <header className="bg-white py-14 border-b border-gray-200 px-6">
        <div className="max-w-4xl mx-auto text-center reveal active">
          <span className="text-[#cc3b38] font-bold font-['Inter'] text-[13px] tracking-widest uppercase mb-2 block">
            Sharnam Homeopathy • Full Service Catalog
          </span>
          <h1 className="font-['Playfair_Display'] text-[36px] sm:text-[48px] font-bold text-[#1f2937] mb-4">
            Our Detailed Clinical Services
          </h1>
          <p className="font-['Inter'] text-[16px] sm:text-[18px] text-[#4b5563] leading-relaxed">
            This is our single comprehensive listing of all specialized homeopathic treatments offered at Sharnam Clinic by Dr. Dhairya Mehta.
          </p>
        </div>
      </header>

      {/* Category Filter Bar */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap items-center justify-center gap-3 reveal">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'skin', label: 'Skin & Hair' },
            { id: 'respiratory', label: 'Respiratory & ENT' },
            { id: 'digestive', label: 'Digestive & Gut' },
            { id: 'women', label: 'Women’s Health' },
            { id: 'chronic', label: 'Chronic & Joint' },
            { id: 'pediatric', label: 'Pediatric' },
            { id: 'mental', label: 'Mental Wellness' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-['Inter'] text-[14px] font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#cc3b38] text-white shadow-md'
                  : 'bg-white text-[#4b5563] border border-gray-200 hover:border-[#cc3b38]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Full Detailed Services List */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between reveal"
              style={{ transitionDelay: `${(idx % 4) * 80}ms` }}
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#fcebeb] text-[#cc3b38] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[32px]">{service.icon}</span>
                  </div>
                  <div>
                    <h2 className="font-['Playfair_Display'] text-[24px] font-bold text-[#1f2937]">
                      {service.name}
                    </h2>
                    <span className="inline-block px-3 py-0.5 bg-[#e6f4f8] text-[#2c7a94] rounded-full font-['Inter'] text-[12px] font-semibold uppercase tracking-wider mt-1">
                      {service.category} Care
                    </span>
                  </div>
                </div>

                <p className="font-['Inter'] text-[15px] text-[#4b5563] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* What's Included List */}
                <div className="bg-[#faf7f5] p-5 rounded-2xl border border-gray-100 mb-6">
                  <h4 className="font-['Inter'] text-[13px] font-bold text-[#cc3b38] uppercase tracking-wider mb-3">
                    What's Included & Conditions Treated:
                  </h4>
                  <ul className="space-y-2 font-['Inter'] text-[14px] text-[#1f2937]">
                    {service.whatsIncluded.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[#2c7a94] text-[18px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-[13px] font-['Inter'] text-gray-500 italic mb-6">
                  <strong className="text-[#1f2937] not-italic">Treatment Approach:</strong> {service.approach}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="font-['Inter'] text-[13px] text-[#6b7280]">
                  Consultation required prior to medication
                </span>
                <Link
                  to="/book-appointment"
                  className="bg-[#cc3b38] text-white px-5 py-2.5 rounded-xl font-['Inter'] text-[14px] font-semibold hover:bg-[#b52f2c] transition-all flex items-center gap-1.5"
                >
                  Book Service
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 pt-12">
        <div className="bg-[#1f2937] text-white rounded-3xl p-8 md:p-12 text-center reveal">
          <h3 className="font-['Playfair_Display'] text-[28px] font-bold mb-3">
            Not Sure Which Treatment Is Right For You?
          </h3>
          <p className="font-['Inter'] text-[16px] text-gray-300 max-w-2xl mx-auto mb-6">
            Schedule a detailed constitutional consultation with Dr. Dhairya Mehta to identify the root cause of your symptoms.
          </p>
          <Link
            to="/book-appointment"
            className="inline-flex items-center gap-2 bg-[#cc3b38] text-white px-7 py-3.5 rounded-xl font-['Inter'] text-[15px] font-semibold hover:bg-[#b52f2c] transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">calendar_month</span>
            Schedule Consultation Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
