import React from 'react';
import dark from '../Images/okdark.png';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
const Home=()=>{
     
    return(
        <>
         <div className="container-fluid main">
              <div className="row p-sm-5">
                   <div className="col-sm-6 text-center">
                        <img src={dark} alt="Myphoto" className="rounded img-fluid d-block mx-auto " />
                   </div>
                   <div className="col-sm-6 p-5 text-center">
                      <p className="text-light my-sm-5 " style={{'font-family':'Monoton','font-size':'40px','textDecorationStyle':'underline'}}>Dev@</p>
                      <p className="text-light qts" >“Always forgive your enemies; nothing annoys them so much.”</p>
                      <NavLink to="/About"><Button  style={{backgroundColor:'white'}}>About</Button></NavLink>
                   </div>
              </div>
              
         </div>
        </>
    );
}

export default Home;