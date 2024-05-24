import './Post.css'
import Axios from 'axios'
import React,{useState} from 'react'
function Postinternship(){
  const[inputs,setinputs]=useState([]);
  const[ inpute2,setinput2]=useState([]);
  const[inpute3,setinput3]=useState([]);
  const datass={
    Department:"",
    compnayname:"",
    location:"",
    numberOfstudent:""
  }
  const [submite1,setsubmite1]=useState(datass)
  const [ submite,setsumbite]=useState(datass);
  function enter(e){
    const{name,value}=e.target;
    setsumbite({...submite,[name]:value});
  }
 function enters(e){
const{name,value}=e.target;
setsubmite1({...submite1,[name]:value});
 }
  const handleAddinpute=()=>{
    setinputs((prevInputs) => [...prevInputs, ''])
    setinput2((previnput2)=>[...previnput2,''])
    setinput3((prveinput3)=>[...prveinput3,''])
    
  }
function handleopp(){
  const data={
    DEPARTMENT:submite.Department,
    COMPANY_NAME:submite.compnayname,
    LOCATION:submite.location,
    NUMBER_STUDENT:submite.numberOfstudent,

  }
  Axios.post("http://192.168.137.173:8080/api/account/register",
  data
  ).then((response)=>{
    console.log(response)
  })
}
  const handlechange1=(index,event)=>{
    const updateinputs=[...inputs];
    updateinputs[index]=event.target.value
    setinputs(updateinputs);
  }
  const handlechange2=(index,event)=>{
    const updateinputs=[...inpute2];
    updateinputs[index]=event.target.value
    setinput2(updateinputs);
  }
  const handlechange3=(index,event)=>{
    const updateinputs=[...inpute3];
    updateinputs[index]=event.target.value
    setinput3(updateinputs);
  }
  
    return(
      <>
        <div className='list'>
<label> Choose Department </label>
  <select className='down-side'name="Department" value={submite.Department } onChange={enter}>
    <option> Industrial Engineering </option>
    <option> Mechanical Engineering </option>
    <option> Civil Engineering </option>
    <option> Electrical and Computer Engineering </option>
    <option> Chemical Engineering</option>
  </select><br/>
</div>
< div className="btn-1">
<button onClick={handleAddinpute} > Add</button>
</div>
<div>
  <table >
    <tr>
      <th> company name</th>
      <th> company location</th>
      <th>number of students</th>
    </tr>
    <tr>
<td > <input type="text" placeholder="enter company name" name="compnayname"
 value={submite.compnayname} onChange={enter}/></td>
<td > <input type="text" placeholder="enter location name"  name="location"
value={submite.location} onChange={enter}/></td>
<td > <input type="text" placeholder="enter number of students name" name="numberOfstudent"
value={submite.numberOfstudent} onChange={enter}/></td>
</tr>

    <tr align='center'>
<td  > <input type="text" placeholder="enter company name"   name="compnayname"value={submite1.compnayname}
onChange={enters}/></td>
<td > <input type="text" placeholder="enter location name" name="location"value={submite1.location}
 onChange={enters}/></td>
<td > <input type="text" placeholder="enter number of students name" name="numberOfstudent"value={submite1.numberOfstudent} 
onChange={enters}/></td>
    </tr>    
    <tr>
<td>{inputs.map((input, index) => (
        <input
          key={index}
          value={input}
          onChange={(event) => handlechange1(index, event)}
          placeholder="company name"
        />
      ))}</td>
    
    <td>{inpute2.map((inpute2, index) => (
        <input
    
          key={index}
          value={inpute2}
          onChange={(event) => handlechange2(index, event)}
          placeholder="company location"
        />
      ))}</td>
    <td>{inpute3.map((inpute3, index) => (
        <input
          key={index}
          value={inpute3}
          onChange={(event) => handlechange3(index, event)}
          placeholder="numbar of student"
        />
      ))}</td>
      </tr>
  </table>
  
        </div>
        <button className="btn-2" onClick={handleopp}>Submite Opportunities</button>
  
        </>
    )

}
export default Postinternship 