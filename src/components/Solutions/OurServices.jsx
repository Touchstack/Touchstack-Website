import React from "react";
const OurServices = () => {
  return (
    <section className="bg-[#1a1919] py-20">
      <div className="flex flex-col justify-center items-center">
        <div className="lg:w-8/12 md:w-10/12 sm:w-10/12 w-10/12 py-12">
          <p className="uppercase text-[#8A8A8A] text-md font-Light text-left">
            Our Services
          </p>
          <p className="text-white tracking-wider font-Regular lg:text-5xl md:text-4xl sm:text-3xl text-3xl py-5 leading-5">
            Harness the power of our in-depth knowledge to maximize your
            product's capability
          </p>
          {/*-- SERVICES --*/}
          {/*-- SERVICE 1  --*/}
          <div className="border w-full py-20 my-10 rounded-xl grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5 p-10">
            <div className="">
              <p className="text-white font-SemiBold text-2xl py-4">
                Product Exploration
              </p>
              <p className="text-[#8A8A8A] tracking-widest text-md font-Light">
                This vital step in product development helps identify essential
                features and gain a comprehensive understanding of the market
                and competitors.
              </p>
            </div>
            <div className="flex flex-col justify-center md:items-center sm:items-start items-start sm:pl-10">
              <ul className="lg:w-11/12 font-Light list-disc text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#2EFFE1] to-[#7DEE53]">
                <li>• Market Research and Segmentation</li>
                <li>• Structured User Interviews</li>
                <li>• Product Hypothesis Validation</li>
                <li>• Product Roadmap With Key Features</li>
              </ul>
            </div>
          </div>
          {/*-- SERVICE 1  --*/}
          {/*-- SERVICE 2  --*/}
          <div className="border w-full py-20 my-10 rounded-xl grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 p-10">
            <div className="">
              <p className="text-white font-SemiBold text-2xl py-4">
                UX & UI Development
              </p>
              <p className="text-[#8A8A8A] tracking-widest text-md font-Light">
                Our focus is user-centric. We ensure a smooth journey for your
                users to effortlessly reach their objectives.
              </p>
            </div>
            <div className="flex flex-col justify-center md:items-center sm:items-start items-start sm:pl-10">
              <ul className="lg:w-11/12 font-Light list-disc text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#2EFFE1] to-[#7DEE53]">
                <li>• Usability and User Testing</li>
                <li>• Wireframing & Prototyping</li>
                <li>• Best UX Practices</li>
                <li>• Consistent Visual Identity</li>
              </ul>
            </div>
          </div>
          {/*-- SERVICE 2  --*/}
          {/*-- SERVICE 3  --*/}
          <div className="border w-full py-20 my-10 rounded-xl grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 p-10">
            <div className="">
              <p className="text-white font-SemiBold text-2xl py-4">
                MVP Creation
              </p>
              <p className="text-[#8A8A8A] tracking-widest text-md font-Light">
                Deploy a preliminary version of your product to gather customer
                feedback. Conserve resources and refine product features based
                on informed decisions.
              </p>
            </div>
            <div className="flex flex-col justify-center md:items-center sm:items-start items-start sm:pl-10">
              <ul className="lg:w-11/12 font-Light list-disc text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#2EFFE1] to-[#7DEE53]">
                <li>• Feature Prioritization</li>
                <li>• Market Fit Testing</li>
                <li>• Best UX Practices</li>
                <li>• Preparation For Funding</li>
                <li>• Low/No-Code/Code Development</li>
              </ul>
            </div>
          </div>
          {/*-- SERVICE  3--*/}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
