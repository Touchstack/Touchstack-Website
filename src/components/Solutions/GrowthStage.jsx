import ProjectIdea from "../Homepage/ProjectIdea";
import Plant from "../../assets/images/plant.svg";
import Flexibility from "../../assets/images/flexibility.svg";
import Delegate from "../../assets/images/delegate.svg";
import IndustryTalent from "../../assets/images/industry-talent.svg";
import GrowthServices from "./GrowthServices";


export const GrowthStage = ({ onClickEarly, onClickGrowth }) => {
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
                  Being a coveted employer in West Africa, we attract and
                  nurture the best professionals in product design and
                  engineering, relieving you from any managerial stress.
                </p>
              </div>
            </div>
            <GrowthServices />
            <ProjectIdea />
          </div>
        </section>
      </div>
    );
  };