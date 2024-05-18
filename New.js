import React,{useState,useEffect} from 'react'
import Axios from 'axios'
function New(){
const [user,setuser]=useState('');
const [pass,setpass]=useState('');
const [ema,setema]=useState('');
const [list ,setlist]=useState([]);
function handeuser(event){
    setuser(event.target.value);
    
}
function handepass(event){
    setpass(event.target.value);

}
function handeema(event){
    setema(event.target.value);
    
}
useEffect(()=>{
    Axios.get("http://localhost:3002/mekelle/eitm").then((response)=>{
setlist(response.data);

    });
},[]);
function handle(){
    Axios.post("http://localhost:3002/mekelle/university",{
userName:user,
Password:pass,
Email:ema
 }
 ).then(()=>{
    alert("you are succesfull register");
 });
};


return(<div>
    <label>USERNAME</label>
<input type="text" value={user} onChange={handeuser}/><br/>
<label> PASSWORD</label>
<input type="password" value={pass} onChange={handepass}/><br/>
<label> EMAIL</label>
<input type ="email" value={ema} onChange={handeema}/><br/>
<button onClick={handle} > Register</button>
<h1> the list of the student is </h1>
{list.map((lis)=> {
    return(<h1> USERNAME..{lis.user}<br/>
        PASSWORD..{lis.pass}<br/>..EMAIL..{lis.ema}</h1>)

})}
</div>);
}
export default New