import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const AddData = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    salary: "",
    age: "",
  });

  const { name, salary, age } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("add Data user:", user);
    await axios
      .post(
        "http://dummy.restapiexample.com/api/v1/create",
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept",
        user
      )
      .then((res) => {
        console.log("Add Data:", res);
      })
      .catch((err) => {
        console.log("Err Add Data:", err);
      });
    history.push("/");
  };
  return (
    <div className="container">
      <h1>This is add data</h1>
      <div className="add-form-row">
        <div className="row">
          <div className="col">
            <Link to="/">
              <button
                className="btn btn-md btn-primary mt-2 mb-2"
                style={{ float: "right" }}
              >
                Back To Home
              </button>
            </Link>
          </div>
        </div>
        <form onSubmit={(e) => onSubmit(e)}>
          <div class="form-group mb-3">
            <label for="exampleInputPassword1">Employee Name</label>
            <input
              type="text"
              name="name"
              class="form-control"
              id="exampleInputPassword1"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div class="form-group mb-3">
            <label for="exampleInputPassword1">Employee Salary</label>
            <input
              type="text"
              name="salary"
              class="form-control"
              id="exampleInputPassword1"
              value={salary}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div class="form-group mb-3">
            <label for="exampleInputPassword1">Employee Age</label>
            <input
              type="text"
              name="age"
              class="form-control"
              id="exampleInputPassword1"
              value={age}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddData;
