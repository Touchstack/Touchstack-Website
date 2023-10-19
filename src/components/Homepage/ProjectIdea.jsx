import React from "react";
const GreenBoxComponent = () => {
  return (
    //class="grid lg:grid-cols-2 grid-cols-1 gap-8 bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53] lg:mx-24 md:mx-16 mx-12 py-8 px-8 rounded-lg"
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53] lg:mx-24 md:mx-16 mx-12 py-8 px-8 rounded-lg">
      <div className=" flex-col justify-center py-8 px-8">
        <h3 className="lg:text-4xl md:text-3xl text-3xl text-black font-Bold mb-4 tracking-wider items-center ">
          Got a project idea? Let us discuss the possibilities
        </h3>
        <h4 className="text-black text-lg mb-2 items-center">
          We build quality softwares and architecture solutions for businesses
          that care about quality, good user experience, scalability and
          profitability.
        </h4>
        <button
          className="bg-white 
    
          rounded-md py-2 px-4 hover:bg-gray-300 cursor-pointer 
          flex flex-col place-self-start mt-8 font-appRegular 
          lg:mb-16 space-y-4 sm:flex-row sm:justify-center 
          sm:space-y-0 sm:space-x-4 
          transition-transform 
          duration-700 ease-in-out
           transform hover:scale-110 inline-flex 
           justify-center items-center py-4 lg:px-16 md:px-14
            sm:px-10 px-8 text-lg font-medium text-black rounded-lg"
        >
          Start a project{" "}
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
        </button>
      </div>
      <img
        src="https://d33wubrfki0l68.cloudfront.net/a9935a912905ded72983e2e77f7e907760703a37/423a8/images/image.svg" // Replace with your image URL
        alt="Right-Aligned Image"
        className="py-8 md:py-16 lg:py-16 rounded-lg"
      />
    </div>
  );
};

export default GreenBoxComponent;
