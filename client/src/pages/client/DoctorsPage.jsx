import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const DoctorsPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1 }
    );
    pageRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const doctorsList = [
    {
      id: 'dr-dhairya-mehta',
      name: 'Dr. Dhairya Urmish Mehta',
      qualifications: 'BHMS, C.C.H, B.L.S',
      regNo: 'G-30237',
      role: 'Founder & Senior Homeopathic Physician',
      specialization: 'Skin & Hair Care, Chronic Asthma, Allergic Rhinitis & Digestive Health',
      experience: '10+ Years of Clinical Practice',
      photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
      bio: 'Dr. Dhairya Mehta is a renowned homeopathic consultant practicing in Vasna - Bhayli, Vadodara. He completed his BHMS with honors and holds specialized certifications in Clinical Homeopathy (C.C.H) and Basic Life Support (B.L.S). Dr. Mehta is passionate about constitutional prescribing that restores total health without drug reliance.',
      keySkills: [
        'Constitutional Case Analysis',
        'Adult & Pediatric Allergy Management',
        'Chronic Skin & Hair Disorders',
        'Lifestyle & Nutritional Guidance',
      ],
      timingsSummary: 'Mon – Sat: 10:00 AM – 1:00 PM & 5:00 PM – 8:30 PM',
      consultationFee: 'Standard OPD Consultation',
    },
  ];

  return (
    <div ref={pageRef} className="bg-[#faf7f5] pb-20 text-[#1f2937]">
      {/* Header Banner */}
      <header className="bg-white py-14 border-b border-gray-200 px-6">
        <div className="max-w-4xl mx-auto text-center reveal active">
          <span className="text-[#cc3b38] font-bold font-['Inter'] text-[13px] tracking-widest uppercase mb-2 block">
            Medical Practitioners • Sharnam Clinic
          </span>
          <h1 className="font-['Playfair_Display'] text-[36px] sm:text-[48px] font-bold text-[#1f2937] mb-4">
            Meet Our Doctor & Clinical Team
          </h1>
          <p className="font-['Inter'] text-[16px] sm:text-[18px] text-[#4b5563] leading-relaxed">
            Dedicated to providing ethical, individualised, and compassionate homeopathic medical care.
          </p>
        </div>
      </header>

      {/* Main Doctor Cards Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {doctorsList.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-[32px] border border-gray-200 shadow-lg overflow-hidden reveal grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Doctor Image Column */}
              <div className="lg:col-span-5 relative bg-[#f8f4f2] overflow-hidden min-h-[350px] lg:min-h-[480px]">
                <img
                  src={doc.photo}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[12px] font-bold text-[#cc3b38] font-['Inter'] border border-gray-200">
                  {doc.experience}
                </div>
              </div>

              {/* Doctor Info Column */}
              <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-[#2c7a94] font-bold font-['Inter'] text-[13px] uppercase tracking-wider block mb-1">
                    {doc.role}
                  </span>
                  <h2 className="font-['Playfair_Display'] text-[32px] font-bold text-[#1f2937] mb-1">
                    {doc.name}
                  </h2>
                  <p className="font-['Inter'] text-[15px] font-semibold text-[#cc3b38]">
                    {doc.qualifications}
                  </p>
                  <p className="font-['Inter'] text-[13px] text-gray-500 font-mono mb-4">
                    Medical Council Reg No.: {doc.regNo}
                  </p>

                  <p className="font-['Inter'] text-[15px] text-[#4b5563] leading-relaxed mb-6">
                    {doc.bio}
                  </p>

                  {/* Specialization & Expertise */}
                  <div className="space-y-3 bg-[#faf7f5] p-5 rounded-2xl border border-gray-100 mb-6">
                    <h4 className="font-['Inter'] text-[13px] font-bold text-[#1f2937] uppercase tracking-wider">
                      Specialization & Areas of Focus:
                    </h4>
                    <p className="font-['Inter'] text-[14px] text-[#2c7a94] font-semibold">
                      {doc.specialization}
                    </p>
                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {doc.keySkills.map((skill) => (
                        <div key={skill} className="flex items-center gap-2 font-['Inter'] text-[13px] text-[#4b5563]">
                          <span className="material-symbols-outlined text-[#cc3b38] text-[16px]">check_circle</span>
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timings Quick Reference */}
                  <div className="flex items-center gap-3 font-['Inter'] text-[14px] text-[#1f2937]">
                    <span className="material-symbols-outlined text-[#2c7a94]">schedule</span>
                    <span>
                      <strong>Consultation Hours:</strong> {doc.timingsSummary}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center gap-4">
                  <Link
                    to="/book-appointment"
                    className="bg-[#cc3b38] text-white px-6 py-3.5 rounded-xl font-['Inter'] text-[14px] font-semibold hover:bg-[#b52f2c] transition-all shadow-md flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">event_available</span>
                    Book Consultation with Doctor
                  </Link>
                  <Link
                    to="/about"
                    className="border border-[#2c7a94] text-[#2c7a94] px-6 py-3.5 rounded-xl font-['Inter'] text-[14px] font-semibold hover:bg-[#e6f4f8] transition-all"
                  >
                    Read Full Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="max-w-4xl mx-auto px-6 pt-6">
        <div className="bg-white rounded-3xl p-8 border border-gray-200 text-center reveal">
          <span className="material-symbols-outlined text-[40px] text-[#cc3b38] mb-3">format_quote</span>
          <h3 className="font-['Playfair_Display'] text-[22px] font-bold text-[#1f2937] mb-3">
            "The physician's highest and only mission is to restore the sick to health."
          </h3>
          <p className="font-['Inter'] text-[14px] text-[#6b7280]">
            — Dr. Samuel Hahnemann (Founder of Homeopathy)
          </p>
        </div>
      </section>
    </div>
  );
};

export default DoctorsPage;
