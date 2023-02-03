import React from "react";
import "./SpecialsCard.css";
import Dish1 from "../assets/salad.jpg";
import Dish2 from "../assets/bruschetta1.jpg";
import Dish3 from "../assets/creme.jpg";
import { MdDeliveryDining } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SpecialsCard = () => {
  const specialMenus = [
    {
      id: 1,
      image: Dish1,
      title: "Greek Salad",
      price: "$12.99",
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
      order: "Order a delivery",
    },
    {
      id: 2,
      image: Dish2,
      title: "Bruschetta",
      price: "$5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
      order: "Order a delivery",
    },
    {
      id: 3,
      image: Dish3,
      title: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
      order: "Order a delivery",
    },
  ];

  return (
    <div className="special-section">
      {specialMenus.map((item) => (
        <div className="special-card-container" key={item.id}>
          <div className="image-container">
            <img src={item.image} alt="Special dessert" />
          </div>
          <div className="special-card-text">
            <div className="special-card-title">
              <h3>{item.title}</h3>
              <h3 className="price-tag">{item.price}</h3>
            </div>
            <p>{item.description}</p>
            <NavLink to="#">
              <h4>
                {item.order}
                {
                  <MdDeliveryDining
                    size={30}
                    style={{ color: "#333333", marginLeft: "10px" }}
                  />
                }
              </h4>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecialsCard;
