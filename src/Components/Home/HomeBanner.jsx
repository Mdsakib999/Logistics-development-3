import { GradientButton } from "../SharedComponent/Button/GradientButton";
import { HeadingInfo } from "../SharedComponent/HeadingInfo";
import HomeBannerImg from "/assets/Banner/HomeBanner.webp";
export const HomeBanner = () => {
  return (
    <div
      role="banner"
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${HomeBannerImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <HeadingInfo> Logistic & Supply Chain Solutions</HeadingInfo>
        <div className="max-w-4xl my-7 items-start">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-left">
            Safest Logistics Solutions Provider With Integrity
          </h1>
          <p className="text-lg md:text-2xl text-white/90 my-5 text-left">
            We’re leading provider of less-than-truckload freight transportation
            with the world-class network, technology and service our customers
            need at all the time
          </p>
        </div>
        <GradientButton>Explore More</GradientButton>
      </div>
    </div>
  );
};
