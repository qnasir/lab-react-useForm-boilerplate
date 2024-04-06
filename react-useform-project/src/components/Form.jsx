import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Forms = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmitHandler = (data) => {
    toast.success("Registration Complete", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    console.log("data:", data);
  };

  return (
    <div className="form-container">
      <ToastContainer />
      <fieldset>
        <legend>Fill this Form</legend>
        <form onSubmit={handleSubmit(formSubmitHandler)}>

          <label> First Name:</label>
          <input
            type="text"
            name="firstName"
            {...register("firstName", {
              required: "Please enter First Name",
              minLength: { value: 3, message: "Minimum 2 char required" },
            })}
          />
          {<p className="err">{errors.firstName?.message}</p>}

          <label> Last Name:</label>
          <input
            type="text"
            name="lastName"
            {...register("lastName", {
              required: "Please enter Last Name",
              minLength: { value: 1, message: "Minimum 1 char required" },
            })}
          />
          {<p className="err">{errors.lastName?.message}</p>}

          <label> Email Address:</label>
          <input
            type="text"
            name="email"
            {...register("email", {
              required: "Please enter email",
              pattern:{
                value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter valid email"
              }
            })}
          />
          {<p className="err">{errors.email?.message}</p>}

          <label> Password:</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: "Please enter Password",
              minLength: { value: 8, message: "Minimum 8 char required" },
              pattern:{
                value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[a-zA-Z]).{8,}$/,
                message: "Please enter valid password"
              }
            })}
          />
          {<p className="err">{errors.password?.message}</p>}

          <input type="submit" value="Register" />
          <button
            onClick={() => {
              reset();
            }}
          >
            RESET
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default Forms;
