import DashBoard from '../../assets/images/DashBoard.svg';
import Employee from '../../assets/images/Employment.svg';
import Fianance from '../../assets/images/Fianance.svg';
import Intutive from '../../assets/images/Intutive.svg';
import Report from '../../assets/images/Report.svg';
import mobile from '../../assets/images/SalesMobile.svg';
import POS from '../../assets/images/POS.svg';

const SalesFeatures = () => {
  return (
    <div>
      <section className='w-full h-[50%] bg-[#0D0D0D] md:pl-[250px] p-10'>
        <div className='mx-auto max-w-screen-xl flex flex-col md:flex-row gap-6'>
          {/* Left */}
          <div className='mb-6 md:mb-0'>
            <img src={mobile} alt="" className='w-[1000px] h-full' />
          </div>
          {/* Left */}

          {/* Right */}
          <div className='flex flex-col gap-6 md:ml-10'>
            {/* DashBoard */}
            <FeatureItem 
              image={DashBoard} 
              title='Dashboard' 
              description="Our Sales Inventory Dashboard is your go-to command center for managing your inventory with unparalleled precision. Gain instant access to real-time data, powerful analytics, and actionable insights, all seamlessly integrated for a comprehensive overview of your sales inventory landscape." 
            />
            {/* DashBoard */}

            {/* Intuitive User Interface */}
            <FeatureItem 
              image={Intutive} 
              title='Intuitive User Interface' 
              description="Our user-friendly interface ensures that you don't need to be a tech expert to master inventory management. Navigate seamlessly through features with ease, empowering your team to work efficiently." 
            />
            {/* Intuitive User Interface */}

            {/* Accounting */}
            <FeatureItem 
              image={Fianance} 
              title='Accounting' 
              description="Our software takes the headache out of expense management. Capture, categorize, and monitor expenses effortlessly. With intuitive tools for receipt tracking and reporting, you can ensure compliance and gain a comprehensive view of your expenditures."
            />
            {/* Accounting */}

            {/* Reports */}
            <FeatureItem 
              image={Report} 
              title='Reports' 
              description="Gain unparalleled insights into your inventory landscape, sales performance, and strategic trends. Our intuitive reporting tools provide a comprehensive overview, allowing you to make informed decisions, optimize processes, and drive your business forward" 
            />
            {/* Reports */}

            {/* POS */}
            <FeatureItem 
              image={POS} 
              title='POS' 
              description="Say goodbye to long queues and slow checkouts. Our POS feature ensures swift and smooth transactions, enabling your team to provide a seamless buying experience for every customer." 
            />
            {/* POS */}

            {/* HRM */}
            <FeatureItem 
              image={Employee} 
              title='HRM' 
              description="Our HRM module is designed to seamlessly integrate with your sales inventory workflow, providing a holistic solution for your business needs" 
            />
            {/* HRM */}
          </div>
          {/* Right */}
        </div>
      </section>
    </div>
  );
}

const FeatureItem = ({ image, title, description }) => {
  return (
    <div className='flex flex-col items-start'>
      <div className='flex flex-row items-center gap-5 mb-2'>
        <img src={image} alt="" />
        <p className='text-[#fff] md:text-[36px] text-[26px] font-[700]'>{title}</p>
      </div>
      <p className='text-[#fff] md:w-3/4 lg:w-2/3 xl:w-1/2'>{description}</p>
    </div>
  );
}

export default SalesFeatures;
