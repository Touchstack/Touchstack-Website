import { Navbar } from "flowbite-react";
import TouchstackLogo from "../../assets/images/logo-black.png";

const NewNavBar = () => {
  return (
    <Navbar
      fluid
      className="bg-[#0D0D0D] font-EncodeRegular text-white text-md p-4"
    >
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src={TouchstackLogo}
          className="mr-3"
          alt="logo-black.png"
          style={{ height: "50px", width: "100px" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#">
          <div className="flex items-center justify-between py-2 text-white pl-3 pr-4">
            {" "}
            Products{" "}
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
            </svg>{" "}
          </div>
        </Navbar.Link>
        <Navbar.Link href="/solutions">Solutions</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
        <a
          href="/findus"
          className="text-[#2EFFE1] hover:text-green-500 border border-[#2EFFE1] hover:border hover:border-green-500 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2"
        >
          Contact
        </a>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NewNavBar;
