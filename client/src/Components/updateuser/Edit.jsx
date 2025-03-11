import React, { useEffect, useState } from 'react'
import '../adduser/add.css'
import { Link, useNavigate, useParams } from 'react-router-dom'

import axios from 'axios'
import toast from 'react-hot-toast'
 const Edit = () => {
  const users = {
    "fname":"",
    "lname":"",
    "email":""
  }
  
  const {id} = useParams();
  const [user , setUser] = useState(users);
  const navigate  = useNavigate();

  const inputChangeHandler = (e) =>{
    const {name, value} = e.target;
    setUser({...user, [name]:value});
    console.log(user);
  }

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/getone/${id}`)
    .then((response)=>{
      setUser(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })

  },[id])

  const SubmitForm = async(e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/update/${id}`, user)
    .then((response) => {
      toast.success(response.data.msg, {position:"top-center"})
      navigate('/')
      
  }).catch(error=>console.log(error))
}

  return (
    <div className='addUserContainer'>
      <div className="glassForm">
        <Link to="/" className="backLink">Back</Link>
        <h1>Update  User</h1>
        <form onSubmit={SubmitForm}>
          <div className='inputGroup'>
            <label htmlFor="fname">First Name:</label>
            <input type="text" id="fname" value={user.fname} onChange={inputChangeHandler} name="fname" autoComplete='off' placeholder='Enter the first Name'/>
          </div>
          <div className='inputGroup'>
            <label htmlFor="lname">Last Name:</label>
            <input type="text" id="lname" value={user.lname} onChange={inputChangeHandler} name="lname" autoComplete='off' placeholder='Enter the Last Name'/>
          </div>
          <div className='inputGroup'>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={user.email} onChange={inputChangeHandler} name="email" autoComplete='off' placeholder='Enter the email Name'/>
          </div>
          
          <div className='inputGroup'>
            <button type='submit'>Update User</button>
          </div>
        </form>
      </div>
      </div>
  )
}


export default Edit;