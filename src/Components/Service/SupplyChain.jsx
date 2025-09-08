export const SupplyChain = () => {
  const menuItems = [
    {
      id: 1,
      title: "Standardversand",
      feature: [
        "Versandoption für nicht dringende Lieferungen",
        "Schnellere Lieferung stärkt Vertrauen und Treue",
        "Minimierung der Lagerkosten",
      ],
      img: "/assets/Services/dropbox.png",
    },
    {
      id: 2,
      title: "Expresszustellung",
      feature: [
        "Erhalten Sie Ihr Paket am nächsten Tag",
        "Garantiert pünktliche Lieferung",
        "Ideal für zeitkritische Pakete",
      ],
      img: "/assets/Services/location.png",
    },
    {
      id: 3,
      title: "Taggleiche Lieferung",
      feature: [
        "Pakete werden innerhalb weniger Stunden zugestellt",
        "Schnellere Lieferung stärkt Vertrauen und Kundenbindung",
        "Minimierung der Lagerhaltungskosten",
      ],
      img: "/assets/Services/24hours.png",
    },
    {
      id: 4,
      title: "Übernachtversand",
      feature: [
        "Zustellung des Pakets bis zum nächsten Morgen",
        "Schnellere Lieferung ohne hohe Zusatzkosten",
        "Kostengünstiger als Expressversand",
      ],
      img: "/assets/Services/moon.png",
    },
    {
      id: 5,
      title: "Geschäftslösung",
      feature: [
        "Mengenrabatte bei hohem Versandvolumen",
        "Persönliche Kundenbetreuer",
        "Automatisierte Versandtools",
      ],
      img: "/assets/Services/globe.png",
    },
    {
      id: 6,
      title: "Lager & Fulfillment",
      feature: [
        "Pakete werden innerhalb weniger Stunden zugestellt",
        "Schnellere Lieferung stärkt Vertrauen und Kundenbindung",
        "Minimierung der Lagerkosten",
      ],
      img: "/assets/Services/warehouse2.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-10 flex flex-col gap-5 px-4 md:px-8 lg:px-12">
      <h1 className="text-2xl md:text-3xl lg:text-4xl  mb-10">
        Optimieren Sie Ihre Lieferkette mit
        <br className="hidden md:block" />
        <span className="font-bold">Expertenlösungen</span> für mehr
        <br className="hidden md:block" /> Logistikeffizienz
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-primary text-white p-6 rounded-lg flex flex-col justify-between gap-6 py-12 group"
          >
            <div className="bg-yellow-400 rounded h-14 w-18 flex items-center justify-center ">
              <img src={item.img} alt={item.title} className="" />
            </div>
            <div className="py-5">
              <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                {item.feature.map((feat, index) => (
                  <li key={index}>{feat}</li>
                ))}
              </ul>
            </div>
            <button className="mt-6 bg-white group-hover:bg-yellow-400 text-blue-900 group-hover:text-white font-semibold py-2 px-4 rounded-full">
              Kostenloses Angebot anfordern
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
