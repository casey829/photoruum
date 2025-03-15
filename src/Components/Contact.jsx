import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[512px] h-[734px] top-[125.5px] left-[499px] gap-[32px] relative ">
      <div className="aspect-[400.1/569.24] md:aspect-auto w-full md:h-[652px] rounded-[12px] overflow-hidden flex justify-center items-center">
        <img
          loading="lazy"
          src="./image.jpeg"
          alt="Ntokozo Maseko"
          className="object-cover"
          width="512px"
          height="652px"
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-1/2 bg-white z-10 flex flex-col p-0 shadow-[-4px_0_12px_rgba(0,0,0,0.1)] md:max-w-[690px]"
          >
            <div className=" flex justify-between py-9 px-[16px] md:px-[8px] items-center  border-b-[1px] border-[#E0E0E0] w-full">
              <h2 className="text-[24px] md:text-[32px] p-2 kanit-regular text-[#26272D] weight-[400px]">
                Contact Ntokozo Maseko
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-transparent border-none cursor-pointer text-[#26272D] flex items-center font-kanit"
              >
                <div className="flex gap-3 m-1 justify-around">
                  <div className="text-[16px] font-kanit text-[#26272D] weight-[400px] ">
        
                    Exit
                  </div>
                  <img

                    className="object-contain grayscale contrast-200"
                    src="./vector.png"
                    alt="Exit"
                  />
                </div>
              </button>
            </div>

            <form className=" overflow-y-scroll flex-1 flex p-6 flex-col gap-[40] w-full h-[500px] ">
              <div className="flex flex-col gap-2">
                <label className="text-[18px] font-kanit text-[#26272D] line-height-[20px] weight-[400px]">
                  Name & Surname
                </label>
                <input
                  required
                  type="text "
                  placeholder="Your name here"
                  className=" text-[#A5A5A5] text-[16px] weight-[300px] w-full  md:py-7 px-0 border-t-0 border-l-0 border-r-0 border-b border-gray-300 text-sm focus:outline-none focus:border-gray-500 focus:ring-0"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className=" mt-5 text-[18px]  text-[#26272D] line-height-[20px] weight-[400px]">
                  Your email address
                </label>
                <input
                  required
                  type="email"
                  placeholder="Your email address here"
                  className="text-[#A5A5A5] text-[16px] weight-[300px] w-full  md:py-7 px-0 border-t-0 border-l-0 border-r-0 border-b border-gray-300 text-sm focus:outline-none focus:border-gray-500 focus:ring-0"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className=" mt-5 text-[18px]  text-[#26272D] line-height-[20px] weight-[400px]">
                  Phone number
                </label>
                <input
                  required
                  type="number"
                  placeholder="Phone number here"
                  className="text-[#A5A5A5] text-[16px] weight-[300px] w-full  md:py-7 px-0 border-t-0 border-l-0 border-r-0 border-b border-gray-300 text-sm focus:outline-none focus:border-gray-500 focus:ring-0"
                />
              </div>

              <div className="flex justify-around flex-col gap-2">
                <label className="mt-5 text-[18px]  text-[#26272D] line-height-[20px] weight-[400px]">
                  Shoot detail
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Pre-wedding shoot, Birthday shoot, Single portrait"
                  className=" text-[#A5A5A5] text-[16px] weight-[300px] w-full  md:py-7 px-0 border-t-0 border-l-0 border-r-0 border-b border-gray-300 text-sm focus:outline-none focus:border-gray-500 focus:ring-0"
                />
              </div>

              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  className="mt-10 bg-gray-900 md:mt-10 h-[48px] text-white border-none rounded-full py-1 px-6 text-[16px] cursor-pointer transition-colors duration-200 hover:bg-black"
                >
                  Submit request
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col sm:flex-row  justify-between items-center px-1 py-2 gap-[32px]">
        <p className="text-[16px] kanit-regular sm:text-sm text-center w-full border-2 border-[#E0E0E0] rounded-sm text-[#26272D] weight-[400px] px-3 py-1  line-height-[100%] letter-spacing-[0%]">
          Ntokozo Maseko • April 2024
        </p>

        <button
          onClick={() => setIsOpen(true)}
          className="bg-gray-900 w-full text-white border-none rounded-full py-2 px-4 text-[16px] sm:text-base font-medium cursor-pointer transition-colors duration-200 hover:bg-black"
        >
          Talk to Ntokozo Maseko
        </button>
      </div>
    </div>
  );
}

export default Contact;
