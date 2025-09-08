import img from "/assets/Services/streamlinedProcess.jpg";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
export const SteamlinedProcess = () => {
  const menuItems = [
    {
      id: 1,
      title: "Angebot anfordern",
      desc: "Beginnen Sie mit der Anforderung eines Angebots – teilen Sie uns Ihre Versanddetails mit, und wir erstellen eine maßgeschneiderte Lösung mit transparenten Preisen und fachkundigen Empfehlungen.",
    },
    {
      id: 2,
      title: "Transfer planen",
      desc: "Sobald Sie das Angebot genehmigt haben, planen Sie Ihren Transfer zu einem für Sie passenden Zeitpunkt. Wir sorgen für eine reibungslose, pünktliche Abholung und Koordination.",
    },
    {
      id: 3,
      title: "Sendungsverfolgung unterwegs",
      desc: "Verfolgen Sie Ihre Sendung in Echtzeit mit unserem fortschrittlichen Tracking-System, das Transparenz, Sicherheit und pünktliche Lieferung gewährleistet.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-10 flex flex-col gap-5 px-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl  mb-10">
        Unser <span className="font-bold"> optimierter Prozess </span> sorgt
        <br className="hidden md:block" />
        für einen effizienten und reibungslosen Versand
        <br className="hidden md:block" />– von Anfang bis Ende.
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mx-auto">
        {/* Left Image */}
        <img
          src={img}
          alt="img"
          className="w-full h-auto lg:w-1/3 lg:min-h-[550px] rounded-xl shadow-md"
        />

        {/* Right Steps */}
        <div className="flex flex-col gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="space-y-4">
              <hr className="border-gray-300" />
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-center gap-3">
                  <p className="uppercase font-light text-lg text-primary whitespace-nowrap">
                    Schritt {index + 1}:
                  </p>
                  <p className="text-lg font-light">{item.title}</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
          <Link
            to="/contact"
            aria-label="Kontaktieren Sie uns"
            className="border border-primary text-black px-6 py-2 rounded-2xl flex items-center gap-2 text-sm cursor-pointer hover:bg-[#133FAE] hover:border-blue-500 hover:text-white max-w-fit mt-12"
            role="button"
          >
            Kontaktieren Sie uns
            <GoArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
