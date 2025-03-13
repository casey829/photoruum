import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

 function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full p-6">
      <div className="relative w-full max-w-xl">
        <img 
          src="./image.jpeg" 
          alt="Ntokozo Maseko" 
          className="w-full h-auto rounded-lg shadow-md"
        />
        
        {/*This is the  form that hovers over half the image and extends to the edge of the screen*/}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 bottom-0 right-0 bg-white shadow-lg overflow-y-auto"
              style={{
                left: "50%", 
                width: "calc(100% - 50%)", 
                maxWidth: "calc(100vw - 50%)" 
              }}
            >
              <div className="flex justify-between items-center p-6 pb-3">
                <h2 className="text-lg font-bold">Contact Ntokozo Maseko</h2>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-black"
                >
                  ✕
                </button>
              </div>
              
              <form className="p-6 pt-0 space-y-3">
                <div>
                  <label className="block text-sm mb-1">Name & Surname</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-sm mb-1">Your email address</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-sm mb-1">Phone number</label>
                  <input 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-sm mb-1">About about</label>
                  <textarea 
                    placeholder="e.g. I'm wanting to hire Christie Jones, to style and cut..." 
                    className="w-full p-2 border border-gray-300 rounded text-sm h-20"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full bg-black text-white py-2 px-4 rounded-full text-sm"
                  >
                    Submit request
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Caption and Button */}
      <div className="flex justify-between items-center w-full max-w-xl mt-4">
        <p className="text-sm">Ntokozo Maseko • April 2024</p>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-black text-white rounded-full text-sm"
        >
          Contact
        </button>
      </div>
    </div>
  );
}


export default Contact;
