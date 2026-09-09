import { useState } from 'react';
import ClinicLogo from './ClinicLogo';

const BusinessCard = ({ className = '' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`w-full max-w-[480px] mx-auto perspective-1000 ${className}`}>
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className={`relative w-full cursor-pointer transition-transform duration-700 transform-style-3d shadow-2xl rounded-[28px] border border-gray-200/90 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{ minHeight: '310px' }}
      >
        {/* ================= FRONT SIDE (LOGO) ================= */}
        <div className="absolute inset-0 w-full h-full bg-[#fdfcfb] rounded-[28px] p-6 sm:p-8 flex flex-col justify-between items-center text-center backface-hidden select-none border-4 border-white shadow-inner">
          {/* Card Top Header Badge */}
          <div className="w-full flex items-center justify-between text-[12px] font-['Inter'] text-[#2c7a94] font-semibold">
            <span className="bg-[#e6f4f8] px-3 py-1 rounded-full uppercase tracking-wider text-[10px]">
              Visiting Card
            </span>
            <span className="flex items-center gap-1 text-[#cc3b38] bg-[#fcebeb] px-3 py-1 rounded-full text-[11px] animate-pulse">
              <span className="material-symbols-outlined text-[14px]">autorenew</span>
              Tap to Flip
            </span>
          </div>

          {/* Center Logo */}
          <div className="my-auto py-4">
            <ClinicLogo size="lg" className="scale-110 sm:scale-125" />
          </div>

          {/* Bottom Flip Hint */}
          <div className="w-full pt-2 border-t border-gray-100 flex items-center justify-center gap-2 text-[12px] font-['Inter'] text-[#4b5563]">
            <span className="material-symbols-outlined text-[16px] text-[#2c7a94]">touch_app</span>
            <span>Click card to view Doctor details & Location</span>
          </div>
        </div>

        {/* ================= BACK SIDE (DETAILS) ================= */}
        <div className="absolute inset-0 w-full h-full bg-[#fdfcfb] rounded-[28px] p-5 sm:p-6 flex flex-col justify-between backface-hidden rotate-y-180 select-none border-4 border-white shadow-inner text-[#1f2937] font-['Inter']">
          
          {/* Top Bar: Doctor Name & Degrees */}
          <div>
            <div className="flex items-start justify-between gap-2 border-b border-gray-200/80 pb-2.5">
              <div>
                <h3 className="font-['Playfair_Display'] text-[20px] sm:text-[22px] font-bold text-[#cc3b38] leading-tight">
                  Dr. Dhairya Urmish Mehta
                </h3>
                <p className="text-[12px] sm:text-[13px] font-bold text-[#1f2937] leading-tight mt-0.5">
                  Bachelor in Homeopathic Medicine and Surgeon
                </p>
                <p className="text-[11px] font-semibold text-[#2c7a94]">
                  C.C.H, B.L.S (Consultant and Physician) &bull; Reg. No.: G-30237
                </p>
              </div>

              {/* Flip back button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                className="bg-[#fcebeb] text-[#cc3b38] p-1.5 rounded-full hover:bg-[#cc3b38] hover:text-white transition-colors shrink-0"
                title="Flip back"
              >
                <span className="material-symbols-outlined text-[18px]">autorenew</span>
              </button>
            </div>

            {/* Appointment Note */}
            <div className="pt-2 text-right">
              <span className="text-[#cc3b38] font-bold text-[12px] sm:text-[13px] bg-[#fcebeb] px-2.5 py-0.5 rounded-md inline-block">
                With Prior Appointment
              </span>
            </div>
          </div>

          {/* Contact & Address Section */}
          <div className="space-y-2 text-[12px] sm:text-[13px] text-[#4b5563] my-auto pt-1">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#cc3b38] text-[18px] shrink-0">call</span>
              <a
                href="tel:+916355548616"
                onClick={(e) => e.stopPropagation()}
                className="font-bold text-[#1f2937] hover:text-[#cc3b38] transition-colors"
              >
                6355548616
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#cc3b38] text-[18px] shrink-0">mail</span>
              <a
                href="mailto:dhairyam30@gmail.com"
                onClick={(e) => e.stopPropagation()}
                className="font-medium text-[#1f2937] hover:text-[#cc3b38] transition-colors"
              >
                dhairyam30@gmail.com
              </a>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#cc3b38] text-[18px] shrink-0 mt-0.5">home</span>
              <p className="text-[11px] sm:text-[12px] leading-snug text-[#1f2937]">
                Ground Floor, Shop No.: 46, Samanway Westfields, Opp. Rajpath Complex, Vasna Bhayli Road, Vadodara.
              </p>
            </div>
          </div>

          {/* Footer Bar with QR Code / Location Button */}
          <div className="pt-2 border-t border-gray-200/80 flex items-center justify-between">
            <span className="text-[11px] text-[#4b5563] italic">
              Click anywhere to flip
            </span>

            {/* QR Code / Direct Map Location Link */}
            <a
              href="https://www.google.com/maps/place/Sharnam+Clinic/@22.2903243,73.1274051,17z"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 bg-[#2c7a94] text-white px-3 py-1 rounded-lg text-[11px] font-bold hover:bg-[#236378] transition-colors shadow-xs"
            >
              {/* QR Code Vector Representation */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h3v2h-3v-2zm-3 0h2v3h-2v-3zm3 3h3v5h-3v-5zm-3 2h2v3h-2v-3zm-2-2h2v2h-2v-2z" />
              </svg>
              <span>Location 📍</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
