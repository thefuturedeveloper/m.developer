import React from 'react';
import about from '../Images/about.jpg';
import Button from '@material-ui/core/Button';
import Footer from './Footer';
import { useHistory } from 'react-router-dom';
const About = (props)=>{
    const location=useHistory();
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                  <div className="col-sm-6 my-sm-5 p-sm-4 order-sm-2">
                  <img src={about} className="img-fluid d-block mx-auto my-2  abt " alt="about-img" />
                  </div>
                  <div className="col-sm-6 p-sm-5 text-center my-sm-5 order-sm-1">
                  <h3 className="text-primary my-3 my-sm-4">{props.heading}</h3>
                       <p className="head"><span className="text-primary">MERN</span>Stack Develope<span className="text-primary">r</span></p>
                       <Button variant="outlined" color="primary" onClick={location.goBack}>{props.sign}</Button>
                       <div className="row  my-5">
                           <div className="col-4 sc"><a href="https://www.linkedin.com/in/mohammad-aman-831a93203/"><i className="fab fa-2x fa-linkedin"></i></a></div>
                           <div className="col-4 sc"><a href="https://www.instagram.com/__amaanmirza__/"><i className="fab fa-2x fa-instagram"></i></a></div>
                           <div className="col-4 sc"><a href="https://twitter.com/Mohamma26337388"><i className="fab fa-2x fa-twitter-square"></i></a></div>
                      </div>
                  </div>
                  
            </div>
        </div>
<Footer/>
        </>
    )
}

export default About;