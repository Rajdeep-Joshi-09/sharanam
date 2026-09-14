import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const HealthInfoPage = () => {
  const pageRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1 }
    );
    pageRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const diseaseLibrary = [
    {
      id: 'acne-vulgaris',
      title: 'Acne Vulgaris & Pimples',
      category: 'skin',
      icon: 'face',
      shortSummary: 'Inflammatory skin condition affecting oil glands and hair follicles.',
      symptoms: [
        'Blackheads, whiteheads, and painful red papules on face and back',
        'Pustules with visible pus at center',
        'Deep, tender cystic nodules causing long-term scarring',
        'Oily skin complexion and clogged facial pores',
      ],
      causes: [
        'Hormonal fluctuations during adolescence, PCOS, or stress',
        'Overproduction of sebum (skin oil) by androgen hormones',
        'Bacterial colonization (Cutibacterium acnes) in blocked pores',
        'Excessive consumption of high-glycemic or greasy foods',
      ],
      prevention: [
        'Wash face twice daily with mild non-comedogenic cleanser',
        'Avoid picking or squeezing acne lesions to prevent scars',
        'Maintain balanced hydration and limit processed dairy/sugar',
        'Clean pillowcases and cell phone screens frequently',
      ],
      whenToSeeDoctor: 'Seek consultation if acne causes emotional distress, painful cystic nodules, or deep pitting scars unresponsive to OTC cleansers.',
    },
    {
      id: 'atopic-eczema',
      title: 'Eczema & Atopic Dermatitis',
      category: 'skin',
      icon: 'wash',
      shortSummary: 'Chronic inflammatory skin condition causing itchy, inflamed, and dry patches.',
      symptoms: [
        'Intense itching, often worse at night',
        'Dry, red to brownish-gray patches on skin folds (elbows, knees, neck)',
        'Small, raised bumps that may leak fluid and crust over',
        'Thickened, cracked, or scaly skin texture',
      ],
      causes: [
        'Immune system hypersensitivity and genetic skin barrier dysfunction',
        'Environmental triggers like harsh soaps, detergents, or wool clothing',
        'Food allergies, pollen, pet dander, and temperature spikes',
        'Emotional stress causing skin barrier flare-ups',
      ],
      prevention: [
        'Apply fragrance-free moisturizers immediately after bathing',
        'Take lukewarm showers instead of hot baths',
        'Wear breathable cotton clothing and avoid harsh chemical detergents',
        'Use indoor humidifiers during dry winter months',
      ],
      whenToSeeDoctor: 'Consult a physician if skin becomes painfully infected, displays yellow crusting, or prevents peaceful sleep.',
    },
    {
      id: 'allergic-rhinitis',
      title: 'Allergic Rhinitis & Sinusitis',
      category: 'respiratory',
      icon: 'masks',
      shortSummary: 'Nasal inflammation caused by immune overreaction to environmental allergens.',
      symptoms: [
        'Repetitive morning sneezing fits and runny nose',
        'Nasal congestion, post-nasal drip, and itching of eyes/throat',
        'Sinus facial pressure and recurrent frontal headaches',
        'Fatigue and difficulty breathing through nose',
      ],
      causes: [
        'Inhalation of air-borne allergens like dust mites, pollen, and mold spores',
        'Hyper-reactive nasal mucous membrane constitution',
        'Sudden weather shifts, cold drafts, or air conditioning exposure',
        'Strong perfumes, vehicle exhaust, and tobacco smoke',
      ],
      prevention: [
        'Keep home windows closed during high pollen counts',
        'Wash bed linens weekly in hot water to eliminate dust mites',
        'Use saline nasal rinses to clear trapped allergens',
        'Avoid known triggers and cold food/beverages during seasonal transitions',
      ],
      whenToSeeDoctor: 'Schedule an evaluation if sinus pressure lasts over 10 days, causes thick green nasal discharge, or leads to sleep apnea.',
    },
    {
      id: 'bronchial-asthma',
      title: 'Bronchial Asthma',
      category: 'respiratory',
      icon: 'air',
      shortSummary: 'Chronic condition where airways narrow, swell, and produce extra mucus.',
      symptoms: [
        'Shortness of breath and chest tightness',
        'Wheezing sound during exhalation',
        'Coughing fits worsened by cold air or physical exertion',
        'Difficulty speaking full sentences during severe episodes',
      ],
      causes: [
        'Genetic tendency towards respiratory hypersensitivity',
        'Allergen exposure (pollen, dust, animal hair, mold)',
        'Respiratory viral infections in early childhood',
        'Air pollution, cold weather, and intense emotional stress',
      ],
      prevention: [
        'Identify and strictly avoid personal asthma triggers',
        'Keep indoor humidity balanced and clean AC air filters',
        'Practice deep breathing exercises under guidance',
        'Avoid smoking and second-hand smoke exposure',
      ],
      whenToSeeDoctor: 'Immediate emergency care is required if breathlessness causes blue discoloration of lips or severe chest strain.',
    },
    {
      id: 'gerd-acidity',
      title: 'GERD & Chronic Acidity',
      category: 'digestive',
      icon: 'stomach',
      shortSummary: 'Backflow of stomach acid into the esophagus causing chest burning.',
      symptoms: [
        'Burning sensation in chest (heartburn), usually after eating',
        'Sour or bitter regurgitation of food or acid liquid',
        'Upper abdominal bloating, nausea, and frequent burping',
        'Sore throat, chronic dry cough, or sensation of lump in throat',
      ],
      causes: [
        'Weakness or relaxation of lower esophageal sphincter (LES)',
        'Irregular meal times, overeating, or lying down right after meals',
        'Spicy, oily, caffeinated, or fried foods',
        'Obesity, pregnancy, and chronic stress',
      ],
      prevention: [
        'Eat smaller, more frequent meals rather than heavy dinners',
        'Avoid lying down for at least 2 to 3 hours after eating',
        'Elevate the head of your bed by 6 inches',
        'Limit caffeine, carbonated drinks, and spicy late-night snacks',
      ],
      whenToSeeDoctor: 'Consult if acid reflux occurs more than twice a week or causes difficulty swallowing and dark stools.',
    },
    {
      id: 'irritable-bowel',
      title: 'Irritable Bowel Syndrome (IBS)',
      category: 'digestive',
      icon: 'nutrition',
      shortSummary: 'Functional gastrointestinal disorder affecting bowel habits and gut comfort.',
      symptoms: [
        'Abdominal cramping and pain linked to bowel movements',
        'Alternating episodes of diarrhea and constipation',
        'Excess gas, abdominal distension, and bloating',
        'Mucus in stool and feeling of incomplete bowel evacuation',
      ],
      causes: [
        'Abnormal gastrointestinal muscle contractions',
        'Gut-brain axis dysregulation and heightened nerve sensitivity',
        'Post-infectious intestinal inflammation',
        'Chronic mental anxiety and specific food intolerances',
      ],
      prevention: [
        'Maintain a detailed food diary to pinpoint trigger foods',
        'Eat fiber-rich foods gradually and stay hydrated',
        'Practice stress management techniques like meditation or walking',
        'Avoid artificial sweeteners and carbonated drinks',
      ],
      whenToSeeDoctor: 'Seek medical advice if IBS symptoms include unexplained weight loss, night-time diarrhea, or rectal bleeding.',
    },
    {
      id: 'pcos-hormonal',
      title: 'PCOS (Polycystic Ovary Syndrome)',
      category: 'women',
      icon: 'female',
      shortSummary: 'Endocrine disorder causing enlarged ovaries with small cysts and hormonal imbalance.',
      symptoms: [
        'Irregular, delayed, or absent menstrual periods',
        'Excess facial and body hair growth (hirsutism)',
        'Persistent adult acne along jawline and cheeks',
        'Weight gain and difficulty losing weight',
      ],
      causes: [
        'Insulin resistance causing elevated androgen levels',
        'Low-grade chronic systemic inflammation',
        'Hereditary genetic predisposition',
        'Sedentary lifestyle and stress-induced endocrine disruption',
      ],
      prevention: [
        'Adopt a low-glycemic, whole-food diet',
        'Engage in 30 minutes of daily physical exercise',
        'Prioritize 7-8 hours of quality sleep to balance cortisol',
        'Manage stress through mindfulness and routine lifestyle habits',
      ],
      whenToSeeDoctor: 'Consult a gynecologist or homeopathic physician if periods are absent for over 60 days or when planning pregnancy.',
    },
  ];

  const filteredDiseases = diseaseLibrary.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortSummary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div ref={pageRef} className="bg-[#faf7f5] pb-20 text-[#1f2937]">
      {/* Header Banner */}
      <header className="bg-white py-14 border-b border-gray-200 px-6">
        <div className="max-w-4xl mx-auto text-center reveal active">
          <span className="text-[#cc3b38] font-bold font-['Inter'] text-[13px] tracking-widest uppercase mb-2 block">
            Patient Education • Sharnam Knowledge Base
          </span>
          <h1 className="font-['Playfair_Display'] text-[36px] sm:text-[48px] font-bold text-[#1f2937] mb-4">
            Health Information & Disease Library
          </h1>
          <p className="font-['Inter'] text-[16px] sm:text-[18px] text-[#4b5563] leading-relaxed">
            Detailed guides on common medical conditions, symptoms, root causes, prevention tips, and medical advice.
          </p>
        </div>
      </header>

      {/* 1. DISCLAIMER BANNER (ONCE AT THE TOP OF THIS PAGE ONLY) */}
      <section className="max-w-5xl mx-auto px-6 pt-8">
        <div className="bg-[#fff3cd] border-l-4 border-[#ffc107] text-[#856404] p-5 rounded-2xl shadow-sm font-['Inter'] text-[14px] leading-relaxed reveal active">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[24px] text-[#856404] shrink-0 mt-0.5">
              warning
            </span>
            <div>
              <strong className="font-bold text-[15px] block mb-1">
                Medical Disclaimer & Educational Notice
              </strong>
              The health information provided on this page is strictly for general educational and informational purposes. It is not intended to be a substitute for professional medical diagnosis, advice, or treatment. Always consult a qualified physician or homeopathic consultant regarding any specific health condition or medical emergency.
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Controls */}
      <section className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-3xl border border-gray-200 shadow-sm reveal">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Conditions' },
              { id: 'skin', label: 'Skin & Hair' },
              { id: 'respiratory', label: 'Respiratory' },
              { id: 'digestive', label: 'Digestive' },
              { id: 'women', label: 'Women’s Health' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl font-['Inter'] text-[13px] font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#2c7a94] text-white'
                    : 'bg-[#faf7f5] text-[#4b5563] hover:bg-gray-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search diseases or symptoms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#faf7f5] border border-gray-200 rounded-xl pl-10 pr-4 py-2 font-['Inter'] text-[14px] text-[#1f2937] focus:outline-none focus:border-[#cc3b38]"
            />
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400 text-[18px]">
              search
            </span>
          </div>
        </div>
      </section>

      {/* Disease Cards List */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-10">
          {filteredDiseases.map((disease, idx) => (
            <div
              key={disease.id}
              className="bg-white rounded-[32px] p-8 md:p-10 border border-gray-200 shadow-md reveal space-y-6"
              style={{ transitionDelay: `${(idx % 3) * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#fcebeb] text-[#cc3b38] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[32px]">{disease.icon}</span>
                </div>
                <div>
                  <span className="inline-block px-3 py-0.5 bg-[#e6f4f8] text-[#2c7a94] rounded-full font-['Inter'] text-[12px] font-bold uppercase tracking-wider mb-1">
                    {disease.category} Condition
                  </span>
                  <h2 className="font-['Playfair_Display'] text-[26px] sm:text-[30px] font-bold text-[#1f2937]">
                    {disease.title}
                  </h2>
                  <p className="font-['Inter'] text-[15px] text-[#6b7280]">
                    {disease.shortSummary}
                  </p>
                </div>
              </div>

              {/* Grid of Symptoms, Causes, Prevention */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Symptoms */}
                <div className="bg-[#faf7f5] p-5 rounded-2xl border border-gray-100">
                  <h4 className="font-['Inter'] text-[14px] font-bold text-[#cc3b38] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">warning</span>
                    Common Symptoms
                  </h4>
                  <ul className="space-y-2 font-['Inter'] text-[13px] text-[#4b5563]">
                    {disease.symptoms.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span className="text-[#cc3b38] font-bold">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Root Causes */}
                <div className="bg-[#faf7f5] p-5 rounded-2xl border border-gray-100">
                  <h4 className="font-['Inter'] text-[14px] font-bold text-[#2c7a94] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">biotech</span>
                    Key Causes & Triggers
                  </h4>
                  <ul className="space-y-2 font-['Inter'] text-[13px] text-[#4b5563]">
                    {disease.causes.map((c) => (
                      <li key={c} className="flex items-start gap-2">
                        <span className="text-[#2c7a94] font-bold">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Prevention Tips */}
                <div className="bg-[#faf7f5] p-5 rounded-2xl border border-gray-100">
                  <h4 className="font-['Inter'] text-[14px] font-bold text-[#10b981] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">health_and_safety</span>
                    Prevention & Self-Care
                  </h4>
                  <ul className="space-y-2 font-['Inter'] text-[13px] text-[#4b5563]">
                    {disease.prevention.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="text-[#10b981] font-bold">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* When to see doctor & CTA */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="font-['Inter'] text-[13px] text-[#1f2937]">
                  <strong className="text-[#cc3b38]">When to see a doctor:</strong> {disease.whenToSeeDoctor}
                </div>
                <Link
                  to="/book-appointment"
                  className="bg-[#cc3b38] text-white px-5 py-2.5 rounded-xl font-['Inter'] text-[13px] font-semibold hover:bg-[#b52f2c] transition-all shrink-0 flex items-center gap-1.5"
                >
                  Book Consultation
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HealthInfoPage;
