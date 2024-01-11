import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Home() {
    const [service, setService] = useState([])

    useEffect(()=>{
        axios({
            method: 'get',
            url:'http://127.0.0.1:8000/api/service',
            responseType: 'json'
        }).then(function (res){
            setService(res.data.data)
        })
    },[])
  
    console.log(service,'service');
  return (
    <>
    <div className='container'>
        <Menu/>
    <div>
        <div className='row'>
            <div className='col-3'><Link to={'/form'} className='btn btn-sm btn-success'>Add New</Link></div>
       <div className='col-10'>
        
       <table className='table table-bordered'>
        <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
        {
            service.map((d,i)=>(
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{d.name}</td>
                    <td>{d.category}</td>
                    <td>{d.price}</td>
                    <td><button className='btn btn-sm btn-danger'>Delete</button></td>
                </tr>
            ))
        }
    </table>
       </div>
    
       </div>
   
    </div>
    </div>
   
    </>
  )
}
