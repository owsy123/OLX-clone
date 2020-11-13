import React from "react";
import {Link} from "react-router-dom"
import "../styles/megamenu.css"
import i5 from "../images/facebook.svg"
import i6 from "../images/twitter.svg"
import i7 from "../images/multimedia.svg"
import i8 from "../images/instagram.svg"

const Megamenu = () => {
  return (

         <div className="d-flex justify-content-center flex-column flex-md-row mega-menu">
             <div className="p-4">
               <h6>POPULAR CATEGORIES</h6>
               <li><Link to="#">Cars</Link></li>
               <li><Link to="#">Flats for rent</Link></li>
               <li><Link to="#">Jobs</Link></li>
               <li><Link to="#">Mobile Phones</Link></li>
             </div>
             <div className="mx-md-4 p-4">
               <h6>TRENDING SEARCHES</h6>
               <li><Link to="#">Bikes</Link></li>
               <li><Link to="#">Watches</Link></li>
               <li><Link to="#">Books</Link></li>
               <li><Link to="#">Dogs</Link></li>
             </div>
             <div className="mx-md-4 p-4">
               <h6>ABOUT US</h6>
               <li><Link to="#">About OLX Group</Link></li>
               <li><Link to="#">OLX Blog</Link></li>
               <li><Link to="#">Contact Us</Link></li>
               <li><Link to="#">OLX for Businesses</Link></li>
             </div>
             <div className="mx-md-4 p-4">
               <h6>OLX</h6>
               <li><Link to="#">Help</Link></li>
               <li><Link to="#">Sitemap</Link></li>
               <li><Link to="#">Legal & Privacy information</Link></li>
             </div>

             <div className="mx-md-4 p-4">
               <h6>Follow us</h6>
               <div>
                    <span className="d-inline-block m-2"><Link to="#"><img src={i5} alt="" width="24px" height=" 24px"/></Link></span>
                    <span className="d-inline-block m-2"><Link to="#"><img src={i6} alt="" width="24px" height=" 24px"/></Link></span>
                    <span className="d-inline-block m-2"><Link to="#"><img src={i7} alt="" width="24px" height=" 24px"/></Link></span>
                    <span className="d-inline-block m-2"><Link to="#"><img src={i8} alt="" width="24px" height=" 24px"/></Link></span>
               </div>
             </div>
           </div>
  );
};

export default Megamenu;
