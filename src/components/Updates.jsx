import React from "react";
import Marquee from "react-fast-marquee";
import { MdLabelImportant } from "react-icons/md";

const Updates = () => {
  return (
    <div className="flex mx-2 my-4 mb-5 items-center gap-2 p-2 text-xs md:text-base bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500 text-white rounded shadow">
      {/* Badge */}
      <p className="bg-white text-amber-700 font-semibold px-4 py-2 rounded shadow-md whitespace-nowrap">
        Flavory Updates
      </p>

      {/* Marquee content */}
      <Marquee autoFill={true} pauseOnHover={true} speed={50}>
        {[
          "Try our new Italian Pasta Delight – Now available with a special garlic cream sauce!",
          "Get 20% off on all Vegan Meals this weekend only!",
          "Introducing our Summer Special Smoothie Collection – Fresh, Fruity, Fantastic!",
          "Enjoy free delivery on orders over $30. Limited time offer!",
          "New Menu Alert: Sizzling Asian Stir-Fry Bowls now available!",
          "Vote for your favorite dish and win a free meal next week!",
        ].map((text, index) => (
          <a
            key={index}
            href="#"
            className="ml-10 flex items-center gap-1 hover:text-white hover:bg-amber-600 px-2 py-1 rounded transition duration-300"
          >
            <MdLabelImportant className="text-white text-xl" />
            {text}
          </a>
        ))}
      </Marquee>
    </div>
  );
};

export default Updates;

