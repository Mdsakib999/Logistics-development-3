import { Link } from "react-router-dom";
import { GradientButton } from "../SharedComponent/Button/GradientButton";
import { HeadingInfo } from "../SharedComponent/HeadingInfo";
import HomeBannerImg from "/assets/Banner/HomeBanner.webp";

export const HomeBanner = () => {
  return (
    <div
      className="relative bg-no-repeat bg-cover bg-center h-[90vh] md:h-screen flex items-center"
      style={{ backgroundImage: `url(${HomeBannerImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent-0"></div>
      {/* Content */}
      <div className="relative z-10 px-4 md:px-8  w-full max-w-7xl mx-auto md:pt-24">
        <HeadingInfo>Logistik- und Lieferkettenlösungen</HeadingInfo>
        <div className="max-w-4xl my-7">
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Sicherster Anbieter von Logistiklösungen mit Integrität
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-white/90 my-5">
            Wir sind der führende Anbieter von Teilladungstransporten mit dem
            erstklassigen Netzwerk, der Technologie und dem Service, den unsere
            Kunden jederzeit benötigen.
          </p>
        </div>
        <Link to="/ueber-uns">
          <GradientButton>Entdecken Sie mehr</GradientButton>
        </Link>
      </div>
    </div>
  );
};
