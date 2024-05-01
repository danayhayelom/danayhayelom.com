import React,{useState} from 'react'
import Axios from 'axios'
function Employe(){
const[name,setname]=useState('');
const[age,setage]=useState('');
const[country,setcountry]=useState('');
const[postion,setpostion]=useState('');
const[wage,setwage]=useState('');
const[list,setlist]=useState([]);
function display(){
    Axios.get("http://localhost:3002/mekele/apt").then((response)=>{
        setlist(response.data);
    });
};
function handle(){
Axios.post("http://localhost:3002/mekelle/university",{
Name:name,
Age:age,
Country:country,
Postion:postion,
Wage:wage
}).then(()=>{
    alert("You are succesfull Regiser")
    setlist([...list,{
        Name:name,
        Age:age,
        Country:country,
        Postion:postion,
        Wage:wage
 },]);
});

};
    return(<div className="app">
        <div className="info">
<label> Name</label>
<input type="text" name="name" onChange={(e)=>{setname(e.target.value)}}/>
<label> Age</label>
<input type="number"name="age" onChange={(e)=>{setage(e.target.value)}}/>
<label> Country</label>
<input type="text"name="country" onChange={(e)=>{setcountry(e.target.value)}}/>
<label> Postion</label>
<input type="text"name="postion" onChange={(e)=>{setpostion(e.target.value)}}/>
<label> Wage</label>
<input type="text"name="wage" onChange={(e)=>{setwage(e.target.value)}}/>
<button onClick={handle}>Add Employe</button>

</div>
<div className="dawit">
<button onClick={display}> Show me</button>
{list.map((val,key)=>{
    return(<div className="hii">
      <h2>Name: {val.name}</h2>
      <h2> Age: {val.age}</h2>
      <h2> Postion: {val.postion}</h2>
      <h2>Country:  {val.country}</h2>
      <h2>Wage:  {val.wage}</h2>
    </div>)
})};
</div>
    </div>)
}
export default Employe