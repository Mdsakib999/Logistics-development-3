import { Link } from "react-router-dom";
import { HeadingInfo } from "../SharedComponent/HeadingInfo";

const menuItems = [
  {
    id: 1,
    title: "Seefracht",
    description: "Globale Reichweite, zuverlässige Seefrachtlösung ",
    img: "assets/Services/seaFreight.jpg",
  },
  {
    id: 2,
    title: "Luftfracht",
    description: "Hochwertige Güter schnell transportieren mit Luftfracht",
    img: "assets/Services/airFreight.jpg",
  },
  {
    id: 3,
    title: "Straßengüterverkehr",
    description: "Schneller landesweiter Versand mit Straßengüterverkehr",
    img: "assets/Services/roadFreight.jpg",
  },
  {
    id: 4,
    title: "Schienengüterverkehr",
    description: "Nahtlose Schienenlogistik für Ihr Unternehmen",
    img: "assets/Services/railFreight.jpg",
  },
];

export const OurServices = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 py-12 max-w-7xl mx-auto  flex flex-col gap-5">
      <HeadingInfo>Unsere Leistungen</HeadingInfo>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 md:w-[55%]">
        Wir definieren Exzellenz im Transport von Gütern von A nach B

      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="relative rounded-lg overflow-hidden shadow-md group"
          >
            {/* Background Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[450px] object-cover transform group-hover:scale-105 transition duration-300"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10" />

            {/* Content Overlay */}
            <div className="absolute  inset-0 z-20 flex flex-col justify-between p-4 text-white">
              {/* Top Label */}
              <span className="bg-black/50 text-xs px-3 py-1 rounded self-start mb-2">
                {item.title}
              </span>

              {/* Description & CTA */}
              <div className="mt-auto flex flex-col items-center justify-center">
                <h3 className="text-lg font-semibold mb-3 text-center">
                  {item.description}
                </h3>
                <Link to="/services" className="text-sm w-full text-white border border-gray-50 text-center rounded-full px-4 py-2 font-medium hover:bg-gray-100 hover:text-black transition">
                  Lösungen entdecken
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
