import { useState } from "react";
import { HeadingInfo } from "../SharedComponent/HeadingInfo";
import img1 from "/assets/About/truck.jpg";
import img2 from "/assets/About/deliveryBoy.jpg";
import { GradientButton } from "../SharedComponent/Button/GradientButton";
import { Link } from "react-router-dom";

export const Overview = () => {
  const [activeTab, setActiveTab] = useState("approach");

  const tabContent = {
    approach:
      " Wir nutzen unsere Größe, um innovative und maßgeschneiderte Lösungen zu entwickeln, die unseren Kunden dabei helfen, ihre Lieferketten zu optimieren, damit sie in einem sich täglich verändernden Markt der Konkurrenz immer einen Schritt voraus sind.",
    goal: "Unser Ziel ist es, der führende Logistikpartner zu werden, indem wir außergewöhnlichen Mehrwert durch modernste Technologie, nachhaltige Praktiken und unübertroffene Servicequalität bieten",
    mission:
      "Unsere Mission ist es, die globale Logistik zu revolutionieren, indem wir Unternehmen weltweit durch zuverlässige, effiziente und innovative Transportlösungen verbinden, die das Wirtschaftswachstum fördern.",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 my-20">
      <HeadingInfo>Überblick</HeadingInfo>
      <div className="grid lg:grid-cols-2 gap-28 lg:gap-12 items-center mt-20 relative">
        {/* Left: Images */}
        <div className="w-64 h-80 md:w-96 md:h-96 lg:w-4/5 lg:h-[28rem] rounded-xl overflow-hidden shadow-lg object-cover self-center">
          <img src={img1} alt="Shipping" className="w-full h-full object-fit" />
        </div>

        <div className="absolute top-30 right-0 md:bottom-[-6rem] md:left-1/4 lg:-bottom-10 lg:right-40 w-52 h-64 md:w-80 md:h-80 lg:w-64 lg:h-96 rounded-xl overflow-hidden shadow-md">
          <img src={img2} alt="Truck" className="w-full h-full object-cover" />
        </div>

        {/* Right Side Content */}
        <div className="space-y-8">
          {/* Main Heading */}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Unser Firmenüberblick
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed">
            Dank unserer globalen Reichweite, unserer umfassenden
            Branchenkenntnis, unserer innovativen Technologie und unseres
            ausgedehnten Transportnetzwerks sind wir in der Lage, die neuesten
            Erkenntnisse auf die individuellen Herausforderungen und Wünsche
            unserer Kunden anzuwenden.
          </p>

          {/* Tab Navigation */}
          <div className="">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab("approach")}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === "approach"
                    ? "bg-primary text-white px-4 py-2 rounded"
                    : "border-transparent bg-gray-200 px-4 py-2 rounded"
                }`}
              >
                Unser Ansatz
              </button>
              <button
                onClick={() => setActiveTab("goal")}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === "goal"
                    ? "bg-primary text-white px-4 py-2 rounded"
                    : "border-transparent bg-gray-200 px-4 py-2 rounded"
                }`}
              >
                Unser Ziel
              </button>
              <button
                onClick={() => setActiveTab("mission")}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === "mission"
                    ? "bg-primary text-white px-4 py-2 rounded"
                    : "border-transparent bg-gray-200 px-4 py-2 rounded"
                }`}
              >
                Unsere Mission
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="pt-6">
            <p className="text-gray-600 leading-relaxed text-lg">
              {tabContent[activeTab]}
            </p>
          </div>

          {/* Learn More Button */}
          <Link to="/dienstleistungen">
            {" "}
            <div className="pt-4">
              <GradientButton>Mehr erfahren</GradientButton>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
