import { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { HeadingInfo } from "../SharedComponent/HeadingInfo";
import { PrimaryButton } from "../SharedComponent/Button/PrimaryButton";
import { GradientButton } from "../SharedComponent/Button/GradientButton";

export const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    affiliation: "",
    email: "",
    number: "",
    website: "",
    inquiryDepartment: "",
    topic: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="px-4 md:px-8 lg:px-12 py-20 max-w-7xl mx-auto">
      <HeadingInfo>Nehmen Sie Kontakt auf</HeadingInfo>
      <div className="grid lg:grid-cols-2 gap-12 mt-8">
        {/* Left side - Contact Form */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Sie haben eine Anfrage?
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* First Row */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Ihr Name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 border-none rounded-md placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

             <div>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail *"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 border-none rounded-md placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

            </div>

            {/* Second Row */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="tel"
                  name="number"
                  placeholder="Telefonnummer *"
                  value={formData.number}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 border-none rounded-md placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <select
                  name="inquiryDepartment"
                  value={formData.inquiryDepartment}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 border-none rounded-md text-gray-600 focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer"
                >
                  <option value="">Allgemeine Anfrage</option>
                  <option value="support">Kundenservice</option>
                  <option value="logistics">Logistik</option>
                  <option value="billing">Abrechnung</option>
                </select>
              </div>
            </div>

            {/* Third Row */}


            {/* Topic */}
            <div>
              <input
                type="text"
                name="topic"
                placeholder="Thema *"
                value={formData.topic}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-100 border-none rounded-md placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Ihre Nachricht "
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 bg-gray-100 border-none rounded-md placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary resize-vertical"
              />
            </div>

            {/* Submit Button */}
            <GradientButton type="submit" className="w-fit">
              Nachricht senden
            </GradientButton>
          </form>
        </div>

        {/* Right side - Company Info */}
        <div className="flex flex-col gap-8 order-1 lg:order-2">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Wir kümmern uns um den Transport Ihres Unternehmens.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              <span className="font-bold">Spedition Struckmeier</span> verfügt über Erfahrung in der Abwicklung der für Ihre Importe und Exporte erforderlichen Formalitäten und Dokumente. Wir arbeiten mit allen internationalen Stationen zusammen, um sicherzustellen, dass Ihre Ladung sicher und ohne Verzögerungen ankommt.

            </p>
          </div>

          {/* Contact Information */}
          <div>

            <div className="flex flex-col gap-4 md:gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white text-sm" />
                </div>
                <span className="text-gray-600">
                  Keuperstr. 20, 73734 Esslingen, Deutschland
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                <span className="text-gray-600">logistik@struck-meier.de</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <FaPhone className="text-white text-sm" />
                </div>
                <span className="text-gray-600">+49 15679697580</span>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          {/* <div className="flex flex-wrap gap-6 pt-6">
            <a
              href="#"
              className="flex items-center gap-2 text-gray-600 hover:text-[#1877F2] transition-colors duration-200"
            >
              <FaFacebook className="text-lg" />
              <span className="text-sm">Facebook</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-600 hover:text-[#1DA1F2] transition-colors duration-200"
            >
              <FaTwitter className="text-lg" />
              <span className="text-sm">Twitter</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-600 hover:text-[#0A66C2] transition-colors duration-200"
            >
              <FaLinkedin className="text-lg" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div> */}


        </div>
      </div>
    </div>
  );
};
