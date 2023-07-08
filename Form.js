import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = () => {
  const [user, setUser] = useState({
    name: "",
    age: null,
    salary: "",
    hobby: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("PASTE YOUR SHEET URL HERE", user);
      toast("📝 Added to sheets successfully!!", {
        position: "top-right",
        autoClose: 5000,
        transition: Zoom,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      toast.error("Something went wrong", {
        transition: Zoom,
      });
    }
  };

  const handleUser = (name, value) => {
    const updatedUser = { ...user, [name]: value };
    setUser(updatedUser);
  };

  return (
    <>
      <ToastContainer />
      <section>
        <h1>React Sheets</h1>
        <div>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              onChange={(e) => handleUser(e.target.name, e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Enter your age"
              name="age"
              onChange={(e) => handleUser(e.target.name, e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Enter your salary"
              name="salary"
              onChange={(e) => handleUser(e.target.name, e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Enter your hobby"
              name="hobby"
              onChange={(e) => handleUser(e.target.name, e.target.value)}
              required
            />
            <button>Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
