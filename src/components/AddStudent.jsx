import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddStudent() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    gender: "",
  });
  const navigate = useNavigate();

  const onChangehandler = () => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", values)
      .then((res) => {
        console.log(res);

        toast.success("User Added Successfully!", {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        setTimeout(() => {
          
          navigate("/");
        }, 2400);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("ff");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Add User</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              name="name"
              onChange={onChangehandler}
              type="text"
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              onChange={onChangehandler}
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="inputState" className="form-label">
              Gender
            </label>
            <select
              name="gender"
              onChange={onChangehandler}
              id="inputState"
              className="form-select"
            >
              <option>Choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="col-md-12">
            <label htmlFor="inputState" className="form-label">
              Subject
            </label>
            
          </div>

          <button type="submit" className="btn mt-5 me-3 btn-success">
            Submit
            <ToastContainer />
          </button>
          <Link to="/" className="btn mt-5 me-3 btn-primary">
            back
          </Link>
        </form>
      </div>
    </div>
  );
}
