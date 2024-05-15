import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from 'react-icons/ai'
import {Storedata} from './Storedata'
import {IconContext} from 'react-icons'
import { MdOutlinePostAdd } from "react-icons/md";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import './Navbar.css'
function Dashborde(){
    const [show,setShow]=useState(false)
    const showsidebar=()=>setShow(!show)
    return(
        <>
         <IconContext.Provider value={{color:'black'}}>
        <div className="navbar">
        
<NavLink to='# 'className="menu-bars">
    <p> < FaIcons.FaBars onClick={showsidebar} /></p>
</NavLink>
<span className='dani'> HIC Dashboard</span>
<h1 >
    IMS
</h1 >
</div>
<nav className={show ? 'nav-menu active':'nav-menu'}>
    <ul  className='nav-menu-items'onClick={showsidebar}>

{Storedata.map((item,index)=>{
    return(
        <li key={index} className={item.cName}>
            <NavLink to={item.path}>
                {item.icon}
                <span>{item.title}</span>
            </NavLink>
        </li>
    )
})}
    </ul>
</nav>

</IconContext.Provider>
   </> )
}
export default  Dashborde