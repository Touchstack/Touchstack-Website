import React from "react";
import Team from "./Team";

const FoundersStory = () => {
  return (
    <div className="bg-black ">
      <div className="bg-black grid lg:grid-cols-2 grid-cols-1 gap-4 lg:px-24 mb-16 ">
        <div className="">
          <h1 className="justify-center py-5 px-10 font-EncodeBold text-transparent bg-clip-text bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53] lg:text-6xl md:text-5xl text-5xl mt-12">
            About Us
          </h1>
          <p className="text-[#8A8A8A] text-[18px] py-5 px-10 text-justify">
            Our startup is fueled by a passion for creating exceptional digital
            products using cutting-edge technology. With a focus on software
            development and efficient engineering processes, we have established
            ourselves as a reliable and scalable company in the five years since
            our inception. Our projects cover diverse industries, including
            Education, Real Estate, Agriculture, and Fashion, among others. Our
            commitment to quality is evident in the scalable SAP products we
            deliver, and we prioritize speed and accessibility by deploying our
            products on cloud computing servers.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/29933a095bb901afffdfaee8716364c694083530/f7c0a/images/img.png"
            alt="About Us"
          />
        </div>

        <div className="mt-12 flex lg:justify-start justify-center items-center lg:p-0 md:p-0 p-8">
          <img src="src/assets/images/founder.jpg" alt="Founders' Pic" />
        </div>
        <div className="" /*founders' section*/>
          <h1 className="mt-6 py-5 px-10 font-ExtraLight justify-center text-transparent bg-clip-text bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53] lg:text-6xl md:text-5xl text-5xl">
            Founders' story
          </h1>
          <p className="text-[#8A8A8A] text-[18px] py-5 px-10 text-justify">
            Throughout his career, he has demonstrated strong leadership skills,
            creating alignment and building consensus among teams with diverse
            interests and personalities. He is a natural problem solver, able to
            quickly identify gaps in processes, communication, or systems and
            take swift action to mitigate risks and test solutions.
          </p>
          <p className="text-[#8A8A8A] text-[18px] py-5 px-10 text-justify">
            His expertise lies in managing multiple projects from initiation to
            completion using agile adoptions and tailored processes to fit the
            team's operating model. He is known for his ability to deliver
            high-quality results on time and within budget while keeping a focus
            on meeting business goals.
          </p>
          <p className="text-[#8A8A8A] text-[18px] py-5 px-10 text-justify">
            His skill set has been honed over many years of working in various
            teams and industries, such as healthcare, finance, and e-commerce.
            He believes that his attention to detail and ability to adapt to
            different environments have been key to his success.
          </p>
          <p className="text-[#8A8A8A] text-[18px] py-5 px-10 text-justify">
            He is committed to staying up-to-date with the latest trends and
            technologies in the industry. He constantly seeks out opportunities
            to learn, grow, and develop new skills to bring value to his teams
            and clients.
          </p>
          <p className="text-[#8A8A8A] text-[18px] py-5 px-10 text-justify">
            Overall, He is a seasoned project manager with a proven track record
            of successfully delivering complex projects. His ability to lead
            diverse teams, his natural problem-solving skills, and his
            commitment to excellence make him an invaluable asset to any
            organization.
          </p>
        </div>
      </div>

      <div className="bg-[#383434] lg:pb-32 pb-24 bg-auto">
        <h1 className="p-[8%] text-center font-ExtraBold text-transparent bg-clip-text bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53] text-5xl justify-center">
          Meet the Team
        </h1>
        <Team />

        <div>
          <h1 className="text-center text-white text-3xl font-EncodeBold mt-10 justify-center">
            Want to join Touchstack?
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <button className="mt-[5%] items-center text-[#2EFFE1] hover:text-green-500 border border-[#2EFFE1] hover:border hover:border-green-500 font-EncodeMedium rounded-lg text-lg px-8 py-2 text-center mr-2 mb-16">
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoundersStory;
