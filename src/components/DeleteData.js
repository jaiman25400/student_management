import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const DeleteData = (props) => {
  let history = useHistory();
  const { id } = useParams();
  function deleteUser() {
    axios
      .delete(
        `http://dummy.restapiexample.com/api/v1/delete/${id}`,
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      )
      .then((res) => {
        console.log("Delete res", res);
        history.push("/");
      })
      .catch((err) => {
        console.log("err del", err);
      });
  }
  return (
    <div className="container">
      Are you sure You want to delete the Data ?
      <button className="btn btn-danger ml-3" onClick={(e) => deleteUser(e)}>
        Delete
      </button>
    </div>
  );
};

export default DeleteData;
