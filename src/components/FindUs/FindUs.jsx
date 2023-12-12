const FindUs = () => {
  return (
    <section className="bg-cover bg-gray-900 bg-no-repeat bg-[url('images/bg-contact.png')] rounded-none">
      <div className="flex flex-row justify-between items-center py-24 ">
        {/* FORM */}
        <div className="flex flex-col lg:pl-32 lg:w-9/12 w-full">
          <div>
            <h1 className="mb-4 pb-4 lg:px-0 md:px-4 px-8 justify-center text-transparent bg-clip-text bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53] lg:text-left md:text-center text-center text-6xl font-EncodeLight leading-none text-gray-900 md:text-5xl lg:text-6xl">
              We would love to hear from <p>you</p>
            </h1>
            <p className="mb-6 text-xl text-gray-500 lg:text-left md:text-center text-center lg:text-xl xl:px-5 dark:text-gray-400 font-EncodeRegular">
              Here is where your journey begins.
            </p>
          </div>

          {/* ICON */}
          <div className="lg:mx-0 md:mx-auto mx-auto">
            <form>
              <div className="grid gap-6 mb-6 md:grid-cols-1">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-base text-white font-EncodeMedium"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="font-EncodeRegular bg-inherit border border-gray-300 text-white focus:border-green-300 focus:ring-1 focus:outline-none focus:ring-green-300 text-sm rounded-lg block w-80 p-4"
                    placeholder="e.g John"
                    required
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
                  />
                </div>

                <div>
                  <label
                    htmlFor="website"
                    className="block mb-2 text-base text-white focus:border-green-300 focus:ring-1 focus:outline-none focus:ring-green-300 font-EncodeMedium dark:text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    id="website"
                    className="font-EncodeRegular bg-inherit border border-gray-300 text-white focus:border-green-300 focus:ring-1 focus:outline-none focus:ring-green-300 text-sm rounded-lg block w-80 h-20 p-4"
                    placeholder="message here"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-base text-white font-EncodeMedium dark:text-white"
                >
                  How did you hear about us ?
                </label>
                <select
                  id="countries"
                  className="font-EncodeRegular bg-inherit border border-gray-300 text-white focus:border-green-300 focus:ring-1 focus:outline-none focus:ring-green-300 text-sm rounded-lg block w-80 p-4"
                >
                  <option selected>Twitter</option>
                  <option value="US">LinkedIn</option>
                  <option value="CA">Instagram</option>
                  <option value="FR">Facebook</option>
                  <option value="DE">A Recommendation</option>
                </select>
              </div>
              <button
                type="submit"
                className="transition duration-700 ease-in-out hover:scale-110 inline-flex justify-center items-center py-4 lg:px-16 md:px-14 sm:px-10 px-8 text-lg font-EncodeMedium text-center text-black rounded-lg bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53]"
              >
                Submit
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
            Inside Buro Ghana, Osu Close, Plot n.7Accra
          </p>
        </div>
        <div className="lg:text-left md:text-center text-center">
          <h1 className="mb-4 text-4xl font-EncodeBold md:text-5xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53]">
            Let&apos;s talk
          </h1>
          <a
            href="tel: +233 50 728 3433"
            className="mb-6 text-lg font-EncodeMedium hover:text-green-400 hover:underline text-gray-500 lg:text-xl dark:text-gray-400"
          >
            +233 50 728 3433
          </a>
        </div>
        <div className="lg:text-left md:text-center text-center">
          <h1 className="mb-4 text-4xl font-EncodeBold leading-normal md:text-5xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#2EFFE1] to-[#7DEE53]">
            Say Hi
          </h1>
          <a
            href="mailto:bernice@touchstacktechnologies.com"
            className="mb-6 text-lg hover:text-green-400 underline font-EncodeMedium text-gray-500 lg:text-xl dark:text-gray-400"
          >
            bernice@touchstacktechnologies.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
