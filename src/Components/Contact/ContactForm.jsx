import { useState } from "react";
import { GradientButton } from "../SharedComponent/Button/GradientButton";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
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
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto bg-primary rounded flex flex-col gap-8 text-white py-12 px-6 md:px-12 my-10">
      <p className="text-md max-w-xl text-gray-400 mb-20">
        Wir freuen uns über Ihr Interesse. Bitte füllen Sie das untenstehende
        Formular aus und wir werden uns mit Ihnen in Verbindung setzen, um Ihre
        Lagerhaltungs-, Vertriebs-, Luft-, Seefracht- oder sonstigen
        Logistikanforderungen zu besprechen.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* First row - Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Ihr Name *"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full bg-transparent border border-gray-400 rounded px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full bg-transparent border border-gray-400 rounded px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors"
            />
          </div>
        </div>

        {/* Second row - Phone and City */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Telefonnummer  *"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full bg-transparent border border-gray-400 rounded px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors"
            />
          </div>
          <div>
            <input
              type="text"
              name="city"
              placeholder="Stadt *"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="w-full bg-transparent border border-gray-400 rounded px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors"
            />
          </div>
        </div>

        {/* Message textarea */}
        <div>
          <textarea
            name="message"
            placeholder="Ihre Nachricht"
            value={formData.message}
            onChange={handleInputChange}
            rows={6}
            className="w-full bg-transparent border border-gray-400 rounded px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors resize-vertical"
          />
        </div>

        {/* Submit button */}
        <div className="mx-auto flex justify-center items-center mt-10">
          <GradientButton type="submit">Nachricht senden</GradientButton>
        </div>
      </form>
    </div>
  );
};
