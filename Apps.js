import React,{useState,useEffect} from 'react'
import Axios from 'axios'
function Apps(){
const first={
    username:"",
    email:"",
    passwrod:""
};
const[ enter,setenter]=useState(first);
const[errors,seterrors]=useState({});
const[issubmit,setsubmite]=useState(false);


const handle=(e)=>{
    const {name,value}=e.target;
    setenter({...enter,[name]:value})
}
const handlesub=(e)=>{
e.preventDefault();
 seterrors(validate(enter))
 setsubmite(true)
}
const hande= (enters) =>{
    Axios.post("http://localhost:8080/danay/login",{
        
Username:enters.username,
Email:enters.email,
Password:enters.password 

    }).then(()=>{
        alert("successfully register");
    })
}
useEffect(()=>{
if(Object.keys(errors).length === 0 && issubmit){
    console.log(enter);
}
},[errors]);
const validate=(values)=>{
const error={};
const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
if(!values.username){
error.username="username is required"
}
if(!values.email){
    error.email="email is required"
}
if(!values.password){
    error.password="password is required"
}
return error
}

    return(<div className="login-form">
        
        <h1> Login Form </h1>
        <form onSubmit={handlesub}>
        <div className="first">
<label>Username</label>
<input type="text" placeholder="username"name="username" value={enter.username} onChange={handle}/>
<p>{errors.username}</p>
        </div>
        <div className="second">
<label>Email</label>
        <input type="email" placeholder="Email"name="email" value={enter.email} onChange={handle}/>
        <p>{errors.email}</p>
        </div>
        <div className="third">
<label>Password</label>
<input type="password" placeholder="password" name="password" value={enter.password} onChange={handle}/>
<p>{errors.password}</p>
        </div>
        <button>Submite</button>
        </form>
    </div>);
}
export default Apps