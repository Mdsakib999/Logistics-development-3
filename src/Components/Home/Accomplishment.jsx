import { HeadingInfo } from "../SharedComponent/HeadingInfo";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export const Accomplishment = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const menuItems = [
    {
      id: 1,
      count: 5731,
      title: "Gelieferte Pakete",
      desc: "Wir unterstützen den Austausch bewährter Verfahren in unseren weltweiten Betrieben und in verschiedenen Industriesektoren nachdrücklich.",
      img: "/assets/Accomplishment/car.png",
    },
    {
      id: 2,
      count: 123,
      title: "Abgedeckte Länder",
      desc: "Als eines der weltweit führenden Supply-Chain-Management-Unternehmen entwickeln und implementieren wir branchenführende Lösungen.",
      img: "/assets/Accomplishment/map.png",
    },
    {
      id: 3,
      count: 476,
      title: "Tonnenweise Waren",
      desc: "Unser Engagement für Nachhaltigkeit hilft uns, Abfall zu reduzieren und die Vorteile mit unseren Kunden zu teilen.",
      img: "/assets/Accomplishment/goods.png",
    },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-12 py-20 max-w-7xl mx-auto relative flex flex-col gap-8">
      <HeadingInfo> Leistung </HeadingInfo>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
        Lassen Sie die Zahlen für sich sprechen
      </h2>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10"
        ref={ref}
      >
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center gap-4 rounded-lg max-w-80 mx-auto p-6"
          >
            <img src={item.img} alt={item.title} className="w-full h-auto" />

            {inView ? (
              <CountUp
                key={`${item.id}-${inView}`}
                end={item.count}
                duration={2}
                className="text-4xl font-bold"
              />
            ) : (
              <span className="text-4xl font-bold">0</span>
            )}

            <h3 className="text-xl font-semibold text-center">{item.title}</h3>
            <p className="text-justify text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
