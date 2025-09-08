import { HeadingInfo } from "../SharedComponent/HeadingInfo";
import img from "/assets/About/chooseUs.jpeg";
export const WhyChooseUs = () => {
  const menuItems = [
    {
      id: 1,
      title: "Menschen",
      desc: " Wir wissen, dass unsere Mitarbeiter den Erfolg unseres Unternehmens beeinflussen, und wir stellen kluge Leute ein",
      img: "/assets/About/SVG/people.png",
    },
    {
      id: 2,
      title: "Kundendienst",
      desc: "Wir sind bestrebt, einen erstklassigen Kundenservice zu bieten und sicherzustellen, dass jeder Kunde mit unserer Arbeit vollkommen zufrieden ist",
      img: "/assets/About/SVG/service.png",
    },
    {
      id: 3,
      title: "Unterstützung",
      desc: "Teilen Sie uns Ihren Bedarf mit und unser Spezialistenteam liefert ihn persönlich und kümmert sich um die gesamte Abwicklung.",
      img: "/assets/About/SVG/support.png",
    },
    {
      id: 4,
      title: "Qualität",
      desc: "Wir sind bestrebt, herausragende, hochmoderne Logistiklösungen zu liefern, die einen echten Mehrwert bieten, der über die Erwartungen hinausgeht.",
      img: "/assets/About/SVG/quality.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 my-20">
      <HeadingInfo>Warum Uns Wählen</HeadingInfo>
      <h2 className="text-2xl md:text-3xl font-bold my-10">
        Warum Spedition{" "}
        <span className="text-blue-500">Struckmeier wählen?</span>
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mx-auto">
        {/* Left Image */}
        <img
          src={img}
          alt="img"
          className="w-full h-auto lg:w-[45%] rounded-lg object-cover"
        />

        {/* Right Steps */}
        <p className="text-sm md:text-base text-gray-600 leading-loose tracking-wide text-justify max-w-2xl">
          Unser Leitbild ist Einfachheit pur. Wir übertreffen die Erwartungen
          unserer Kunden stets mit erstklassigen Speditions- und globalen
          Transportlösungen, darunter Luft-, See-, Zollabfertigungs- und
          Logistikdienstleistungen. Unser professionelles Team setzt alles
          daran, Ihnen einen Service zu bieten, der Ihre Erwartungen weit
          übertrifft. Wir geben täglich unser Bestes, um Ihnen dieses Niveau und
          diese Servicequalität zu bieten und sind stets bestrebt, die
          effizientesten und effektivsten Lösungen der Branche zu liefern. Dazu
          nutzen wir modernste Technologien, bestens geschultes, freundliches
          und erfahrenes Personal sowie eine solide Infrastruktur.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 my-20">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start gap-2 p-4 rounded-md"
          >
            {/* Icon */}
            <img src={item.img} alt={item.title} className="w-14 h-14" />

            {/* Title */}
            <h3 className="font-semibold text-base">{item.title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-snug">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
