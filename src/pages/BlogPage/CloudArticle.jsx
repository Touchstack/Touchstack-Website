import NavBar from "../../components/Homepage/NavBar";
import Footer from "../../components/Homepage/Footer";
import Bee from "../../assets/images/cloud.jpg";

const CloudArticle = () => {
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
            <p className="">Cloud Computing & Serverless Architecture</p>
          </div>
          <div className="inline-flex gap-2 items-center font-EncodeRegular text-[#8A8A8A] py-4 xl:text-xl lg:text-lg md:text-sm">
            <p>An Introduction to cloud platforms (AWS, Azure, Google Cloud)</p>
          </div>

          <div className="flex justify-center items-center">
            <img src={Bee} alt="/" className="lg:h-[600px] rounded-3xl" />
          </div>

          <div className="py-8">
            <p className="text-[#898585] font-EncodeRegular text- mb-8 lg:px-12 sm:px-2 px-0">
              In today’s fast-paced digital landscape, the role of cloud
              computing has never been more critical. It’s the technological
              backbone that powers everything from streaming services to
              e-commerce giants, and it enables businesses and individuals to
              leverage immense computational power and storage capabilities
              without the need for a physical infrastructure. But what exactly
              is Cloud Computing and why is it so integral to our modern world?
              In this blog post, we will explore cloud computing in simple
              terms, learn about the major cloud platforms (AWS, Azure, and
              Google Cloud), and delve into the exciting realm of serverless
              architecture.
            </p>
            <div className="lg:px-12 sm:px-2 px-0 inline-flex gap-2 items-center font-EncodeRegular text-[#8A8A8A] py-4 xl:text-xl lg:text-lg md:text-sm">
              <p>What is Cloud Computing?</p>
            </div>
            <p className="text-[#898585] font-EncodeRegular mb-8 lg:px-12 sm:px-2 px-0">
              Cloud Computing is the delivery of computing services – including
              servers, storage, databases, networking, software, analytics, and
              intelligence – over the internet(“cloud”) to offer faster
              innovation, flexible resources, and economies of scale. Instead of
              running your programs and storing your data on your own computer
              or server, you do it on the internet. This is where the word
              “cloud” comes from – it is like using a computer that’s not in
              your house but floating up there in the cloud. These services can
              be classified into three primary service models:
            </p>
            <div className="lg:px-12 sm:px-2 px-0 inline-flex gap-2 items-center font-EncodeRegular text-[#8A8A8A] py-4 xl:text-xl lg:text-lg md:text-sm">
              <p>Infrastructure as a Service (IaaS)</p>
            </div>
            <p className="text-[#898585] font-EncodeRegular mb-8 lg:px-12 sm:px-2 px-0">
              IaaS is a form of cloud computing that provides virtualized
              computing resources over the internet. In the IaaS model, the
              cloud provider manages IT infrastructures such as storage, server
              and networking resources, and delivers them to subscriber
              organizations via virtual machines accessible through the
              internet. IaaS can provide many benefits such as potentially
              making workloads faster, easier, more flexible and more cost
              efficient. AWS EC2, Azure Virtual Machines, and Google Compute
              Engine are examples. In an IaaS model, a cloud provider hosts the
              infrastructure components that are traditionally present in an
              on-premises data center. This includes servers, storage and
              networking hardware, as well as the virtualization or hypervisor
              layer.
            </p>

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
              specified number of users, or they can choose 'pay-as-you-go'
              pricing to pay only for the resources they use. Either option
              enables PaaS customers to build, test, deploy run, update and
              scale applications more quickly and inexpensively they could if
              they had to build out and manage their own on-premises platform.
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
              Microsoft Azure, Microsoft's cloud platform, is a close competitor
              to AWS. It provides a broad spectrum of services, including
              virtual machines, data analytics, and AI tools like Azure Machine
              Learning. Azure's integration with Microsoft's ecosystem, such as
              Windows Server and SQL Server, makes it a favored choice for
              enterprises heavily invested in Microsoft technologies
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CloudArticle;
