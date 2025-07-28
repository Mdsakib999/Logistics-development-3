import { PageBanner } from "../Components/SharedComponent/PageBanner";
import AboutBannerImg from "/assets/Banner/AboutBanner.jpeg";

export const About = () => {
  return (
    <div>
      <PageBanner
        backgroundImage={AboutBannerImg}
        heading="Services"
        title="Our Logistic Services"
      />
    </div>
  );
};
