import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <div >
        <nav style={{background:"#0082e6",  height:'50px', width:'100%'}}>
        <ul style={{listStyle:"none", float:'center',  marginRight:'20px'}}>
            <li style={{display:'inline-block', lineHeight:'50px', margin:'0 5px'}}><NavLink className="hover-link" style={{color:'white', textDecoration:'none', fontSize:'22px', textTransform:'uppercase', padding:'7px 13px'}} to={'/'}>Home</NavLink></li>
            <li style={{display:'inline-block', lineHeight:'50px', margin:'0 5px'}}><NavLink style={{color:'white', textDecoration:'none', fontSize:'22px', textTransform:'uppercase', padding:'7px 13px'}} to={'/about'}>About</NavLink></li>
        </ul>
        </nav>
        </div>
  )
}
