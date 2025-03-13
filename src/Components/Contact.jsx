import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[513px] h-[734px] object-center mx-auto p-5 relative">
      <div className="relative w-full rounded-xl overflow-hidden mb-3 shadow-md">
        <img
          src="./image.jpeg"
          alt="Ntokozo Maseko"
          className="w-full h-auto  object-cover aspect-auto"
        />

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute top-0 right-0 h-full w-3/5 bg-white z-10 flex flex-col p-6 shadow-[-4px_0_12px_rgba(0,0,0,0.1)] md:absolute md:w-3/5 lg:fixed lg:left-3/5 lg:right-0 lg:h-screen lg:w-auto"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-lg font-medium kanit-semibold">Contact Ntokozo Maseko</h2>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="bg-transparent border-none cursor-pointer text-gray-500 flex items-center"
                >
                  Exit <span className="ml-1">✕</span>
                </button>
              </div>

              <form className="flex-1 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[18px] font-medium text-gray-700">Name & Surname</label>
                  <input
                    type="text"
                    placeholder="Your name here"
                    className="w-full py-2 px-0 border-t-0 border-l-0 border-r-0 border-b border-gray-300 text-sm focus:outline-none focus:border-gray-500 focus:ring-0"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[18px] font-medium text-gray-700">Your email address</label>
                  <input
                    type="email"
                    placeholder="Your email address here"
                    className="w-full py-2 px-0 border-t-0 border-l-0 border-r-0 border-b border-gray-300 text-sm focus:outline-none focus:border-gray-500 focus:ring-0"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[18px] font-medium text-gray-700">Phone number</label>
                  <input
                    type="tel"
                    placeholder="Phone number here"
                    className="w-full py-2 px-0 border-t-0 border-l-0 border-r-0 border-b border-gray-300 text-sm focus:outline-none focus:border-gray-500 focus:ring-0"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[18px] font-medium text-gray-700">Shoot detail</label>
                  <input
                    type="text"
                    placeholder="e.g. Pre-wedding shoot, Birthday shoot, Single portrait"
                    className="w-full py-2 px-0 border-t-0 border-l-0 border-r-0 border-b border-gray-300 text-sm focus:outline-none focus:border-gray-500 focus:ring-0"
                  />
                </div>

                <div className="flex justify-center mt-auto">
                  <button 
                    type="submit" 
                    className="bg-gray-900 text-white border-none rounded-full py-2 px-6 text-sm font-medium cursor-pointer transition-colors duration-200 hover:bg-black mt-8"
                  >
                    Submit request
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex gap-3 justify-between items-center px-1 py-2">
      <p className="text-[16px] w-[513px] border-2 border-[#E0E0E0] rounded-sm text-gray-700 font-normal px-3 py-1 inline-block font-kanit">
  Ntokozo Maseko • April 2024
</p>

        <button 
          onClick={() => setIsOpen(true)} 
          className="bg-gray-900 w-[513px] text-white border-none rounded-full py-2 px-4 text-[16px] font-medium cursor-pointer transition-colors duration-200 hover:bg-black font-kanit"
        >
          Talk to Ntokozo Maseko
        </button>
      </div>
    </div>
  );
}

export default Contact;