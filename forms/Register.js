import './Register.css'
import Axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
function Register(){
  const datas={
    firstname:"",
    lastname:"",
    email:"",
    role:"",
    gender:"",
    username:"",
    password:""
  }
  const [enter,setEnter]=useState(datas);
  const navigate=useNavigate()
const handle=()=>{
 //event. preventdefault();
  //console.log("hi  my name is danay hayelom  ")
  Axios.get("http://192.168.137.173:8080/api/account/hello").then((result)=>{
    console.log(result)
  })
}
const inputes=(e)=>{
  const {name,value}=e.target;
  setEnter({...enter,[name]:value})
}

function handles(){
 const data = {
    FIRSTNAME:enter.firstname,
    LASTNAME:enter.lastname,
    EMAIL:enter.email,
    ROLE:enter.role,
    GENDER:enter.gender,
    USERNAME:enter.username,
    PASSWORD:enter.password
  }
  
  Axios.post("http://192.168.137.173:8080/api/account/register",
  data
  ).then((response)=>{
    console.log(response)
  })
  navigate('/navbar');
}
    return(<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h1>Internship Management</h1>
    
    <div className="forms">
      <label htmlFor="firstname">First Name:</label>
      <input type="text" id="firstname" name="firstname"value={enter.firstname} onChange={inputes} />

      <label htmlFor="lastname">Last Name:</label>
      <input type="text" id="lastname" name="lastname" value={enter.lastname} onChange={inputes} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={enter.email} onChange={inputes} />

      <label htmlFor="role">Role:</label>
      <select id="role" name="role" value={enter.role} onChange={inputes}>
        <option value="ADMIN">ADMIN</option>
        <option value="STUDENT">STUDENT</option>
      </select>
      <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={enter.gender} onChange={inputes}>
          <option value="MALE">MALE</option>
          <option value="FEMALE">FEMALE</option>
        
        </select>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username"value={enter.username} onChange={inputes} />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" value={enter.password} onChange={inputes} />

      <button type="submit" onClick={handles}>Register</button>
    </div>
  </div>);
}
export default Register