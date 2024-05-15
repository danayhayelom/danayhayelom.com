import React,{useState,useEffect} from 'react'
function Danu(){
const first={username:"",
email:"",
password:""};
const [enter,setenter]=useState(first);
const [errors,seterror]=useState({});
const [issubmit ,setsubmite]=useState(false)
const handle=(e)=>{
    const {name,value}=e.target;
    setenter({...enter,[name]:value});
    
}
const handlesub=(e)=>{
    e.preventDefault();
    seterror(validate(enter));
setsubmite(true);
}
useEffect(()=>{
    if(Object.keys(errors).length === 0 && issubmit){
        console.log(enter)
    }
},[enter]);
const validate=(values)=>{
const error={};
const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

if(!values.username){
error.username="Username is Required";
}

if(!values.email){
error.email="Email is Required"
}else if(!regex.test(values.email)){
    error.email="This is not the valide email!!!"
}
if(!values.password){
    error.password="Password is Required";
}
else if(values.password.length < 4){
    error.password=" Password is required more thatn 4 character"
}
return error
}
    return(<div className="login-form">
        {        Object.keys(errors).length === 0 && issubmit ?alert("sucessfull enter")
            
        :"enter you agine"
}
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
    <button> Submite</button>
    </form>
</div>);
}
export default Danu