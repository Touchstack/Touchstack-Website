import VectorAboutUs from "../../assets/images/VectorAbtUs.svg";
import SalesImg from "../../assets/images/VectorCareerVec.svg";
import FindImg from "../../assets/images/VectorCareerVec.svg";
import BlogImg from "../../assets/images/VectorBlogVec.svg";

export const CompanyDropdown = () => {
  return (
    <div
      id="dropdownNavbarCompany"
      className="z-10 md:-ml-28 absolute font-normal mt-3 bg-white divide-y divide-gray-100 rounded-[20px] md:w-64 w-80 shadow dark:bg-gray-700 dark:divide-gray-600"
    >
      <ul
        className="p-8 font-EncodeLight text-lg tracking-wider text-gray-900 dark:text-gray-400"
        aria-labelledby="dropdownLargeButton"
      >
        <p className="py-3 text-gray-400 font-EncodeLight">COMPANY</p>
        <li>
          <a
            href="/aboutus"
            className="block px-2 py-3 hover:bg-green-100 dark:hover:bg-green-100"
          >
            <div className="inline-flex items-center bg-black p-2 mr-2 rounded-md">
              <img src={VectorAboutUs} alt="aboutImg" />
            </div>
            About Us
          </a>
        </li>
        <li>
          <a
            href="/careers"
            className="block px-2 py-3 hover:bg-green-100 dark:hover:bg-green-100"
          >
            <div className="inline-flex items-center bg-black p-2 mr-2 rounded-md">
              <img src={SalesImg} alt="salesImg" />
            </div>
            Careers
          </a>
        </li>

        <li>
          <a
            href="/blog"
            className="block px-2 py-3 hover:bg-green-100 dark:hover:bg-green-100"
          >
            <div className="inline-flex items-center bg-black p-2 mr-2 rounded-md">
              <img src={BlogImg} alt="blogImg" />
            </div>
            Blog
          </a>
        </li>
        <li>
          <a
            href="/careers"
            className="block px-2 py-3 hover:bg-green-100 dark:hover:bg-green-100"
          >
            <div className="inline-flex items-center bg-black p-2 mr-2 rounded-md">
              <img src={FindImg} alt="findImg" />
            </div>
            Find Us
          </a>
        </li>
      </ul>
    </div>
  );
};
