import React from 'react';
import NewLogo from '../.././assets/images/NewLogo2.svg';
import Vector1 from '../../assets/images/Vector.svg';
import BackGround from '../.././BackGround2.json';
import Lottie from 'lottie-react';

const ComingSoonPage = () => {
  return (
    <div className="relative bg-[#000000] min-h-screen px-5 py-5 md:px-28 md:py-[27px] bg-no-repeat bg-center">
      {/* Lottie Animation */}
      <div className="absolute inset-0 flex items-center  justify-center z-0">
        <Lottie animationData={BackGround}  />
      </div>
    
      {/* Header Area */}
      <div className="relative z-10">
        <div className="flex justify-between items-center">
          <div>
            <img src={NewLogo} alt="logo" className="md:w-[115px] w-[80px]" />
          </div>

          <div className="text-[#FFFFFF] text-[12px] md:text-[12px] lg:text-[14px] font-SpaceBold">
            🚧 website under construction
          </div>
        </div>

        {/* Hero Area */}
        <div className="flex flex-col items-center justify-center text-[#FFFFFF] mt-[6.5rem]">
          <h1 className="text-gradient font-SpaceBold text-[40px] md:text-[46.71px] lg:text-[66.55px] text-center">
            Unlock the Potential of AI and Engineering Collaboration
          </h1>
          <p className="font-700 text-[#FFFFFF] font-DMSansLight text-center w-12/12 md:w-9/12 lg:w-10/12 text-[14px] lg:text-[26.34px] md:text-[16.34px] mt-10">
            At Touch Stack Technologies, we believe in the power of synergy between artificial intelligence and human intellect. Our cutting-edge platform bridges the gap between AI algorithms and human expertise, creating a harmonious ecosystem where innovation thrives.
          </p>
          <div className="text-black font-InterSemiBold font-600 bg-white py-2 rounded-[8px] px-3 mt-10 hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110">
            <a href="mailto:info@touchstacktechnologies.com">Contact our team</a>
          </div>
        </div>
      </div>

      {/* Optional: Re-enable background vectors if necessary */}
      {/* <img
        src={Vector1}
        alt=""
        className="absolute top-0 right-0  md:w-[270px] md:h-[270px] transform translate-x-[-50%] translate-y-[50%]"
      />
      <img
        src={Vector1}
        alt=""
        className="absolute md:w-[270px] md:h-[270px] bottom-0 left-0 transform translate-x-[50%] translate-y-[-30%]"
      /> */}
    </div>
  );
};

export default ComingSoonPage;
