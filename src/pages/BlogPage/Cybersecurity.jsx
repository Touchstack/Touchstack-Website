import NavBar from "../../components/Homepage/NavBar";
import Footer from "../../components/Homepage/Footer";
import CybersecurityImage from "../../assets/images/cybersecurity.jpg";
import CybersecurityBg from "../../assets/images/cybersecurity1.png";
import Banner from "../../assets/images/Banner.png";

const Cybersecurity = () => {
  return (
    <div>
      <NavBar />

      {/* Page Content */}
      <div className="bg-[#1A1919] flex justify-center items-center">
        <div className="px-8 py-6">
          <a
            href="/blog"
            className="text-[#2EFFE1] items-center inline-flex font-EncodeRegular gap-1 mt-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="19"
              viewBox="0 0 17 18"
              fill="none"
            >
              <path
                d="M5.04094 8.98457L10.0666 4.01037L10.763 4.71397L6.44092 8.99177L10.7187 13.3139L10.0151 14.0102L5.04094 8.98457Z"
                fill="#2EFFE1"
              />
            </svg>
            Back to Blogs
          </a>
          <div className="text-white font-EncodeBold py-12 lg:text-6xl md:text-4xl sm:text-2xl text-xl">
            <p className="">
              SEC Charges SolarWinds, CISO with Fraud over Security Risk
              Disclosures
            </p>
            <p className=" mt-5 font-EncodeRegular text-[#898585] text-lg text-left mb-8">
              August 2nd, 2023
            </p>
          </div>

          <div className="flex justify-center items-center">
            <img src={CybersecurityImage} alt="/" className="md:min-h-[400px] lg:min-h-[600px]" />
          </div>

          <div className="py-8">
            <p className="text-[#898585] font-EncodeRegular text- mb-8 lg:px-12 sm:px-2 px-0">
              The Securities and Exchange Commission (SEC) in Ghana has filed a
              lawsuit against SolarWinds and its Chief Information Security
              Officer, Timothy Brown, alleging that they misled investors and
              the public by providing inaccurate information about risk
              disclosures.
            </p>
            <p className="text-[#898585] font-EncodeRegular mb-8 lg:px-12 sm:px-2 px-0">
              The SEC in Ghana has accused the organization and its Chief
              Information Security Officer (CISO) of overstating the company’s
              cybersecurity efforts and downplaying or omitting known threats
              during a significant cyber attack on SolarWinds.
            </p>

            <p className="text-[#898585] font-EncodeRegular mb-8 lg:px-12 sm:px-2 px-0">
              The SEC lodged its lawsuit in a federal court in Manhattan. The
              official charges by the SEC underscore SolarWinds’ violation of
              the Securities Act of 1933 and the anti-fraud regulations of the
              Securities Exchange Act of 1934. The SEC seeks a permanent
              injunction and financial penalties against SolarWinds, as well as
              a ban on Timothy Brown from assuming executive or directorial
              positions.
            </p>

            <div className="lg:px-12 sm:px-2 px-0 inline-flex gap-2 items-center font-bold text-[#8A8A8A] py-4 xl:text-xl lg:text-lg md:text-sm">
              <p>
                SEC Takes Legal Action Against SolarWinds and CISO: What Exactly
                Occurred?
              </p>
            </div>
            <div className="lg:flex inline-block items-center">
              <img
                src={CybersecurityBg}
                alt=""
                className="lg:h-[260px] lg:mb-0 mb-5"
              />
              <p className="text-[#898585] font-EncodeRegular mb-8 lg:px-12 sm:px-2 px-0">
                The Russian APT29 threat group effectively penetrated
                SolarWinds’ internal systems and compromised the SolarWinds
                Orion IT management platform, impacting versions released
                between March 2020 and June 2020. These compromised versions
                were used to introduce the Sunburst backdoor into the systems of
                less than 18,000 entities. Remarkably, from this broad range,
                the attackers specifically targeted a considerably smaller group
                for additional exploitation.
              </p>
            </div>

            <p className="text-[#898585] font-EncodeRegular mb-8 lg:px-12 sm:px-2 px-0">
              Through this attack, criminals managed to infiltrate several
              notable organizations in Corporate America, including various U.S.
              government departments such as Defence, Justice, Commerce,
              Treasury, Homeland Security, State, and Energy. Per the SEC,
              starting from its public introduction in October 2018 until the
              disclosure of the cyber breach in December 2020, SolarWinds, in
              collaboration with Brown, communicated only vague and speculative
              risks to their investors. They overlooked the distinct and
              well-known vulnerabilities in the company’s cybersecurity stance
              and the escalating challenges they were concurrently facing.
            </p>
            <div className="lg:px-12 sm:px-2 px-0 inline-flex gap-2 items-center font-EncodeRegular text-[#8A8A8A] py-4 xl:text-xl lg:text-lg md:text-sm">
              <img src={Banner} alt="" className="" />
            </div>

            {/* <div className="lg:px-12 sm:px-2 px-0 inline-flex gap-2 items-center font-EncodeRegular text-[#8A8A8A] py-4 xl:text-xl lg:text-lg md:text-sm">
              <p>Google Cloud Platform (GCP)</p>
            </div> */}
            <p className="text-[#898585] font-EncodeRegular mb-8 lg:px-12 sm:px-2 px-0">
              {/* <hr className="my-1 border-[#8A8A8A] sm:mx-auto dark:border-[#8A8A8A] lg:my-1" /> */}
              For more information, reach out to us at
              <a
                href=""
                className="text-[#2EFFE1] ml-2 hover:underline underline-offset-1"
              >
                info@touchstack.com.
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Cybersecurity;
