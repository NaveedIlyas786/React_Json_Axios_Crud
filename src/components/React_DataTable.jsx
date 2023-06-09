import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function React_DataTable() {
  const [usersInfo, setUsersInfo] = useState([]);
  const [search, setSearch] = useState("");
  const [filterusers, setFilterUsers] = useState([]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      toast.error("User Deleted Successfully!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      setTimeout(() => {
        // navigate("/");
        // location.reload(); //! Without it we have to refresh the page to see new remaining data, so therefore we use it, it will automatically refresh the page and delete the entry
        getUsers();
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Error deleting user");
    }
  };

  const getUsers = async () => {
    const result = await axios.get("http://localhost:3000/users");
    try {
      setUsersInfo(result.data);
      setFilterUsers(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const Columns = [
    {
      name: (
        <strong className="headersTitle" style={{ textAlign: 'center' }}>
          ID
        </strong>
      ),
      selector: (row) => row.id,
      sortable: true,
      center: true,
    },
    {
      name: (
        <strong className="headersTitle" style={{ textAlign: 'center' }}>
          Names
        </strong>
      ),
      selector: (row) => row.name,
      sortable: true,
      center: true,
    },
    {
      name: (
        <strong className="headersTitle" style={{ textAlign: 'center' }}>
          Emails
        </strong>
      ),
      selector: (row) => row.email,
      sortable: true,
      center: true,
    },
   
    {
      name: (
        <strong className="headersTitle" style={{ textAlign: 'center' }}>
          Gender
        </strong>
      ),
      selector: (row) => row.gender,
      sortable: true,
      center: true,
    },
    
    {
      name: (
        <strong className="headersTitle" style={{ textAlign: 'center' }}>
          Actions
        </strong>
      ),
      cell: (row) => (
        <div className="actions-container" style={{ textAlign: 'center' }}>
          <Link className="btn btn-sm btn-info me-2" to={`/read/${row.id}`}>
            View
          </Link>
          <Link className="btn btn-sm btn-warning me-2" to={`/edit/${row.id}`}>
            Edit
          </Link>
          <button className="btn btn-sm btn-danger me-2" onClick={() => handleDelete(row.id)}>
            Delete
          </button>
        </div>
      ),
    },
    
  ];
  
  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    const mysearchresult = usersInfo.filter((user) => {
      return user.name.toLowerCase().match(search.toLowerCase());
    });
    setFilterUsers(mysearchresult);
  }, [search]);

  return (
    <>
      <div className="datatable Parent text-center px-5 shadow table-responsive">
        <DataTable
          title="JSON Server CRUD"
          columns={Columns}
          data={filterusers}
          fixedHeader
          fixedHeaderScrollHeight="398px"
          selectableRows
          selectableRowsHighlight
          highlightOnHover
          actions={
            <Link to="/add" className="btn btn-success">
              ADD+
            </Link>
          }
          pagination
          subHeader
          subHeaderComponent={
            <div className="d-flex">
              <input
                type="text"
                className="form-control form-control-md"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-secondary ms-2 btn-md">Search</button>
            </div>
          }
        />
      </div>
    </>
  );
}



