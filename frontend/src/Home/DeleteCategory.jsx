import React, { useState } from 'react'
import './Header.scss'
import baseUrl from '../baseUrl';
import axios from 'axios';
const DeleteCategory = () => {
    const [name,setName]=useState(null);
    const [description,setDescription]=useState(null);
    const deleteCategory=(e)=>{
        e.preventDefault();

        axios.delete(`${baseUrl}/category/delete?name=${name}`)
        .then((res)=>{
            console.log(res.data);
            alert("Record Deleted Succesfully")
            setName('');
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <>
    <div className="head">
        <h2>Delete Category</h2>
    </div>
    <div className='addCategory'>
        <form onSubmit={deleteCategory} action="submit">
            <label htmlFor="">Enter Name to Delete</label>
            <input type="text"
             placeholder='name'
              required
            value={name}
            onChange={(e)=>
                setName(e.target.value)
            }
            />
         
            <button className='bt'type='submit'>Delete-</button>
        </form>
    </div>
    </>
  )
}

export default DeleteCategory;