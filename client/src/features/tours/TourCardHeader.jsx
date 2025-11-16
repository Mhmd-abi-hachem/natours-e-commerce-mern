import React from "react";

function TourCardHeader({ tour }) {
  return (
    <div className="relative">
      <div className="card-picture">
        <div className="card-picture--overlay">&nbsp;</div>
        <img
          className="object-cover h-full w-full"
          src={`/tours/${tour.imageCover}`}
          alt={`${tour.name} tour image`}
        />
      </div>
      <h3 className="heading-tertirary">
        <span>{tour.name}</span>
      </h3>
    </div>
  );
}

export default TourCardHeader;
