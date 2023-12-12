import React, { useEffect } from "react";
import NavBar from "../../components/Homepage/NavBar";
import Footer from "../../components/Homepage/Footer";
import ProjectIdea from "../../components/Homepage/ProjectIdea";
import CodeImage from "../../assets/images/code_hero_image_AdobeExpress .gif";
import GreenCafe from "../../assets/images/GreenCafe logo  1.svg";
import BargainMoto from "../../assets/images/BARGAIN MOTO 1.svg";
import Heaf from "../../assets/images/heaf1 1.svg";
import ReadyFx from "../../assets/images/readyfx 1.svg";
import Logo1 from "../../assets/images/logo 1.svg";
import Ecomm from "../../assets/images/e-commerce.svg";
import FinTech from "../../assets/images/fintech.svg";
import Saas from "../../assets/images/saas.svg";
import EdTech from "../../assets/images/ed-tech.svg";
import PropTech from "../../assets/images/prop-tech.svg";
import Mobility from "../../assets/images/mobility.svg";
import ReactIcon from "../../assets/images/react-icon.svg";
import NodeIcon from "../../assets/images/node-icon.svg";
import PsqlIcon from "../../assets/images/psql.svg";
import LaravelIcon from "../../assets/images/laravel-icon.svg";
import AwsIcon from "../../assets/images/aws-icon.svg";
import MogoDbIcon from "../../assets/images/mogodb-icon.svg";
import GcpIcon from "../../assets/images/gcp-icon.svg";
import HealthBuk from "../../assets/images/healthbuk.svg";
import ReadyfxImage from "../../assets/images/readyfx.svg";
import BargainM from "../../assets/images/bargain.svg";
import BargainCeo from "../../assets/images/bargain-ceo.svg";
import HealthBkCeo from "../../assets/images/healthbuk-ceo.png";
import GreenCafeCeo from "../../assets/images/greencafe-ceo.png";
import { AnimatePresence, motion } from 'framer-motion';

const HomePage = () => {
  const [testimonial, setTestimonial] = React.useState();
  const [number, setNumber] = React.useState(0);
  const testimonials = [
    {
      text: '"It’s been an awesome journey working with Touch Stack. My Product Bargain Moto became a huge success and it’s been a super platform so far. I love the engineering velocity and quality at Touch Stack . "',
      name: "Andrew Berchie",
      portfolio: "CEO, Bargainmoto.com",
      image: BargainCeo,
    },
    {
      text: '" We outsourced quite a huge number of tech debt to Touch Stack and the Engineering Team managed to build and deploy most of our features. It was such a joy outsourcing. "',
      name: "Philip Acheampong",
      portfolio: "CTO, HealthBuk",
      image: HealthBkCeo,
    },
    {
      text: '"As a small business owner it was important we established our Digital Presence online. We had an amazing onboarding experience with Touch Stack which lead us to our Website seeing a boost in client orders by 90%. It was such a joy working with the product and engineering Team."',
      name: "Pearlvis Tornu",
      portfolio: "CEO, Green Café",
      image: GreenCafeCeo,
    },
  ];

  useEffect(() => {
    setTestimonial(testimonials[number + 1]);
  }, [number]);

  setTimeout(() => (number === 0 ? setNumber(1) : setNumber(0)), 15000);

  return (
    <div>
      <NavBar />
      {/* Home page content */}

      <div className="">
        <section className="lg:h-[800px] md:h-[700px] h-[600px] bg-[url('/src/assets/images/hero_bg.jpg')]">
          <div className="py-10 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h1 className="mb-4 pt-10 text-4xl font-EncodeBold font-normal leading-none text-white md:text-4xl lg:text-6xl">
              Building scalable softwares <br /> for industry leading brands
            </h1>
            <p className="mb-8 text-sm font-EncodeRegular text-[#8A8A8A] lg:text-lg sm:px-16 xl:px-48">
              We build quality software and architecture solutions for
              businesses that care about quality, good user experience,
              scalability and profitability.
            </p>
            <div className="flex flex-col mb-4 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="/startaproject"
                className="font-EncodeRegular transition duration-700 ease-in-out hover:scale -110 inline-flex justify-center items-center py-4 lg:px-12 md:px-10 sm:px-8 px-8 text-lg font-medium text-center text-black rounded-lg bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53]"
              >
                Start a project
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 17.5L17.5 7.5"
                    stroke="#1A1818"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 7.5H17.5V17.5"
                    stroke="#1A1818"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className="mt-[-32px]">
        <section className="bg-[#1A1919]">
          <div className="mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg">
            <div className="flex flex-col justify-center items-center text-center mt-8 text-gray-500 sm:justify-between">
              <div className="text-center lg:-mt-72 md:-mt-56 sm:-mt-24 -mt-24 lg:px-0 md:px-6 sm:px-8 px-8">
                <img src={CodeImage} alt="" />
              </div>
              <div className="mx-auto my-16">
                <p className="text-center text-3xl text-white md:text-3xl lg:text-4xl font-EncodeRegular">
                  Built softwares for over 20 businesses worldwide
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-5 grid-cols-5 gap-5 mt-10">
              <div className="cursor-pointer transition duration-700 ease-in-out hover:scale-110">
                <img src={GreenCafe} alt="" />
              </div>
              <div className="cursor-pointer transition duration-700 ease-in-out hover:scale-110">
                <img src={BargainMoto} alt="" />
              </div>
              <div className="cursor-pointer transition duration-700 ease-in-out hover:scale-110">
                <img src={Heaf} alt="" />
              </div>
              <div className="cursor-pointer transition duration-700 ease-in-out hover:scale-110">
                <img src={ReadyFx} alt="" />
              </div>
              <div className="cursor-pointer transition duration-700 ease-in-out hover:scale-110">
                <img src={Logo1} alt="" />
              </div>
            </div>
          </div>
          <div className="mt-[10%] text-center">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-EncodeBold lg:px-96 md:px-72 px-14 pb-8 text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53] text-[45px]">
              Domain knowledge in different industries
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-16 py-16">
            <div className="flex justify-center">
              <img
                className="rounded-[20px] transition duration-700 ease-in-out hover:scale-110 cursor-pointer"
                src={Ecomm}
                alt="image"
              />
            </div>
            <div className="flex justify-center">
              <img
                className="rounded-[20px] transition duration-700 ease-in-out hover:scale-110 cursor-pointer"
                src={FinTech}
                alt="image"
              />
            </div>
            <div className="flex justify-center">
              <img
                className="rounded-[20px] transition duration-700 ease-in-out hover:scale-110 cursor-pointer"
                src={Saas}
                alt="image"
              />
            </div>
            <div className="flex justify-center">
              <img
                className="rounded-[20px] transition duration-700 ease-in-out hover:scale-110 cursor-pointer"
                src={EdTech}
                alt="image"
              />
            </div>
            <div className="flex justify-center">
              <img
                className="rounded-[20px] transition duration-700 ease-in-out hover:scale-110 cursor-pointer"
                src={PropTech}
                alt="image"
              />
            </div>
            <div className="flex justify-center">
              <img
                className="rounded-[20px] transition duration-700 ease-in-out hover:scale-110 cursor-pointer"
                src={Mobility}
                alt="image"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Technologies */}
      <section className="bg-[#1A1919] lg:pb-32 pb-24">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-8 gap-y-4 px-16 lg:py-32 md:py-32 lg:pb-36 md:pb-36 pb-24">
          <div className="mt-4">
            <p className="text-[#8A8A8A] lg:text-xl text-lg font-EncodeRegular">
              USING THE BEST TOOLS FOR THE JOB
            </p>
            <h1 className="mb-8 font-EncodeSemiBold text-white md:text-4xl lg:text-6xl">
              We work with these Technologies
            </h1>
          </div>
          <div className="flex justify-start items-center">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-6 lg:gap-8 md:gap-4 gap-2 lg:w-4/5">
              <img
                className="transition duration-700 ease-in-out hover:scale-110 cursor-pointer"
                src={ReactIcon}
                alt=""
              />
              <img
                className="transition duration-700 ease-in-out hover:scale-110 cursor-pointer"
                src={NodeIcon}
                alt=""
              />
              <img
                className="transition duration-700 ease-in-out hover:scale-110 cursor-pointer"
                src={PsqlIcon}
                alt=""
              />
              <img
                className="transition duration-700 ease-in-out hover:scale-110 cursor-pointer"
                src={LaravelIcon}
                alt=""
              />
              <img
                className="transition duration-700 ease-in-out hover:scale-110 cursor-pointer"
                src={AwsIcon}
                alt=""
              />
              <img
                className="transition duration-700 ease-in-out hover:scale-110 cursor-pointer"
                src={MogoDbIcon}
                alt=""
              />
              <img
                className="transition duration-700 ease-in-out hover:scale-110 cursor-pointer"
                src={GcpIcon}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Case Study */}

        <div className="px-16 pb-24 bg-black">
          <h2 className="font-EncodeBold text-4xl md:text-5xl lg:text-5xl pb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53] pt-20">
            Case Studies
          </h2>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
            <div>
              <img src={HealthBuk} />
              <p className="text-[#8A8A8A] lg:text-xl text-lg my-4">
                UX DESIGN, SOFTWARE DEVELOPMENT
              </p>
              <h1 className="mb-8 text-3xl font-EncodeSemiBold text-white md:text-3xl lg:text-4xl">
                Healthbuk
              </h1>
              <p className="text-white font-EncodeRegular text-lg lg:w-5/5">
                Healthcare management software that leverages the power of cloud
                computing coupled with AI to assist in the provision of a
                seamless and convenient health care.
              </p>
            </div>

            <div>
              <img src={ReadyfxImage} />
              <p className="text-[#8A8A8A] lg:text-xl text-lg my-4">
                UX DESIGN, SOFTWARE DEVELOPMENT
              </p>
              <h1 className="mb-8 text-3xl font-EncodeSemiBold text-white md:text-3xl lg:text-4xl">
                ReadyFx
              </h1>
              <p className="text-white font-EncodeRegular text-lg lg:w-5/5">
                Helping Hong Kong startups, SMEs and entrepreneurs manage FX and
                make global payments in more than 30 currencies.
              </p>
            </div>

            <div>
              <img src={BargainM} />
              <p className="text-[#8A8A8A] lg:text-xl text-lg my-4">
                UX DESIGN, SOFTWARE DEVELOPMENT
              </p>
              <h1 className="mb-8 text-3xl font-EncodeSemiBold text-white md:text-3xl lg:text-4xl">
                BargainMoto
              </h1>
              <p className="text-white font-EncodeRegular text-lg lg:w-5/5">
                Online marketplace for private sale and purchase of vehicles
                between individual buyers and sellers.
              </p>
            </div>
          </div>
        </div>

        {/*Testimonials*/}
       <AnimatePresence>
        <div  className="flex justify-center items-center py-32" id="testimonials">
          <motion.div 
          className="border border-[#706868] 
          rounded-[15px] self-center 
          lg:w-7/12 md:w-9/12 w-10/12 f
          ont-EncodeSemiBold"
          key={number}
          animate={{ opacity: 10 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 5.0 }}
          >
            <p className="lg:text-4xl md:text-4xl text-2xl font-appSemiBold text-center lg:px-24 md:px-18 px-16 mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53] mt-10 mb-10">
              {testimonial?.text}
            </p>
            <div className="flex justify-center items-center">
              <img src={testimonial?.image} alt="" />

              <div className="ml-4 pt-8">
                <h4 className="text-white lg:text-2xl text-xl font-bold">{testimonial?.name}</h4>
                <p className="text-[#8A8A8A] mb-10">{testimonial?.portfolio}</p>
              </div>
            </div>
         </motion.div>
       </div>
      </AnimatePresence>
      {/*Testimonials*/}

        <ProjectIdea />
      </section>

      <Footer />
    </div>
  );
};
export default HomePage;
