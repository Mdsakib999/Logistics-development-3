import { HeadingInfo } from "../SharedComponent/HeadingInfo";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { IoMailUnreadSharp } from "react-icons/io5";

export const ContactInfo = () => {
  const menuItems = [
    {
      id: 1,
      title: "Besuchen Sie unser Büro",
      description: `Keuperstr. 20, 73734 Esslingen, Deutschland`,
      icon: <FaHome />,
    },
    {
      id: 2,
      title: "Rufen Sie uns an",
      description: `+49 15679702744`,
      icon: <FaPhoneAlt />,
    },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-12 py-20 max-w-7xl mx-auto relative flex flex-col gap-10">
      <HeadingInfo>Nehmen Sie Kontakt mit uns auf</HeadingInfo>

      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
        Wir kümmern uns um den Transport
        <br className="hidden md:block" /> für Ihr Unternehmen
      </h2>

      <p className="text-gray-600 max-w-xl leading-relaxed">
        Spedition Struckmeier verfügt über Erfahrung in der Abwicklung der für
        Ihre Importe und Exporte erforderlichen Formalitäten und Dokumente. Wir
        arbeiten mit allen internationalen Stationen zusammen, um
        sicherzustellen, dass Ihre Ladung sicher und ohne Verzögerungen ankommt.
      </p>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 mt-16">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center rounded bg-[#DADADA]/20 p-8 relative lg:w-72"
          >
            {/* Icon Circle */}
            <div className="absolute top-0 transform -translate-y-1/2 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl mb-6">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-black my-4">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 whitespace-pre-line leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
