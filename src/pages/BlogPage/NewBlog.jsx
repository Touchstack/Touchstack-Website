import CybersecurityImage from "../../assets/images/cybersecurity.jpg";
function NewBlog() {
  return (
    <div>
      <div className="relative flex flex-col mt-6 text-gray-700 w-96">
        <a href="/article/cybersecurity-blog">
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img src={CybersecurityImage} alt="card-image" />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              SEC Charges SolarWinds, CISO with Fraud over Security Risk
              Disclosures
            </h5>
          </div>
        </a>
      </div>
    </div>
  );
}

export default NewBlog;
