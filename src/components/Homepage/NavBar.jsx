import React from "react";
import TouchstackLogo from "../../assets/images/logo-black.png";
import Vector from "../../assets/images/Vector.png";

const NavBar = () => {
  return (
    <nav className="bg-[#0D0D0D]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img
            src={TouchstackLogo}
            className="mr-3"
            alt="logo-black.png"
            style={{ height: "50px", width: "100px" }}
          />
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fillRule="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col justify-end font-EncodeLight text-md p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#0D0D0D] md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <button
                id="dropdownNavbar"
                data-dropdown-toggle="dropdownNavbarProducts"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Products
                <img
                  src={Vector}
                  alt="Vector.png"
                  style={{ height: "auto" }}
                  className="m-1"
                />
              </button>
              {/* Dropdown menu */}
              <div
                id="dropdownNavbarProducts"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-[20px] shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="p-8 text-lg font-EncodeLight tracking-wider text-gray-900 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <p className="py-3 text-gray-400 font-appLight">PRODUCTS</p>
                  <li>
                    <a
                      href="https://sims.touchstacktechnologiesgh.com"
                      target="_blank"
                      className="block px-2 py-3 hover:bg-green-100 dark:hover:bg-green-100"
                    >
                      <div className="inline-flex items-center bg-black p-2 mr-2 rounded-md">
                        {/* <img src="images/VectorCareerVec.svg" alt="" /> */}
                      </div>
                      Sales & Inventory System
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://touchhrm.touchstacktechnologiesgh.com"
                      target="_blank"
                      className="block px-2 py-3 hover:bg-green-100 dark:hover:bg-green-100"
                    >
                      <div className="inline-flex items-center bg-black p-2 mr-2 rounded-md">
                        {/* <img src="images/VectorBlogVec.svg" alt="" /> */}
                      </div>
                      Human Resource Mgt System
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="/solutions"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Solutions
              </a>
            </li>

            <li>
              <button
                id="dropdownNavbar"
                data-dropdown-toggle="dropdownNavbarCompany"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 lg:mb-0 md:mb-0 sm:mb-2 mb-2 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Company
                <img
                  src={Vector}
                  alt="Vector.png"
                  style={{ height: "auto" }}
                  className="m-1"
                />
              </button>
              {/* Dropdown menu */}
              <div
                id="dropdownNavbarCompany"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-[20px] w-80 shadow dark:bg-gray-700 dark:divide-gray-600"
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
                        {/* <img src="images/VectorAbtUs.svg" alt="" /> */}
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
                        {/* <img src="images/VectorCareerVec.svg" alt="" /> */}

                        {/* <img
                          src={CareerVec.svg}
                          alt="VectorCareerVec.svg"
                          style={{ height: "auto" }}
                          className=""
                        /> */}
                      </div>
                      Careers
                    </a>
                  </li>

                  <li>
                    <a
                      href="/findus"
                      className="block px-2 py-3 hover:bg-green-100 dark:hover:bg-green-100"
                    >
                      <div className="inline-flex items-center bg-black p-2 mr-2 rounded-md">
                        {/* <img src="images/VectorFindUsVec.svg" alt="" /> */}
                        {/* <img
                          src={BlogVec}
                          alt="VectorBlogVec.svg"
                          style={{ height: "auto" }}
                          className=""
                        /> */}
                      </div>
                      Find Us
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="/contact.html"
                className="text-[#2EFFE1] hover:text-green-500 border border-[#2EFFE1] hover:border hover:border-green-500 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
