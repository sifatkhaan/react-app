import axios from 'axios';
import React, { useState } from 'react'

export default function InsertForm() {

    const [formData, setFormData]=useState({ name: '',
    category: '',
    price: 0,});
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      }
    
      const handleSubmit= async (event) =>{
        event.preventDefault();
        try{
          await axios.post('http://127.0.0.1:8000/api/service', formData );
          setFormData({ name: '', category: '', price: '' });
         } catch(error){
           console.error(error)
         }
      }

  return (
    <div>
      <div className='row container'>
      <form onSubmit={handleSubmit} className='form-group'>
       <div> <label>
          Name:
          <input className='form-control' type='text' name='name' value={formData.name} onChange={handleChange} />
        </label></div>
       <div>  <label>
          Category:
          <input  className='form-control' type='text' name='category' value={formData.category} onChange={handleChange} />
        </label></div>
       <div>  <label>
          Price:
          <input  className='form-control' type='text' name='price'  value={formData.price} onChange={handleChange} />
        </label></div>
        <input className='btn btn-sm btn-primary' type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}
