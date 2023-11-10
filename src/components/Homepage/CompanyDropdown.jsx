export const CompanyDropdown = () => {
  return (
    <div
      id="dropdownNavbarCompany"
      className="z-10 absolute font-normal mt-3 bg-white divide-y divide-gray-100 rounded-[20px] w-80 shadow dark:bg-gray-700 dark:divide-gray-600"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  opacity="0.2"
                  d="M14 7.01074C14 8.19743 13.6481 9.35747 12.9888 10.3442C12.3295 11.3309 11.3925 12.0999 10.2961 12.554C9.19975 13.0081 7.99335 13.127 6.82946 12.8955C5.66558 12.6639 4.59648 12.0925 3.75736 11.2534C2.91825 10.4143 2.3468 9.34517 2.11529 8.18128C1.88378 7.0174 2.0026 5.811 2.45673 4.71464C2.91085 3.61829 3.67989 2.68121 4.66658 2.02192C5.65328 1.36264 6.81331 1.01074 8 1.01074C9.5913 1.01074 11.1174 1.64288 12.2426 2.7681C13.3679 3.89332 14 5.41944 14 7.01074Z"
                  fill="url(#paint0_linear_1419_759)"
                />
                <path
                  d="M9 10.0106C9 10.1432 8.94732 10.2704 8.85356 10.3642C8.75979 10.4579 8.63261 10.5106 8.5 10.5106C8.23479 10.5106 7.98043 10.4053 7.7929 10.2177C7.60536 10.0302 7.5 9.77584 7.5 9.51062V7.01062C7.36739 7.01062 7.24022 6.95794 7.14645 6.86417C7.05268 6.7704 7 6.64323 7 6.51062C7 6.37801 7.05268 6.25083 7.14645 6.15707C7.24022 6.0633 7.36739 6.01062 7.5 6.01062C7.76522 6.01062 8.01957 6.11598 8.20711 6.30351C8.39465 6.49105 8.5 6.7454 8.5 7.01062V9.51062C8.63261 9.51062 8.75979 9.5633 8.85356 9.65707C8.94732 9.75083 9 9.87801 9 10.0106ZM14.5 7.01062C14.5 8.2962 14.1188 9.55291 13.4046 10.6218C12.6903 11.6907 11.6752 12.5239 10.4874 13.0158C9.29972 13.5078 7.99279 13.6365 6.73192 13.3857C5.47104 13.1349 4.31285 12.5159 3.40381 11.6068C2.49477 10.6978 1.8757 9.53958 1.6249 8.27871C1.37409 7.01783 1.50282 5.7109 1.99479 4.52318C2.48676 3.33546 3.31988 2.3203 4.3888 1.60607C5.45772 0.891838 6.71442 0.51062 8 0.51062C9.72335 0.51244 11.3756 1.19784 12.5942 2.41644C13.8128 3.63503 14.4982 5.28727 14.5 7.01062ZM13.5 7.01062C13.5 5.92282 13.1774 4.85945 12.5731 3.95498C11.9687 3.05051 11.1098 2.34556 10.1048 1.92928C9.09977 1.513 7.9939 1.40408 6.92701 1.6163C5.86011 1.82852 4.8801 2.35234 4.11092 3.12153C3.34173 3.89072 2.8179 4.87073 2.60568 5.93762C2.39347 7.00452 2.50238 8.11039 2.91867 9.11538C3.33495 10.1204 4.0399 10.9794 4.94437 11.5837C5.84884 12.1881 6.91221 12.5106 8 12.5106C9.45819 12.509 10.8562 11.929 11.8873 10.8979C12.9184 9.86679 13.4983 8.4688 13.5 7.01062ZM7.75 5.01062C7.89834 5.01062 8.04334 4.96663 8.16668 4.88422C8.29002 4.80181 8.38615 4.68468 8.44291 4.54763C8.49968 4.41059 8.51453 4.25979 8.48559 4.1143C8.45665 3.96882 8.38522 3.83518 8.28033 3.73029C8.17544 3.6254 8.04181 3.55397 7.89632 3.52503C7.75083 3.49609 7.60003 3.51094 7.46299 3.56771C7.32595 3.62448 7.20881 3.72061 7.1264 3.84394C7.04399 3.96728 7 4.11228 7 4.26062C7 4.45953 7.07902 4.6503 7.21967 4.79095C7.36032 4.9316 7.55109 5.01062 7.75 5.01062Z"
                  fill="url(#paint1_linear_1419_759)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1419_759"
                    x1="7.16969"
                    y1="1.01074"
                    x2="16.0397"
                    y2="10.0159"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2EFFE1" />
                    <stop offset="1" stopColor="#7DEE53" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1419_759"
                    x1="7.1005"
                    y1="0.510615"
                    x2="16.7096"
                    y2="10.2662"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2EFFE1" />
                    <stop offset="1" stopColor="#7DEE53" />
                  </linearGradient>
                </defs>
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  opacity="0.2"
                  d="M14 6.40503V11.5107C14 11.6433 13.9473 11.7704 13.8536 11.8642C13.7598 11.958 13.6326 12.0107 13.5 12.0107H2.5C2.36739 12.0107 2.24021 11.958 2.14645 11.8642C2.05268 11.7704 2 11.6433 2 11.5107V6.40503C3.82345 7.45989 5.89341 8.01382 8 8.01065C10.1066 8.014 12.1766 7.46006 14 6.40503Z"
                  fill="url(#paint0_linear_1419_766)"
                />
                <path
                  d="M6.5 6.01062C6.5 5.87801 6.55268 5.75083 6.64645 5.65707C6.74021 5.5633 6.86739 5.51062 7 5.51062H9C9.13261 5.51062 9.25979 5.5633 9.35355 5.65707C9.44732 5.75083 9.5 5.87801 9.5 6.01062C9.5 6.14323 9.44732 6.2704 9.35355 6.36417C9.25979 6.45794 9.13261 6.51062 9 6.51062H7C6.86739 6.51062 6.74021 6.45794 6.64645 6.36417C6.55268 6.2704 6.5 6.14323 6.5 6.01062ZM14.5 3.51062V11.5106C14.5 11.7758 14.3946 12.0302 14.2071 12.2177C14.0196 12.4053 13.7652 12.5106 13.5 12.5106H2.5C2.23478 12.5106 1.98043 12.4053 1.79289 12.2177C1.60536 12.0302 1.5 11.7758 1.5 11.5106V3.51062C1.5 3.2454 1.60536 2.99105 1.79289 2.80351C1.98043 2.61598 2.23478 2.51062 2.5 2.51062H5V2.01062C5 1.6128 5.15804 1.23126 5.43934 0.94996C5.72064 0.668655 6.10218 0.51062 6.5 0.51062H9.5C9.89782 0.51062 10.2794 0.668655 10.5607 0.94996C10.842 1.23126 11 1.6128 11 2.01062V2.51062H13.5C13.7652 2.51062 14.0196 2.61598 14.2071 2.80351C14.3946 2.99105 14.5 3.2454 14.5 3.51062ZM6 2.51062H10V2.01062C10 1.87801 9.94732 1.75083 9.85355 1.65707C9.75979 1.5633 9.63261 1.51062 9.5 1.51062H6.5C6.36739 1.51062 6.24021 1.5633 6.14645 1.65707C6.05268 1.75083 6 1.87801 6 2.01062V2.51062ZM2.5 3.51062V6.11187C4.18776 7.03009 6.07863 7.51097 8 7.51062C9.92145 7.51096 11.8124 7.02986 13.5 6.11124V3.51062H2.5ZM13.5 11.5106V7.23749C11.7876 8.07521 9.90637 8.51066 8 8.51062C6.09367 8.51099 4.21245 8.07574 2.5 7.23812V11.5106H13.5Z"
                  fill="url(#paint1_linear_1419_766)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1419_766"
                    x1="7.16969"
                    y1="6.40503"
                    x2="10.3168"
                    y2="13.2449"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2EFFE1" />
                    <stop offset="1" stopColor="#7DEE53" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1419_766"
                    x1="7.10049"
                    y1="0.510616"
                    x2="15.9315"
                    y2="10.2233"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2EFFE1" />
                    <stop offset="1" stopColor="#7DEE53" />
                  </linearGradient>
                </defs>
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  opacity="0.2"
                  d="M13.9963 9.89061C13.8991 10.6163 13.5418 11.282 12.9907 11.7639C12.4395 12.2458 11.7321 12.5112 11 12.5106C8.74566 12.5106 6.58365 11.6151 4.98959 10.021C3.39553 8.42695 2.5 6.26495 2.5 4.01061C2.49944 3.27848 2.7648 2.57107 3.24673 2.01994C3.72865 1.4688 4.39435 1.11146 5.12 1.01436C5.22727 1.00161 5.33578 1.02395 5.4293 1.07803C5.52281 1.13211 5.5963 1.21502 5.63875 1.31436L6.95938 4.26436C6.99182 4.34012 7.00504 4.42274 6.99784 4.50485C6.99064 4.58696 6.96326 4.66601 6.91813 4.73498L5.5825 6.32311C5.53512 6.3946 5.50711 6.47716 5.50119 6.56271C5.49528 6.64827 5.51166 6.7339 5.54875 6.81123C6.06563 7.86936 7.15938 8.94998 8.22063 9.46186C8.29836 9.49878 8.38439 9.5148 8.47021 9.50834C8.55602 9.50187 8.63867 9.47314 8.71 9.42498L10.2725 8.09373C10.3417 8.04766 10.4214 8.01958 10.5042 8.01205C10.5871 8.00452 10.6705 8.01777 10.7469 8.05061L13.6944 9.37123C13.7942 9.41341 13.8776 9.48686 13.932 9.58053C13.9865 9.6742 14.009 9.78302 13.9963 9.89061Z"
                  fill="url(#paint0_linear_1419_780)"
                />
                <path
                  d="M9.50001 5.01075V2.51075C9.50001 2.37815 9.55268 2.25097 9.64645 2.1572C9.74022 2.06343 9.8674 2.01075 10 2.01075C10.1326 2.01075 10.2598 2.06343 10.3536 2.1572C10.4473 2.25097 10.5 2.37815 10.5 2.51075V3.80388L12.6463 1.657C12.7401 1.56318 12.8673 1.51048 13 1.51048C13.1327 1.51048 13.2599 1.56318 13.3538 1.657C13.4476 1.75082 13.5003 1.87807 13.5003 2.01075C13.5003 2.14344 13.4476 2.27068 13.3538 2.3645L11.2075 4.51075H12.5C12.6326 4.51075 12.7598 4.56343 12.8536 4.6572C12.9473 4.75097 13 4.87815 13 5.01075C13 5.14336 12.9473 5.27054 12.8536 5.36431C12.7598 5.45808 12.6326 5.51075 12.5 5.51075H10C9.8674 5.51075 9.74022 5.45808 9.64645 5.36431C9.55268 5.27054 9.50001 5.14336 9.50001 5.01075ZM14.4925 9.95325C14.3811 10.8001 13.9652 11.5775 13.3224 12.1402C12.6797 12.7028 11.8542 13.0123 11 13.0108C6.03751 13.0108 2.00001 8.97325 2.00001 4.01075C1.99836 3.15659 2.3078 2.33106 2.87048 1.68843C3.43317 1.0458 4.21061 0.630053 5.05751 0.51888C5.27159 0.492683 5.48841 0.536405 5.67561 0.643522C5.86281 0.75064 6.01037 0.915411 6.09626 1.11325L7.41626 4.06013V4.06763C7.48194 4.21916 7.50906 4.3846 7.49521 4.54918C7.48136 4.71375 7.42696 4.87233 7.33688 5.01075C7.32563 5.02763 7.31376 5.04325 7.30126 5.05888L6.00001 6.60138C6.46813 7.55263 7.46313 8.53888 8.42688 9.00825L9.94813 7.71388C9.96307 7.70132 9.97872 7.68963 9.99501 7.67888C10.1333 7.58663 10.2924 7.53032 10.458 7.51504C10.6235 7.49976 10.7903 7.526 10.9431 7.59138L10.9513 7.59513L13.8956 8.9145C14.0939 8.99999 14.2592 9.14737 14.3668 9.3346C14.4744 9.52184 14.5185 9.73888 14.4925 9.95325ZM13.5 9.82825C13.5 9.82825 13.4956 9.82825 13.4931 9.82825L10.5556 8.51263L9.03376 9.807C9.01915 9.81971 9.0037 9.8314 8.98751 9.842C8.8436 9.93801 8.67726 9.99504 8.50472 10.0075C8.33219 10.02 8.15936 9.98753 8.00313 9.91325C6.83251 9.34763 5.66563 8.1895 5.09938 7.03138C5.0244 6.87629 4.99075 6.70446 5.0017 6.53254C5.01265 6.36063 5.06783 6.19445 5.16188 6.05013C5.17248 6.03318 5.18439 6.01709 5.19751 6.002L6.50001 4.45763L5.18751 1.52013C5.18726 1.51764 5.18726 1.51512 5.18751 1.51263C4.58142 1.59169 4.02493 1.88898 3.62226 2.34883C3.2196 2.80867 2.99837 3.39953 3.00001 4.01075C3.00232 6.13178 3.84592 8.16526 5.34571 9.66505C6.8455 11.1648 8.87899 12.0084 11 12.0108C11.6109 12.0129 12.2016 11.7924 12.6617 11.3906C13.1218 10.9888 13.4198 10.4332 13.5 9.82763V9.82825Z"
                  fill="url(#paint1_linear_1419_780)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1419_780"
                    x1="7.45416"
                    y1="1.01086"
                    x2="15.9544"
                    y2="9.64063"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2EFFE1" />
                    <stop offset="1" stopColor="#7DEE53" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1419_780"
                    x1="7.385"
                    y1="0.51147"
                    x2="16.624"
                    y2="9.89171"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2EFFE1" />
                    <stop offset="1" stopColor="#7DEE53" />
                  </linearGradient>
                </defs>
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  opacity="0.2"
                  d="M14 2.51038V11.5104C14 11.643 13.9473 11.7702 13.8536 11.8639C13.7598 11.9577 13.6326 12.0104 13.5 12.0104H2.5C2.36739 12.0104 2.24021 11.9577 2.14645 11.8639C2.05268 11.7702 2 11.643 2 11.5104V2.51038C2 2.37777 2.05268 2.25059 2.14645 2.15682C2.24021 2.06305 2.36739 2.01038 2.5 2.01038H13.5C13.6326 2.01038 13.7598 2.06305 13.8536 2.15682C13.9473 2.25059 14 2.37777 14 2.51038Z"
                  fill="url(#paint0_linear_1419_773)"
                />
                <path
                  d="M13.5 1.51038H2.5C2.23478 1.51038 1.98043 1.61573 1.79289 1.80327C1.60536 1.99081 1.5 2.24516 1.5 2.51038V11.5104C1.5 11.7756 1.60536 12.0299 1.79289 12.2175C1.98043 12.405 2.23478 12.5104 2.5 12.5104H13.5C13.7652 12.5104 14.0196 12.405 14.2071 12.2175C14.3946 12.0299 14.5 11.7756 14.5 11.5104V2.51038C14.5 2.24516 14.3946 1.99081 14.2071 1.80327C14.0196 1.61573 13.7652 1.51038 13.5 1.51038ZM13.5 11.5104H2.5V2.51038H13.5V11.5104ZM11.5 5.01038C11.5 5.14298 11.4473 5.27016 11.3536 5.36393C11.2598 5.4577 11.1326 5.51038 11 5.51038H5C4.86739 5.51038 4.74021 5.4577 4.64645 5.36393C4.55268 5.27016 4.5 5.14298 4.5 5.01038C4.5 4.87777 4.55268 4.75059 4.64645 4.65682C4.74021 4.56305 4.86739 4.51038 5 4.51038H11C11.1326 4.51038 11.2598 4.56305 11.3536 4.65682C11.4473 4.75059 11.5 4.87777 11.5 5.01038ZM11.5 7.01038C11.5 7.14298 11.4473 7.27016 11.3536 7.36393C11.2598 7.4577 11.1326 7.51038 11 7.51038H5C4.86739 7.51038 4.74021 7.4577 4.64645 7.36393C4.55268 7.27016 4.5 7.14298 4.5 7.01038C4.5 6.87777 4.55268 6.75059 4.64645 6.65682C4.74021 6.56305 4.86739 6.51038 5 6.51038H11C11.1326 6.51038 11.2598 6.56305 11.3536 6.65682C11.4473 6.75059 11.5 6.87777 11.5 7.01038ZM11.5 9.01038C11.5 9.14298 11.4473 9.27016 11.3536 9.36393C11.2598 9.4577 11.1326 9.51038 11 9.51038H5C4.86739 9.51038 4.74021 9.4577 4.64645 9.36393C4.55268 9.27016 4.5 9.14298 4.5 9.01038C4.5 8.87777 4.55268 8.75059 4.64645 8.65682C4.74021 8.56305 4.86739 8.51038 5 8.51038H11C11.1326 8.51038 11.2598 8.56305 11.3536 8.65682C11.4473 8.75059 11.5 8.87777 11.5 9.01038Z"
                  fill="url(#paint1_linear_1419_773)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1419_773"
                    x1="7.16969"
                    y1="2.01037"
                    x2="14.4204"
                    y2="10.8438"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2EFFE1" />
                    <stop offset="1" stopColor="#7DEE53" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1419_773"
                    x1="7.10049"
                    y1="1.51037"
                    x2="15.0991"
                    y2="11.1074"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2EFFE1" />
                    <stop offset="1" stopColor="#7DEE53" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            Find Us
          </a>
        </li>
      </ul>
    </div>
  );
};