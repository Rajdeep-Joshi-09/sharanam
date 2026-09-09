import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const HomePage = () => {
  const pageRef = useRef(null);
  const [activeTab, setActiveTab] = useState('skin');
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [hoverRating, setHoverRating] = useState(5);

  const initialReviews = [
    {
      id: 1,
      name: 'Meera Patel',
      location: 'Vadodara',
      condition: 'Adult Acne & Skin Allergy',
      rating: 5,
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      review: 'I suffered from chronic skin acne for 3 years. Dr. Dhairya Mehta’s homeopathic medicines cleared my skin naturally in 4 months without any harsh side effects!',
      verified: true,
      date: 'Recent Patient',
    },
    {
      id: 2,
      name: 'Rajesh Shah',
      location: 'Vasna - Bhayli, Vadodara',
      condition: 'Sinusitis & Asthma',
      rating: 5,
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
      review: 'Severe morning sneezing and sinus headaches kept bothering me every winter. Dr. Dhairya’s root-cause approach built my immunity so well!',
      verified: true,
      date: 'Recent Patient',
    },
    {
      id: 3,
      name: 'Ananya Desai',
      location: 'Vadodara',
      condition: 'PCOS & Hormonal Imbalance',
      rating: 5,
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
      review: 'Dr. Dhairya listened to my whole health history. His gentle remedies regulated my cycles and boosted my energy naturally. Highly recommend Sharnam Clinic!',
      verified: true,
      date: 'Recent Patient',
    },
    {
      id: 4,
      name: 'Sanjay Verma',
      location: 'Vadodara',
      condition: 'Acid Reflux & IBS',
      rating: 5,
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      review: 'Chronic acidity and stomach distress made daily meals uncomfortable. Within weeks of starting treatment, my digestion felt light and back to normal.',
      verified: true,
      date: 'Recent Patient',
    },
  ];

  const [reviewsList, setReviewsList] = useState(() => {
    try {
      const saved = localStorage.getItem('sharnam_patient_reviews');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return initialReviews;
  });

  const [newReview, setNewReview] = useState({
    name: '',
    location: 'Vadodara',
    condition: 'Skin & Hair Care',
    rating: 5,
    review: '',
    gender: 'female',
  });

  useEffect(() => {
    try {
      localStorage.setItem('sharnam_patient_reviews', JSON.stringify(reviewsList));
    } catch (e) {
      console.error(e);
    }
  }, [reviewsList]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = pageRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.review.trim()) {
      toast.error('Please fill in your name and review description.');
      return;
    }

    const createdReview = {
      id: Date.now(),
      name: newReview.name.trim(),
      location: newReview.location.trim() || 'Vadodara',
      condition: newReview.condition,
      rating: newReview.rating,
      photo: newReview.gender === 'female'
        ? 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80'
        : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      review: newReview.review.trim(),
      verified: true,
      date: 'Verified Patient',
    };

    setReviewsList([createdReview, ...reviewsList]);
    toast.success('Thank you! Your patient review has been submitted and published.');
    setNewReview({ name: '', location: 'Vadodara', condition: 'Skin & Hair Care', rating: 5, review: '', gender: 'female' });
    setShowReviewForm(false);
  };

  const specialityData = {
    skin: {
      title: 'Skin & Hair Problems',
      icon: 'spa',
      color: 'from-[#cc3b38] to-[#e05350]',
      badge: 'Dermatological Homeopathy',
      symptoms: ['Acne & Pimples', 'Eczema & Dermatitis', 'Hair Fall & Alopecia', 'Psoriasis', 'Chronic Allergies'],
      desc: 'Homeopathy purifies internal metabolic channels and balances skin immunity, eradicating acne, eczema, and hair loss from the root without harsh chemicals or steroids.',
    },
    respiratory: {
      title: 'Allergies & Respiratory',
      icon: 'air',
      color: 'from-[#2c7a94] to-[#3b8296]',
      badge: 'Immunity & Lungs Care',
      symptoms: ['Bronchial Asthma', 'Chronic Sinusitis', 'Allergic Rhinitis', 'Frequent Sneezing', 'Bronchitis'],
      desc: 'Calms hypersensitive allergic responses and builds natural respiratory immunity against dust, cold weather, and seasonal pollutants.',
    },
    digestive: {
      title: 'Digestive & Gut Health',
      icon: 'health_and_safety',
      color: 'from-[#cc3b38] to-[#2c7a94]',
      badge: 'Gastrointestinal Relief',
      symptoms: ['Hyperacidity & GERD', 'Irritable Bowel (IBS)', 'Chronic Bloating & Gas', 'Constipation', 'Indigestion'],
      desc: 'Restores gastric enzyme balance and digestive motility, offering gentle relief from chronic acidity, IBS, and digestive distress.',
    },
    mind: {
      title: 'Stress & Mental Wellness',
      icon: 'psychology',
      color: 'from-[#2c7a94] to-indigo-600',
      badge: 'Mind & Sleep Harmony',
      symptoms: ['Anxiety & Restlessness', 'Sleep Disorders / Insomnia', 'Work Stress & Fatigue', 'Emotional Imbalance'],
      desc: 'Safe, non-habit-forming homeopathic remedies that soothe nervous system stress, improve sleep quality, and promote inner calm.',
    },
    women: {
      title: "Women's & Child Health",
      icon: 'female',
      color: 'from-purple-600 to-[#cc3b38]',
      badge: 'Hormonal & Paediatric',
      symptoms: ['PCOS / PCOD Care', 'PMS & Menstrual Issues', 'Childhood Immunity', 'Recurrent Infections'],
      desc: 'Constitutional remedies designed to naturally balance female endocrine hormones and strengthen children’s growth and immune defenses.',
    },
  };

  const currentTab = specialityData[activeTab];

  return (
    <div ref={pageRef} className="bg-[#faf7f5] overflow-x-hidden relative">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-12 left-10 w-96 h-96 bg-[#cc3b38]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-36 right-10 w-[450px] h-[450px] bg-[#2c7a94]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Hero Content */}
          <div className="lg:col-span-7 reveal active space-y-7">

            <h1 className="font-['Playfair_Display'] text-[38px] sm:text-[52px] lg:text-[62px] font-extrabold text-[#1f2937] leading-[1.12] tracking-tight">
              Treating the Root Cause with <br />
              <span className="bg-gradient-to-r from-[#cc3b38] via-[#e05350] to-[#2c7a94] bg-clip-text text-transparent">
                Holistic Homeopathy
              </span>
            </h1>

            <p className="font-['Inter'] text-[17px] sm:text-[19px] text-[#4b5563] leading-relaxed max-w-2xl">
              Welcome to <strong className="text-[#1f2937]">Sharnam Clinic</strong>. Guided by <strong className="text-[#1f2937]">Dr. Dhairya Urmish Mehta</strong> (BHMS, C.C.H, B.L.S), we provide safe, natural, and individualized homeopathic remedies designed to restore your long-term health and vitality.
            </p>

            {/* Feature Badges Bar */}
            <div className="flex flex-wrap items-center gap-3 font-['Inter'] text-[13px]">
              <span className="bg-[#fcebeb] text-[#cc3b38] font-bold px-3.5 py-1.5 rounded-xl border border-[#cc3b38]/20 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">spa</span>
                100% Natural & Safe
              </span>
              <span className="bg-[#e6f4f8] text-[#2c7a94] font-bold px-3.5 py-1.5 rounded-xl border border-[#2c7a94]/20 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Zero Chemical Side Effects
              </span>
              <span className="bg-white text-[#1f2937] font-semibold px-3.5 py-1.5 rounded-xl border border-gray-200 shadow-2xs flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#cc3b38] text-[16px]">pin_drop</span>
                Vasna - Bhayli Road, Vadodara
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-1">
              <Link
                to="/book-appointment"
                className="bg-gradient-to-r from-[#cc3b38] to-[#b52f2c] text-white px-8 py-4 rounded-2xl font-['Inter'] text-[15px] font-bold shadow-lg shadow-[#cc3b38]/25 hover:shadow-xl hover:scale-102 transition-all active:scale-95 flex items-center gap-2.5"
              >
                <span className="material-symbols-outlined text-[22px]">calendar_month</span>
                Book Prior Appointment
              </Link>

              <a
                href="tel:+916355548616"
                className="bg-white text-[#2c7a94] border-2 border-[#2c7a94] px-7 py-4 rounded-2xl font-['Inter'] text-[15px] font-bold shadow-xs hover:bg-[#2c7a94] hover:text-white transition-all flex items-center gap-2.5"
              >
                <span className="material-symbols-outlined text-[22px]">call</span>
                +91 6355 548 616
              </a>
            </div>

            {/* Consultation Timings Note */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-[13px] font-['Inter'] text-[#4b5563]">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2.5 rounded-xl border border-gray-200 shadow-2xs">
                <span className="material-symbols-outlined text-[#2c7a94] text-[18px]">schedule</span>
                <span><strong>Mon-Sat:</strong> 10:00 AM – 7:00 PM | <strong>Sun:</strong> 10:00 AM – 2:00 PM</span>
              </div>
              <div className="flex items-center gap-2 bg-amber-50 px-3.5 py-2.5 rounded-xl border border-amber-200 text-amber-800 font-semibold">
                <span className="material-symbols-outlined text-[16px]">info</span>
                <span>With Prior Appointment</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Showcase Composition */}
          <div className="lg:col-span-5 reveal active relative" style={{ transitionDelay: '150ms' }}>
            <div className="relative mx-auto max-w-[440px]">

              {/* Main Visual Image Card */}
              <div className="rounded-[36px] overflow-hidden border-4 border-white shadow-2xl aspect-[4/5] relative bg-gradient-to-br from-[#1f2937] to-[#2c7a94]">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                  alt="Sharnam Clinic Environment"
                  className="w-full h-full object-cover mix-blend-overlay opacity-85"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 font-['Inter']">
                  <div className="bg-[#cc3b38] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block">
                    Holistic Healing Philosophy
                  </div>
                  <h4 className="font-['Playfair_Display'] text-[22px] font-bold">
                    Individualized Patient Care
                  </h4>
                  <p className="text-[13px] text-gray-200 leading-snug">
                    "Addressing fundamental root causes for long-lasting recovery."
                  </p>
                </div>
              </div>

              {/* Floating Glass Badge 1: Doctor Profile */}
              <div className="absolute -top-6 -left-6 glass-pill p-4 rounded-2xl shadow-xl max-w-[240px] hidden sm:flex items-center gap-3 border border-white/90 animate-float-slow">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#cc3b38] to-[#2c7a94] text-white flex items-center justify-center font-bold text-lg font-['Playfair_Display'] shrink-0 shadow-md">
                  DM
                </div>
                <div>
                  <h5 className="font-['Playfair_Display'] text-[15px] font-bold text-[#1f2937] leading-tight">
                    Dr. Dhairya Mehta
                  </h5>
                  <p className="font-['Inter'] text-[11px] font-bold text-[#cc3b38]">
                    BHMS, C.C.H, B.L.S
                  </p>
                  <p className="font-['Inter'] text-[10px] text-gray-500">Reg. No: G-30237</p>
                </div>
              </div>

              {/* Floating Glass Badge 2: Natural Safety */}
              <div className="absolute -bottom-6 -right-6 glass-pill p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-3 border border-white/90">
                <div className="w-10 h-10 rounded-xl bg-[#e6f4f8] text-[#2c7a94] flex items-center justify-center font-bold shrink-0">
                  <span className="material-symbols-outlined text-[24px]">spa</span>
                </div>
                <div className="font-['Inter']">
                  <p className="text-[13px] font-bold text-[#1f2937]">Side-Effect Free</p>
                  <p className="text-[11px] text-[#2c7a94]">Safe for Infants & Adults</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= 4 CORE HIGHLIGHT CARDS ================= */}
      <section className="py-14 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'vital_signs',
                title: 'Root Cause Therapeutics',
                desc: 'Identifies biological and constitutional roots instead of masking symptoms temporarily.',
                badge: '100% Natural',
                bg: 'from-rose-50 to-red-50',
                border: 'hover:border-[#cc3b38]',
                iconBg: 'bg-[#fcebeb] text-[#cc3b38]',
              },
              {
                icon: 'health_and_safety',
                title: 'Zero Chemical Side-Effects',
                desc: 'Ultra-diluted, non-toxic remedies gentle for newborn infants, adults & senior citizens.',
                badge: 'Safe for All Ages',
                bg: 'from-sky-50 to-blue-50',
                border: 'hover:border-[#2c7a94]',
                iconBg: 'bg-[#e6f4f8] text-[#2c7a94]',
              },
              {
                icon: 'volunteer_activism',
                title: 'Individualized Remedy',
                desc: 'Prescriptions tailored to your specific emotional, physical & genetic constitution.',
                badge: 'Personalized',
                bg: 'from-rose-50 to-red-50',
                border: 'hover:border-[#cc3b38]',
                iconBg: 'bg-[#fcebeb] text-[#cc3b38]',
              },
              {
                icon: 'pin_drop',
                title: 'Vasna-Bhayli Location',
                desc: 'Ground Floor, Samanway Westfields, Opp. Rajpath Complex, Main Road, Vadodara.',
                badge: 'Prime Clinic',
                bg: 'from-sky-50 to-blue-50',
                border: 'hover:border-[#2c7a94]',
                iconBg: 'bg-[#e6f4f8] text-[#2c7a94]',
              },
            ].map((card, idx) => (
              <div
                key={card.title}
                className={`reveal bg-gradient-to-b ${card.bg} p-6 rounded-2xl border border-gray-200 ${card.border} shadow-2xs hover:shadow-lg transition-all transform hover:-translate-y-1`}
                style={{ transitionDelay: `${(idx + 1) * 80}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center font-bold shadow-2xs`}>
                    <span className="material-symbols-outlined text-[24px]">{card.icon}</span>
                  </div>
                  <span className="text-[11px] font-bold font-['Inter'] text-gray-600 bg-white/90 px-2.5 py-1 rounded-full border border-gray-200">
                    {card.badge}
                  </span>
                </div>
                <h3 className="font-['Playfair_Display'] text-[18px] font-bold text-[#1f2937] mb-2">{card.title}</h3>
                <p className="font-['Inter'] text-[13px] text-[#4b5563] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE SPECIALITIES TABBED SHOWCASE ================= */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <span className="text-[#cc3b38] font-bold font-['Inter'] text-[13px] tracking-widest uppercase mb-2 block">
            Specialized Care Categories
          </span>
          <h2 className="font-['Playfair_Display'] text-[32px] sm:text-[42px] font-bold text-[#1f2937] mb-4">
            Services & Specialities
          </h2>
          <p className="font-['Inter'] text-[16px] text-[#4b5563]">
            Click any speciality tab below to discover how Dr. Dhairya Mehta treats specific health conditions.
          </p>
        </div>

        {/* Category Tabs Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 reveal">
          {[
            { key: 'skin', title: 'Skin & Hair', icon: 'spa' },
            { key: 'respiratory', title: 'Allergies & Respiratory', icon: 'air' },
            { key: 'digestive', title: 'Digestive Disorders', icon: 'health_and_safety' },
            { key: 'mind', title: 'Stress & Mental Wellness', icon: 'psychology' },
            { key: 'women', title: "Women's & Child Health", icon: 'female' },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-['Inter'] text-[14px] font-semibold transition-all ${activeTab === tab.key
                  ? 'bg-[#1f2937] text-white shadow-lg scale-102'
                  : 'bg-white text-[#4b5563] hover:bg-[#fcebeb] hover:text-[#cc3b38] border border-gray-200'
                }`}
            >
              <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content Display Card */}
        <div className="reveal bg-white p-8 sm:p-12 rounded-[36px] border border-gray-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#fcebeb] text-[#cc3b38] px-3.5 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider">
              {currentTab.badge}
            </div>

            <h3 className="font-['Playfair_Display'] text-[28px] sm:text-[34px] font-bold text-[#1f2937]">
              {currentTab.title}
            </h3>

            <p className="font-['Inter'] text-[15px] text-[#4b5563] leading-relaxed">
              {currentTab.desc}
            </p>

            <div>
              <h4 className="text-[13px] font-bold text-[#2c7a94] uppercase tracking-wider mb-3 font-['Inter']">
                Key Conditions Treated:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-['Inter'] text-[14px]">
                {currentTab.symptoms.map((symptom) => (
                  <div key={symptom} className="flex items-center gap-2.5 bg-[#faf7f5] p-3 rounded-xl border border-gray-200/80">
                    <span className="material-symbols-outlined text-[#cc3b38] text-[18px]">check_circle</span>
                    <span className="font-medium text-[#1f2937]">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 flex flex-wrap gap-4">
              <Link
                to="/specialities"
                className="bg-[#cc3b38] text-white px-7 py-3 rounded-xl font-['Inter'] text-[14px] font-bold hover:bg-[#b52f2c] transition-colors shadow-md"
              >
                View Full Speciality Details
              </Link>
              <Link
                to="/book-appointment"
                className="bg-[#2c7a94] text-white px-7 py-3 rounded-xl font-['Inter'] text-[14px] font-bold hover:bg-[#236378] transition-colors shadow-md"
              >
                Book Prior Appointment
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#faf7f5] to-[#fcebeb]/40 p-8 rounded-[28px] border border-gray-200 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#cc3b38] to-[#2c7a94] text-white mx-auto flex items-center justify-center font-bold text-3xl font-['Playfair_Display'] shadow-md">
              DM
            </div>
            <h4 className="font-['Playfair_Display'] text-[22px] font-bold text-[#1f2937]">
              Dr. Dhairya Urmish Mehta
            </h4>
            <p className="text-[13px] font-bold text-[#cc3b38] font-['Inter']">
              BHMS, C.C.H, B.L.S &bull; Consultant & Physician
            </p>
            <p className="text-[13px] text-[#4b5563] font-['Inter'] leading-relaxed">
              "We take adequate time during consultation to map your entire health profile and prescribe gentle, non-addictive homeopathic remedies."
            </p>
            <div className="pt-2 border-t border-gray-200 text-[12px] font-semibold text-amber-700 font-['Inter']">
              Consultations With Prior Appointment
            </div>
          </div>
        </div>
      </section>

      {/* ================= HAPPY PATIENTS & REVIEWS SECTION WITH SUBMISSION FORM ================= */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header & Stats Summary */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 reveal">
            <div className="space-y-3 flex-1 min-w-0">
              <div className="inline-flex items-center gap-2 bg-[#fcebeb] text-[#cc3b38] px-3.5 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px] shrink-0">reviews</span>
                Patient Feedback & Real Recovery Stories
              </div>
              <h2 className="font-['Playfair_Display'] text-[32px] sm:text-[44px] font-extrabold text-[#1f2937] leading-tight">
                Happy Customers & Reviews
              </h2>
              <p className="font-['Inter'] text-[15px] text-[#4b5563] max-w-[580px] w-full leading-relaxed">
                Read real experiences from patients treated by Dr. Dhairya Urmish Mehta at Sharnam Clinic, Vadodara.
              </p>
            </div>

            {/* Quick Stats Pill + Write Review CTA */}
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <div className="bg-[#faf7f5] p-4 rounded-2xl border border-gray-200 flex items-center gap-4 shadow-2xs">
                <div className="text-center border-r border-gray-200 pr-4">
                  <div className="flex items-center text-amber-500 font-bold text-lg">
                    <span className="text-[#1f2937] text-xl font-['Playfair_Display'] mr-1">4.9</span>
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <span className="text-[11px] font-['Inter'] text-gray-500">Overall Rating</span>
                </div>
                <div>
                  <div className="text-[14px] font-bold text-[#1f2937] font-['Inter']">
                    {reviewsList.length}+ Patient Reviews
                  </div>
                  <span className="text-[11px] font-['Inter'] text-emerald-600 font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                    100% Natural Healing
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowReviewForm(!showReviewForm)}
                className="bg-[#cc3b38] text-white px-7 py-4 rounded-2xl font-['Inter'] text-[14px] font-bold shadow-lg shadow-[#cc3b38]/20 hover:bg-[#b52f2c] hover:scale-102 transition-all flex items-center gap-2.5"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {showReviewForm ? 'close' : 'edit_note'}
                </span>
                {showReviewForm ? 'Close Review Form' : '+ Leave Patient Review'}
              </button>
            </div>
          </div>

          {/* Collapsible Patient Review Submission Form */}
          {showReviewForm && (
            <div className="mb-14 bg-gradient-to-br from-[#faf7f5] to-[#fcebeb]/30 p-8 md:p-10 rounded-[32px] border-2 border-[#cc3b38]/30 shadow-2xl reveal active transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#cc3b38] text-white flex items-center justify-center font-bold shrink-0">
                  <span className="material-symbols-outlined text-[22px]">reviews</span>
                </div>
                <div>
                  <h3 className="font-['Playfair_Display'] text-[24px] font-bold text-[#1f2937]">
                    Share Your Healing Experience
                  </h3>
                  <p className="font-['Inter'] text-[13px] text-[#4b5563]">
                    Your honest feedback helps others find natural root-cause relief with Dr. Dhairya Mehta.
                  </p>
                </div>
              </div>

              <form onSubmit={handleReviewSubmit} className="space-y-6 font-['Inter'] pt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[13px] font-bold text-[#1f2937] mb-1.5">
                      Your Full Name <span className="text-[#cc3b38]">*</span>
                    </label>
                    <input
                      type="text"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:border-[#cc3b38] focus:ring-2 focus:ring-[#cc3b38]/20 outline-none text-[14px]"
                      placeholder="e.g. Meera Patel"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-[#1f2937] mb-1.5">Location / City</label>
                    <input
                      type="text"
                      value={newReview.location}
                      onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:border-[#cc3b38] focus:ring-2 focus:ring-[#cc3b38]/20 outline-none text-[14px]"
                      placeholder="e.g. Vasna-Bhayli, Vadodara"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-[#1f2937] mb-1.5">
                      Condition Treated <span className="text-[#cc3b38]">*</span>
                    </label>
                    <select
                      value={newReview.condition}
                      onChange={(e) => setNewReview({ ...newReview, condition: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:border-[#cc3b38] focus:ring-2 focus:ring-[#cc3b38]/20 outline-none text-[14px]"
                    >
                      <option value="Skin & Hair Care">Skin & Hair Care (Acne, Eczema, Hair Fall)</option>
                      <option value="Allergies & Respiratory">Allergies & Respiratory (Asthma, Sinusitis)</option>
                      <option value="Digestive & Gut Health">Digestive Disorders (Acidity, IBS, Gas)</option>
                      <option value="Stress & Anxiety">Stress, Anxiety & Sleep Care</option>
                      <option value="Women's or Child Health">Women's Care (PCOS) & Paediatric</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white p-5 rounded-2xl border border-gray-200">
                  {/* 5-Star Interactive Rating Picker */}
                  <div>
                    <label className="block text-[13px] font-bold text-[#1f2937] mb-2">
                      Rating <span className="text-[#cc3b38]">*</span>
                    </label>
                    <div className="flex items-center gap-1 text-amber-500">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(newReview.rating)}
                          onClick={() => setNewReview({ ...newReview, rating: star })}
                          className="focus:outline-none transition-transform hover:scale-125 p-1"
                        >
                          <span
                            className="material-symbols-outlined text-[30px]"
                            style={{ fontVariationSettings: star <= (hoverRating || newReview.rating) ? "'FILL' 1" : "'FILL' 0" }}
                          >
                            star
                          </span>
                        </button>
                      ))}
                      <span className="text-[14px] font-bold text-[#1f2937] ml-3 bg-[#faf7f5] px-3 py-1 rounded-lg border border-gray-200">
                        {newReview.rating} / 5 Stars
                      </span>
                    </div>
                  </div>

                  {/* Gender Selector for Avatar representation */}
                  <div>
                    <label className="block text-[13px] font-bold text-[#1f2937] mb-2">Gender</label>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2 text-[14px] cursor-pointer font-medium text-[#1f2937]">
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          checked={newReview.gender === 'female'}
                          onChange={() => setNewReview({ ...newReview, gender: 'female' })}
                          className="accent-[#cc3b38]"
                        />
                        Female
                      </label>
                      <label className="flex items-center gap-2 text-[14px] cursor-pointer font-medium text-[#1f2937]">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked={newReview.gender === 'male'}
                          onChange={() => setNewReview({ ...newReview, gender: 'male' })}
                          className="accent-[#2c7a94]"
                        />
                        Male
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-[#1f2937] mb-1.5">
                    Your Review / Healing Experience <span className="text-[#cc3b38]">*</span>
                  </label>
                  <textarea
                    value={newReview.review}
                    onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:border-[#cc3b38] focus:ring-2 focus:ring-[#cc3b38]/20 outline-none text-[14px] resize-none"
                    placeholder="Describe your health problem, treatment duration, and how Dr. Dhairya Mehta helped you recover..."
                    required
                  />
                </div>

                <div className="flex justify-end items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowReviewForm(false)}
                    className="px-6 py-3 rounded-xl border border-gray-300 text-[#1f2937] font-semibold text-[14px] hover:bg-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#cc3b38] to-[#b52f2c] text-white px-8 py-3.5 rounded-xl font-bold text-[14px] shadow-lg shadow-[#cc3b38]/20 hover:shadow-xl transition-all"
                  >
                    Publish Review
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Dynamic Live Patient Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviewsList.map((item, idx) => (
              <div
                key={item.id}
                className="reveal bg-[#faf7f5] p-6 rounded-[28px] border border-gray-200 shadow-2xs hover:shadow-lg hover:border-[#cc3b38]/40 transition-all flex flex-col justify-between"
                style={{ transitionDelay: `${(idx + 1) * 80}ms` }}
              >
                <div className="space-y-4">
                  {/* Rating Stars & Verified Tag */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className="material-symbols-outlined text-[18px]"
                          style={{ fontVariationSettings: i < item.rating ? "'FILL' 1" : "'FILL' 0" }}
                        >
                          star
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                      <span className="material-symbols-outlined text-[12px]">verified</span>
                      Verified
                    </span>
                  </div>

                  <p className="font-['Inter'] text-[13px] text-[#4b5563] leading-relaxed italic">
                    "{item.review}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-200/80 flex items-center gap-3">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-xs shrink-0"
                  />
                  <div>
                    <h4 className="font-['Playfair_Display'] text-[15px] font-bold text-[#1f2937] leading-tight">
                      {item.name}
                    </h4>
                    <p className="font-['Inter'] text-[11px] font-bold text-[#cc3b38]">
                      {item.condition}
                    </p>
                    <p className="font-['Inter'] text-[10px] text-gray-500">
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FINAL ACTION CALLOUT ================= */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#cc3b38] via-[#c43431] to-[#2c7a94] rounded-[36px] p-8 md:p-14 text-center text-white shadow-2xl space-y-6">
          <h2 className="font-['Playfair_Display'] text-[32px] md:text-[44px] font-bold leading-tight">
            Start Your Root-Cause Homeopathic Treatment
          </h2>
          <p className="font-['Inter'] text-[16px] md:text-[18px] text-white/90 max-w-2xl mx-auto leading-relaxed">
            Consult Dr. Dhairya Urmish Mehta (BHMS, CCH, BLS) at Sharnam Clinic, Samanway Westfields, Vadodara.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/book-appointment"
              className="bg-white text-[#cc3b38] px-9 py-4 rounded-2xl font-['Inter'] text-[15px] font-bold shadow-lg hover:bg-gray-100 transition-all active:scale-95"
            >
              Book Prior Appointment
            </Link>
            <Link
              to="/contact"
              className="bg-[#1f2937] text-white px-9 py-4 rounded-2xl font-['Inter'] text-[15px] font-bold shadow-lg hover:bg-black transition-all"
            >
              View Location & Timings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
