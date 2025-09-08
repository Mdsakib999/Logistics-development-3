import { HeadingInfo } from "../SharedComponent/HeadingInfo";
import arrow from "/assets/WorkingProcess/arrow.png";

export const WorkingProcess = () => {
  const menuItems = [
    {
      id: 1,
      title: "Auftragserteilung / Buchung",
      description:
        "Kunden erteilen Versandaufträge über unsere Plattform oder bei unserem Team. Wir erfassen alle notwendigen Informationen, einschließlich Frachtart, Abholort und Lieferzeitplan.",
      img: "assets/WorkingProcess/calendar.png",
    },
    {
      id: 2,
      title: "Abholung & Dokumentation",
      description:
        "Wir organisieren die Abholung vom Standort des Absenders und stellen sicher, dass alle Unterlagen (Rechnungen, Zollformulare usw.) korrekt und rechtskonform erstellt werden.",
      img: "assets/WorkingProcess/pickup.png",
    },
    {
      id: 3,
      title: "Transport und Sendungsverfolgung",
      description:
        "Der Transport der Waren erfolgt über das gewählte Transportmittel (LKW, Flugzeug, Seefracht). Kunden erhalten während der gesamten Reise Echtzeit-Tracking-Updates.",
      img: "assets/WorkingProcess/icon-park.png",
    },
    {
      id: 4,
      title: `Zollabfertigung (falls international)`,
      description:
        "Wir kümmern uns effizient um alle Zollabfertigungsverfahren, um Verzögerungen zu vermeiden und die Einhaltung der Bestimmungen am Bestimmungsort sicherzustellen.",
      img: "assets/WorkingProcess/customs.png",
    },
    {
      id: 5,
      title: " Endgültige Lieferung",
      description:
        "Die Sendung wird an den endgültigen Bestimmungsort geliefert und die erfolgreiche Übergabe wird durch einen Zustellnachweis bestätigt.",
      img: "assets/WorkingProcess/package-person.png",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto my-10 flex flex-col gap-5 px-4 md:px-8 lg:px-12">
      <HeadingInfo> Arbeitsprozess </HeadingInfo>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">
        Unser Arbeitsprozess
      </h1>
      <p className="font-medium text-black/60 md:w-[62%]">
        Von der Anfrage bis zur Lieferung gewährleistet unser optimierter Prozess eine effiziente Abwicklung der Sendungen, die bei jedem Schritt von unserem engagierten Team unterstützt wird.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-5">
        {menuItems.map((item, index) => {
          return (
            <div className="relative">
              <div className="flex flex-col gap-3 max-w-64 mx-auto">
                <div className="flex items-center justify-center">
                  <div className="rounded-full p-2 bg-primary w-18 h-18 flex items-center justify-center">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-10 h-10 object-cover"
                    />
                  </div>
                </div>

                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm max-w-xs text-black/60">
                  {item.description}
                </p>
              </div>
              {[1, 2, 4].includes(index) && (
                <div className="hidden lg:block absolute top-1/2 -left-15 transform -translate-x-1/2 -translate-y-1/2">
                  <img src={arrow} alt="" className="w-24 h-24" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
