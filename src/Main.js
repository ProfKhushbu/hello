import React from 'react';
import {BrowserRouter as R,Route,Link} from "react-router-dom";
import Home from './Home';
import Marks from './Marks'
// import Contact from './Contact'
// import Product from './Product'
function Main() {
return (
<div>
    <R>
       {/* <div>
              <ul type="none" style={{display:"flex",align:"center", justifyContent:"space-evenly"}}>
                <li><Link to="/">Home</Link></li>
                {/* <li><Link to="/Marks">Marks</Link></li> */}
              {/* </ul>
        </div>         */} 
       
        {/* <Routes> */}
            <Route exact path="/" element={<Home/>}/>
            {/* <Route exact path="Marks" element={<Marks/>}/> */}
        {/* </Routes> */}
   
    </R>
</div>
) }
export default Main


