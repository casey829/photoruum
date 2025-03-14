import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-[513px] w-[512px]  lg:top-[30px]  mx-auto p-4   lg:min-h-screen relative">
      <div className="relative w-full items-center rounded-xl overflow-hidden mb-3 shadow-md">
        <img
         loading="lazy"
          src="./image.jpeg"
          alt="Ntokozo Maseko"
          className="w-[500px] h-[580px] max-h-[540px]  aspect-auto"
        />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-1/2 bg-white z-10 flex flex-col p-0 shadow-[-4px_0_12px_rgba(0,0,0,0.1)] md:max-w-[690px]"
            >
              <div className="flex justify-between p-3 items-center mb-[50px] border-b-2 border-[#E0E0E0] w-full">
                <h2 className="text-[24px] md:text-[32px] p-2 font-kanit text-[#26272D] weight-[400px]">
                  Contact Ntokozo Maseko
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent border-none cursor-pointer text-[#26272D] flex items-center font-kanit"
                >
                  <div className="flex gap-3 m-1 justify-around">
                    <div className="text-[16px] font-kanit text-[#26272D] weight-[400px] ">
                      {" "}
                      Exit
                    </div>
                    <img
                      className="object-contain"
                      src="./vector.png"
                      alt="Exit"
                    />
                  </div>
                </button>
              </div>

              <form className="flex-1 flex p-6 flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[18px] font-kanit text-[#26272D] line-height-[20px] weight-[400px]">
                    Name & Surname
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your name here"
                    className="w-full py-2 px-0 border-t-0 border-l-0 border-r-0 border-b border-[#E0E0E0] text-sm focus:outline-none focus:border-gray-500 focus:ring-0"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[18px] font-kanit text-[#26272D] line-height-[20px] weight-[400px]">
                    Your email address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="Your email address here"
                    className="w-full py-2 px-0 border-t-0 border-l-0 border-r-0 border-b border-gray-300 text-sm focus:outline-none focus:border-gray-500 focus:ring-0"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[18px] font-kanit text-[#26272D] line-height-[20px] weight-[400px]">
                    Phone number
                  </label>
                  <input
                    required
                    type="number"
                    placeholder="Phone number here"
                    className="w-full py-2 px-0 border-t-0 border-l-0 border-r-0 border-b border-gray-300 text-sm focus:outline-none focus:border-gray-500 focus:ring-0"
                  />
                </div>

                <div className="flex justify-around flex-col gap-2">
                  <label className="text-[18px]  font-kanit text-[#26272D] line-height-[20px] weight-[400px]">
                    Shoot detail
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Pre-wedding shoot, Birthday shoot, Single portrait"
                    className="w-full  md:py-7 px-0 border-t-0 border-l-0 border-r-0 border-b border-gray-300 text-sm focus:outline-none focus:border-gray-500 focus:ring-0"
                  />
                </div>

                <div className="flex justify-center mt-5">
                  <button
                    type="submit"
                    className="bg-gray-900 md:mt-0 text-white border-none rounded-full py-1 px-6 text-[16px] font-kanit cursor-pointer transition-colors duration-200 hover:bg-black mt-8"
                  >
                    Submit request
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-col sm:flex-row  justify-between items-center px-1 py-2 gap-[32px]">
        <p className="text-xs sm:text-sm text-center w-full border-2 border-[#E0E0E0] rounded-sm text-gray-700 font-normal px-3 py-1 font-kanit">
          Ntokozo Maseko • April 2024
        </p>

        <button
          onClick={() => setIsOpen(true)}
          className="bg-gray-900 w-full text-white border-none rounded-full py-2 px-4 text-sm sm:text-base font-medium cursor-pointer transition-colors duration-200 hover:bg-black font-kanit"
        >
          Talk to Ntokozo Maseko
        </button>
      </div>
    </div>
  );
}

export default Contact;
