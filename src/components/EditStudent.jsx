import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditStudent() {
  const navigate=useNavigate();

  // const [data, setData] = useState([]);
  const {id} = useParams();
  
  const [values, setValues] = useState({
    name: "",
    email: "",
    gender: "",
  });

 

  useEffect(() => {
    //! To fetch all data once/at a time
    axios 
      .get("http://localhost:3000/users/" + id)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, []);

  const onChangehandler=()=>{
    setValues({
    ...values,
      [event.target.name]:event.target.value
    })
  }
  const handleUpdate=(e)=>{
    e.preventDefault();
    axios.put("http://localhost:3000/users/"+id,values)
    .then((res)=>{
      console.log(res);

      toast.info("Updated Successfully!", {
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

    .catch((err)=>{
      console.log(err);
    })
  }

  return (
      <div className="w-50 mt-5 border bg-white m-auto shadow px-5 pt-1 pb-2 rounded">
        <h1>Edit User Details</h1>
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label>Name</label>
            <input onChange={onChangehandler} value={values.name} name='name'  type="text" className="form-control" placeholder="Name" />
          </div>
         
          <div className="form-group">
            <label>Email</label>
            <input onChange={onChangehandler} value={values.email} name='email'  type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="col-md-12">
            <label htmlFor="inputState" className="form-label">
              Gender
            </label>
            <select onChange={onChangehandler} value={values.gender} name='gender'  id="inputState" className="form-select">
              <option>Choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          
          <button
            type="submit"
            className="btn mt-2 me-3 btn-success"
          >
            Update
            <ToastContainer/>
          </button>
          <Link to="/" className="btn mt-2 me-3 btn-primary">
            back
          </Link>
        </form>
      </div>
  )
}
