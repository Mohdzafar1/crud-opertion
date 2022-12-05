import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"

const Create = () => {
     const[name,setName]=useState("")
     const[email,setEmail]=useState("")
     const history=useNavigate();
  
       const header={"Access-Control-Allow-Origin":"*"};
      
        const handleSubmit=(e)=>{
            e.preventDefault();
            console.log(handleSubmit)
            axios.post(
                "https://6385be99875ca3273d4426d5.mockapi.io/crud-opertion",
                {
                    name:name,
                    email:email,
                    header
                }
            )
           .then(()=>{
            history("/read")
           })
        }
      
  return (
    <>
       <div className='container pt-5'>
       <h3>Create</h3>
       <form>
       <div className="mb-3">
    <label  className="form-label">Name</label>
    <input value="name" onChange={(e)=>setName(e.target.value)} type="text" className="form-control w-50"/>
  </div>
 
  <div class="mb-3">
    <label  className="form-label">Email address</label>
    <input value="email" onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control w-50"/>
   
  </div>
  <button onClick={handleSubmit} type="submit" className="btn btn-primary w-50">Submit</button>
</form>
       </div>  
    
    </>
  )
}

export default Create