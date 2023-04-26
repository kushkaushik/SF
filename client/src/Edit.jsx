import React, { useState } from 'react'
import M from 'materialize-css'
import {  useNavigate } from 'react-router-dom';





const Edit = () => {
    const [Title ,setName] = useState("");
  const [Details ,setLast] = useState("");
 
    const history  = useNavigate();

    const myself = ()=>{
      fetch("/updateinventory/" + localStorage.getItem("myid"),{
        "method":"PUT",
        headers:{
          "Content-Type":"application/json",
        
        },
        body:JSON.stringify({
            Title , Details 
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
              <h4 id="myid">Edit-News</h4>
          <div id="inputji" className="input-field col s6">
         
   <textarea value={Title} onChange = {(e)=>setName(e.target.value)} placeholder="Title" id="textarea2" class="materialize-textarea" data-length="1200"></textarea>
      <textarea value={Details} onChange = {(e)=>setLast(e.target.value)} placeholder="Details" id="textarea2" class="materialize-textarea" data-length="1200"></textarea>
    
          <button  onClick={()=>myself()}  id = "buttonji" class="waves-effect waves-light btn">Submit</button><br/><br/>
        
          </div>
      
      
      
        </div>
              
      
      
      
      
          </div>
      )
}

export default Edit