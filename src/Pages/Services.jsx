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
    </div>
  );
};
