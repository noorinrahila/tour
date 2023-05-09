import React, { useState } from 'react'
import './Reserve.css'
import { db } from "./firebase-config";
import {
  collection,addDoc, Timestamp
} from "firebase/firestore";
const Reserve = () => {
  const[newFirstname,setNewFirstName] = useState("");
  const[newLastname,setNewLastName] = useState("");
const[newEmail,setNewEmail]=useState("");
const[newPh_number,setNewPh_number]=useState(0);
const[newPerson,setNewPerson]=useState(0);
const[newChildren,setNewChildren]=useState(0);
const [newTravel,setNewTravel]=useState(new Date());
const[newReturn,setNewReturn]=useState(new Date());
const[newCountry,setNewCountry]=useState("");
const[newPayment,setNewPayment]=useState("");
const[newInsurance,setNewInsurance]=useState("");
      
const usersCollectionRef = collection(db, "Reservations");

const createUser = async () => {
  await addDoc(usersCollectionRef, { Firstname:newFirstname,Lastname:newLastname ,Email:newEmail , Ph_number:Number(newPh_number), 
    Person:Number(newPerson),Children:Number(newChildren),Travel:Timestamp.fromDate(newTravel).toDate(),Return:Timestamp.fromDate(newReturn).toDate(),
  Country:newCountry,Payment:newPayment,Insurance:newInsurance});
};


  return (
    <div className='bg2'>
    <div className='reserve'>

<section className="mb-4">


<h2 className="h1-responsive font-weight-bold text-center my-4">Fill out form</h2>


<div className="row">


<div className="col-md-9 mb-md-0 mb-5">
    <form id="contact-form" name="contact-form" method="POST">

 
        <div className="row">

            <div className="col-md-6">
                <div className="md-form mb-0">
                    <input type="text" id="firstname" name="firstname" required className="form-control"
                     onChange={(e)=>setNewFirstName(e.target.value)}/>
                    <label htmlFor="Firstname" className="">First name</label>
                </div>
            </div>
  

          
            <div className="col-md-6">
                <div className="md-form mb-0">
                    <input type="text" id="lastname" name="lastname" required className="form-control"
                   onChange={(e)=>setNewLastName(e.target.value)}/>
                    <label htmlFor="Lastname" className="">Last name</label>
                </div>
            </div>
     

        </div>
   
 
 
        <div className="row">

        <div className="col-md-6">
                <div className="md-form mb-0">
                    <input type="text" id="email" name="email" required className="form-control"
                  onChange={(e)=>setNewEmail(e.target.value)} />
                    <label htmlFor="Email" className="">Emailid </label>
                </div>
            </div>

            <div className="col-md-6">
                <div className="md-form mb-0">
                    <input type="number" id="ph_number" name="ph_number" required className="form-control"
                   onChange={(e)=>setNewPh_number(e.target.value)}/>
                    <label htmlFor="Ph_number" className="">Phone number</label>
                </div>
            </div>
        </div>
        <div className="row">

<div className="col-md-6">
        <div className="md-form mb-0">
            <input type="number" id="adult" name="adult" required className="form-control"
           onChange={(e)=>setNewPerson(e.target.value)}/>
            <label htmlFor="Adult" className="">No of person(Adult)</label>
        </div>
    </div>

    <div className="col-md-6">
        <div className="md-form mb-0">
            <input type="number" id="children" name="children" required className="form-control"
          onChange={(e)=>setNewChildren(e.target.value)} />
            <label htmlFor="children" className="">No of children</label>
        </div>
    </div>
</div>
<div className="row">

<div className="col-md-6">
        <div className="md-form mb-0">
            <input type="date" id="visit" name="visit" required className="form-control"
           onChange={(e)=>setNewTravel(e.target.value)}/>
            <label htmlFor="Visit" className="">Date to travel </label>
        </div>
    </div>

    <div className="col-md-6">
        <div className="md-form mb-0">
            <input type="date" id="return" name="return" required className="form-control"
           onChange={(e)=>setNewReturn(e.target.value)}/>
            <label htmlFor="return" className="">Date of return</label>
        </div>
    </div>
</div>
<div className="row">

<div className="col-md-6">
        <div className="md-form mb-0">
            <input type="text" id="country" name="country" required className="form-control"
          onChange={(e)=>setNewCountry(e.target.value)} />
            <label htmlFor="Country" className="">Country/City </label>
        </div>
    </div>

    <div className="col-md-6">
        <div className="md-form mb-0">
        <label htmlFor="Payment" className="">Choose payment</label>
        <select id="payment" name="payment "  onChange={(e)=>setNewPayment(e.target.value)}>
    <option value="credit">Credit</option>
    <option value="debit">Dedit</option>
    <option value="cash">Cash</option>
    <option value="check">Checks</option>
    <option value="bank">Bank Transfer</option>
    <option value="qrcode">QR code Scanner</option>
  </select>
       <p><small style={{color: "red"}}> *** The payment  amount details will be send to you later by travel agency </small></p>  
        </div>
    </div>
</div>
<div className="row">



    <div className="col-md-12">
        <div className="md-form mb-0">
        <label htmlFor="insurance" className="">Do you have any Travel Insurance</label>
        <select id="insurance" name="insurance"  onChange={(e)=>setNewInsurance(e.target.value)}>
    <option value="yes">Yes</option>
    <option value="no">No</option>
    
  </select>
           </div>
    </div>
</div>
   

    </form>

    <div className="text-center text-md-left">
     
    <button type='submit' onClick={createUser}  className='btn btn-primary mx-5'>Send</button>
    </div>
    <div className="status"></div>
</div>



</div>

</section>


</div>
</div>
  )
}

export default Reserve