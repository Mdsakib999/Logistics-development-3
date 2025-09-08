import { HeadingInfo } from "../SharedComponent/HeadingInfo";

export const Offer = () => {
  const menuItems = [
    {
      id: 1,
      title: "Multimodale Operationen",
      description:
        "Bleiben Sie mit der Echtzeitverfolgung auf dem Laufenden und erhalten Sie bei jedem Schritt vollständige Transparenz über Ihre Sendungen – für ein beruhigendes Gefühl und eine präzise Planung.",
      img: "assets/Offer/workflow.png",
    },
    {
      id: 2,
      title: "Lieferkettenmanagement",
      description:
        "Optimieren Sie Ihre Lieferkette mit unserer multimodalen Logistik, indem Sie Land-, Luft- und Seetransport kombinieren, um eine effiziente und zuverlässige Lieferung auf jeder Meile zu gewährleisten.",
      img: "assets/Offer/shuffle.png",
    },
    // {
    //   id: 3,
    //   title: "Real-Time Tracking",
    //   description:
    //     "Adapt to your needs with our flexible scheduling solutions, offering tailored timelines and seamless to keep your operations running smoothly.",
    //   img: "assets/Offer/time-zone.png",
    // },
    {
      id: 4,
      title: "Echtzeit-Tracking",
      description:
        "Passen Sie sich mit unseren flexiblen Planungslösungen Ihren Anforderungen an und bieten Sie maßgeschneiderte Zeitpläne und nahtlose Abläufe, damit Ihr Betrieb reibungslos läuft.",
      img: "assets/Offer/calendar.png",
    },
    // {
    //   id: 5,
    //   title: "Last-Mile Delivery",
    //   description:
    //     "Donec imperdiet elit nec erat semper, ut sodales elit rutrum. Ut congue in justo vitae blandit. Etiam faucibus magna. Aenean consectetur fringilla. ",
    //   img: "assets/Offer/direction.png",
    // },
  ];

  return (
    <div className="max-w-7xl mx-auto my-10 flex flex-col gap-5 px-4 md:px-8 lg:px-12">
      <HeadingInfo>Was wir anbieten</HeadingInfo>

      <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-10 md:w-[60%] md:leading-14">
        Optimieren Sie Ihre Lieferkette mit <span className="font-bold">Expertenlösungen,</span>  die für mehr Effizienz und Flexibilität sorgen. 
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 mb-10 px-6 md:px-0">
        {menuItems.map((item) => {
          return (
            <div className="flex flex-col gap-3 ">
              <img
                src={item.img}
                alt={item.title}
                className="w-10 h-10 object-cover"
              />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm max-w-xs text-justify">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
