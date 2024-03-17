import NavBar from "../../components/Homepage/NavBar";
import Footer from "../../components/Homepage/Footer";
import BrainPhoto from "../../assets/images/BrainPhoto.png";
import Clock from "../../assets/images/clock.svg";
import Internet from "../../assets/images/Internet.svg";


const ArticlePage = () => {
    return (
      <div>
        <NavBar />

        {/* Page Content */}
        <div className="bg-[#1A1919] flex justify-center items-center">
          <div className="px-8 py-6">
            <a
              href="/blog"
              className="text-[#2EFFE1] inline-flex font-EncodeRegular gap-1 mt-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="19"
                viewBox="0 0 17 18"
                fill="none"
              >
                <path
                  d="M5.04094 8.98457L10.0666 4.01037L10.763 4.71397L6.44092 8.99177L10.7187 13.3139L10.0151 14.0102L5.04094 8.98457Z"
                  fill="#2EFFE1"
                />
              </svg>
              Back to Blogs
            </a>
            <div className="text-white font-EncodeBold py-12 lg:text-6xl md:text-4xl sm:text-2xl text-xl">
              <p className="">
                Brian Adjei-Otchwemah Recognized With The “Outstanding
                Leadership Award”
              </p>
            </div>
            <div className="inline-flex gap-2 items-center font-EncodeRegular text-[#8A8A8A] py-4 xl:text-xl lg:text-lg md:text-sm sm:text-xs text-[10px]">
              <img src={Internet} alt="/" />
              <p>Internet 2.0 Conference</p>
              <img src={Clock} alt="" />
              <p>2mins</p>
            </div>

            <div className="flex justify-center items-center">
              <img src={BrainPhoto} alt="/" />
            </div>

            <div className="py-4">
                <div className="text-[#898585] font-appRegular mb-8 lg:px-12 sm:px-2 px-0 flex justify-between">
                  <p>Las Vegas, USA</p>
                  <p>July 22, 2023{" "}</p>
                </div>
              <p className="text-[#898585] font-appRegular text- mb-8 lg:px-12 sm:px-2 px-0">
                <a
                  href="https://www.linkedin.com/in/brian-adjei-otchwemah-ba213a9a/"
                  className="hover:underline"
                >
                  Brian Adjei-Otchwemah
                </a>{" "}
                was honored with the “Outstanding Leadership Award” for his
                extraordinary achievements in the field of technology at the
                Summer Edition of the Internet 2.0 Conference, held at the
                Caesars Forum, Las Vegas, USA from July 10–12, 2023. Brian Adjei
                is a seasoned project manager and CEO of{" "}
                <a
                  href="https://touchstacktechnologies.com/"
                  className="hover:underline"
                >
                 Touch StackTechnologies  
                 </a> 
                  . With a background in software development, he is passionate
                about user-centric design and business-driven growth. Brian has
                strong leadership skills and is known for creating alignment
                among teams with diverse interests. He excels in managing
                multiple projects using agile adoption and tailored processes.
                With years of experience in various industries, Brian’s
                attention to detail and ability to adapt to different
                environments make him successful. He is committed to staying
                up-to-date with industry trends and constantly seeks out
                opportunities to learn and grow. Brian’s natural problem-solving
                skills, commitment to excellence, and ability to lead diverse
                teams make him an invaluable asset to any organization.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}
export default ArticlePage;