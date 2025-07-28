import { HeadingInfo } from "../SharedComponent/HeadingInfo";
import BlogsBannerImg from "/assets/Banner/BlogsBanner.jpg";

export const BlogBanner = () => {
  return (
    <div
      className="relative bg-no-repeat bg-cover bg-center h-[90vh] md:h-screen flex items-center"
      style={{ backgroundImage: `url(${BlogsBannerImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#213E89]/50 to-[#081023]/80 "></div>
      <div className="relative z-10 px-4 md:px-8  w-full max-w-7xl mx-auto md:pt-24">
        <HeadingInfo>Blog</HeadingInfo>
        <div className="max-w-4xl my-7">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Our Latest News
          </h1>
        </div>
      </div>
    </div>
  );
};
