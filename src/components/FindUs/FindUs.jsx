import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { motion } from "framer-motion";
import { IoIosArrowDown } from 'react-icons/io';
import axios from "axios";

const FindUs = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [successText, setSuccessText] = useState("");
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    how_did_you_hear_about_us: "Twitter", // Default value
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post(
        "https://touchstack-web-api.onrender.com/api/contact",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response);

      if (response.data.status === true) {
        setSuccessText(response.data.message);
        setSuccessAlert(true);
        setLoading(false);
        setFormSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: "",
          how_did_you_hear_about_us: "Twitter", // Reset to default value
        });
      } else {
        setErrorText(response.data.message);
        setErrorAlert(true);
        setLoading(false);
      }
    } catch (error) {
      setErrorText(
        error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message
      );
      setErrorAlert(true);
      setLoading(false);
      console.log(error);
    }
  };


  const ErrorAlert = ({ errorText }) => {
    return (
      <motion.div
        id="alert-2"
        className="flex p-4 mb-4 font-Regular text-red-800 border border-red-300 rounded-lg bg-red-50"
        role="alert"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>

        <span className="sr-only">Info</span>
        <div className="ml-3 text-sm font-medium">{errorText}</div>
      </motion.div>
    );
  };

  const SuccessAlert = ({ successText }) => {
    return (
      <motion.div
        id="alert-2"
        className="flex items-center justify-center p-4 mb-4 w-2/3 font-Regular border border-green-800  bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53] rounded-lg bg-green-50"
        role="alert"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="sr-only">Info</span>
        <div className="ml-3 text-sm font-medium">
          <p className="text-black bg-clip-text bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53]">
            Thanks for reaching out. Our team will contact you soon!!
          </p>
        </div>
      </motion.div>
    );
  };

  const CustomDropdown = ({ value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    const handleSelect = (selectedValue) => {
      setIsOpen(false);
      onChange(selectedValue);
    };
  
    const dropdownOptions = [
      { value: 'Twitter', label: 'Twitter' },
      { value: 'LinkedIn', label: 'LinkedIn' },
      { value: 'Instagram', label: 'Instagram' },
      { value: 'Facebook', label: 'Facebook' },
      { value: 'Recommendation', label: 'A Recommendation' },
    ];
  
    return (
      <div className="mb-6 relative">
        <label
          htmlFor="how_did_you_hear_about_us"
          className="block mb-2 text-base text-white font-EncodeMedium dark:text-white"
        >
          How did you hear about us?
        </label>
        <div className="relative">
          <div
            onClick={handleToggle}
            className="flex justify-between items-center cursor-pointer font-EncodeRegular bg-inherit border border-gray-300 text-white focus:border-green-300 focus:ring-1 focus:outline-none focus:ring-green-300 text-sm rounded-lg  w-80 p-4"
            style={{
              backdropFilter: isOpen ? "blur(10px)" : "none",
              backgroundColor: isOpen ? "rgba(255, 255, 255, 0.5)" : "transparent",
            }}
          >
            {value}
            <IoIosArrowDown className="ml-2" />
          </div>
          {isOpen && (
            <div className="absolute z-10 mt-2 w-80 bg-gray-200 border border-gray-300 rounded-md shadow-md"
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
              }}
            >
              {dropdownOptions.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className="p-2 cursor-pointer hover:bg-gray-100"
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
  

  return (
    <section className="bg-cover bg-gray-900 bg-no-repeat bg-[url('images/bg-contact.png')] rounded-none">
      <div className="flex flex-row justify-between items-center py-24 ">
        {/* FORM */}
        <div className="flex flex-col lg:pl-32 lg:w-9/12 w-full">
          <div>
            <h1 className=" text-justify justify-center text-transparent bg-clip-text bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53] text-6xl font-EncodeLight leading-none text-gray-900 ">
              We would love to hear from <br /> you
            </h1>
            <p className="mt-5 text-xl text-gray-500 lg:text-left md:text-center text-center lg:text-xl xl:px-5 dark:text-gray-400 font-EncodeRegular">
              Here is where your journey begins.
            </p>
          </div>

          {/* ICON */}
          <div className="lg:mx-0 md:mx-auto mx-auto">
            {loading ? null : errorAlert ? (
              <ErrorAlert errorText={errorText} />
            ) : successAlert ? (
              <SuccessAlert successText={successText} />
            ) : null}
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6 mb-6 md:grid-cols-1 mt-10">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-base text-white font-EncodeMedium"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="font-EncodeRegular bg-inherit border border-gray-300 text-white focus:border-green-300 focus:ring-1 focus:outline-none focus:ring-green-300 text-sm rounded-lg block w-80 p-4"
                    placeholder="e.g John"
                    required
                    onChange={handleChange}
                    value={formData.name}
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-base text-white font-EncodeMedium dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="font-EncodeRegular bg-inherit border border-gray-300 text-white focus:border-green-300 focus:ring-1 focus:outline-none focus:ring-green-300 text-sm rounded-lg block w-80 p-4"
                    placeholder="e.g john.doe@company.com"
                    required
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-base text-white focus:border-green-300 focus:ring-1 focus:outline-none focus:ring-green-300 font-EncodeMedium dark:text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    className="font-EncodeRegular bg-inherit border border-gray-300 text-white focus:border-green-300 focus:ring-1 focus:outline-none focus:ring-green-300 text-sm rounded-lg block w-80 h-20 p-4"
                    placeholder="message here"
                    required
                    onChange={handleChange}
                    value={formData.message}
                  ></textarea>
                </div>
              </div>
              <div className="mb-6">
                {/* Replace the previous select dropdown with the custom dropdown */}
                <CustomDropdown
                  value={formData.how_did_you_hear_about_us}
                  onChange={(value) =>
                    setFormData({
                      ...formData,
                      how_did_you_hear_about_us: value,
                    })
                  }
                />
              </div>

              <button
                type="submit"
                className="font-EncodeRegular transition duration-700 ease-in-out hover:scale-110 inline-flex justify-center items-center py-4 lg:px-16 md:px-14 sm:px-10 px-8 text-lg text-center text-black rounded-lg bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53]"
                disabled={loading}
              >
                {loading ? (
                  <ClipLoader color="#36D7B7" loading={true} size={25} />
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
        <div className="lg:block md:hidden hidden">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/22a9fe193f1b2775ba77abda88ab1892472479b2/d26b3/images/touchstack_icon_contact.png"
            className=""
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 pb-24 lg:px-32">
        <div className="lg:text-left md:text-center text-center">
          <h1 className="mb-4 text-4xl font-EncodeBold md:text-5xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53]">
            Location
          </h1>
          <p className="mb-6 text-lg font-EncodeMedium text-gray-500 lg:text-xl dark:text-gray-400">
            Inside buro. Plot n.7, Osu Close. Accra-Ghana
          </p>
        </div>
        <div className="lg:text-left md:text-center text-center">
          <h1 className="mb-4 text-4xl font-EncodeBold md:text-5xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53]">
            Let's talk
          </h1>
          <a
            href="tel:+233 20 376 7382"
            className="mb-6 text-lg font-EncodeMedium hover:text-green-400 hover:underline text-gray-500 lg:text-xl dark:text-gray-400"
          >
            +233 20 335 0447
          </a>
        </div>
        <div className="lg:text-left md:text-center text-center">
          <h1 className="mb-4 text-4xl font-EncodeBold leading-normal md:text-5xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53]">
            Say Hi
          </h1>
          <a
            href="mailto:info@touchstacktecnologies.com"
            className="mb-6 text-lg hover:text-green-400 underline font-EncodeMedium text-gray-500 lg:text-xl dark:text-gray-400"
          >
            info@touchstacktechnologies.com
          </a>
        </div>
      </div>
    </section>
  );
};
export default FindUs;
