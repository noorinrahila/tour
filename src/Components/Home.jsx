import React from 'react'
import './Home.css';
import thailand from './images/thailand.jpeg';
import vietnam from'./images/vietnam.jpeg';
import malaysia from './images/malaysia.jpeg';
import canada from './images/canada.jpeg';
import france from './images/france.jpeg';
import italy from './images/italy.jpeg';
import qatar from './images/qatar.webp';
import UAE from './images/UAE.jpeg';
import switzerland from './images/switzerland.jpeg';
import './Gallery.css';
import { useNavigate } from "react-router-dom";

const Home=()=> {
  const navigate = useNavigate();
  return (
    <>
    <div className="bg">
    
      <h3>Plan your trip with us </h3>
   <div className='container'>
    <div className='inputs'>
    <input type="search" id="site-search" placeholder='Enter destination city' required/>
    &nbsp;&nbsp;
   <button type="submit"  onClick={()=>navigate("/Explorer")} >Search</button>

    </div>
   </div>
   </div>

  <div className='gallery'>
     
     <div className="container1">
       <h1 className='text-center text-primary text-capitalize '> Popular Destination</h1>
   <div className="row">
     <div className="col-sm">
     <div  className="card" >
   <img  className="card-img-top" src={thailand} alt=''height="200px"/>
   <div className="card-body">
     <h5  className="card-title">Thailand</h5>
     <p  className="card-text">Starting from clubbing, diving into turquoise watered beaches, devouring on cheap street food, the chaotic markets where you can find anything that interests you, the night skyline, the authentic spas to relax your senses and last but not the least the polite and easy-going people of Thailand.</p>
     <a href="Reserve"  className="btn btn-primary">Reserve</a>
   </div>
 </div>
     </div>
     <br />
     <div className="col-sm">
     <div  className="card" >
   <img  className="card-img-top" src={vietnam}alt=''height="200px"/>
   <div className="card-body">
     <h5  className="card-title">Vietnam</h5>
     <p  className="card-text">Vietnam nestles the largest cave of Asia, Halong Bay, islands, forests, religious places and more. 
     The Marble mountains and green paddy farms cobbled together to convince you to visit this place at least once. 
     Known as the paradise of street food which includes traditional rice noodle soup, rice crepes and beef noodles. </p>
     <a href="Reserve" onClick={()=>navigate("/Explorer")} className="btn btn-primary">Reserve</a>
   </div>
 
    </div>
     </div>
     <br />
     <div className="col-sm">
     <div  className="card" >
   <img  className="card-img-top" src={malaysia}alt=''height="200px" />
   <div className="card-body">
     <h5  className="card-title">Malaysia</h5>
     <p  className="card-text">Hosting a wide range of Rafflesia genus, Malaysia is home to the largest flower in the world. With exotic dishes that blend Indian, Thai and Malay flavours, Malaysian food reflects its multi-ethnic culture. One of the gazetted festivities of Malaysia is Thaipusam with colourful, exhilarating and joyous celebrations.</p>
     <a href="Reserve" onClick={()=>navigate("/Explorer")} className="btn btn-primary">Reserve</a>
   </div>
 </div>
     </div>
     
   </div>
   <div className="row">
     <div className="col-sm">
     <div  className="card" >
   <img  className="card-img-top" src={canada} alt=''height="200px"/>
   <div  className="card-body">
     <h5  className="card-title">Canada</h5><p class="card-text">World class skiing, decadent European style cuisine, ornamental cathedrals, peaceful island life…Canada is a patchwork of thriving cities and majestic wilderness. Montreal beckons travelers with its French charm and booming cultural landscape.
        </p>
        <a href="Reserve" onClick={()=>navigate("/Explorer")} className="btn btn-primary">Reserve</a>
   </div>
 </div>
     </div>
     <br />
     <div className="col-sm">
     <div  className="card" >
   <img  className="card-img-top" src={italy} alt=''height="200px"/>
   <div  className="card-body">
     <h5  className="card-title">Italy</h5>
     <p  className="card-text">To the west, there are the western Alps that overlook the Alpine lakes as well as the glacier-clad valleys, which run into the Piedmont and the Po River. From the towering central Alps, the Apennine Range radiates down the country’s entire length and covers approximately the whole width of the majestic Italian peninsula.</p>
     <a href="Reserve" onClick={()=>navigate("/Explorer")} className="btn btn-primary">Reserve</a>
   </div>
 
    </div>
     </div>
       <br />
     <div className="col-sm">
     <div  className="card" >
   <img  className="card-img-top" src={france} alt=''height="200px" />
   <div  className="card-body">
     <h5  className="card-title">France</h5>
     <p  className="card-text">Perhaps, it is its world-renowned romance with fabric that the fashion fraternity calls couture. Or, maybe it is the museums here, home to the most prized art possessions on Earth. However, we opine that the rich beauty of the French canvas, is a portrait narrated by a mindset that’s intoxicated with the cherry wine hues of love and passion, garnished with what the French would call, je nai se quoi.</p>
     <a href="Reserve" onClick={()=>navigate("/Explorer")} className="btn btn-primary">Reserve</a>
   </div>
 </div>
     </div>
     
   </div>
   <div className="row">
     <div className="col-sm">
     <div  className="card" >
   <img  className="card-img-top" src={UAE}alt=''height="200px"/>
   <div class="card-body">
     <h5  className="card-title">United Arab Emirates</h5>
     <p  className="card-text">UAE is the middle class tourist hub for India because of the affordability and the amount of pleasure it provides to the visitors in terms of desert safaris and desert camping, shopping, swimming and diving in Fujairah to float in the waters of Gulf of Oman, indoor skiing and wayfaring on the beaches to rob your troubles.</p>
     <a href="Reserve" onClick={()=>navigate("/Explorer")} className="btn btn-primary">Reserve</a>
   </div>
 </div>
     </div>
     <div className="col-sm">
     <div  className="card" >
   <img  className="card-img-top" src={qatar} alt=''height="200px"/>
   <div  className="card-body">
     <h5  className="card-title">Qatar</h5>
     <p  className="card-text">Located in Western Asia and comprised of beaches Qatar has recently opened its gates to tourism. Visiting this country will be like an Arabic fairy tale. It is overflowing with ancient art displayed in museums, sacred religious places, spectacular skylines, sand dunes, world-class restaurants and active adventures.</p>
     <a href="Reserve" onClick={()=>navigate("/Explorer")} className="btn btn-primary">Reserve</a>
   </div>
 
    </div>
     </div>
     <div className="col-sm">
     <div  className="card" >
   <img  className="card-img-top" src={switzerland}alt=''height="200px" />
   <div  className="card-body">
     <h5  className="card-title">Switzerland</h5>
     <p  className="card-text">Tiny, multilingual Switzerland packs a lot into its landlocked borders: glittering lakes, sky-high peaks, postcard-perfect villages, world-class museums. Get a taste of it all with the Grand Tour, a 1,000-mile route that takes you to the medieval old city of Bern, towering Jungfraujoch, the iconic Matterhorn, and 42 other must-sees.</p>
     <a href="Reserve" onClick={()=>navigate("/Explorer")} className="btn btn-primary">Reserve</a>
   </div>
 </div>
     </div>
     
   </div>
   </div>
    </div>
   </>
   

  )
}

export default Home