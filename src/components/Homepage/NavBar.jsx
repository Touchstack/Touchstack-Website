import React, { useState } from "react";
import { NavBarDropdown } from "./NavBarDropdown";
import { CompanyDropdown } from "./CompanyDropdown";
import TouchstackLogo from "../../assets/images/logo-black.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [Dropdown, setDropdown] = useState(false);
  const navBarToggler = () => {
    if (hidden && ariaExpanded === "false") {
      cycleOpen();
      setAriaExpanded("true");
      return setShowMenu(true);
    } else {
      setAriaExpanded("false");
      cycleOpen();
      return setShowMenu(false);
    }
  };

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleDropdown = () => {
    setDropdown(!Dropdown);
  };

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
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:border"
            aria-controls="navbar-cta"
            onTouchStartCapture={() => showMenu && setShowMenu(false)}
            onClick={() => navBarToggler("/submit")}
            onMouseEnter={() => hidden && setShowMenu(false)}
            onMouseLeave={() => setShowMenu(true)}
          >
            <span className="sr-only">Open main menu</span>
            {/* <svg
              className="w-5 h-5 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg> */}
          </button>
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
          <ul className="md:flex hidden flex-col justify-end font-EncodeLight text-md p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#0D0D0D] md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <button
                id="dropdownNavbar"
                data-dropdown-toggle="dropdownNavbarProducts"
                onClick={handleShowDropdown}
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Products
                <svg
                  className="w-5 h-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showDropdown && <NavBarDropdown />}

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
                onClick={handleDropdown}
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 lg:mb-0 md:mb-0 sm:mb-2 mb-2 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Company
                <svg
                  className="mr-1 ml-1 h-5 w-5 mt-1 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {Dropdown && <CompanyDropdown />}
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
                      <div className="inline-flex items-center bg-black p-2 mr-2 rounded-md"></div>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers"
                      className="block px-2 py-3 hover:bg-green-100 dark:hover:bg-green-100"
                    >
                      <div className="inline-flex items-center bg-black p-2 mr-2 rounded-md"></div>
                      Careers
                    </a>
                  </li>

                  <li>
                    <a
                      href="/findus"
                      className="block px-2 py-3 hover:bg-green-100 dark:hover:bg-green-100"
                    >
                      <div className="inline-flex items-center bg-black p-2 mr-2 rounded-md"></div>
                      Find Us
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="/findus"
                className="text-[#2EFFE1] hover:text-green-500 border border-[#2EFFE1] hover:border hover:border-green-500 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Mobile NavBar */}
        <ul
          className={`md:hidden w-full h-full bottom-0 py-16 pl-4 font-EncodeLight text-md bg-[#0D0D0D]
            duration-500 ${open ? "left-0" : "left-[-100%]"}`}
        >
          <li>
            <button
              id="dropdownNavbar"
              data-dropdown-toggle="dropdownNavbarProducts"
              onClick={handleShowDropdown}
              className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
            >
              Products
              <svg
                className="mr-1 ml-1 h-5 w-5 mt-1 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {showDropdown && <NavBarDropdown />}
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
              onClick={handleDropdown}
              className="flex items-center justify-between w-full py-2 pl-3 pr-4 lg:mb-0 md:mb-0 sm:mb-2 mb-2 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
            >
              Company
              <svg
                className="mr-1 ml-1 h-5 w-5 mt-1 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {Dropdown && <CompanyDropdown />}

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
              </ul>
            </div>
          </li>
          <div className="py-5">
            <li>
              <a
                href="/findus"
                className="text-[#2EFFE1] hover:text-green-500 border border-[#2EFFE1] hover:border hover:border-green-500 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2"
              >
                Contact
              </a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
