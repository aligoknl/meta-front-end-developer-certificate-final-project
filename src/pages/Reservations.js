import React from "react";
import ReservationForm from "../components/reservation/ReservationForm";

const Reservations = () => {
  return (
    <div>
      <div className="res-content-wrapper">
        <div className="res-content-container">
          <div className="text">
            <h2>Little Lemon is here for your enjoyable time.</h2>
            <p>
              Little Lemon is a charming neighborhood bistro that serves simple
              food and classic cocktails in a lively but casual environment. The
              restaurant features a locally sourced menu with daily specials.
            </p>
            <p>Book a table and enjoy your day.</p>
          </div>
          <div className="form">
            <h1>Reserve a Table</h1>
            <p>
              Please fill in and submit form to book your reservation at Little
              Lemon.
            </p>
            <ReservationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
