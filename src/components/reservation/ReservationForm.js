import React from "react";
import "./ReservationForm.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object({
  name: yup.string().required("Full name is a required field!"),
  email: yup
    .string()
    .required("Email is a required field!")
    .email("Email is not valid!"),
  telephone: yup
    .string()
    .required("Telephone is a required field!")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Please enter a valid phone number"
    ),
  guests: yup
    .number()
    .min(1, "There must be at least 1 guest!")
    .required("Please specify number of guests per table!"),
  date: yup.string().required("Please select date and time!"),
});

function ReservationForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const formSubmit = () => {
    toast.success("You have reserved your table. Enjoy!");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(formSubmit)}>
        <fieldset>
          <div className="field">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              placeholder="Your Full Name"
              name="name"
              {...register("name")}
            />
            <span className="error-message">{errors.name?.message}</span>
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="sample@email.com"
              name="email"
              {...register("email")}
            />
            <span className="error-message">{errors.email?.message}</span>
          </div>
          <div className="field">
            <label htmlFor="telephone">Phone</label>
            <input
              type="tel"
              placeholder="06 XXX XXX XXX"
              name="telephone"
              {...register("telephone")}
            />
            <span className="error-message">{errors.telephone?.message}</span>
          </div>
          <div className="field occasion">
            <label htmlFor="occasion">Occasion</label>
            <div className="options">
              <select name="occasion" {...register("occasion")}>
                <option value="select">Please select an occasion</option>
                <option value="birthday">Birthday</option>
                <option value="engagement">Engagement</option>
                <option value="anniversary">Anniversary</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="guests">Guests</label>
            <input
              type="number"
              placeholder="2"
              min="1"
              name="guests"
              {...register("guests")}
            />
            <span className="error-message">{errors.guests?.message}</span>
          </div>
          <div className="field">
            <label htmlFor="seating">Seating</label>
            <div className="radio-buttons">
              I prefer outdoor
              <input type="radio" name="seating" {...register("seating")} />
            </div>
            <div className="radio-buttons">
              I prefer indoor
              <input
                defaultChecked
                type="radio"
                name="seating"
                {...register("seating")}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="date">Date & Time</label>
            <input type="datetime-local" name="date" {...register("date")} />
            <span className="error-message">{errors.date?.message}</span>
          </div>
          <button className="reserve-btn" type="submit">
            Reserve
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default ReservationForm;
