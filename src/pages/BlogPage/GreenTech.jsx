import Footer from "../../components/Homepage/Footer";
import NavBar from "../../components/Homepage/NavBar";
import GreenTechnology from "../../assets/images/GreenTechnology.jpg";
import GreenTechnologynew from "../../assets/images/GreenTechnologynew.png";

function GreenTech() {
  return (
    <div>
      <NavBar />

      {/* Page Content */}
      <div className="bg-[#1A1919] flex justify-center items-center">
        <div className="px-8 py-6">
          <a
            href="/blog"
            className="text-[#2EFFE1] inline-flex font-EncodeRegular gap-1 mt-4"
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
              Everything You Need to Know About Green Technology in 2024
            </p>
            <p className=" mt-5 font-EncodeRegular text-[#898585] text-lg text-left mb-8">
              August 2nd, 2023
            </p>
          </div>

          <div className="flex justify-center items-center">
            <img
              src={GreenTechnology}
              alt="/"
              className="lg:h-[600px] rounded-3xl"
            />
          </div>

          <div className="py-8">
            <p className="text-[#898585] font-EncodeRegular text- mb-8 lg:px-12 sm:px-2 px-0">
              In 2024, green technology may appear as a novel development, yet
              the realm of sustainable innovation boasts a rich history that
              often goes unnoticed. Consider geothermal heating, a current
              favorite in the realm of energy-efficient structures. The
              utilization of heat energy from beneath the Earth’s surface has
              ancient roots, dating back to Paleolithic times. Early humans not
              only bathed in hot springs but also constructed homes from lava,
              tapping into the Earth’s natural warmth. Wind energy, another
              pillar of green technology, has deep historical roots as well. As
              early as 5000 B.C., our ancestors harnessed the power of the wind
              to propel boats along the River Nile. By 2000 B.C., wind power was
              actively employed for tasks such as pumping water and grinding
              grains.
            </p>

            <p className="text-[#898585] font-EncodeRegular mb-8 lg:px-12 sm:px-2 px-0">
              The use of solar power, often associated with modern eco-friendly
              initiatives, traces back to the 7th century B.C. Humans of that
              era were already harnessing the sun’s energy, using magnifying
              glasses to light fires. While battery-powered vehicles may seem
              like a contemporary trend, the concept has been around for much
              longer. Surprisingly, at the turn of the 19th century, 90% of New
              York City taxis were electric vehicles, showcasing a historical
              preference for cleaner, electric transportation.
            </p>
            <div className="lg:px-12 sm:px-2 px-0 inline-flex gap-2 items-center font-EncodeRegular text-[#8A8A8A] py-4 xl:text-xl lg:text-lg md:text-sm">
              <p>Green technology: a few examples</p>
            </div>
            <div className="lg:flex inlin-block">
              <p className="text-[#898585] font-EncodeRegular mb-8 lg:px-12 sm:px-2 px-0">
                Beyond the familiar landscape of solar panels and wind turbines,
                a realm of lesser-known but impactful green technologies is
                actively contributing to our planet’s well-being. Here’s a
                compilation of some noteworthy eco-friendly innovations that
                might not be on your radar:
              </p>

              <img
                src={GreenTechnologynew}
                alt=""
                className="lg:h-[360px] h-[260px]  "
              />
            </div>
            <div className="lg:px-12 sm:px-2 px-0 inline-flex gap-2 items-center font-EncodeRegular text-[#8A8A8A] py-4 xl:text-xl lg:text-lg md:text-sm">
              <ul className="list-disc">
                <li className="mt-3">
                  <span className="font-EncodeBold">
                    Wastewater treatment and water purification:
                  </span>
                  Transforming wastewater into drinkable or sufficiently clean
                  water for various purposes.
                </li>
                <li className="mt-3">
                  <span className="font-EncodeBold">
                    Waste management and recycling:
                  </span>
                  Minimizing the impact of landfills through effective waste
                  management and recycling initiatives.
                </li>
                <li className="mt-3">
                  <span className="font-EncodeBold">Batteries:</span>
                  Serving as crucial components for storing energy, playing a
                  pivotal role in the transition to renewable sources.
                </li>
                <li className="mt-3">
                  <span className="font-EncodeBold">Green materials:</span>
                  Incorporating local, renewable materials like bamboo, hemp,
                  and straw in construction and manufacturing.
                </li>
                <li className="mt-3">
                  <span className="font-EncodeBold">
                    Carbon tracking software:
                  </span>
                  Software solutions, such as carbon tracking tools, calculating
                  and monitoring a company’s carbon emissions to promote
                  sustainable practices.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GreenTech;
