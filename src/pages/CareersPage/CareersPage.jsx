import NavBar from "../../components/Homepage/NavBar";
import Footer from "../../components/Homepage/Footer";

const Careers = () => {
  return (
    <div>
      <NavBar />

      {/* Page Content */}

      <div>
        <section className="bg-[#0D0D0D] pt-16 pb-16">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:px-24">
            <div>
              <a href="">
                <h1 className="py-5 px-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53] lg:text-6xl md:text-5xl text-5xl">
                  Join Us
                </h1>
              </a>

              <p className="text-[#8A8A8A] text-[18px] py-5 px-10 text-justify">
                We are searching for an outstanding group of engineers and tech
                enthusiasts to collaborate with. Come and be a part of our
                extraordinary community consisting of Software Engineers,
                Product Managers, and tech enthusiasts.
              </p>

              <p className="text-[#8A8A8A] text-[18px] py-5 px-10 text-justify">
                At our startup, we are driven by a deep passion for developing
                exceptional digital products using the latest technology. Over
                the past five years, we have successfully established ourselves
                as a dependable and scalable company, placing great emphasis on
                software development and efficient engineering processes.
              </p>

              <a
                href="#open-roles"
                className="mx-10 mt-4 lg:mb-0 mb-4 font-appRegular transition duration-700 ease-in-out hover:scale-110 inline-flex justify-center items-center py-4 lg:px-10 md:px-8 sm:px-6 px-6 text-lg font-medium text-center text-black rounded-lg bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53]"
              >
                See open roles
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.5 7.5H17.5V17.5"
                    stroke="#1A1818"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>

            <div className="flex justify-center items-center">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/29933a095bb901afffdfaee8716364c694083530/f7c0a/images/img.png"
                alt="About Us"
              />
            </div>
          </div>
        </section>

        {/* Open Position */}

        <div className="bg-[#383434] lg:pb-32 pb-24 bg-auto">
          <h3 className="lg:text-5xl md:text-4xl text-3xl py-8 pt-16 text-center lg:px-48 md:px-32 px-16 mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53]">
            Open Positions
          </h3>
          <p
            className="text-center text-[#8A8A8A] lg:px-48 md:px-32 px-16 text-lg"
            id="open-roles"
          >
            There are currently no open roles at Touch Stack but we accept
            applications anytime. Send your CV to :
            <a
              href="mailto:brian@touchstacktechnologies.com"
              className="text-green-400 hover:underline cursor-pointer"
            >
              brian@touchstacktechnologies.com
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
