import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Home = () => {
  
  const [userdata,setUserdata]  = useState([]);
  const history = useNavigate();


  useEffect(() => {
    fetch("/getinventory").then(res=>res.json()).then(data=>{
      console.log(data.data);
        setUserdata(data.data);
    })
  
 
  }, [])
  








  const mydelete =  (_id)=>{
    fetch("/deleteinventory/"+_id,{
      "method":"delete",
    }).then(res=>res.json()).then(result=>{
      console.log(result);

      const newData = userdata.filter(item=>{
          return item._id !== result._id
      })

      setUserdata(newData)
      

    })
  }





  return (

    <div className='container my-4'>
        <h4 style = {{marginLeft:"34%",padding:"0 3%"}}>Managment-Crew-List</h4>
<table className='centered card'>
        <thead>
          <tr>
              <th>Name</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
          </tr>
        </thead>
{userdata.map((e)=>{
  return(
    <>
    
    <tbody>
          <tr>
            <td>{e.name}</td>
            <td>{e.lastname}</td>
            <td>{e.email}</td>
            <td>{e.phone}</td>
            <td>{e.location}</td>
               <td>
            <button  onClick={()=>mydelete(e._id)} style={{marginRight:"7px"}} className="waves-effect waves-light btn">Delete</button>
            <button onClick={()=>{

              localStorage.setItem("myid",e._id);
            
              history("/edit")
            }}  className="waves-effect waves-light btn">Edit</button></td>
          
          </tr>

        </tbody>
    

    </>
  )
})}
     



      </table>
            
      <Link style={{marginLeft:"44%"}} to = "/Todo"><button  style={{marginRight:"7px"}}  className="waves-effect waves-light btn">Add-Todo</button></Link>
    </div>
  )
}

export default Home