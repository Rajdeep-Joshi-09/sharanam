import { Link } from 'react-router-dom';
import ClinicLogo from './ClinicLogo';

const Footer = () => {
  return (
    <footer className="bg-[#1f2937] text-white w-full pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="bg-white/95 p-3 rounded-2xl inline-block shadow-sm">
            <ClinicLogo size="md" />
          </div>
          <p className="text-gray-300 font-['Inter'] text-[15px] leading-relaxed">
            Focusing on treating the root cause of diseases with holistic homeopathic care for long-lasting health and wellness.
          </p>
          <div className="pt-2">
            <p className="text-[#cc3b38] font-bold font-['Playfair_Display'] text-[16px]">Dr. Dhairya Urmish Mehta</p>
            <p className="text-gray-400 text-[13px] font-['Inter']">BHMS, C.C.H, B.L.S | Consultant & Physician</p>
            <p className="text-gray-400 text-[12px] font-['Inter'] font-mono">Reg. No.: G-30237</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-white font-bold font-['Playfair_Display'] text-[18px] tracking-wide border-b border-gray-700 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-2.5 font-['Inter'] text-[15px]">
            <li>
              <Link to="/" className="text-gray-300 hover:text-[#cc3b38] transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#2c7a94]">chevron_right</span>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-300 hover:text-[#cc3b38] transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#2c7a94]">chevron_right</span>
                About Dr. Dhairya Mehta
              </Link>
            </li>
            <li>
              <Link to="/specialities" className="text-gray-300 hover:text-[#cc3b38] transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#2c7a94]">chevron_right</span>
                Services & Specialities
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-[#cc3b38] transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#2c7a94]">chevron_right</span>
                Contact & Clinic Location
              </Link>
            </li>
            <li>
              <Link to="/book-appointment" className="text-gray-300 hover:text-[#cc3b38] transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#2c7a94]">chevron_right</span>
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>

        {/* Clinic Hours */}
        <div className="space-y-4">
          <h4 className="text-white font-bold font-['Playfair_Display'] text-[18px] tracking-wide border-b border-gray-700 pb-2">
            Clinic Hours
          </h4>
          <div className="space-y-3 font-['Inter'] text-[14px]">
            <div className="bg-gray-800/60 p-3 rounded-xl border border-gray-700/50">
              <p className="text-[#2c7a94] font-semibold flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                Monday – Saturday
              </p>
              <p className="text-gray-200 font-medium pl-6">10:00 AM – 7:00 PM</p>
            </div>
            <div className="bg-gray-800/60 p-3 rounded-xl border border-gray-700/50">
              <p className="text-[#cc3b38] font-semibold flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                Sunday
              </p>
              <p className="text-gray-200 font-medium pl-6">10:00 AM – 2:00 PM</p>
            </div>
            <p className="text-amber-400/90 text-[13px] italic font-['Inter'] pt-1 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">info</span>
              Consultations With Prior Appointment
            </p>
          </div>
        </div>

        {/* Contact & Map Direct Link */}
        <div className="space-y-4">
          <h4 className="text-white font-bold font-['Playfair_Display'] text-[18px] tracking-wide border-b border-gray-700 pb-2">
            Contact & Address
          </h4>
          <ul className="space-y-3 font-['Inter'] text-[14px]">
            <li className="flex items-start gap-3 text-gray-300">
              <span className="material-symbols-outlined text-[#cc3b38] text-[20px] shrink-0 mt-0.5">location_on</span>
              <span>
                GF/46, Samanway Westfields, TP-2, Vasna - Bhayli Main Rd, Opp. Rajpath Complex, Bhayli, Vadodara, Gujarat 391410
              </span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <span className="material-symbols-outlined text-[#2c7a94] text-[20px] shrink-0">call</span>
              <a href="tel:+916355548616" className="hover:text-white transition-colors font-semibold">
                +91 6355 548 616
              </a>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <span className="material-symbols-outlined text-[#2c7a94] text-[20px] shrink-0">mail</span>
              <a href="mailto:dhairyam30@gmail.com" className="hover:text-white transition-colors">
                dhairyam30@gmail.com
              </a>
            </li>
          </ul>

          <div className="pt-2">
            <a
              href="https://www.google.com/maps/place/Sharnam+Clinic/@22.2903243,73.1274051,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#2c7a94] text-white w-full py-2.5 rounded-xl font-['Inter'] text-[13px] font-semibold hover:bg-[#236378] transition-all shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">map</span>
              Open Location in Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-gray-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 font-['Inter'] text-sm">
          © {new Date().getFullYear()} Sharnam Clinic. All rights reserved. Dr. Dhairya Urmish Mehta.
        </p>
        <p className="text-gray-500 font-['Inter'] text-xs">
          Vasna - Bhayli Main Road, Vadodara, Gujarat
        </p>
      </div>
    </footer>
  );
};

export default Footer;
