import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ClinicLogo from './ClinicLogo';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Our Doctors', path: '/doctors' },
  { label: 'Health Info', path: '/health-info' },
  { label: 'Appointment', path: '/book-appointment' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#e5d8d6] shadow-[0px_4px_20px_rgba(0,0,0,0.03)] h-20 transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[24px] flex items-center justify-between h-full">
          {/* Sharnam Clinic Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <ClinicLogo size="md" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-['Inter'] text-[14px] xl:text-[15px] font-medium tracking-[0.01em] whitespace-nowrap transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-[#cc3b38] font-bold border-b-2 border-[#cc3b38] pb-1'
                    : 'text-[#4b5563] hover:text-[#cc3b38]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="tel:+916355548616"
              className="hidden sm:flex items-center gap-2 text-[#2c7a94] hover:text-[#1e576b] font-['Inter'] text-[14px] font-semibold transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
              +91 6355 548 616
            </a>

            <Link
              to="/book-appointment"
              className="bg-[#cc3b38] text-white px-3 py-2 sm:px-5 sm:py-2.5 rounded-xl font-['Inter'] text-[12px] sm:text-[14px] font-semibold shadow-md hover:bg-[#b52f2c] transition-all active:scale-95 text-center whitespace-nowrap"
            >
              Book Appointment
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              className="lg:hidden flex flex-col justify-center items-center gap-1.5 p-2 focus:outline-none min-w-[40px] min-h-[40px]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-[#1f2937] transition-all duration-300 ${
                  mobileOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#1f2937] transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#1f2937] transition-all duration-300 ${
                  mobileOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Drawer */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white/98 backdrop-blur-xl border-b border-[#e5d8d6] shadow-xl transition-all duration-300 overflow-hidden ${
            mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col px-5 py-4 gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`py-2.5 px-4 rounded-xl font-['Inter'] text-[15px] font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-[#fcebeb] text-[#cc3b38] font-bold'
                    : 'text-[#1f2937] hover:bg-[#faf7f5]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+916355548616"
              className="flex items-center gap-2 text-[#2c7a94] py-2.5 px-4 font-['Inter'] text-[15px] font-semibold sm:hidden border-t border-gray-100 pt-3"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
              Call +91 6355 548 616
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-20 bg-black/40 z-40 lg:hidden backdrop-blur-xs"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
