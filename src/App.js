
import './App.css';
import {
 
  Routes,
  Route,

  BrowserRouter,
} from "react-router-dom";

import Navbar from'./Components/Navbar'
import Home from './Components/Home'
import Gallery from './Components/Gallery'
import Feedback from './Components/Feedback';
import Reserve from'./Components/Reserve';
import Explorer from './Components/Explorer';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
<Route path="/" element={<Navbar/>}>
  <Route index element={<Home/>}/>
  <Route path="Gallery" element={<Gallery/>}/>
  <Route path="Feedback" element={<Feedback/>}/>
  <Route path="Reserve" element={<Reserve/>}/>
  <Route path="Explorer" element={<Explorer/>}/>
</Route>
     </Routes>
     </BrowserRouter>
    
  
    </div>
  );
}

export default App;
