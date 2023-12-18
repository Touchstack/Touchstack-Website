import DashBoard from '../../assets/images/DashBoard.svg';
import Employee from '../../assets/images/Employment.svg';
import Fianance from '../../assets/images/Fianance.svg';
import Intutive from '../../assets/images/Intutive.svg';
import Report from '../../assets/images/Report.svg';
import mobile from '../../assets/images/mobile.svg';

const HRMFeature = () => {
  return (
    <section className='w-full h-[50%] bg-[#0D0D0D] flex items-center justify-center p-10'>
      <div className='container lg:ml-[300px] flex flex-col md:flex-row items-center justify-center gap-6'>
        {/* Left */}
        <div className='mb-6 md:mb-0 flex-shrink-0'>
          <img src={mobile} alt="" className='h-full min-w-[200px]' />
        </div>
        {/* Left */}

        {/* Right */}
        <div className='flex flex-col gap-6 md:ml-10'>
          {/* DashBoard */}
          <FeatureItem
            image={DashBoard}
            title='Dashboard'
            description="Our intuitive Dashboard brings simplicity and power together, providing you with a comprehensive view of your workforce and HR processes."
          />
          {/* DashBoard */}

          {/* Intuitive User Interface */}
          <FeatureItem
            image={Intutive}
            title='Intuitive User Interface'
            description="Our user-friendly interface ensures that you don't need to be a tech expert to master inventory management. Navigate seamlessly through features with ease, empowering your team to work efficiently."
          />
          {/* Intuitive User Interface */}

          {/* Finance Manager */}
          <FeatureItem
            image={Fianance}
            title='Finance Management'
            description="From budgeting to expense tracking, [Software Name] is your trusted companion in optimizing financial workflows, ensuring accuracy, and achieving financial excellence."
          />
          {/* Finance Manager */}

          {/* Reports */}
          <FeatureItem
            image={Report}
            title='Reports'
            description="From comprehensive workforce analytics to specific departmental breakdowns, our customizable reporting feature puts you in the driver's seat."
          />
          {/* Reports */}

          {/* Employee */}
          <FeatureItem
            image={Employee}
            title='Employee Data Management'
            description="Explore the power of our Payroll Management features and experience a new level of simplicity and precision in managing your payroll tasks"
          />
          {/* Employee */}
        </div>
        {/* Right */}
      </div>
    </section>
  );
}

const FeatureItem = ({ image, title, description }) => {
  return (
    <div className='flex flex-col items-start'>
      <div className='flex flex-row items-center gap-5 mb-2'>
        <img src={image} alt="" />
        <p className='text-[#fff] md:text-[20px] text-[20px] font-[700]'>{title}</p>
      </div>
      <p className='text-[#fff] md:w-3/4 lg:w-2/3 xl:w-1/2'>{description}</p>
    </div>
  );
}

export default HRMFeature;
