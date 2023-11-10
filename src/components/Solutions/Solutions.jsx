import React, { useState } from "react";
import ProjectIdea from "../Homepage/ProjectIdea";
import House from "../../assets/images/house.svg";
import Talent from "../../assets/images/talent.svg";
import Product from "../../assets/images/product.svg";
import Team from "../../assets/images/team.svg";
import Plant from "../../assets/images/plant.svg";
import Flexibility from "../../assets/images/flexibility.svg";
import Delegate from "../../assets/images/delegate.svg";
import IndustryTalent from "../../assets/images/industry-talent.svg";
import Footer from "../Homepage/Footer";

const Solutions = () => {
  const EarlyStage = ({ onClickEarly, onClickGrowth }) => {
    return (
      <div>
        <section className="bg-[#1a1919] py-20">
          <div className="flex flex-col justify-center items-center">
            <div className="flex font-EncodeLight text-md border rounded-lg">
              <button
                id="early-stage-btn"
                className="bg-[#2EFFE1] tracking-wider text-[#1a1919] px-8 py-1 rounded-l-md focus:bg-[#2EFFE1]"
                onClick={onClickEarly}
              >
                Early stage
              </button>
              <button
                id="scale-btn"
                className="bg-[#1a1919] tracking-wider text-gray-100 px-8 py-1 rounded-r-lg"
                onClick={onClickGrowth}
              >
                Scale/Growth
              </button>
            </div>
            <p className="leading-5 text-transparent bg-clip-text bg-gradient-to-b from-[#2EFFE1] to-[#7DEE53] font-EncodeSemiBold text-center lg:text-3xl md:text-3xl sm:text-2xl text-2xl py-16 lg:w-6/12 md:8/12 sm:w-9/12 w-9/12">
              We transform your business concept into a user-friendly reality,
              swiftly and seamlessly.
            </p>
            <div className="container lg:w-9/12 md:w-10/12 sm:w-10/12 w-10/12 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-0 rounded-xl">
              <div className="bg-[#464646] p-16 flex flex-col justify-center items-start rounded-tl-xl lg:rounded-tr-none md:rounded-tr-xl sm:rounded-tr-xl rounded-tr-xl">
                <img
                  src={House}
                  alt="house.svg"
                  style={{ height: "auto" }}
                  className="img-fluid"
                />
                <p className="text-white font-EncodeSemiBold lg:text-3xl md:text-3xl sm:text-2xl text-2xl py-4">
                  Efficient Route to Market
                </p>
                <p className="text-[#F1F1F1] text-lg font-EncodeLight">
                  In just 10-14 weeks, we bring your Minimum Viable Product
                  (MVP) to life. Our proven track record with various startups
                  ensures your product is well-planned and validated, leveraging
                  our expertise and efficient methodologies.
                </p>
              </div>
              <div className="bg-white p-16 flex flex-col justify-center items-start lg:rounded-tr-xl md:rounded-none sm:rounded-none rounded-none">
                <img
                  src={Talent}
                  alt="talent.svg"
                  style={{ height: "auto" }}
                  className="img-fluid"
                />
                <p className="text-black font-EncodeSemiBold lg:text-3xl md:text-3xl sm:text-2xl text-2xl py-4">
                  On-demand Access to Top Talent
                </p>
                <p className="text-[#464646] text-lg font-EncodeLight">
                  Avoid the hassle of hiring and team management, especially
                  when it's not your top priority. We offer a dedicated team of
                  technology and product experts, set for optimum performance
                  from the get-go.
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53] p-16 flex flex-col justify-center items-start lg:rounded-bl-xl md:rounded-none sm:rounded-none rounded-none">
                <img
                  src={Product}
                  alt="product.svg"
                  style={{ height: "auto" }}
                  className="img-fluid"
                />
                <p className="text-black font-EncodeSemiBold lg:text-3xl md:text-3xl sm:text-2xl text-2xl py-4">
                  Economical Product Development
                </p>
                <p className="text-[#464646] text-lg font-EncodeLight">
                  Our team utilises best practices, templates, pre-built
                  services, and frameworks to deliver your product promptly and
                  cost-effectively.
                </p>
              </div>

              <div className="bg-[#464646] p-16 flex flex-col justify-center items-start lg:rounded-br-xl lg:rounded-bl-none md:rounded-b-xl sm:rounded-b-xl rounded-b-xl">
                <img
                  src={Team}
                  alt="team.svg"
                  style={{ height: "auto" }}
                  className="img-fluid"
                />
                <p className="text-white font-EncodeSemiBold lg:text-3xl md:text-3xl sm:text-2xl text-2xl py-4">
                  Flexible Team Scaling
                </p>
                <p className="text-[#F1F1F1] text-lg font-EncodeLight">
                  We adapt to your needs. Pay only for the team members you need
                  at the moment to maximize your operational budget. For
                  example, you can scale down post-launch and scale back up
                  after securing additional funding.
                </p>
              </div>
            </div>

            <div className="lg:w-8/12 md:w-10/12 sm:w-10/12 w-10/12 py-12">
              <p className="uppercase text-[#8A8A8A] text-md font-EncodeLight text-left">
                Our Services
              </p>
              <p className="text-white tracking-wider font-EncodeRegular lg:text-5xl md:text-4xl sm:text-3xl text-3xl py-5 leading-5">
                Harness the power of our in-depth knowledge to maximize your
                product's capability
              </p>
              {/*-- SERVICES --*/}
              {/*-- SERVICE 1  --*/}
              <div className="border w-full py-20 my-10 rounded-xl grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5 p-10">
                <div className="">
                  <p className="text-white font-EncodeSemiBold text-2xl py-4">
                    Product Exploration
                  </p>
                  <p className="text-[#8A8A8A] tracking-widest text-md font-EncodeLight">
                    This vital step in product development helps identify
                    essential features and gain a comprehensive understanding of
                    the market and competitors.
                  </p>
                </div>
                <div className="flex flex-col justify-center md:items-center sm:items-start items-start sm:pl-10">
                  <ul className="lg:w-11/12 font-EncodeLight list-disc text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#2EFFE1] to-[#7DEE53]">
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
                  <p className="text-white font-EncodeSemiBold text-2xl py-4">
                    UX & UI Development
                  </p>
                  <p className="text-[#8A8A8A] tracking-widest text-md font-EncodeLight">
                    Our focus is user-centric. We ensure a smooth journey for
                    your users to effortlessly reach their objectives.
                  </p>
                </div>
                <div className="flex flex-col justify-center md:items-center sm:items-start items-start sm:pl-10">
                  <ul className="lg:w-11/12 font-EncodeLight list-disc text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#2EFFE1] to-[#7DEE53]">
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
                  <p className="text-white font-EncodeSemiBold text-2xl py-4">
                    MVP Creation
                  </p>
                  <p className="text-[#8A8A8A] tracking-widest text-md font-EncodeLight">
                    Deploy a preliminary version of your product to gather
                    customer feedback. Conserve resources and refine product
                    features based on informed decisions.
                  </p>
                </div>
                <div className="flex flex-col justify-center md:items-center sm:items-start items-start sm:pl-10">
                  <ul className="lg:w-11/12 font-EncodeLight list-disc text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#2EFFE1] to-[#7DEE53]">
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
            <ProjectIdea />
          </div>
        </section>
      </div>
    );
  };

  const GrowthStage = ({ onClickEarly, onClickGrowth }) => {
    return (
      <div>
        <section className="bg-[#1a1919] py-20">
          <div className="flex flex-col justify-center items-center">
            <div className="flex font-EncodeLight text-md border rounded-lg">
              <button
                id="early-stage-btn"
                className="bg-[#1a1919] tracking-wider text-gray-100 px-8 py-1 rounded-l-md"
                onClick={onClickEarly}
              >
                Early stage
              </button>
              <button
                id="scale-btn"
                className=" bg-[#2EFFE1] tracking-wider text-[#1a1919] px-8 py-1 rounded-r-lg focus:bg-[#2EFFE1]"
                onClick={onClickGrowth}
              >
                Scale/Growth
              </button>
            </div>

            <p className="leading-5 text-transparent bg-clip-text bg-gradient-to-b from-[#2EFFE1] to-[#7DEE53] font-EncodeSemiBold text-center lg:text-3xl md:text-3xl sm:text-2xl text-2xl py-16 lg:w-6/12 md:8/12 sm:w-9/12 w-9/12">
              We are here to boost your scaling journey with our expert team.
            </p>

            <div className="container lg:w-9/12 md:w-10/12 sm:w-10/12 w-10/12 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-0 rounded-xl">
              <div className="bg-[#464646] p-16 flex flex-col justify-center items-start rounded-tl-xl lg:rounded-tr-none md:rounded-tr-xl sm:rounded-tr-xl rounded-tr-xl">
                <img
                  src={Plant}
                  alt="plant.svg"
                  style={{ height: "auto" }}
                  className="img-fluid"
                />
                <p className="text-white font-EncodeSemiBold lg:text-3xl md:text-3xl sm:text-2xl text-2xl py-4">
                  Kickstart and then Grow
                </p>
                <p className="text-[#F1F1F1] text-lg font-EncodeLight">
                  Within a mere 2 weeks, your team is prepped and ready. Whether
                  you've recently secured funding and need to hit the ground
                  running, or have discovered a new potential revenue source,
                  we're set to embark on the journey instantly.
                </p>
              </div>

              <div className="bg-white p-16 flex flex-col justify-center items-start lg:rounded-tr-xl md:rounded-none sm:rounded-none rounded-none">
                <img
                  src={Flexibility}
                  alt="flexibility.svg"
                  style={{ height: "auto" }}
                  className="img-fluid"
                />
                <p className="text-black font-EncodeSemiBold lg:text-3xl md:text-3xl sm:text-2xl text-2xl py-4">
                  Embrace Flexibility
                </p>
                <p className="text-[#464646] text-lg font-EncodeLight">
                  Adjust your team size according to the current business
                  requirements, be it ramping up during high-demand phases or
                  downsizing to extend your financial runway.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53] p-16 flex flex-col justify-center items-start lg:rounded-bl-xl md:rounded-none sm:rounded-none rounded-none">
                <img
                  src={Delegate}
                  alt="delegate.svg"
                  style={{ height: "auto" }}
                  className="img-fluid"
                />
                <p className="text-black font-EncodeSemiBold lg:text-3xl md:text-3xl sm:text-2xl text-2xl py-4">
                  Delegate Maintaining Oversight
                </p>
                <p className="text-[#464646] text-lg font-EncodeLight">
                  We uphold values of transparency, candid communication, and
                  complete process visibility, thereby facilitating your command
                  while capitalizing on the skills of our self-sufficient
                  cross-functional teams.
                </p>
              </div>

              <div className="bg-[#464646] p-16 flex flex-col justify-center items-start lg:rounded-br-xl lg:rounded-bl-none md:rounded-b-xl sm:rounded-b-xl rounded-b-xl">
                <img
                  src={IndustryTalent}
                  alt="industry-talent.svg"
                  style={{ height: "auto" }}
                  className="img-fluid"
                />
                <p className="text-white font-EncodeSemiBold lg:text-3xl md:text-3xl sm:text-2xl text-2xl py-4">
                  Tap into Industry's Top Talent
                </p>
                <p className="text-[#F1F1F1] text-lg font-EncodeLight">
                  Being a coveted employer in Central Europe, we attract and
                  nurture the best professionals in product design and
                  engineering, relieving you from any managerial stress.
                </p>
              </div>
            </div>

            <div className="lg:w-8/12 md:w-10/12 sm:w-10/12 w-10/12 py-12">
              <p className="uppercase text-[#8A8A8A] text-md font-EncodeLight text-left">
                Our Services
              </p>
              <p className="text-white font-EncodeRegular tracking-wider lg:text-5xl md:text-4xl sm:text-3xl text-3xl py-5 leading-5">
                Fast-track your business expansion with our custom scaling
                solutions
              </p>
              {/*-- SERVICES --*/}
              {/*-- SERVICE 1  --*/}
              <div className="border w-full py-20 my-10 rounded-xl grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 p-10">
                <div className="">
                  <p className="text-white font-EncodeSemiBold text-2xl py-4">
                    Augmented Teams
                  </p>
                  <p className="text-[#8A8A8A] tracking-widest text-md font-EncodeLight">
                    Access additional skills, expertise, and resources that
                    might not be immediately available within your in-house
                    team.
                  </p>
                </div>
                <div className="flex flex-col justify-center md:items-center sm:items-start items-start sm:pl-10">
                  <ul className="lg:w-11/12 font-EncodeLight list-disc text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#2EFFE1] to-[#7DEE53]">
                    <li>• Frontend Engineering</li>
                    <li>• Backend Engineering</li>
                    <li>• DevOps</li>
                    <li>• Product Management</li>
                  </ul>
                </div>
              </div>
              {/*-- SERVICE 1  --*/}
              {/*-- SERVICE 2  --*/}
              <div className="border w-full py-20 my-10 rounded-xl grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 p-10">
                <div className="">
                  <p className="text-white font-EncodeSemiBold text-2xl py-4">
                    Technology Consulting
                  </p>
                  <p className="text-[#8A8A8A] tracking-widest text-md font-EncodeLight">
                    Explore new customer segments, identify new income channels,
                    and seize opportunities presented by evolving market trends.
                  </p>
                </div>
                <div className="flex flex-col justify-center md:items-center sm:items-start items-start sm:pl-10">
                  <ul className="lg:w-11/12 font-EncodeLight list-disc text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#2EFFE1] to-[#7DEE53]">
                    <li>• Comprehensive Market Research Research</li>
                    <li>• Research and Segmentation</li>
                    <li>• Product Roadmap with Key Features</li>
                    <li>• MVP Launch & Custom Development</li>
                  </ul>
                </div>
              </div>
              {/*-- SERVICE 2  --*/}
              {/*-- SERVICE 3  --*/}
              <div className="border w-full py-20 my-10 rounded-xl grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 p-10">
                <div className="">
                  <p className="text-white font-EncodeSemiBold text-2xl py-4">
                    Technology and Product Consultation
                  </p>
                  <p className="text-[#8A8A8A] tracking-widest text-md font-EncodeLight">
                    Avail assistance in defining a tech roadmap, assessing
                    vendors, upgrading IT infrastructure, or refining product
                    strategy.
                  </p>
                </div>
                <div className="flex flex-col justify-center md:items-center sm:items-start items-start sm:pl-10">
                  <ul className="lg:w-11/12 font-EncodeLight list-disc text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#2EFFE1] to-[#7DEE53]">
                    <li>• Product Development</li>
                    <li>• Lifecycle Optimization</li>
                    <li>• Tech Stack and Infrastructure Assessment</li>
                    <li>• AI Consultation</li>
                    <li>• Data Science & Analysis</li>
                  </ul>
                </div>
              </div>
              {/*-- SERVICE  3--*/}
            </div>
            <ProjectIdea />
          </div>
        </section>
      </div>
    );
  };
  <Footer />;

  const [status, setStatus] = React.useState("earlyState");

  return (
    <section className="bg-cover bg-no-repeat bg-[url('../assets/images/bg-solutions.png')] rounded-none lg:h-[25rem] md:h-[20rem] sm:h-[20rem] h-[20rem]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <p className="text-center font-EncodeLight text-lg text-[#2EFFE1] p-5">
          Our solutions
        </p>
        <p className="leading-5 text-white tracking-wider font-EncodeBold text-center lg:text-5xl md:text-4xl sm:text-3xl text-3xl lg:px-32 md:px-32 sm:px-24 px-4">
          Fast-Track Success with Tailored Tech & Product Scaling Solutions
        </p>
      </div>

      {status === "earlyState" ? (
        <EarlyStage
          onClickEarly={() => setStatus("earlyState")}
          onClickGrowth={() => setStatus("growthStage")}
        />
      ) : (
        <GrowthStage
          onClickEarly={() => setStatus("earlyState")}
          onClickGrowth={() => setStatus("growthStage")}
        />
      )}

      <Footer />
    </section>
  );
};

export default Solutions;
