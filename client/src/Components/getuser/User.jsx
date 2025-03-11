import React, { useEffect, useState } from 'react'
import './user.css'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

export const User = () => {

    const[users, setUsers]= useState([]);

    useEffect (()=>{
        const fetchData = async()=>{
        const response = await axios.get("http://localhost:8000/api/getall")

        setUsers(response.data);
        }

        fetchData();
    },[])

    const deleteUser = async(userId)=>{
       await axios.delete(`http://localhost:8000/api/delete/${userId}`)
       .then((response)=>{
        
        setUsers((preUser)=> preUser.filter((user)=> user._id !== userId))
        toast.success(response.data.msg, {position: 'top-center'})
       })
       .catch((error)=>{
        console.log(error);
        
    })
}
  return (
    <div className='userTable'>
        <Link className='userbutton' to={"/add"}>Add Users  <i class="fa-solid fa-user-plus"></i></Link>

        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>Sr.NO.</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) => {
                        return (
                <tr key={user._id}>
                    <td>{index+1}.</td>
                    <td>{user.fname} {user.lname}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link className="edit" to={`/edit/`+user._id}><i class="fa-sharp fa-regular fa-pen-to-square"></i></Link>
                        <button onClick={()=>{ deleteUser(user._id)}} className="delete" ><i className="fa-solid fa-trash-can"></i></button>
                    </td>
                </tr>
                        )

                })
            }
                
                
            </tbody>
        </table>
        
        </div>
  )
}
export default User;