import React, { useState } from 'react'
import M from 'materialize-css'
import {  useNavigate } from 'react-router-dom';





const Edit = () => {
    const [name ,setName] = useState("");
  const [lastname ,setLast] = useState("");
  const [email ,setEmail] = useState("");
  const [phone ,setPhone] = useState("");
  const [location ,setLocation] = useState("");


    const history  = useNavigate();

    const myself = ()=>{
      fetch("/updateinventory/" + localStorage.getItem("myid"),{
        "method":"PUT",
        headers:{
          "Content-Type":"application/json",
        
        },
        body:JSON.stringify({
            name , lastname, email , phone, location
        })
      }).then(res=>res.json()).then(data=>{
        if(data.error)
      M.toast({html: data.error, classes: 'rounded #c62828 red darken-3'});
      else{
      M.toast({html: "SucessFully Edit-Crew", classes: 'rounded ##00c853 green accent-4'});
          history('/');
      }
      })
    }
  


    return (
        <div  id="mycard" className='container card'>
    
        <div className="row">
              <h4 id="myid">Edit-Crew</h4>
          <div id="inputji" className="input-field col s6">
         
   <textarea value={name} onChange = {(e)=>setName(e.target.value)} placeholder="Name" id="textarea2" class="materialize-textarea" data-length="1200"></textarea>
      <textarea value={lastname} onChange = {(e)=>setLast(e.target.value)} placeholder="Lastname" id="textarea2" class="materialize-textarea" data-length="1200"></textarea>
      <textarea value={email} onChange = {(e)=>setEmail(e.target.value)} placeholder="Email" id="textarea2" class="materialize-textarea" data-length="1200"></textarea>
      <textarea value={phone} onChange = {(e)=>setPhone(e.target.value)} placeholder="Phone:" id="textarea2" class="materialize-textarea" data-length="1200"></textarea>
      <textarea value={location} onChange = {(e)=>setLocation(e.target.value)} placeholder="Location" id="textarea2" class="materialize-textarea" data-length="1200"></textarea>

          <button  onClick={()=>myself()}  id = "buttonji" class="waves-effect waves-light btn">Submit</button><br/><br/>
        
          </div>
      
      
      
        </div>
              
      
      
      
      
          </div>
      )
}

export default Edit