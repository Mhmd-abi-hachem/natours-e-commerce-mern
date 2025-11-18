import React from "react";
import { HiOutlineClock, HiOutlineMapPin } from "react-icons/hi2";

function TourHeader({ tour }) {
  console.log(tour.name.length);
  return (
    <header className="section-header">
      <div className="header__hero-overlay">&nbsp;</div>
      <img
        className="header__hero-img "
        src={`/tours/${tour.imageCover}`}
        alt={`${tour.name} tour image`}
      />

      <div
        className={`absolute bottom-[40vw] sm:bottom-[15vw] ${
          tour.name.length >= 16 ? "md:bottom-[8vw]" : "md:bottom-[10vw]"
        } lg:bottom-[12vw] left-1/2 -translate-x-1/2 flex flex-col items-center z-3`}
      >
        <h1 className="heading-primary">
          <span>{`${tour.name} tour`}</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center text-[#f5f5f5] mt-12 gap-6 sm:gap-10">
          <div className="flex items-center  gap-2 sm:gap-4 font-bold  uppercase">
            <HiOutlineClock className="w-8 h-8 md:w-10 md:h-10 drop-shadow-xl" />
            <span className="text-2xl md:text-3xl">{`${tour.duration} days`}</span>
          </div>

          <div className="flex items-center  gap-2 sm:gap-4  font-bold  uppercase mt-4 sm:mt-0">
            <HiOutlineMapPin className="w-8 h-8 md:w-10 md:h-10 drop-shadow-xl" />
            <span className="text-2xl md:text-3xl">
              {tour.startLocation.description}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TourHeader;
