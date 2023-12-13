import { useNavigate } from "react-router-dom";
import RightImage from "../../assets/images/ctaimage.svg";

const GreenBoxComponent = () => {
  const navigate = useNavigate();

  const startProjectHandler = () => {
    const email = "mailto:brian@touchstacktechnologies.com";
    window.location.href = email;
  };

  return (
    //className="grid lg:grid-cols-2 grid-cols-1 gap-8 bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53] lg:mx-24 md:mx-16 mx-12 py-8 px-8 rounded-lg"
    <div className="">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53] lg:mx-24 md:mx-16 mx-12 py-8 px-8 rounded-lg">
        <div className=" flex-col justify-center py-8 px-8 ">
          <h3 className="lg:text-4xl md:text-3xl text-3xl text-black font-EncodeBold mb-4 tracking-wider items-center ">
            Got a project idea? Let us discuss the possibilities
          </h3>
          <h4 className="text-black text-lg mb-2 items-center font-EncodeRegular">
            We build quality softwares and architecture solutions for businesses
            that care about quality, good user experience, scalability and
            profitability.
          </h4>
          <a
            className="bg-white rounded-md px-4 hover:bg-gray-300 cursor-pointer flex-col place-self-start mt-8 font-EncodeRegular lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 
             transition-transform duration-700 ease-in-out transform hover:scale-110 inline-flex justify-center items-center py-4 lg:px-16 md:px-14 sm:px-10 text-lg text-black"
            href="/startaproject"
          >
            Start a project
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 25 25"
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
        <img
          src={RightImage}
          alt="Right-Aligned Image"
          className="py-8 md:py-16 lg:py-16 rounded-lg"
        />
      </div>
    </div>
  );
};

export default GreenBoxComponent;
