import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, deleteUser } from "../features/userDetailSlice";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const Read = () => {
  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <>
      <div>User list</div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((ele, index) =>
              <tr key={index}>
                <td>
                  {ele.name}
                </td>
                <td>
                  {ele.email}
                </td>
                <td>
                  {ele.age}
                </td>
                <Link to={`/edit/${ele.id}`} className="card-link">
                  Edit
                </Link>
                <Link
                  onClick={() => dispatch(deleteUser(ele.id))}
                  className="card-link"
                >
                  Delete
                </Link>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Read;



