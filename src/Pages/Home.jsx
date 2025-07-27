import { AboutUs } from "../Components/Home/AboutUs";
import { HomeBanner } from "../Components/Home/HomeBanner";
import { OurServices } from "../Components/Home/OurServices";

export const Home = () => {
  return (
    <>
      <HomeBanner />
      <OurServices />
      <AboutUs />
    </>
  );
};
