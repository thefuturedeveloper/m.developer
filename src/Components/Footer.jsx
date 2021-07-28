import React from 'react';

const Footer=()=>{
    return(
        <>
        <div className="container-fluid p-0  text-center" style={{'backgroundColor':'black'}} >
          <div className="row">
               <div className="col-12 text-center p-2">
               <p className="m-0"><a href="mailto:mhdaman828@gmail.com" className="text-danger"><i className="fas fa-2x fa-envelope-square"></i></a><a className="mx-3 text-success" href="https://api.whatsapp.com/send?phone=6398528280"><i className="fab fa-2x fa-whatsapp"></i></a></p> 
               </div>
          </div>
        </div>
        </>
    )
}

export default Footer;