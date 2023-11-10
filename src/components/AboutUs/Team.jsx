import React from "react";
import Brian from "../../assets/images/brian.jpg"
import Ben from "../../assets/images/ben.jpg";
import Eugene from "../../assets/images/Eugene.jpg"
import Abdul from "../../assets/images/abdul.jpg"
import Susanna from "../../assets/images/susan.jpg"
import Derrick from "../../assets/images/derrick.jpeg"
import Jemima from "../../assets/images/dede.jpeg"




const TeamMember = ({ name, role, imageSrc, linkedInLink }) => (
  <div className="flex flex-col justify-center items-start text-white py-3 px-5 card">
    <img src={imageSrc} alt={`${name}'s photo`} className="sm:h-object-cover" />
    <p className="text-left text-xl font-EncodeMedium pt-4">{name}</p>
    <p className="text-[#8A8A8A] font-EncodeRegular text-left py-3">{role}</p>
    <a href={linkedInLink} target="_blank" className="text-[#2EFFE1] bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53] rounded-lg">
      {
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="32" rx="10" fill="[#7DEE53]" />
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
  <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 lg:gap-0 md:gap-24 gap-24 lg:p-0 md:p-12 p-8">
    <TeamMember
      name="Brian Adjei-Otchwemah"
      role="Founder"
      imageSrc={Brian}
      linkedInLink="https://www.linkedin.com/in/brian-adjei-otchwemah-ba213a9a/"
    />
    <TeamMember
      name="Benjamin David Adjimah"
      role="Software Engineer"
      imageSrc={Ben}
      linkedInLink="https://www.linkedin.com/in/benjamin-david-adjimah-5bb5a69b"
    />
    <TeamMember
      name="Eugene Sedem Dumoga"
      role="Software Engineer"
      imageSrc={Eugene}
      linkedInLink="https://www.linkedin.com/in/eugene-dumoga/"
    />
    <TeamMember
      name="Abdul Ilah Amankwa Isshaq"
      role="Back End Developer"
      imageSrc={Abdul}
      linkedInLink="https://www.linkedin.com/in/abdul-illah-isshaq-amankwah-61a0b024b"
    />
    <TeamMember
      name="Susanna Afful"
      role="Front End Developer"
      imageSrc={Susanna}
      linkedInLink="https://www.linkedin.com/in/susanafful/"
    />
    <TeamMember
      name="Derrick Amenuve"
      role="Product/UX Designer"
      imageSrc={Derrick}
      linkedInLink="https://www.linkedin.com/in/derrickamenuve/"
    />
    <TeamMember
      name="Jemima Cole"
      role="Web Designer & Content Developer"
      imageSrc={Jemima}
      linkedInLink="https://www.linkedin.com/in/jemimacole/"
    />
  </div>
);

export default Team;
