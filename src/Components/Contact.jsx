// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Img } from "react-image";

// function Contact() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="w-[1512px] h-[982px] top-[162px] left-[128px] bg-[#FFFFFF] md:px-10">
//       <div className="w-[513px] h-[734px] top-[125.5px] left-[499px] flex flex-col gap-[32px] relative">
//         <div className="w-[512px] h-[652px]  overflow-hidden flex justify-center items-center rounded-[12px]">
//           <Img src="./image.jpeg" alt="Lazy loaded" className="object-cover" />
//         </div>
//         <div className="flex w-[513px] h-[50px] gap-[16px]">
//           <div className="flex w-[275px] h-[50px] rounded-[8px] border-[1px] justify-center items-center bg-[#FFFFFF] border-[#E0E0E0] text-center">
//             Ntokozo Maseko • April 2024
//           </div>
//           <div className="flex w-[275px]  bg-[#26272D] h-[50px] rounded-[100px] border-[1px] text-[#FFFFFF] justify-center items-center  border-[#E0E0E0] text-center">
//             <button
//               className="cursor-pointer"
//               type="submit"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               Talk to Ntokozo Maseko
//             </button>
//           </div>
//         </div>
//       </div>

//       <AnimatePresence>
//         {isOpen && (
//           <>
//             {/* Overlay - Closes modal when clicked */}
//             <motion.div
//               className="fixed inset-0 bg-auto bg-opacity-30 backdrop-contrast-50 z-5"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsOpen(false)}
//             />

//             {/* Modal */}
//             <motion.div
//               initial={{ x: "100%" }}
//               animate={{ x: "0%" }}
//               exit={{ x: "100%" }}
//               transition={{ type: "tween", duration: 0.3 }}
//               className="fixed top-0 right-0 h-full w-1/2 bg-white z-10 flex flex-col p-0 shadow-[-4px_0_12px_rgba(0,0,0,0.1)] md:max-w-[690px]"
//             >
//               {/* Modal Header */}
//               <div className="flex justify-between py-9 px-[16px] md:px-[8px] items-center border-b-[1px] border-[#E0E0E0] w-full">
//                 <h2 className="text-[24px] md:text-[32px] p-2 kanit-regular text-[#26272D] weight-[400px]">
//                   Contact Ntokozo Maseko
//                 </h2>
//                 <button
//                   onClick={() => setIsOpen(false)}
//                   className="bg-transparent border-none cursor-pointer text-[#26272D] flex items-center font-kanit"
//                 >
//                   <div className="flex gap-3 m-1 justify-around">
//                     <div className="text-[16px] font-kanit text-[#26272D] weight-[400px] ">
//                       Exit
//                     </div>
//                     <img
//                       className="object-contain grayscale contrast-200"
//                       src="./vector.png"
//                       alt="Exit"
//                     />
//                   </div>
//                 </button>
//               </div>

//               {/* Modal Form */}
//               <form className="overflow-y-scroll flex-1 flex p-6 flex-col gap-[40] w-full h-[500px]">
//                 <div className="flex flex-col gap-2">
//                   <label className="text-[18px] font-kanit text-[#26272D] line-height-[20px] weight-[400px]">
//                     Name & Surname
//                   </label>
//                   <input
//                     required
//                     type="text"
//                     placeholder="Your name here"
//                     className="text-[#A5A5A5] text-[16px] weight-[300px] w-full md:py-7 px-0 border-t-0 border-l-0 border-r-0 border-b border-gray-300 text-sm focus:outline-none focus:border-gray-500 focus:ring-0"
//                   />
//                 </div>

//                 <div className="flex flex-col gap-2">
//                   <label className="mt-5 text-[18px] text-[#26272D] line-height-[20px] weight-[400px]">
//                     Your email address
//                   </label>
//                   <input
//                     required
//                     type="email"
//                     placeholder="Your email address here"
//                     className="text-[#A5A5A5] text-[16px] weight-[300px] w-full md:py-7 px-0 border-t-0 border-l-0 border-r-0 border-b border-gray-300 text-sm focus:outline-none focus:border-gray-500 focus:ring-0"
//                   />
//                 </div>

//                 <div className="flex flex-col gap-2">
//                   <label className="mt-5 text-[18px] text-[#26272D] line-height-[20px] weight-[400px]">
//                     Phone number
//                   </label>
//                   <input
//                     required
//                     type="text"
//                     placeholder="Phone number here"
//                     className="text-[#A5A5A5] text-[16px] weight-[300px] w-full md:py-7 px-0 border-t-0 border-l-0 border-r-0 border-b border-gray-300 text-sm focus:outline-none focus:border-gray-500 focus:ring-0"
//                   />
//                 </div>

//                 <div className="flex justify-around flex-col gap-2">
//                   <label className="mt-5 text-[18px] text-[#26272D] line-height-[20px] weight-[400px]">
//                     Shoot detail
//                   </label>
//                   <input
//                     required
//                     type="text"
//                     placeholder="e.g. Pre-wedding shoot, Birthday shoot, Single portrait"
//                     className="text-[#A5A5A5] text-[16px] weight-[300px] w-full md:py-7 px-0 border-t-0 border-l-0 border-r-0 border-b border-gray-300 text-sm focus:outline-none focus:border-gray-500 focus:ring-0"
//                   />
//                 </div>

//                 <div className="flex justify-center mt-5">
//                   <button
//                     type="submit"
//                     className="mt-10 bg-gray-900 md:mt-10 h-[48px] text-white border-none rounded-full py-1 px-6 text-[16px] cursor-pointer transition-colors duration-200 hover:bg-black"
//                   >
//                     Submit request
//                   </button>
//                 </div>
//               </form>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
// export default Contact;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Img } from "react-image";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-[1512px] min-h-[982px] mx-auto bg-[#FFFFFF] md:px-10 px-4 h-[100%]">
      <div className="flex flex-col items-center md:items-start max-w-[513px] mx-auto md:mx-0 md:ml-auto md:mr-auto gap-[32px] py-[125.5px]">
        <div className="w-full max-w-[512px] h-auto aspect-[512/652] overflow-hidden flex justify-center items-center rounded-[12px]">
          <Img 
          src="./image.jpeg" alt="Lazy loaded" 
          className="object-cover" />
        </div>
        <div className="flex flex-col sm:flex-row w-full max-w-[513px] gap-[16px]">
          <div className="flex w-full sm:w-1/2 h-[50px] rounded-[8px] border-[1px] justify-center items-center bg-[#FFFFFF] border-[#E0E0E0] text-center text-sm sm:text-base px-2">
            Ntokozo Maseko • April 2024
          </div>
          <div className="flex w-full sm:w-1/2 bg-[#26272D] h-[50px] rounded-[100px] border-[1px] text-[#FFFFFF] justify-center items-center border-[#E0E0E0] text-center">
            <button
              className="cursor-pointer w-full h-full"
              type="submit"
              onClick={() => setIsOpen(!isOpen)}
            >
              Talk to Ntokozo Maseko
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay - Closes modal when clicked */}
            <motion.div
              className="fixed inset-0 bg-auto bg-opacity-30 backdrop-contrast-50 z-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full md:w-[45%] sm:w-3/4  bg-white z-10 flex flex-col p-0 shadow-[-4px_0_12px_rgba(0,0,0,0.1)] md:max-w-[690px]"
            >
              {/* Modal Header */}
              <div className="flex justify-between py-6 md:py-9 px-4 md:px-8 items-center border-b-[1px] border-[#E0E0E0] w-full">
                <h2 className="text-xl md:text-[24px] lg:text-[32px] p-2 kanit-regular text-[#26272D] font-normal">
                  Contact Ntokozo Maseko
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent border-none cursor-pointer text-[#26272D] flex items-center font-kanit"
                >
                  <div className="flex gap-3 m-1 justify-around">
                    <div className="text-[16px]  text-[#26272D] font-normal">
                      Exit
                    </div>
                    <Img
                      className="object-contain grayscale contrast-200"
                      src="./vector.png"
                      alt="Exit"
                    />
                  </div>
                </button>
              </div>

              {/* Modal Form */}
              <form className="overflow-y-auto flex-1 flex p-4 md:p-6 flex-col gap-6 w-full h-full">
                <div className="flex flex-col gap-2">
                  <label className="text-base md:text-[18px] font-kanit text-[#26272D] leading-5 font-normal">
                    Name & Surname
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your name here"
                    className="text-[#A5A5A5] text-[16px] font-light w-full py-4 md:py-7 px-0 border-t-0 border-l-0 border-r-0 border-b border-gray-300 text-sm focus:outline-none focus:border-gray-500 focus:ring-0"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="mt-2 md:mt-5 text-base md:text-[18px] text-[#26272D] leading-5 font-normal">
                    Your email address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="Your email address here"
                    className="text-[#A5A5A5] text-[16px] font-light w-full py-4 md:py-7 px-0 border-t-0 border-l-0 border-r-0 border-b border-gray-300 text-sm focus:outline-none focus:border-gray-500 focus:ring-0"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="mt-2 md:mt-5 text-base md:text-[18px] text-[#26272D] leading-5 font-normal">
                    Phone number
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Phone number here"
                    className="text-[#A5A5A5] text-[16px] font-light w-full py-4 md:py-7 px-0 border-t-0 border-l-0 border-r-0 border-b border-gray-300 text-sm focus:outline-none focus:border-gray-500 focus:ring-0"
                  />
                </div>

                <div className="flex justify-around flex-col gap-2">
                  <label className="mt-2 md:mt-5 text-base md:text-[18px] text-[#26272D] leading-5 font-normal">
                    Shoot detail
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Pre-wedding shoot, Birthday shoot, Single portrait"
                    className="text-[#A5A5A5] text-[16px] font-light w-full py-4 md:py-7 px-0 border-t-0 border-l-0 border-r-0 border-b border-gray-300 text-sm focus:outline-none focus:border-gray-500 focus:ring-0"
                  />
                </div>

                <div className="flex justify-center mt-4 md:mt-5">
                  <button
                    type="submit"
                    className="mt-6 md:mt-10 bg-gray-900 h-[48px] text-white border-none rounded-full py-1 px-6 text-[16px] cursor-pointer transition-colors duration-200 hover:bg-black"
                  >
                    Submit request
                  </button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
export default Contact;