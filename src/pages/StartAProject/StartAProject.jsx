import NavBar from "../../components/Homepage/NavBar"

 const StartAProject = () => {
  return (
    <div className="bg-[#1a1919] h-full">
       <NavBar />

       <section className="bg-cover bg-no-repeat bg-black bg-[url('/src/assets/images/bg-solutions.png')] rounded-none lg:h-[20rem] md:h-[20rem] sm:h-[20rem] h-[20rem]">
         <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
         <p className="text-center font-EncodeLight text-2xl text-[#2EFFE1] p-5">
           Start A Project
         </p>
         <p className="leading-5 text-white tracking-wider font-EncodeBold text-center lg:text-5xl md:text-4xl sm:text-3xl text-3xl lg:px-32 md:px-32 sm:px-24 px-4">
            Start A Project With Us
          </p>
        </div>    
      </section>

       {/*Form section*/}
       <div className=" pt-20">
        <iframe
          title="Google Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSei-VGP0Sre__tPATxP5sgN_Z7V2rLy91lyn18AZG2Fw6qWRg/viewform?embedded=true"
          width="100%"
          height="2700"
        >
          Loading…
        </iframe>
      </div>
       {/*Form section*/}
    </div>
  )
}

export default StartAProject
