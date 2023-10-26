import NavBar from "../../components/Homepage/NavBar";
import Footer from "../../components/Homepage/Footer";
import Award from "../../images/award.jpg";
import Articles from "../../images/Article pic.svg";

const BlogPage = () => {
  return (
    <div>
      <NavBar />
      {/* Blog Content */}
      <div className="bg-[#0D0D0D]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl">
          <h1 className="mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53] text-[45px] mb-8">
            Touchstack Blog
          </h1>
          <div className="flex items-center justify-center mb-16">
            <div className="container bg-[#1A1919] grid lg:grid-cols-2 gap-2 rounded-xl px-8 p-4 ">
              <div className="grid-1">
                <h1 className="font-EncodeRegular text-[#D9D9D9D9] mt-4">
                  LATEST
                </h1>
                <p className="font-EncodeBold text-white text-3xl mt-4">
                  Brian Adjei-Otchwemah Recognized With The “Outstanding
                  Leadership Award
                </p>
                <div className="place-self-start mt-10 py-10">
                  <a
                    className="inline-flex justify-center items-center font-EncodeRegular text-lg text-center text-green-400 border border-[#2EFFE1] py-4 lg:px-8 md:px-8 sm:px-8 px-8 rounded-lg bg-[#1A1919]"
                    href="/article"
                  >
                    Read me
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M7 17.5L17 7.5"
                        stroke="url(#paint0_linear_1074_1237)"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <path
                        d="M7 7.5H17V17.5"
                        stroke="url(#paint1_linear_1074_1237)"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <defs>
                        <linearGradient
                          id="paint0_linear_1074_1237"
                          x1="11.3081"
                          y1="7.5"
                          x2="18.6997"
                          y2="15.0043"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#2EFFE1" />
                          <stop offset="1" stop-color="#7DEE53" />
                        </linearGradient>

                        <linearGradient
                          id="paint1_linear_1074_1237"
                          x1="11.3081"
                          y1="7.5"
                          x2="18.6997"
                          y2="15.0043"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#2EFFE1" />
                          <stop offset="1" stop-color="#7DEE53" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <img className="rounded-3xl" src={Award} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}

      <div className="bg-[#1A1919] self-center mx-auto p-12">
        <h1 className="text-white text-5xl font-EncodeSemiBold lg:text-4xl lg:text-left md:3xl md:px-12">
          All Articles
        </h1>
        <ul className="lg:flex-row md:flex-row sm:flex-col flex-col justify-start items-start self-start gap-4 md:flex md:px-12 p-8 mt-4 md:items-center  ">
          <a href="#">
            <li className="p-2 border border-[#D9D9D9] rounded-full text-gray-400 hover:text-black duration-500 bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53]">
              All
            </li>
          </a>
          <a href="">
            <li className="p-2 border border-[#D9D9D9] rounded-full text-gray-400">
              Events
            </li>
          </a>
          <a href="">
            <li className="p-2 border border-[#D9D9D9] rounded-full text-gray-400">
              Announcements
            </li>
          </a>
          <a href="">
            <li className="p-2 border border-[#D9D9D9] rounded-full text-gray-400">
              Learning Resources
            </li>
          </a>
          <a href="">
            <li className="p-2 border border-[#D9D9D9] rounded-full text-gray-400">
              Media
            </li>
          </a>
        </ul>

        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 lg:gap-2 md:gap-2 lg: md:px-8 p-8 mb-12">
          <div className="flex flex-col justify-center items-start text-white py-2 px-2 card">
            <a href="/">
              <img src={Articles} alt="" />
              <p className="text-white font-EncodeBold text-left text-xl py-2 hover:underline">
                Brian Adjei-Otchwemah Recognized With The “Outstanding
                Leadership Award
              </p>
            </a>
            <p className="font-EncodeRegular text-[#898585] text-xs text-left mb-8">
              August 2nd, 2023
            </p>
          </div>

          <div className="flex flex-col justify-center items-start text-white py-2 px-2 card">
            <a href="/">
              <img src={Articles} alt="" />
              <p className="text-white font-EncodeBold text-left text-xl py-2 hover:underline">
                Brian Adjei-Otchwemah Recognized With The “Outstanding
                Leadership Award
              </p>
            </a>
            <p className="font-EncodeRegular text-[#898585] text-xs text-left mb-8">
              August 2nd, 2023
            </p>
          </div>

          <div className="flex flex-col justify-center items-start text-white py-2 px-2 card">
            <a href="/">
              <img src={Articles} alt="" />
              <p className="text-white font-EncodeBold text-left text-xl py-2 hover:underline">
                Brian Adjei-Otchwemah Recognized With The “Outstanding
                Leadership Award
              </p>
            </a>
            <p className="font-EncodeRegular text-[#898585] text-xs text-left mb-8">
              August 2nd, 2023
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default BlogPage;
