import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllUsers() {
 const  [users,setUsers]=useState([])
 
 useEffect(()=>{
    axios.get('http://localhost:3333/users')
    .then(result=>setUsers(result.data))
    .catch(error=>console.log(error))
 },[])


 const handleDelete=(id)=>{
    axios.delete(`http://localhost:3333/user/${id}`)
    .then(result=>{console.log(result)
       window.location.reload()
    })
    .catch(error=>console.log(error))
 }

  return (
    <>
    <div className="container">
      <h1>All Users</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Num</th>
            <th scope="col">Name</th>
            <th scope="col">Brand</th>
            <th scope="col">Pasword</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.Brand}</td>
                <td>{user.Price}</td>
                <td>{user.Size}</td>
                <Link to={`/update/${user._id}`} className="btn btn-success">Update</Link>
               <button className="btn btn-danger" 
               onClick={(e)=>handleDelete(user._id)}>Delete</button>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
    </>
  );
}
