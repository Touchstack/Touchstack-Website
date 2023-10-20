import React from "react";
import House from "../../assets/images/house.svg";
import Talent from "../../assets/images/talent.svg";
import Product from "../../assets/images/product.svg";
import Team from "../../assets/images/team.svg";

const EarlyStage = ({ onClickEarly, onClickGrowth }) => {
  return (
    <section className="bg-[#1a1919] py-20">
      <div className="flex flex-col justify-center items-center">
        <div className="flex font-Light text-md border rounded-lg">
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

        <p className="leading-5 text-transparent bg-clip-text bg-gradient-to-b from-[#2EFFE1] to-[#7DEE53] font-SemiBold text-center lg:text-3xl md:text-3xl sm:text-2xl text-2xl py-16 lg:w-6/12 md:8/12 sm:w-9/12 w-9/12">
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
            <p className="text-white font-SemiBold lg:text-3xl md:text-3xl sm:text-2xl text-2xl py-4">
              Efficient Route to Market
            </p>
            <p className="text-[#F1F1F1] text-lg font-Light">
              In just 10-14 weeks, we bring your Minimum Viable Product (MVP) to
              life. Our proven track record with various startups ensures your
              product is well-planned and validated, leveraging our expertise
              and efficient methodologies.
            </p>
          </div>
          <div className="bg-white p-16 flex flex-col justify-center items-start lg:rounded-tr-xl md:rounded-none sm:rounded-none rounded-none">
            <img
              src={Talent}
              alt="talent.svg"
              style={{ height: "auto" }}
              className="img-fluid"
            />
            <p className="text-black font-SemiBold lg:text-3xl md:text-3xl sm:text-2xl text-2xl py-4">
              On-demand Access to Top Talent
            </p>
            <p className="text-[#464646] text-lg font-Light">
              Avoid the hassle of hiring and team management, especially when
              it's not your top priority. We offer a dedicated team of
              technology and product experts, set for optimum performance from
              the get-go.
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53] p-16 flex flex-col justify-center items-start lg:rounded-bl-xl md:rounded-none sm:rounded-none rounded-none">
            <img
              src={Product}
              alt="product.svg"
              style={{ height: "auto" }}
              className="img-fluid"
            />
            <p className="text-black font-SemiBold lg:text-3xl md:text-3xl sm:text-2xl text-2xl py-4">
              Economical Product Development
            </p>
            <p className="text-[#464646] text-lg font-Light">
              Our team utilises best practices, templates, pre-built services,
              and frameworks to deliver your product promptly and
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
            <p className="text-white font-SemiBold lg:text-3xl md:text-3xl sm:text-2xl text-2xl py-4">
              Flexible Team Scaling
            </p>
            <p className="text-[#F1F1F1] text-lg font-Light">
              We adapt to your needs. Pay only for the team members you need at
              the moment to maximize your operational budget. For example, you
              can scale down post-launch and scale back up after securing
              additional funding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyStage;
