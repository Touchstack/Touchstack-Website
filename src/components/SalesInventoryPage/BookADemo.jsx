import Laptop from '../../assets/images/SalesLaptop.svg';

const BookADemo = () => {
  return (
    <div className="flex p-10">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53] lg:mx-24 md:mx-16 mx-12 py-8 px-8 rounded-lg">
        <div className="flex flex-col justify-center">
          <h3 className="lg:text-2xl md:text-1xl text-xl text-black font-EncodeBold mb-4 tracking-wider items-center">
            Find out if our free inventory management system is worth your time
          </h3>  
          <a
            className="bg-white rounded-md px-4 hover:bg-gray-300 cursor-pointer flex-col place-self-start mt-8 font-EncodeRegular lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 transition-transform duration-700 ease-in-out transform hover:scale-110 inline-flex justify-center items-center py-4 lg:px-16 md:px-14 sm:px-10 text-lg text-black"
            href="https://calendly.com/productstouchstacktechnologies/salesandinventorydemo"
            rel="noreferrer"
            target="_blank"
          >
            Book a Demo
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 17.5L17.5 7.5"
                stroke="#1A1818"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.5 7.5H17.5V17.5"
                stroke="#1A1818"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <img
          src={Laptop}
          alt="Right-Aligned Image"
          className="py-8 md:py-16 lg:py-16 rounded-lg"
        />
      </div>
    </div>
  );
}

export default BookADemo;