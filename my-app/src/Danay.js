import React,{useState} from 'react'
import Axios from 'axios'

function Danay(){
const [Name,setname]=useState('');
const [Password,setpassword]=useState('');
const [list,setlist]=useState([]);
function showme(){
    Axios.get("http://localhost:8081/danay/show").then((response)=>{
setlist(response.data);

    })
}
function handle(){
Axios.post("http://localhost:8081/danay/log",{
name:Name,
age:Password
}).then(()=>{
    alert("Succeseful enter ");
})

};
function sub1(event){
    setname(event.target.value);
}
function sub2(event){
    setpassword(event.target.value);
}
    return(<div className="app">
        <h1> LOG IN Form</h1>
<div className="info">
<input type="text" required name="" value={Name} onChange={sub1} />
<input type="password" required name="" value={Password} onChange={sub2}/>
<button onClick={handle}> Log in</button>
<button onClick={showme}>Show Status </button>

</div>
    </div>);
}
export default Danay