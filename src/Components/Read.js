import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

const Read = () => {
     const[data,setData]=useState([])
    //  const[localStorage,setLocalStorage]=useState([])
     
    //   Read point/get data
     const getData=()=>{
        axios.get('https://6385be99875ca3273d4426d5.mockapi.io/crud-opertion').then((res)=>{
            console.log(res.data)
            setData(res.data);
        })
     }
         //   Read point/get data end
         const setLocalStorage=(id,name,email)=>{
         localStorage.setItem("id",id);
         localStorage.setItem("name",name);
         localStorage.setItem("email",email);

         }
 
    //   delete
       function handleDelete(id){
        axios.delete(`https://6385be99875ca3273d4426d5.mockapi.io/crud-opertion/${id}`).then(()=>{
            getData();
        })
       }
           //   delete end point 
          
      
     useEffect(()=>{
        getData();
     },[]);
  return (
    <>
        <div className='container pt-5'>
        <h1 className='pb-5'>Read opertion</h1>
        <table class="table"> 
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Update</th>
      <th scope="col">Remove</th>

    </tr>
  </thead>
   {data.map((item)=>{
       return(
        <>
        <tbody>
    <tr>
      <th scope="row">{item.id}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>
       <Link to="/update">
       <button className='btn btn-success'
       onClick={()=>setLocalStorage(
        item.id,
        item.name,
        item.email,
       )}
       >Edit</button>
       </Link>
      </td>
      <td>
      <button  onClick={()=>handleDelete(item.id)} className='btn btn-danger'>Delete</button>
      </td>

    </tr>
   
  </tbody>
        </>
       )
   })}
</table>

     <Link to="/">
          <button className='btn btn-outline-primary'>Create again</button>
     </Link>
        </div>
         
        
    </>
  )
}

export default Read