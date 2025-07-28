import { Features } from "../Components/Service/Features";
import { Solution } from "../Components/Service/Solution";
import { Stats } from "../Components/Service/Stats";
import { PageBanner } from "../Components/SharedComponent/PageBanner";
import ServiceBannerImg from "/assets/Banner/ServiceBanner.jpg";

export const Services = () => {
  return (
    <div>
      <PageBanner
        backgroundImage={ServiceBannerImg}
        heading="Services"
        title="Our Logistic Services"
      />
      <Features />
      <Stats />
      <Solution />
    </div>
  );
};
