import './Post.css'
import React,{useState} from 'react'
function Postinternship(){
  const[inputs,setinputs]=useState([]);
  const[ inpute2,setinput2]=useState([]);
  const[inpute3,setinput3]=useState([]);
  const handleAddinpute=()=>{
    setinputs((prevInputs) => [...prevInputs, ''])
    setinput2((previnput2)=>[...previnput2,''])
    setinput3((prveinput3)=>[...prveinput3,''])
    
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
  <select className='down-side'>
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
<td > <input type="text" placeholder="enter company name"/></td>
<td > <input type="text" placeholder="enter location name"/></td>
<td > <input type="text" placeholder="enter number of students name"/></td>
</tr>

    <tr align='center'>
<td  > <input type="text" placeholder="enter company name"/></td>
<td > <input type="text" placeholder="enter location name"/></td>
<td > <input type="text" placeholder="enter number of students name"/></td>
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
        <button className="btn-2">Submite Opportunities</button>
  
        </>
    )

}
export default Postinternship 