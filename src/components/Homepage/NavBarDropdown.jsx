export const NavBarDropdown = () => {
  return (
    <div
      id="dropdownNavbarProducts"
      className="z-10 absolute font-normal mt-3 bg-white divide-y divide-gray-100 rounded-[20px] shadow dark:bg-gray-700 dark:divide-gray-600]"
    >
      <ul
        className="p-8 text-lg font-EncodeLight tracking-wider text-gray-900 dark:text-gray-400"
        aria-labelledby="dropdownLargeButton"
      >
        <p className="py-3 text-gray-400 font-appLight">PRODUCTS</p>
        <li>
          <a
            // href="https://sims.touchstacktechnologiesgh.com"
            // target="_blank"
            className="block px-2 py-3 hover:bg-green-100 dark:hover:bg-green-100"
          >
            <div className="inline-flex items-center bg-black p-2 mr-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  opacity="0.2"
                  d="M14.8537 9.5625L9.5625 14.8538C9.46874 14.9474 9.34161 15.0001 9.20906 15.0001C9.07651 15.0001 8.94938 14.9474 8.85562 14.8538L2.64625 8.64625C2.55266 8.55255 2.50006 8.42556 2.5 8.29313V2.5H8.29312C8.42556 2.50006 8.55255 2.55266 8.64625 2.64625L14.8537 8.85375C14.9004 8.90021 14.9375 8.95543 14.9627 9.01625C14.988 9.07706 15.001 9.14227 15.001 9.20813C15.001 9.27398 14.988 9.33919 14.9627 9.4C14.9375 9.46082 14.9004 9.51604 14.8537 9.5625Z"
                  fill="url(#paint0_linear_1419_686)"
                />
                <path
                  d="M15.2069 8.50001L9.00001 2.29313C8.90748 2.19987 8.79735 2.12593 8.67599 2.0756C8.55464 2.02528 8.4245 1.99959 8.29313 2.00001H2.50001C2.3674 2.00001 2.24022 2.05268 2.14645 2.14645C2.05268 2.24022 2.00001 2.3674 2.00001 2.50001V8.29313C1.99959 8.4245 2.02528 8.55464 2.0756 8.67599C2.12593 8.79735 2.19987 8.90748 2.29313 9.00001L8.50001 15.2069C8.59287 15.2998 8.70312 15.3734 8.82446 15.4237C8.9458 15.474 9.07585 15.4999 9.20719 15.4999C9.33853 15.4999 9.46859 15.474 9.58993 15.4237C9.71127 15.3734 9.82152 15.2998 9.91438 15.2069L15.2069 9.91438C15.2998 9.82152 15.3734 9.71127 15.4237 9.58993C15.474 9.46859 15.4999 9.33853 15.4999 9.20719C15.4999 9.07585 15.474 8.9458 15.4237 8.82446C15.3734 8.70312 15.2998 8.59287 15.2069 8.50001ZM9.20688 14.5L3.00001 8.29313V3.00001H8.29313L14.5 9.20688L9.20688 14.5ZM6.00001 5.25001C6.00001 5.39834 5.95602 5.54335 5.87361 5.66668C5.7912 5.79002 5.67406 5.88615 5.53702 5.94291C5.39997 5.99968 5.24917 6.01453 5.10369 5.98559C4.9582 5.95666 4.82456 5.88522 4.71967 5.78034C4.61479 5.67545 4.54335 5.54181 4.51442 5.39632C4.48548 5.25084 4.50033 5.10004 4.5571 4.96299C4.61386 4.82595 4.70999 4.70881 4.83333 4.6264C4.95666 4.54399 5.10167 4.50001 5.25001 4.50001C5.44892 4.50001 5.63968 4.57902 5.78034 4.71967C5.92099 4.86033 6.00001 5.05109 6.00001 5.25001Z"
                  fill="url(#paint1_linear_1419_686)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1419_686"
                    x1="7.88553"
                    y1="2.5"
                    x2="17.1251"
                    y2="11.8812"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2EFFE1" />
                    <stop offset="1" stopColor="#7DEE53" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1419_686"
                    x1="7.81584"
                    y1="1.99999"
                    x2="17.7945"
                    y2="12.1307"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2EFFE1" />
                    <stop offset="1" stopColor="#7DEE53" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            Sales & Inventory System
          </a>
        </li>
        <li>
          <a
            // href="https://touchhrm.touchstacktechnologiesgh.com"
            // target="_blank"
            className="block px-2 py-3 hover:bg-green-100 dark:hover:bg-green-100"
          >
            <div className="inline-flex items-center bg-black p-2 mr-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  opacity="0.2"
                  d="M13.5 3.5V7.5H10V3.5H13.5ZM2.5 13C2.5 13.1326 2.55268 13.2598 2.64645 13.3536C2.74021 13.4473 2.86739 13.5 3 13.5H5.5C5.63261 13.5 5.75979 13.4473 5.85355 13.3536C5.94732 13.2598 6 13.1326 6 13V7.5H2.5V13Z"
                  fill="url(#paint0_linear_1419_693)"
                />
                <path
                  d="M13.5 3H2.5C2.36739 3 2.24021 3.05268 2.14645 3.14645C2.05268 3.24021 2 3.36739 2 3.5V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H5.5C5.76522 14 6.01957 13.8946 6.20711 13.7071C6.39464 13.5196 6.5 13.2652 6.5 13V10H9.5V11C9.5 11.2652 9.60536 11.5196 9.79289 11.7071C9.98043 11.8946 10.2348 12 10.5 12H13C13.2652 12 13.5196 11.8946 13.7071 11.7071C13.8946 11.5196 14 11.2652 14 11V3.5C14 3.36739 13.9473 3.24021 13.8536 3.14645C13.7598 3.05268 13.6326 3 13.5 3ZM13 7H10.5V4H13V7ZM5.5 4V7H3V4H5.5ZM5.5 13H3V8H5.5V13ZM6.5 9V4H9.5V9H6.5ZM10.5 11V8H13V11H10.5Z"
                  fill="url(#paint1_linear_1419_693)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1419_693"
                    x1="7.23888"
                    y1="3.5"
                    x2="14.5865"
                    y2="11.7056"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2EFFE1" />
                    <stop offset="1" stopColor="#7DEE53" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1419_693"
                    x1="7.16969"
                    y1="3"
                    x2="15.2592"
                    y2="11.9594"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2EFFE1" />
                    <stop offset="1" stopColor="#7DEE53" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            Human Resource Mgt System
          </a>
        </li>
      </ul>
    </div>
  );
};
