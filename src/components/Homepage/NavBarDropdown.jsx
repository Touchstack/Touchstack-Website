import SalesImg from "../../assets/images/VectorCareerVec.svg";
import HRMImg from "../../assets/images/VectorBlogVec.svg";
export const NavBarDropdown = () => {
  return (
    <div
      id="dropdownNavbarProducts"
      className="z-10 absolute md:-ml-16 font-normal mt-3 bg-white divide-y divide-gray-100 rounded-[20px] shadow dark:bg-gray-700 dark:divide-gray-600]"
    >
      <ul
        className="p-8 text-lg font-EncodeLight tracking-wider text-gray-900 dark:text-gray-400"
        aria-labelledby="dropdownLargeButton"
      >
        <p className="py-3 text-gray-400 font-appLight">PRODUCTS</p>
        <li>
          <a
            href="/products/sims"
            //target="_blank"
            //rel="noreferrer"
            className="block px-2 py-3 hover:bg-green-100 dark:hover:bg-green-100"
          >
            <div className="inline-flex items-center bg-black p-2 mr-2 rounded-md">
              <img src={SalesImg} alt="salesImg" />
            </div>
            Sales & Inventory System
          </a>
        </li>
        <li>
          <a
            href="/products/hrm"
            //target="_blank"
            //rel="noreferrer"
            className="block px-2 py-3 hover:bg-green-100 dark:hover:bg-green-100"
          >
            <div className="inline-flex items-center bg-black p-2 mr-2 rounded-md">
              <img src={HRMImg} alt="hrmImg" />
            </div>
            Human Resource Mgt System
          </a>
        </li>
      </ul>
    </div>
  );
};
