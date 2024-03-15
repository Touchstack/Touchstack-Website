import NewLogo from '../.././assets/images/NewLogo2.svg';
import Vector1 from '../../assets/images/Vector1.png';

const ComingSoonPage = () => {
  return (
    <div className="bg-[#000000] min-h-screen h-screen px-5 py-5 md:px-28 md:py-[27px] bg-no-repeat bg-center bg-[url('/src/assets/images/vector2.png')]">
      {/* Header Area */}
      <div className="flex justify-between items-center">
        <div>
          <img src={NewLogo} alt="logo" className='w-[115px]' />
        </div>

        <div className='text-[#FFFFFF] text-[10px] md:text-[12px] font-SpaceBold'>
          🚧  website under construction
        </div>
      </div>

      {/* Hero Area */}
      <div className="flex flex-col items-center justify-center text-[#FFFFFF] mt-[6.5rem]">
          <h1 
          className='text-gradient font-SpaceBold  text-[46.71px] md:text-[66.55px] text-center'
          style={{'--gradient-start': 'rgb(255, 255, 255)','--gradient-middle': 'rgb(255, 255, 255)', '--gradient-end': 'rgb(0, 0, 0)'}}
          >
             Unlock the Potential of AI and Engineering Collaboration
          </h1>

          <p className='font-700 text-[#FFFFFF] font-DMSansLight text-center w-11/12 md:w-9/12 text-[14px] md:text-[26.34px] mt-10'>
            At Touch Stack Technologies, we believe in the power of synergy between artificial intelligence and human intellect. Our cutting-edge platform bridges the gap between AI algorithms and human expertise, creating a harmonious ecosystem where innovation thrives.
          </p>

          <div className='text-black font-InterSemiBold font-600 bg-white py-2 rounded-[8px] px-3 mt-10 hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110'>
            <a href="mailto:yourteam@example.com">
                Contact our team
            </a>
          </div>
      </div>

       
    </div>
  );
};

export default ComingSoonPage;
