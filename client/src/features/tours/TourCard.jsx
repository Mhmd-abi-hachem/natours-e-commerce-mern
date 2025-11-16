import React from "react";

import TourCardHeader from "./TourCardHeader";
import TourCardContent from "./TourCardContent";
import TourCardFooter from "./TourCardFooter";

function TourCard({ tour }) {
  return (
    <div className="rounded-xl overflow-hidden bg-[#fff] shadow-2xl transition-all duration-300 flex flex-col w-full max-w-2xl sm:w-[90%] md:w-[80%] lg:w-full mx-auto">
      <TourCardHeader tour={tour} />

      <TourCardContent tour={tour} />

      <TourCardFooter tour={tour} />
    </div>
  );
}

export default TourCard;
