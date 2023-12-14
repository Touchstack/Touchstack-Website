import AppLogo from "../../assets/images/touchstack logo 1.svg";

export default function Footer() {
  return (
    <div className="bg-black font-EncodeRegular">
      <footer className="">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-around">
            <div className="mb-6 md:mb-0">
              <a href="/">
                <img className="" src={AppLogo} alt="Touchstack logo" />
              </a>
              <div className="">
                <p className="text-white">
                  Building scalable softwares <br /> for industry leading brands
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
              <div className="lg:mr-16 md:mr-6">
                <h2 className="mb-6 text-[14px] font-appLight text-[#898585]">
                  Company
                </h2>
                <ul className="text-white font-EncodeLight font-normal text-lg">
                  <li className="mb-4">
                    <a
                      className="hover:underline hover:text-[#2EFFE1]"
                      href="/aboutus"
                    >
                      About
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="hover:underline hover:text-[#2EFFE1]"
                      href="/careers"
                    >
                      Careers
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="hover:underline hover:text-[#2EFFE1]"
                      href="/findus"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h2 className="mb-6 text-[14px] font-appLight text-[#898585]">
                  Solution
                </h2>
                <ul className="text-white font-EncodeLight font-normal text-lg">
                  <li className="mb-4">
                    <a
                      className="hover:underline hover:text-[#2EFFE1]"
                      href="/solutions"
                    >
                      Early stage
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="hover:underline hover:text-[#2EFFE1]"
                      href="/solutions"
                    >
                      Scale or growth
                    </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h2 className="mb-6 text-[14px] font-appLight text-[#898585]">
                  More
                </h2>
                <ul className="text-white font-EncodeLight font-normal text-lg">
                  <li className="mb-4">
                    <a
                      className="hover:underline hover:text-[#2EFFE1]"
                      href="/blog"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="hover:underline hover:text-[#2EFFE1]"
                      href="https://drive.google.com/file/d/1jUDmtQobp8EKPVFsKSqewrMVUKgPIpDQ/view"
                    >
                      Privacy Policy & Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-white sm:text-center">
              © Touch Stack Technologies,
              <a href="" className="hover:underline">
                Inside Buro Ghana, Osu Close
              </a>
              , Plot n.7 Accra.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="https://www.linkedin.com/company/touch-stack-technologies"
                rel="noreferrer"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="10" fill="white" />
                  <path
                    d="M20 11.5C21.5913 11.5 23.1174 12.1321 24.2426 13.2574C25.3679 14.3826 26 15.9087 26 17.5V24.5H22V17.5C22 16.9696 21.7893 16.4609 21.4142 16.0858C21.0391 15.7107 20.5304 15.5 20 15.5C19.4696 15.5 18.9609 15.7107 18.5858 16.0858C18.2107 16.4609 18 16.9696 18 17.5V24.5H14V17.5C14 15.9087 14.6321 14.3826 15.7574 13.2574C16.8826 12.1321 18.4087 11.5 20 11.5V11.5Z"
                    stroke="#292A2C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 12.5H6V24.5H10V12.5Z"
                    stroke="#292A2C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 9.5C9.10457 9.5 10 8.60457 10 7.5C10 6.39543 9.10457 5.5 8 5.5C6.89543 5.5 6 6.39543 6 7.5C6 8.60457 6.89543 9.5 8 9.5Z"
                    stroke="#292A2C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/Touchstack"
                rel="noreferrer"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="10" fill="white" />
                  <g clipPath="url(#clip0_854_807)">
                    <path
                      d="M13 22.5001C8 24.0001 8 20.0001 6 19.5001M20 25.5001V21.6301C20.0375 21.1532 19.9731 20.6739 19.811 20.2239C19.6489 19.7738 19.3929 19.3635 19.06 19.0201C22.2 18.6701 25.5 17.4801 25.5 12.0201C25.4997 10.6239 24.9627 9.28126 24 8.27006C24.4559 7.04857 24.4236 5.69841 23.91 4.50006C23.91 4.50006 22.73 4.15006 20 5.98006C17.708 5.35888 15.292 5.35888 13 5.98006C10.27 4.15006 9.09 4.50006 9.09 4.50006C8.57638 5.69841 8.54414 7.04857 9 8.27006C8.03013 9.28876 7.49252 10.6435 7.5 12.0501C7.5 17.4701 10.8 18.6601 13.94 19.0501C13.611 19.39 13.3573 19.7955 13.1953 20.24C13.0334 20.6845 12.9668 21.1581 13 21.6301V25.5001"
                      stroke="#292A2C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_854_807">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(4 3.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href="https://twitter.com/touch_stack"
                rel="noreferrer"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="10" fill="white" />
                  <path
                    d="M27 6.50005C26.0424 7.17552 24.9821 7.69216 23.86 8.03005C23.2577 7.33756 22.4573 6.84674 21.567 6.62397C20.6767 6.40121 19.7395 6.45724 18.8821 6.7845C18.0247 7.11176 17.2884 7.69445 16.773 8.45376C16.2575 9.21308 15.9877 10.1124 16 11.03V12.03C14.2426 12.0756 12.5013 11.6859 10.931 10.8955C9.36074 10.1051 8.01032 8.93868 7 7.50005C7 7.50005 3 16.5 12 20.5C9.94053 21.898 7.48716 22.599 5 22.5C14 27.5 25 22.5 25 11C24.9991 10.7215 24.9723 10.4436 24.92 10.17C25.9406 9.16354 26.6608 7.89276 27 6.50005V6.50005Z"
                    stroke="#292A2C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/touchstack.tech/?hl=en"
                rel="noreferrer"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="10" fill="white" />
                  <path
                    d="M21 5.5H11C8.23858 5.5 6 7.73858 6 10.5V20.5C6 23.2614 8.23858 25.5 11 25.5H21C23.7614 25.5 26 23.2614 26 20.5V10.5C26 7.73858 23.7614 5.5 21 5.5Z"
                    stroke="#292A2C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 14.8701C20.1234 15.7023 19.9812 16.5523 19.5937 17.2991C19.2062 18.0459 18.5931 18.6515 17.8416 19.0297C17.0901 19.408 16.2384 19.5397 15.4077 19.406C14.5771 19.2723 13.8097 18.8801 13.2148 18.2852C12.6199 17.6903 12.2277 16.9229 12.094 16.0923C11.9604 15.2616 12.092 14.41 12.4703 13.6584C12.8485 12.9069 13.4541 12.2938 14.2009 11.9063C14.9477 11.5188 15.7977 11.3766 16.63 11.5001C17.4789 11.6259 18.2648 12.0215 18.8716 12.6284C19.4785 13.2352 19.8741 14.0211 20 14.8701Z"
                    stroke="#292A2C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.5 10H21.51"
                    stroke="#292A2C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
