import React from 'react'
import './Explorer.css'
import mountain from'./images/hillside.jpeg';
import hiking from './images/hiking.jpeg';
import beach from './images/beach.jpeg';
import cycling from './images/cycling.jpeg';
import party from './images/party.webp';
import monument from './images/monument.jpeg';
import { useNavigate } from "react-router-dom";
const Explorer = () => {
    const navigate = useNavigate();
  return (
    <div className="explorer">

        <h1 >Explore the adventures </h1><br />
        <h5 >Here's list of place you can explore in selected city</h5><br />
        <h4>Click here to reserve <a href="Reserve" onClick={()=>navigate("/Explorer")} className="btn btn-primary">Reserve</a> </h4> 
        
        <div className="row">
    <div className="col-sm">
    <div  className="card" >
  <img  className="card-img-top" src={mountain} alt=''height="200px"/>
  <div className="card-img-overlay">
    <h5  className="card-title">Mountain</h5>
    
  </div>
</div>
    </div>
    <br />
    <div className="col-sm">
    <div  className="card" >
  <img  className="card-img-top" src={hiking}alt=''height="200px"/>
  <div className="card-img-overlay">
    <h5  className="card-title">Hiking</h5>
    
  </div>

   </div>
    </div>
    <br />
    <div className="col-sm">
    <div  className="card" >
  <img  className="card-img-top" src={beach}alt=''height="200px" />
  <div className="card-img-overlay">
    <h5  className="card-title">Beach</h5>
    
  </div>
</div>
    </div>
    
  </div>
  <div className="row">
    <div className="col-sm">
    <div  className="card" >
  <img  className="card-img-top" src={cycling}alt=''height="200px"/>
  <div className="card-img-overlay">
    <h5  className="card-title">Cycling</h5>
    
  </div>
</div>
    </div>
    <br />
    <div className="col-sm">
    <div  className="card" >
  <img  className="card-img-top" src={party}alt=''height="200px"/>
  <div className="card-img-overlay">
    <h5  className="card-title">Party</h5>
    
  </div>

   </div>
    </div>
    <br />
    <div className="col-sm">
    <div  className="card" >
  <img  className="card-img-top" src={monument}alt=''height="200px" />
  <div className="card-img-overlay">
    <h5  className="card-title">Monument</h5>
    
  </div>
</div>
    </div>
    
  </div>
 
    </div>
  )
}

export default Explorer