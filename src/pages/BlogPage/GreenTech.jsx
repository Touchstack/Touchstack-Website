import Footer from "../../components/Homepage/Footer";
import NavBar from "../../components/Homepage/NavBar";
import GreenTechnology from "../../assets/images/GreenTechnology.jpg";
import GreenTechnologynew from "../../assets/images/GreenTechnologynew.jpg";

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
            <div className="">
              <p className="text-[#898585] font-EncodeRegular mb-8 lg:px-12 sm:px-2 px-0">
                Beyond the familiar landscape of solar panels and wind turbines,
                a realm of lesser-known but impactful green technologies is
                actively contributing to our planet’s well-being. Here’s a
                compilation of some noteworthy eco-friendly innovations that
                might not be on your radar:
              </p>
              <img src={GreenTechnologynew} alt="" />
            </div>

            <div className="lg:px-12 sm:px-2 px-0 inline-flex gap-2 items-center font-EncodeRegular text-[#8A8A8A] py-4 xl:text-xl lg:text-lg md:text-sm">
              <p>Platform as a Service (PaaS)</p>
            </div>
            <p className="text-[#898585] font-EncodeRegular mb-8 lg:px-12 sm:px-2 px-0">
              PaaS is a cloud-based computing model that allows development
              teams to build, test, deploy, and scale applications faster and
              more cost-effectively. The PaaS provider hosts everything servers,
              networks, storage, operating system software, databases,
              development tools at their data center. Typically, customers can
              pay a fixed fee to provide a specified amount of resources for a
              specified number of users, or they can choose
              &quot;pay-as-you-go&quot; pricing to pay only for the resources
              they use. Either option enables PaaS customers to build, test,
              deploy run, update and scale applications more quickly and
              inexpensively they could if they had to build out and manage their
              own on-premises platform.
            </p>
            <div className="lg:px-12 sm:px-2 px-0 inline-flex gap-2 items-center font-EncodeRegular text-[#8A8A8A] py-4 xl:text-xl lg:text-lg md:text-sm">
              <p>Amazon Web Services (AWS)</p>
            </div>
            <p className="text-[#898585] font-EncodeRegular mb-8 lg:px-12 sm:px-2 px-0">
              AWS is a leader in the cloud services market, offering a vast
              array of services and products. These include virtual servers
              (EC2), managed databases (RDS), storage solutions (S3), and
              artificial intelligence (AI) capabilities through Amazon
              SageMaker. AWS is known for its global data center presence and an
              extensive customer base, making it a popular choice for many
              businesses.
            </p>
            <div className="lg:px-12 sm:px-2 px-0 inline-flex gap-2 items-center font-EncodeRegular text-[#8A8A8A] py-4 xl:text-xl lg:text-lg md:text-sm">
              <p>Microsoft Azure</p>
            </div>
            <p className="text-[#898585] font-EncodeRegular mb-8 lg:px-12 sm:px-2 px-0">
              Microsoft Azure, Microsoft&apos;s cloud platform, is a close
              competitor to AWS. It provides a broad spectrum of services,
              including virtual machines, data analytics, and AI tools like
              Azure Machine Learning. Azure&apos;s integration with
              Microsoft&apos;s ecosystem, such as Windows Server and SQL Server,
              makes it a favored choice for enterprises heavily invested in
              Microsoft technologies
            </p>

            <div className="lg:px-12 sm:px-2 px-0 inline-flex gap-2 items-center font-EncodeRegular text-[#8A8A8A] py-4 xl:text-xl lg:text-lg md:text-sm">
              <p>Google Cloud Platform (GCP)</p>
            </div>
            <p className="text-[#898585] font-EncodeRegular mb-8 lg:px-12 sm:px-2 px-0">
              GCP is known for its data analytics and machine learning services,
              including BigQuery and TensorFlow. Google&apos;s expertise in data
              management and analytics draws organizations looking to harness
              the power of data-driven insights. Additionally, GCP offers
              services like Kubernetes Engine for container orchestration and
              Firebase for mobile app development Developing Serverless
              Applications Serverless computing is a paradigm that takes cloud
              computing to the next level. In a serverless architecture,
              developers write code to run in response to specific events or
              triggers without having to manage the underlying infrastructure.
              This approach allows for automatic scaling, reduced operational
              overhead, and precise billing based on usage. While it&apos;s
              called &quot;serverless,&quot; there are still servers running the
              code, but developers are abstracted from this layer.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GreenTech;
