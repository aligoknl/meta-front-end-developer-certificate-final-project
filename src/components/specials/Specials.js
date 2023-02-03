import React from "react";
import "./Specials.css";
import SpecialsCard from "../specialCard/SpecialsCard";

const Specials = () => {
  return (
    <div className="specials-section-container">
      <div className="specials-section-title">
        <h1>This Week's Specials</h1>
        <div className="btn-container">
          <button className="btn btn-menu">Online Menu</button>
        </div>
      </div>
      <SpecialsCard />
    </div>
  );
};

export default Specials;
