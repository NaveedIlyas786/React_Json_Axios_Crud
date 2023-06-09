import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ReadStudent() {
  const [data, setData] = useState([]);
  const {id} =useParams();

  useEffect(() => {
    //! To fetch all data once/at a time
    axios
      .get("http://localhost:3000/users/"+id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
        <div className="w-50 m-auto mt-5  border bg-white shadow px-5 pt-3 pb-3 rounded">
          <h3>Details Of User</h3>
          <div className="mb-2">
            <strong>ID: <span className='fw-normal ms-4'>{data.id}</span> </strong>
          </div>
          <div className="mb-2">
            <strong>Name: <span className='fw-normal ms-4'>{data.name}</span> </strong>
          </div>
          <div className="mb-2">
            <strong>Email: <span className='fw-normal ms-4'>{data.email}</span> </strong>
          </div>
         
          <div className="mb-2">
            <strong>Gender: <span className='fw-normal ms-4'>{data.gender}</span></strong>
          </div>
        
          <div className="d-flex justify-content-start mt-3">
          <Link
                      className="btn btn-md btn-success me-4"
                     to={`/edit/${data.id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      className="btn btn-md btn-primary me-2"
                     to='/'
                    >
                      Back
                    </Link>
          </div>
        </div>
  )
}
