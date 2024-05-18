import React,{useState,useEffect} from 'react';
import Axios from 'axios';

function Signin(){
const [username1 ,setusername]=useState('');
const [password1,setpassword]=useState('');
const [email1, setemail]=useState('');

const data=()=>{
Axios.post("http://localhost:3001/apt/insert",{
username:username1,
password:password1,
email:email1

}).then(()=>{

    alert("succefull insert ");
});

};

    return(<div className="lbl">
        <label> Username </label>
<input type="text" name="username1" onChange={(e)=>{
    setusername(e.target.value)
    setusername("")
}} /><br/>
<label> Password </label>
<input type="password" name="password1" onChange={(e)=>{
    setpassword(e.target.value)
    setpassword("")
}} /><br/>
<label>Email</label>
<input type="email" name="email1"onChange={(e)=>{
setemail(e.target.value);
setemail("")
}}/><br/>
<button onClick={data} > submite</button>
    </div>);
}
export default Signin