import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://max-themes.net/demos/craft/upload/coffee-EAGW4H9-768x1152.jpg",
  "https://max-themes.net/demos/craft/upload/coffee-cafe-barista-apron-uniform-brew-concept-PUPM2KN-768x513.jpg",
  "https://max-themes.net/demos/craft/upload/fresh-coffee-with-croissant-DC7H79J-768x512.jpg",
  "https://max-themes.net/demos/craft/upload/barista-prepare-coffee-working-order-concept-PBZ6VQ6-768x343.jpg",
  "https://max-themes.net/demos/craft/upload/close-up-of-coffee-machine-in-cafe-PUW782D-768x1152.jpg",
];

const Galeria = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleZoom = () => {
    setIsZoomed(true);
  };

  const handleCloseZoom = () => {
    setIsZoomed(false);
  };

  return (
    <div className="flex justify-center items-center p-8 bg-[#f9f4ea] ">
      <button
        onClick={handlePrev}
        className="p-2 bg-gray-300 rounded-full mr-4 hover:bg-gray-400 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <div className="relative w-4/5 h-96">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full"
          >
            <img
              src={images[currentIndex]}
              alt="Gallery Image"
              className="w-full h-full object-cover rounded-lg shadow-md cursor-pointer transition-opacity hover:opacity-75"
              onClick={handleZoom}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        onClick={handleNext}
        className="p-2 bg-gray-300 rounded-full ml-4 hover:bg-gray-400 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isZoomed && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={handleCloseZoom}
              className="absolute top-4 right-4 p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <motion.img
              src={images[currentIndex]}
              alt="Zoomed Gallery Image"
              className="w-4/5 h-auto object-cover rounded-lg shadow-md"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Galeria;
