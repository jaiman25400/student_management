import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    loadUsers();
  });
  const loadUsers = async () => {
    const result = await axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        if (res) {
          setUser(res.data.data);
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <div className="container mt-3">
      <h2 className="mt-4 mb-4">API Call</h2>
      <div className="row">
        <div className="col">
          <Link to="/addData">
            <button
              className="btn btn-lg btn-primary mt-2 mb-2"
              style={{ float: "right" }}
            >
              Add Employee
            </button>
          </Link>
        </div>
      </div>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Salary</th>
            <th scope="col">Age</th>
            <th scope="col">Profile Picture</th>
          </tr>
        </thead>
        <tbody>
          {user.length > 1 ? (
            user.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.employee_name}</td>
                <td>{user.employee_salary}</td>
                <td>{user.employee_age}</td>
                <td>{user.profile_image}</td>
                <td>
                  <Link
                    class="btn btn-outline-primary mr-2 ml-3"
                    to={`/editData/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger ml-3"
                    to={`/deleteData/${user.id}`}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <div>No Data to Display</div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
