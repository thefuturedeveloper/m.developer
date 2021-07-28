import React from 'react'
import {NavLink} from 'react-router-dom';
const Navbar=()=>{
   return(
       <>
       <nav className="navbar navbar-expand-lg main">
         <div className="container-fluid">
              <NavLink className="navbar-brand mb-0 text-light" to="/m.developer"><i className="far fa-eye"></i></NavLink>
                <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-light">=</span>
               </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item">
                 <NavLink className="nav-link text-light active" aria-current="page" to="/m.developer">Home</NavLink>
               </li>
             <li className="nav-item">
                <NavLink className="nav-link text-light" to="/Gallery">Gallery</NavLink>
             </li>
           </ul>
        </div>
  </div>
</nav>
       </>
   )
}

export default Navbar;
