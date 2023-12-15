import { useState } from "react";
import Footer from "../Homepage/Footer";
import { GrowthStage } from "./GrowthStage";
import { EarlyStage } from "./EarlyStage";

const Solutions = () => {
  const [status, setStatus] = useState(false);
  
  console.log(status);

  const handleFooterLinkClick = (newStatus) => {
    setStatus(!newStatus);
  };
  return (
    <section className="bg-cover bg-no-repeat bg-black bg-[url('/src/assets/images/bg-solutions.png')] rounded-none lg:h-[25rem] md:h-[20rem] sm:h-[20rem] h-[20rem]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <p className="text-center font-EncodeLight text-lg text-[#2EFFE1] p-5">
          Our solutions
        </p>
        <p className="leading-5 text-white tracking-wider font-EncodeBold text-center lg:text-5xl md:text-4xl sm:text-3xl text-3xl lg:px-32 md:px-32 sm:px-24 px-4">
          Fast-Track Success with Tailored Tech & Product Scaling Solutions
        </p>
      </div>

      {status === true ? (
        <EarlyStage
          onClickEarly={() => setStatus(true)}
          onClickGrowth={() => setStatus(false)}
        />
      ) : (
        <GrowthStage
          onClickEarly={() => setStatus(true)}
          onClickGrowth={() => setStatus(false)}
        />
      )}

     <Footer onLinkClick={handleFooterLinkClick} />
    </section>
  );
};

export default Solutions;
