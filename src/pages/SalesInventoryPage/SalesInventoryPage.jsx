import NavBar from '../../components/Homepage/NavBar';
import Footer from '../../components/Homepage/Footer';
import BookADemo from '../../components/SalesInventoryPage/BookADemo';
import SalesFeatures from '../../components/SalesInventoryPage/SalesFeatures';
import SalesHero from '../../assets/images/SalesHero.svg';

const SalesInventoryPage = () => {
  return( 
   <div>
      <NavBar />
       
       {/*Sales Page Hero*/}
       <div className="">
        <section className="lg:h-[600px] md:h-[700px] h-[600px] bg-[url('/src/assets/images/hero_bg.jpg')]">
          <div className="py-10 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h1 className="mb-4 pt-10 text-4xl font-EncodeBold font-normal leading-none text-white md:text-4xl lg:text-6xl">
            Unlock Efficiency, Boost <br/> Sales
            </h1>
            <p className="mb-8 text-sm font-EncodeRegular text-[#8A8A8A] lg:text-lg sm:px-16 xl:px-48">
            From order processing to dynamic reporting, 
            the Touch Sales is your strategic 
            partner in elevating your sales game
            </p>
            <div className="flex flex-col mb-4 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              className="font-EncodeRegular transition duration-700 ease-in-out hover:scale-110 inline-flex justify-center items-center py-4 lg:px-12 md:px-10 sm:px-8 px-8 text-lg font-medium text-center text-black rounded-lg bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53]"
              href="https://calendly.com/productstouchstacktechnologies/salesandinventorydemo"
              target='_blank'
              rel='noopener noreferrer'
            >
                Book a Demo
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
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
          </div> 
        </section>
        </div>
       {/*Sales Page Hero end*/}

          {/*HRM Laptop and phone display section*/}
          <section className="w-full md:h-[450px] h-[170px] bg-[#1A1919] flex items-center justify-center relative">
           <img src={SalesHero} alt="" className="w-8/12 mb-[150px] absolute" />
         </section>
         {/*HRM Laptop display section Ends*/}

         {/*HRM Feature display section*/}
           <SalesFeatures />
         {/*HRM phone display section*/}

         {/*Book a Demo section*/}
         <section className="bg-[#1A1919]">
            <BookADemo />
         </section> 
         {/*Book a Demo section*/}

         <Footer />
   </div>
  );
};

export default SalesInventoryPage;
