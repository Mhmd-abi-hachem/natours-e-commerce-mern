import React, { useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { useAuthStatus } from "../authentication/useAuthStatus";
import Button from "../../shared/ui/Button";
import { useBookTour } from "./useBookTour";

function TourBooking({ tour }) {
  const { authStatus } = useAuthStatus();
  const { tourId } = useParams();
  const { createCheckoutSession } = useBookTour(tourId);

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isCancelled = queryParams.get("checkout") === "cancelled";

  // handle payment cancellation and clean up the url
  useEffect(() => {
    if (isCancelled) {
      toast.error("Payment Canceled");
      const newSearch = new URLSearchParams(location.search);
      newSearch.delete("checkout");
      navigate(`${location.pathname}?${newSearch.toString()}`, {
        replace: true,
      });
    }
  }, [isCancelled, navigate, location]);

  return (
    <footer className="section-cta">
      <div className="cta">
        <div className="cta__img cta__img--logo">
          <img src="/logo-white.png" alt="Natours app logo" />
        </div>

        <div className="cta__content">
          <h2 className="heading-secondary">What are you waiting for?</h2>
          <p className="text-3xl">{`${tour.duration} days. 1 adventure. Infinite memories. Make it yours today!`}</p>

          {authStatus?.isLoggedIn ? (
            <Button
              variation="primary"
              size="large"
              onClick={createCheckoutSession}
            >
              Book tour now!
            </Button>
          ) : (
            <Link to="/login">
              <Button variation="primary" size="large">
                Log in to book tour
              </Button>
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}

export default TourBooking;
