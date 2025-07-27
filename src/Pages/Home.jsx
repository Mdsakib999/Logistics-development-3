import { AboutUs } from "../Components/Home/AboutUs";
import { HomeBanner } from "../Components/Home/HomeBanner";
import { Offer } from "../Components/Home/Offer";
import { OurServices } from "../Components/Home/OurServices";
import { WorkingProcess } from "../Components/Home/WorkingProcess";

export const Home = () => {
  return (
    <>
      <HomeBanner />
      <OurServices />
      <AboutUs />
      <Offer />
      <WorkingProcess />
    </>
  );
};
