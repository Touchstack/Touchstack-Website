import React from "react";

const TeamMember = ({ name, role, imageSrc, linkedInLink }) => (
  <div className="flex flex-col justify-center items-start text-white py-3 px-5 card">
    <img src={imageSrc} alt={`${name}'s photo`} className="sm:h-object-cover" />
    <p className="text-left text-xl font-ExtraBold pt-4">{name}</p>
    <p className="text-[#8A8A8A] font-EncodeRegular text-left py-3">{role}</p>
    <a href={linkedInLink} target="_blank" className="text-[#2EFFE1]">
      {
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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 12.5H6V24.5H10V12.5Z"
            stroke="#292A2C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 9.5C9.10457 9.5 10 8.60457 10 7.5C10 6.39543 9.10457 5.5 8 5.5C6.89543 5.5 6 6.39543 6 7.5C6 8.60457 6.89543 9.5 8 9.5Z"
            stroke="#292A2C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
    </a>
  </div>
);

const Team = () => (
  <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 lg:gap-0 md:gap-24 gap-24 lg:p-0 md:p-12 p-8">
    <TeamMember
      name="Brian Adjei-Otchwemah"
      role="Founder"
      imageSrc="https://d33wubrfki0l68.cloudfront.net/ed2580d25a0dc8da2fe4d7d162156fe5cd2dac3e/e911a/images/brian.jpg"
      linkedInLink="https://www.linkedin.com/in/brian-adjei-otchwemah-ba213a9a/"
    />
    <TeamMember
      name="Benjamin David Adjimah"
      role="Software Engineer"
      imageSrc="https://d33wubrfki0l68.cloudfront.net/8f0a9e72c368fb98ba91bf518261f48bf5a35038/5189b/images/ben.jpg"
      linkedInLink="https://www.linkedin.com/in/benjamin-david-adjimah-5bb5a69b"
    />
    <TeamMember
      name="Eugene Sedem Dumoga"
      role="Software Engineer"
      imageSrc="https://d33wubrfki0l68.cloudfront.net/46daeb0a0f9f5ff6a7df15854167f30165abfb4a/38cca/images/eugene.jpg"
      linkedInLink="https://www.linkedin.com/in/eugene-dumoga/"
    />
    <TeamMember
      name="Abdul Ilah Amankwa Isshaq"
      role="Back End Developer"
      imageSrc="https://d33wubrfki0l68.cloudfront.net/124e3ab6ad475de5617e67215c4db534e368f858/6e993/images/abdul.jpg"
      linkedInLink="https://www.linkedin.com/in/abdul-illah-isshaq-amankwah-61a0b024b"
    />
    <TeamMember
      name="Susanna Afful"
      role="Front End Developer"
      imageSrc="src/assets/images/susan.jpg"
      linkedInLink="https://www.linkedin.com/in/susanafful/"
    />
    <TeamMember
      name="Derrick Amenuve"
      role="Product/UX Designer"
      imageSrc="https://d33wubrfki0l68.cloudfront.net/3f9d598e7106be0c7799c1759479b5b655bb62d0/406ee/images/derrick.jpeg"
      linkedInLink="https://www.linkedin.com/in/derrickamenuve/"
    />
    <TeamMember
      name="Jemima Cole"
      role="Web Designer & Content Developer"
      imageSrc="https://d33wubrfki0l68.cloudfront.net/8935e6384079f073f9eb8c6c6b54338f8a063eb4/a60bd/images/dede.jpeg"
      linkedInLink="https://www.linkedin.com/in/jemimacole/"
    />
  </div>
);

export default Team;
