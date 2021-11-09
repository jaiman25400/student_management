import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import "./Styles.css";
import { Link } from "react-router-dom";

const EditData = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    employee_name: "",
    employee_salary: "",
    employee_age: "",
  });

  const { employee_name, employee_salary, employee_age } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://dummy.restapiexample.com/api/v1/update/${id}`,
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept",
      user
    );
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios
      .get(
        `http://dummy.restapiexample.com/api/v1/employee/${id}`,
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      )
      .then((res) => {
        console.log("Edit: ", res);
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log("edit Err:", err);
      });
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
          <div className="form-group mb-3">
            <label for="exampleInputPassword1">Employee Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="employee_name"
              value={employee_name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <label for="exampleInputPassword1">Employee Salary</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="employee_salary"
              value={employee_salary}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <label for="exampleInputPassword1">Employee Age</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="employee_age"
              value={employee_age}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <button className="btn btn-warning btn-block mt-3">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditData;
