import { FaLongArrowAltRight } from "react-icons/fa";
import { HeadingInfo } from "../SharedComponent/HeadingInfo";
import deliveryCar from "/assets/Services/delivery.png";
import solutionTeam from "/assets/Services/solutionTeam.jpg";
import { Link } from "react-router-dom";

export const Solution = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 py-20 my-20 max-w-7xl mx-auto relative">
      {/* Heading */}
      <HeadingInfo>Brauchen Sie Lösungen?</HeadingInfo>

      {/* Top-right Decorative Car Image */}
      <div className="absolute top-0 lg:top-30 right-0 lg:right-6">
        <img
          src={deliveryCar}
          alt="Delivery Car"
          className="w-40 md:w-60 lg:w-full h-auto"
        />
      </div>

      {/* Main Layout Wrapper */}
      <div className="mt-8 relative flex items-center min-h-[400px] lg:min-h-[600px]">
        {/* Background Text Card */}
        <div className="absolute z-10 w-64 h-72 md:w-96 md:h-96 right-0 md:-right-3 lg:right-0 bottom-0 md:-bottom-10 lg:w-full lg:min-h-[400px] max-w-[700px] bg-primary rounded py-10 px-8 flex justify-center items-center">
          <div className="text-white space-y-6 w-full lg:max-w-md">
            <div className="space-y-3">
              <h1 className="lg:text-3xl font-bold">Logistiklösungen</h1>
              <p className="text-sm text-gray-300 leading-relaxed">
                Wir bieten Ihnen eine unabhängige Beratung und ermitteln die
                passende Lösung für Sie. Die Beschaffung und Beschaffung der
                Services erfolgt auf Grundlage der von unserer Supply Chain
                Solution bereitgestellten Lösungsspezifikationen.
              </p>
              <Link to={"/kontakt"}>
                <button className="text-yellow-400 flex items-center gap-2 text-md  transition-colors cursor-pointer mt-10">
                  Mehr lessen
                  <FaLongArrowAltRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Foreground Image */}
        <div className="absolute top-0 left-0 md:z-20 w-52 h-64 md:w-1/2 md:h-auto rounded-xl overflow-hidden shadow-xl">
          <img
            src={solutionTeam}
            alt="Shipping"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
