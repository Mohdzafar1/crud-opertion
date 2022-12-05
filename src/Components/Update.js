import React,{useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"

const Update = () => {
    const[id,setId]=useState(0)
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const  navigate=useNavigate();

      useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        },[])

        const handleUpdate=(e)=>{
            e.preventDefault();
            axios.put(`https://6385be99875ca3273d4426d5.mockapi.io/crud-opertion/${id}`,{
                name:name,
                email:email,
            }).then(()=>{
                navigate("/read");
                
            })
        }

  return (
    <div>
           <div className='container pt-5'>
       <h3>Update Now</h3>
       <form>
       <div className="mb-3">
    <label  className="form-label">Name</label>
    <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control w-50"/>
  </div>
 
  <div class="mb-3">
    <label  className="form-label">Email address</label>
    <input
     value={email}
     onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control w-50"/>
   
  </div>
  <button onClick={handleUpdate} type="submit" className="btn btn-primary w-50">Update</button>
</form>
       </div>  
    </div>
  )
}

export default Update