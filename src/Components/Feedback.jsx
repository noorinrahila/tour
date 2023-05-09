import React, { useState }  from 'react'
import { FaLocationArrow,FaPhone,FaMailBulk,FaFacebook,FaInstagram,FaTwitter } from 'react-icons/fa';
import './Feedback.css'
import { db } from "./firebase-config";
import {
    collection,addDoc
} from "firebase/firestore";
const Feedback=()=> {

    const [newName,setNewName] = useState("");
    const [newPh_number ,setNewPh_number] = useState(0);
    const [newMessage ,setNewMessage] = useState("");
      
  const usersCollectionRef = collection(db, "messages");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name:newName , ph_number:Number(newPh_number), message:newMessage});
  };
  return (
    <div className='bg1'>
        <div className='feedback'>

<section className="mb-4">


<h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

<p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
    a matter of hours to help you.</p>

<div className="row">


    <div className="col-md-9 mb-md-0 mb-5">
        <form id="contact-form" name="contact-form" method="POST">

     
            <div className="row">

                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input type="text" id="name" name="name" required className="form-control"
                        onChange={(e)=>setNewName(e.target.value)}/>
                        <label htmlFor="name" className="">Your name</label>
                    </div>
                </div>
      

              
                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input type="number" id="ph_number" name="ph_number" required className="form-control"
                        onChange={(e)=>setNewPh_number(e.target.value)}/>
                        <label htmlFor="ph_number" className="">Your Phone number</label>
                    </div>
                </div>
         

            </div>
       
     
     
            <div className="row">

       
                <div className="col-md-12">

                    <div className="md-form">
                        <textarea type="text" id="message" name="message" rows="2" required className="form-control md-textarea"
                        onChange={(e)=>setNewMessage(e.target.value)}></textarea>
                        <label htmlFor="message">Your message</label>
                    </div>

                </div>
            </div>
       

        </form>

        <div className="text-center text-md-left">
         
        <button type='submit' onClick={createUser} className='btn btn-primary mx-5'>Send</button>
        </div>
        <div className="status"></div>
    </div>

    <div className="col-md-3 text-center">
        <ul className="list-unstyled mb-0">
            <li><FaLocationArrow size={'2rem'}/>
                <p>Trip, XYZ street, mylapore</p>
                <p>Chennai-600003.</p>
            </li>

            <li><FaPhone size={'2rem'}/>
                <p>+ 01 234 567 89</p>
            </li>

            <li><FaMailBulk size={'2rem'}/>
                <p>contact@trip.com</p>
            </li>
            <li>
                <FaFacebook size={'2rem'} cursor={'pointer'}/> &nbsp; <FaInstagram size={'2rem'} cursor={'pointer'}/> &nbsp; <FaTwitter size={'2rem'} cursor={'pointer'}/>
                <p>Follow us </p>
            </li>
        </ul>
    </div>


</div>

</section>
 

</div>
    </div>

  )
}

export default Feedback