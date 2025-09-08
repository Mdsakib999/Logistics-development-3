import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaLocationDot,
} from "react-icons/fa6";
import Logo from "/assets/Struck-meierlogo.png";
import { NavLink } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white text-sm">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between md:gap-32">
        {/* Left Side: Logo & Social */}
        <div className="flex flex-col items-center md:items-start">
          <img src={Logo} alt="Transit Logo" className="max-w-[200px]" />
          <p className="md:max-w-[200px] mt-4  text-white/70 text-center md:">
            Wir bieten Ihnen ein umfassendes Spektrum an Versanddienstleistungen{" "}
          </p>
          {/* <div className="flex gap-3 mt-6">
            {[FaFacebookF, FaXTwitter, FaInstagram, FaYoutube].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center 
                 text-white/80 hover:bg-white hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  <Icon />
                </div>
              )
            )}
          </div> */}
        </div>

        {/* Right Side: Newsletter + Links */}
        {/* <div className="flex-1 flex flex-col gap-6 mt-10 md:mt-0"> */}
        {/* Newsletter */}
        {/* <div className="grid lg:grid-cols-2 items-center gap-6 bb">
            <h2 className="text-2xl font-semibold leading-snug text-center md:text-left">
              Subscribe to <br />
              Our Newsletter
            </h2>
            <div className="md:flex justify-center md:justify-start hidden">
              <div className="relative">
                <div className="flex bg-white rounded-2xl shadow-lg ">
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="flex-1 px-7 text-gray-700 placeholder-gray-500 bg-white rounded-l-full"
                  />
                  <button className="px-8 py-3 text-white font-semibold rounded-l-xl  bg-blue-500">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div> */}

        {/* Divider */}
        <div className="border-b border-white/20"></div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {/* Useful Links */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-xl">
              Useful Links
            </h3>
            <ul className="space-y-1 text-lg">
              {[
                { label: "Heim", to: "/" },
                { label: "Über uns", to: "/ueber-uns" },
                { label: "Dienstleistungen", to: "/dienstleistungen" },
                {
                  label: "Datenschutzrichtlinie",
                  to: "/datenschutzrichtlinie",
                },
                { label: "Kontakt", to: "/kontakt" },
              ].map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `group relative inline-block transition-colors duration-300 ${
                        isActive ? "text-secondary" : "text-white"
                      }`
                    }
                  >
                    {link.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          {/* <div>
            <h3 className="font-semibold text-white text-xl mb-3">
              Working Hours
            </h3>
            <ul className="space-y-1">
              <li>Mon to Fri: 9:00 AM - 5:00 PM</li>
              <li>Saturday: 10:00 AM - 6:00 PM</li>
              <li>Sunday Closed</li>
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              <h3 className="text-xl lg:text-xl font-bold text-white">
                FOLGE UNS
              </h3>
            </div>
            <div className="space-y-3 w-full">
              <div className="flex items-center justify-start gap-3 group">
                <div className="p-2 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
                  <FaLocationDot size={18} className="text-white" />
                </div>
                <span className="text-gray-300 text-sm lg:text-base">
                  Keuperstr. 20, 73734 Esslingen, Deutschland
                </span>
              </div>

              <div className="flex items-center justify-start gap-3 group">
                <div className="p-2 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
                  <FaPhone size={18} className="text-white" />
                </div>
                <span className="text-gray-300 text-sm lg:text-base">
                  +4915679697580
                </span>
              </div>

              {/* <div className="flex items-center justify-start gap-3 group">
                <div className="p-2 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
                  <FaEnvelope size={18} className="text-white" />
                </div>
                <span className="text-gray-300 text-sm lg:text-base">
                  ----------@-------.de
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 text-white/60 text-xs py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-center items-center gap-2 text-center sm:text-left">
          <p className="cursor-default text-white/60 hover:text-white">
            © 2025 Spedition Struckmeier || All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
