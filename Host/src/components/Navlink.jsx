import React from "react";
import "../styles/navLink.css";
import { Link } from "react-router-dom";

const Navlink = () => {
  return (
    <div>

      <div className="container">
          <div className="flexContainer">
              <div className="dropdown allLink">
                  <button className="navLinkBtn1" type="button" id="dropdownMenuButton" data-toggle="dropdown">All Categories<i className="btn fa fa-angle-down dropmenu2" aria-hidden="true"></i></button>
                  <div className="dropdown-menu dropdown-menu-right allCate" aria-labelledby="dropdownMenuButton">
                      <div className="row">
                          <div className='col'>
                              <div className="mt-5">
                                <Link className="dropdown-item dropdown-item-head" to="#">Mobile</Link>
                                <Link className="dropdown-item" to="#">Car</Link>
                                <Link className="dropdown-item" to="#">Tablets</Link>
                                <Link className="dropdown-item" to="#">Accessories</Link>
                                <Link className="dropdown-item" to="#">Mobile Phones</Link>
                              </div>
                              <div className="mt-5">
                                <Link className="dropdown-item dropdown-item-head" to="#">Vehicles</Link>
                                <Link className="dropdown-item" to="#">Cars</Link>
                                <Link className="dropdown-item" to="#">Cars on Installments</Link>
                                <Link className="dropdown-item" to="#">Cars Accessories</Link>
                                <Link className="dropdown-item" to="#">Spare Parts</Link>
                                <Link className="dropdown-item" to="#">Buses, Vans & Trucks</Link>
                                <Link className="dropdown-item" to="#">Rickshaw & Chingchi</Link>
                                <Link className="dropdown-item" to="#">Other Vehicles</Link>
                                <Link className="dropdown-item" to="#">Boats</Link>
                                <Link className="dropdown-item" to="#">Tractors & Trailers</Link>
                              </div>
                              <div className="mt-5">
                                <Link className="dropdown-item dropdown-item-head" to="#">Property for Sale</Link>
                                <Link className="dropdown-item" to="#">Land & Plots</Link>
                                <Link className="dropdown-item" to="#">Houses</Link>
                                <Link className="dropdown-item" to="#">Apartments & Flats</Link>
                                <Link className="dropdown-item" to="#">Shops - Offices - Commercial Space</Link>
                                <Link className="dropdown-item" to="#">Portions & Floors</Link>
                              </div>
                              <div className="mt-5">
                                <Link className="dropdown-item dropdown-item-head" to="#">Property for Rent</Link>
                                <Link className="dropdown-item" to="#">Houses</Link>
                                <Link className="dropdown-item" to="#">Apartments & Flats</Link>
                                <Link className="dropdown-item" to="#">Portions & Floors</Link>
                                <Link className="dropdown-item" to="#">Shops - Offices - Commercial Space</Link>
                                <Link className="dropdown-item" to="#">Roommates & Paying Guests</Link>
                                <Link className="dropdown-item" to="#">Vacation Rentals - Guest Houses</Link>
                                <Link className="dropdown-item" to="#">Land & Plots</Link>
                              </div>
                          </div>
                          
                          <div className='col'>
                              <div className="mt-5">
                                <Link className="dropdown-item dropdown-item-head" to="#">Electronics & Home Appliances</Link>
                                <Link className="dropdown-item" to="#">Computers & Accessories</Link>
                                <Link className="dropdown-item" to="#">TV - Video - Audio</Link>
                                <Link className="dropdown-item" to="#">Cameras & Accessories</Link>
                                <Link className="dropdown-item" to="#">Games & Entertainment</Link>
                                <Link className="dropdown-item" to="#">Other Home Appliances</Link>
                                <Link className="dropdown-item" to="#">Generators, UPS & Power Solutions</Link>
                                <Link className="dropdown-item" to="#">Kitchen Appliances</Link>
                                <Link className="dropdown-item" to="#">AC & Coolers</Link>
                                <Link className="dropdown-item" to="#">Fridges & Freezers</Link>
                                <Link className="dropdown-item" to="#">Washing Machines & Dryers</Link>
                              </div>
                              <div className="mt-5">
                                <Link className="dropdown-item dropdown-item-head" to="#">Bikes</Link>
                                <Link className="dropdown-item" to="#">Motorcycles</Link>
                                <Link className="dropdown-item" to="#">Spare Parts</Link>
                                <Link className="dropdown-item" to="#">Bicycles</Link>
                                <Link className="dropdown-item" to="#">ATV & Quads</Link>
                                <Link className="dropdown-item" to="#">Scooters</Link>
                              </div>
                              <div className="mt-5">
                                <Link className="dropdown-item dropdown-item-head" to="#">Business, Industrial & Agriculture</Link>
                                <Link className="dropdown-item" to="#">Business for Sale</Link>
                                <Link className="dropdown-item" to="#">Food & Restaurants</Link>
                                <Link className="dropdown-item" to="#">Trade & Industrial</Link>
                                <Link className="dropdown-item" to="#">Construction & Heavy Machinery</Link>
                                <Link className="dropdown-item" to="#">Agriculture</Link>
                                <Link className="dropdown-item" to="#">Other Business & Industry</Link>
                                <Link className="dropdown-item" to="#">Medical & Pharma</Link>
                              </div>

                          </div>

                          <div className='col'>
                                <div className="mt-5">
                                  <Link className="dropdown-item dropdown-item-head" to="#">Services</Link>
                                  <Link className="dropdown-item" to="#">Education & Classes</Link>
                                  <Link className="dropdown-item" to="#">Travel & Visa</Link>
                                  <Link className="dropdown-item" to="#">Car Rental</Link>
                                  <Link className="dropdown-item" to="#">Drivers & Taxi</Link>
                                  <Link className="dropdown-item" to="#">Web Development</Link>
                                  <Link className="dropdown-item" to="#">Other Services</Link>
                                  <Link className="dropdown-item" to="#">Electronics & Computer Repair</Link>
                                  <Link className="dropdown-item" to="#">Event Services</Link>
                                  <Link className="dropdown-item" to="#">Health & Beauty</Link>
                                  <Link className="dropdown-item" to="#">Maids & Domestic Help</Link>
                                  <Link className="dropdown-item" to="#">Movers & Packers</Link>
                                  <Link className="dropdown-item" to="#">Home & Office Repair</Link>
                                  <Link className="dropdown-item" to="#">Catering & Restaurant</Link>
                                  <Link className="dropdown-item" to="#">Farm & Fresh Food</Link>
                                </div>
                                <div className="mt-5">
                                  <Link className="dropdown-item dropdown-item-head" to="#">Jobs</Link>
                                  <Link className="dropdown-item" to="#">Online</Link>
                                  <Link className="dropdown-item" to="#">Marketing</Link>
                                  <Link className="dropdown-item" to="#">Advertising & PR</Link>
                                  <Link className="dropdown-item" to="#">Education</Link>
                                  <Link className="dropdown-item" to="#">Customer Service</Link>
                                  <Link className="dropdown-item" to="#">Sales</Link>
                                  <Link className="dropdown-item" to="#">IT & Networking</Link>
                                  <Link className="dropdown-item" to="#">Hotels & Tourism</Link>
                                  <Link className="dropdown-item" to="#">Hotels & Tourism</Link>
                                  <Link className="dropdown-item" to="#">Clerical & Administration</Link>
                                  <Link className="dropdown-item" to="#">Human Resources</Link>
                                  <Link className="dropdown-item" to="#">Accounting & Finance</Link>
                                  <Link className="dropdown-item" to="#">Manufacturing</Link>
                                  <Link className="dropdown-item" to="#">Medical</Link>
                                  <Link className="dropdown-item" to="#">Domestic Staff</Link>
                                  <Link className="dropdown-item" to="#">Part - Time</Link>
                                  <Link className="dropdown-item" to="#">Other Jobs</Link>
                                </div>
                                <div className="mt-5">
                                  <Link className="dropdown-item dropdown-item-head" to="#">Animals</Link>
                                  <Link className="dropdown-item" to="#">Fish & Aquariums</Link>
                                  <Link className="dropdown-item" to="#">Birds</Link>
                                  <Link className="dropdown-item" to="#">Hens & Aseel</Link>
                                  <Link className="dropdown-item" to="#">Cats</Link>
                                  <Link className="dropdown-item" to="#">Dogs</Link>
                                  <Link className="dropdown-item" to="#">Livestock</Link>
                                  <Link className="dropdown-item" to="#">Horses</Link>
                                  <Link className="dropdown-item" to="#">Pet Food & Accessories</Link>
                                  <Link className="dropdown-item" to="#">Other Animals</Link>
                                </div>
                          </div>

                          <div className='col'>
                              <div className="mt-5">
                                <Link className="dropdown-item dropdown-item-head" to="#">Fashion & Beauty</Link>
                                <Link className="dropdown-item" to="#">Accessories</Link>
                                <Link className="dropdown-item" to="#">Clothes</Link>
                                <Link className="dropdown-item" to="#">Footwear</Link>
                                <Link className="dropdown-item" to="#">Jewellery</Link>
                                <Link className="dropdown-item" to="#">Make Up</Link>
                                <Link className="dropdown-item" to="#">Skin & Hair</Link>
                                <Link className="dropdown-item" to="#">Watches</Link>
                                <Link className="dropdown-item" to="#">Wedding</Link>
                                <Link className="dropdown-item" to="#">Lawn & Pret</Link>
                                <Link className="dropdown-item" to="#">Couture</Link>
                                <Link className="dropdown-item" to="#">Other Fashion</Link>
                              </div>
                              <div className="mt-5">
                                <Link className="dropdown-item dropdown-item-head" to="#">Fashion & Beauty</Link>
                                <Link className="dropdown-item" to="#">Accessories</Link>
                                <Link className="dropdown-item" to="#">Clothes</Link>
                                <Link className="dropdown-item" to="#">Footwear</Link>
                                <Link className="dropdown-item" to="#">Jewellery</Link>
                                <Link className="dropdown-item" to="#">Make Up</Link>
                                <Link className="dropdown-item" to="#">Skin & Hair</Link>
                                <Link className="dropdown-item" to="#">Watches</Link>
                                <Link className="dropdown-item" to="#">Wedding</Link>
                                <Link className="dropdown-item" to="#">Wedding</Link>
                                <Link className="dropdown-item" to="#">Lawn & Pret</Link>
                                <Link className="dropdown-item" to="#">Couture</Link>
                                <Link className="dropdown-item" to="#">Other Fashion</Link>
                              </div>
                              <div className="mt-5">
                                <Link className="dropdown-item dropdown-item-head" to="#">Books, Sports & Hobbies</Link>
                                <Link className="dropdown-item" to="#">Books & Magazines</Link>
                                <Link className="dropdown-item" to="#" >Musical Instruments</Link> 
                                <Link className="dropdown-item" to="#" >Sports Equipment</Link> 
                                <Link className="dropdown-item" to="#" >Gym & Fitness</Link> 
                                <Link className="dropdown-item" to="#" >Other Hobbies</Link> 
                              </div>
                              <div className="mt-5">
                                <Link className="dropdown-item dropdown-item-head" to="#">Kids</Link>
                                <Link className="dropdown-item" to="#">Kids Furniture</Link>
                                <Link className="dropdown-item" to="#">Toys</Link>
                                <Link className="dropdown-item" to="#">Prams & Walkers</Link>
                                <Link className="dropdown-item" to="#">Swings & Slides</Link>
                                <Link className="dropdown-item" to="#">Kids Bikes</Link>
                                <Link className="dropdown-item" to="#">Kids Accessories</Link>
                              </div>
                         </div>
                     </div>
                </div>
            </div>
                <div className="linkItem1 my-auto">
                    <Link to="#">Mobile Phone</Link>
                    <Link to="#">Car</Link>
                    <Link to="#">Motorcycle</Link>
                    <Link to="#">Houses</Link>
                    <Link to="#">TV-Video-Audio</Link>
                    <Link to="#">Tablets</Link>
                    <Link to="#">Land Plot</Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Navlink;
