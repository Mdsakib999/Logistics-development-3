import { ContactForm } from "../Components/Contact/ContactForm";
import { ContactInfo } from "../Components/Contact/ContactInfo";
import { PageBanner } from "../Components/SharedComponent/PageBanner";
import ContactBannerImg from "/assets/Banner/ContactBanner.jpg";

export const Contact = () => {
  return (
    <div>
      <PageBanner
        backgroundImage={ContactBannerImg}
        heading="Kontaktieren Sie uns"
        title="Unsere Logistikdienstleistungen"
      />
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};
