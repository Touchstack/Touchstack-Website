
const GrowthServices = () => {
  return (
    <div className='flex items-center justify-center'>
       <div className="lg:w-8/12 md:w-10/12 sm:w-10/12 w-10/12 py-12">
              <p className="uppercase text-[#8A8A8A] text-md font-EncodeLight text-left">
                Our Services
              </p>
              <p className="text-white font-EncodeRegular tracking-wider lg:text-5xl md:text-4xl sm:text-3xl text-3xl py-5 leading-5">
                Fast-track your business expansion with our custom scaling
                solutions
              </p>
              {/*-- SERVICES --*/}
              {/*-- SERVICE 1  --*/}
              <div className="border w-full py-20 my-10 rounded-xl grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 p-10">
                <div className="">
                  <p className="text-white font-EncodeSemiBold text-2xl py-4">
                    Augmented Teams
                  </p>
                  <p className="text-[#8A8A8A] tracking-widest text-md font-EncodeLight">
                    Access additional skills, expertise, and resources that
                    might not be immediately available within your in-house
                    team.
                  </p>
                </div>
                <div className="flex flex-col justify-center md:items-center sm:items-start items-start sm:pl-10">
                  <ul className="lg:w-11/12 font-EncodeLight list-disc text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#2EFFE1] to-[#7DEE53]">
                    <li>• Frontend Engineering</li>
                    <li>• Backend Engineering</li>
                    <li>• DevOps</li>
                    <li>• Product Management</li>
                  </ul>
                </div>
              </div>
              {/*-- SERVICE 1  --*/}
              {/*-- SERVICE 2  --*/}
              <div className="border w-full py-20 my-10 rounded-xl grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 p-10">
                <div className="">
                  <p className="text-white font-EncodeSemiBold text-2xl py-4">
                    Technology Consulting
                  </p>
                  <p className="text-[#8A8A8A] tracking-widest text-md font-EncodeLight">
                    Explore new customer segments, identify new income channels,
                    and seize opportunities presented by evolving market trends.
                  </p>
                </div>
                <div className="flex flex-col justify-center md:items-center sm:items-start items-start sm:pl-10">
                  <ul className="lg:w-11/12 font-EncodeLight list-disc text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#2EFFE1] to-[#7DEE53]">
                    <li>• Comprehensive Market Research Research</li>
                    <li>• Research and Segmentation</li>
                    <li>• Product Roadmap with Key Features</li>
                    <li>• MVP Launch & Custom Development</li>
                  </ul>
                </div>
              </div>
              {/*-- SERVICE 2  --*/}
              {/*-- SERVICE 3  --*/}
              <div className="border w-full py-20 my-10 rounded-xl grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 p-10">
                <div className="">
                  <p className="text-white font-EncodeSemiBold text-2xl py-4">
                    Technology and Product Consultation
                  </p>
                  <p className="text-[#8A8A8A] tracking-widest text-md font-EncodeLight">
                    Avail assistance in defining a tech roadmap, assessing
                    vendors, upgrading IT infrastructure, or refining product
                    strategy.
                  </p>
                </div>
                <div className="flex flex-col justify-center md:items-center sm:items-start items-start sm:pl-10">
                  <ul className="lg:w-11/12 font-EncodeLight list-disc text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#2EFFE1] to-[#7DEE53]">
                    <li>• Product Development</li>
                    <li>• Lifecycle Optimization</li>
                    <li>• Tech Stack and Infrastructure Assessment</li>
                    <li>• AI Consultation</li>
                    <li>• Data Science & Analysis</li>
                  </ul>
                </div>
              </div>
              {/*-- SERVICE  3--*/}
            </div>
    </div>
  )
}

export default GrowthServices
