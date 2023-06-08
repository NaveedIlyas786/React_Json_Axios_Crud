import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="bg-primary ">
        <div className="container ">
      <ul className="nav d-flex align-items-center justify-content-between">
        <li className="nav-item d-flex align-items-center justify-content-between">
        <Link className="nav-link active fs-5 text-white" to='/' aria-current="page" >
          <h2 className="text-center">React DataTable</h2>
          </Link>
         
        </li>
        
      </ul>
    </div>
    </section>
  );
};

export default Navbar;
