import React, { useState } from 'react'
import './add.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

 const Add = () => {
  const users = {
    fname:"",
    lname:"",
    email:"",
    password:""
  }
  const [user, setUser] = useState(users);
  const navigate  =useNavigate();
  const inputHandler =(e) =>{
    const {name, value} = e.target;
     setUser({...user, [name]:value});
     console.log(user);
    
  }
  const submitForm = async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/create", user)
    .then((response) => {
      toast.success(response.data.msg, {position:"top-right"})
      navigate('/')
      
  }).catch(error=>console.log(error))
}
  return (
    <div className='addUserContainer'>
      <div className="glassForm">
        <Link to="/" className="backLink">Back</Link>
        <h1>Add New User</h1>
        <form onSubmit={submitForm}>
          <div className='inputGroup'>
            <label htmlFor="fname">First Name:</label>
            <input type="text"onChange={inputHandler} id="fname" name="fname" autoComplete='off' placeholder='Enter the first Name'/>
          </div>
          <div className='inputGroup'>
            <label htmlFor="lname">Last Name:</label>
            <input type="text"onChange={inputHandler} id="lname" name="lname" autoComplete='off' placeholder='Enter the Last Name'/>
          </div>
          <div className='inputGroup'>
            <label htmlFor="email">Email:</label>
            <input type="email"onChange={inputHandler} id="email" name="email" autoComplete='off' placeholder='Enter the email Name'/>
          </div>
          <div className='inputGroup'>
            <label htmlFor="password">Password:</label>
            <input type="password" onChange={inputHandler}id="password" name="password" autoComplete='off' placeholder='Enter the password'/>
          </div>
          <div className='inputGroup'>
            <button type='submit'>Add User</button>
          </div>
        </form>
      </div>
      </div>
  )
}

export default Add;