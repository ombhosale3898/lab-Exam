import React, { useState } from "react";
import axios from  'axios';
import {  useNavigate } from "react-router-dom";

export default function Login() {
  //const [Id,setId]= useState()
   const [name,setName]= useState()
   const [Brand,setBrand]= useState()
   const [Price,setPrice]= useState()
   const [Size,setSize]= useState()
   //const [password,setPassword]= useState()
   const navi=useNavigate()
 
   const handelSubmit = (e) =>{
     e.preventDefault()
     axios.post("http://localhost:3333/user",{name,Brand,Price,Size})
     .then(result=>{
      console.log(result)
      navi('/')
     })
     .catch(error=>console.log(error))
   }
  return (
    <div className="container pt-5 " >
      <form onSubmit={handelSubmit }>
      {/* <div class="form-group">
          <label for="exampleInputPassword1">Id</label>
          <input
            type="Number"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Number"
            onChange={(e)=>setId(e.target.value)}
          />
        </div> */}
      <div class="form-group">
          <label for="exampleInputPassword1">Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Name"
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Brand</label>
          <input
            type="Text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Brand"
            onChange={(e)=>setBrand(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Price</label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Price"
            onChange={(e)=>setPrice(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Size</label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Size"
            onChange={(e)=>setSize(e.target.value)}
          />
        </div>
        
        <button type="submit" class="btn btn-primary " >
          Register
        </button>
      </form>
    </div>
  );
}
