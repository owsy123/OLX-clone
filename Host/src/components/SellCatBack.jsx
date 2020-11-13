import React from "react";
import { Link } from "react-router-dom";

const SellCategory = () => {
  return (
    <div className="sellCategory mt-2">
      <div className="text-center user-select-none">
        <h3>POST YOUR ADD</h3>
      </div>
      <div className="categoryPanel w-sm-100 mx-auto mt-5 mb-5">
        <div className="categoryPanelHeading">
          <h5>CHOOSE A CATEGORY</h5>
        </div>

        <div className="categoryPanelCategories row">
          <div className="categoriesListContainer col-12 col-md-6 categoryContainer">
            <ul className="categoriesList">
              <li>
                <div className="dropright">
                  <button className="text-left px-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="d-inline-block">
                      <span className="cate-icons">
                        <i className="fa fa-television" aria-hidden="true"></i>
                      </span>
                      Mobiles phones
                    </span>
                    <i className="fa fa-angle-right float-right" aria-hidden="true"></i>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"></div>
                </div>
              </li>
              <li>
                <div className="dropright">
                  <button className="text-left px-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="d-inline-block">
                      <span className="cate-icons">
                        <i className="fa fa-car" aria-hidden="true"></i>
                      </span>
                      Vechicles
                    </span>
                    <i className="fa fa-angle-right float-right" aria-hidden="true"></i>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"></div>
                </div>
              </li>
              <li>
                <div className="dropright">
                  <button className="text-left px-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="d-inline-block ">
                      <span className="cate-icons">
                        <i className="fa fa-building" aria-hidden="true"></i>
                      </span>
                      Property for Sale
                    </span>
                    <i className="fa fa-angle-right float-right" aria-hidden="true"></i>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to="#"></Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropright">
                  <button className="text-left px-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="d-inline-block  ">
                      <span className="cate-icons">
                        <i className="fa fa-building" aria-hidden="true"></i>
                      </span>
                      Property for Rent
                    </span>
                    <i className="fa fa-angle-right float-right" aria-hidden="true"></i>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to="#"></Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropright">
                  <button className="text-left px-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="d-inline-block  ">
                      <span className="cate-icons">
                        <i className="fa fa-television" aria-hidden="true"></i>
                      </span>
                      Electronics & Home Appliances
                    </span>
                    <i className="fa fa-angle-right float-right" aria-hidden="true"></i>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to="#"></Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropright">
                  <button className="text-left px-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="d-inline-block ">
                      <span className="cate-icons">
                        <i className="fa fa-motorcycle" aria-hidden="true"></i>
                      </span>
                      Bikes
                    </span>
                    <span>
                      <i className="fa fa-angle-right float-right" aria-hidden="true"></i>
                    </span>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to="#"></Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropright">
                  <button className="text-left px-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="d-inline-block  ">
                      <span className="cate-icons">
                        <i className="fa fa-industry" aria-hidden="true"></i>
                      </span>
                      Business, Industrial & Agriculture
                    </span>
                    <i className="fa fa-angle-right float-right" aria-hidden="true"></i>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to="#"></Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropright">
                  <button className="text-left px-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="d-inline-block  ">
                      <span className="cate-icons">
                        <i className="fa fa-suitcase" aria-hidden="true"></i>
                      </span>
                      Services
                    </span>
                    <i className="fa fa-angle-right float-right" aria-hidden="true"></i>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to="#"></Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropright">
                  <button className="text-left px-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="d-inline-block  ">
                      <span className="cate-icons">
                        <i className="fa fa-briefcase" aria-hidden="true"></i>
                      </span>
                      Jobs
                    </span>
                    <i className="fa fa-angle-right float-right" aria-hidden="true"></i>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to="#"></Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropright">
                  <button className="text-left px-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="d-inline-block  ">
                      <span className="cate-icons">
                        <i className="fa fa-paw" aria-hidden="true"></i>
                      </span>
                      Animals
                    </span>
                    <i className="fa fa-angle-right float-right" aria-hidden="true"></i>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to="#"></Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropright">
                  <button className="text-left px-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="d-inline-block  ">
                      <span className="cate-icons">
                        <i className="fa fa-bed" aria-hidden="true"></i>
                      </span>
                      Furniture & Home Decor
                    </span>
                    <i className="fa fa-angle-right float-right" aria-hidden="true"></i>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to="#"></Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropright">
                  <button className="text-left px-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="d-inline-block  ">
                      <span className="cate-icons">
                        <i className="fa fa-female" aria-hidden="true"></i>
                      </span>
                      Fashion & Beauty
                    </span>
                    <i className="fa fa-angle-right float-right" aria-hidden="true"></i>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to="#"></Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropright">
                  <button className="text-left px-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="d-inline-block  ">
                      <span className="cate-icons">
                        <i className="fa fa-gamepad" aria-hidden="true"></i>
                      </span>
                      Books, Sports & Hobbies
                    </span>
                    <i className="fa fa-angle-right float-right" aria-hidden="true"></i>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"></div>
                </div>
              </li>
              <li>
                <div className="dropright">
                  <button className="text-left px-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="d-inline-block  ">
                      <span className="cate-icons">
                        <i className="fa fa-child" aria-hidden="true"></i>
                      </span>
                      Kids
                    </span>
                    <i className="fa fa-angle-right float-right" aria-hidden="true"></i>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to="#"></Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 dropContainer">
            <div className="drop1 d-none">
              <ul className="DropItems">
                <li>Tablets</li>
                <li>Accessories</li>
                <li>Mobile Phones</li>
              </ul>
            </div>
            <div className="drop2 d-none">
              <ul className="DropItems">
                <li>Cars</li>
                <li>Cars Accessories</li>
                <li>Spare Parts</li>
                <li>Buses, Vans & Trucks</li>
                <li>Rickshaw & Chingchi</li>
                <li>Other Vehicles</li>
                <li>Boats</li>
                <li>Tractor & Trailer</li>
              </ul>
            </div>
            <div className="drop3 d-none">
              <ul className="DropItems">
                <li>Lands & Plots</li>
                <li>Houses</li>
                <li>Apartments & Flats</li>
                <li>Shops-Offices-Commercial Space</li>
                <li>Portion & Floors</li>
              </ul>
            </div>
            <div className="drop4 d-none">
              <ul className="DropItems">
                <li>Houses</li>
                <li>Apartments & Flats</li>
                <li>Portion & Floors</li>
                <li>Shops-Offices-Commercial Space</li>
                <li>Rooms</li>
                <li>Roommates & Paying Guests</li>
                <li>Vacational Rentals-Guest Houses</li>
                <li>Lands & Plots</li>
              </ul>
            </div>
            <div className="drop5 d-none">
              <ul className="DropItems">
                <li>Compouter & Accessories</li>
                <li>TV-Video-Audio</li>
                <li>Cameras & Accessories</li>
                <li>Games & Entertainment</li>
                <li>Other Home Appliances</li>
                <li>Generators, UPS & Power Solution</li>
                <li>Kitchen Appliances</li>
                <li>AC & Coolers</li>
                <li>Fridges & Freezers</li>
                <li>Washing Machine & Dryers</li>
              </ul>
            </div>
            <div className="drop6 d-none">
              <ul className="DropItems">
                <li>MotorCycles</li>
                <li>Spare Parts</li>
                <li>Bicycles</li>
                <li>ATV & Quads</li>
                <li>Scooters</li>
              </ul>
            </div>
            <div className="drop7 d-none">
              <ul className="DropItems">
                <li>Business for Sale</li>
                <li>Food & Restaturants</li>
                <li>Trade & Industrial</li>
                <li>Construction & Heavy Machinery</li>
                <li>Agriculture</li>
                <li>Other Businness & Industry</li>
                <li>Medical & Pharma</li>
              </ul>
            </div>
            <div className="drop8 d-none">
              <ul className="DropItems">
                <li>Education & Classes</li>
                <li>Travel & Visa</li>
                <li>Car Rental</li>
                <li>Driver & Taxi</li>
                <li>Web Development</li>
                <li>Other Services</li>
                <li>Electronic & Computer Repair</li>
                <li>Event Services</li>
                <li>Health & Beauty</li>
                <li>Maids & Domestic Help</li>
                <li>Movers & Packers</li>
                <li>Home & Office Repair</li>
                <li>Catering & Restaturant</li>
                <li>Fram & Fresh Food</li>
              </ul>
            </div>
            <div className="drop9 d-none">
              <ul className="DropItems">
                <li>Online</li>
                <li>Marketing</li>
                <li>Advertising & PR</li>
                <li>Education</li>
                <li>Customer Service</li>
                <li>Sales</li>
                <li>IT & Networking</li>
                <li>Hotels & Tourism</li>
                <li>Clerical & Administration</li>
                <li>Human Resources</li>
                <li>Accounting & Finance</li>
                <li>Manufacturing</li>
                <li>Medical</li>
                <li>Domestic Staff</li>
                <li>Part-Times</li>
                <li>Other Jobs</li>
              </ul>
            </div>
            <div className="drop10 d-none">
              <ul className="DropItems">
                <li>Fish & Aquariums</li>
                <li>Birds</li>
                <li>Hens & Aseel</li>
                <li>Cats</li>
                <li>Dogs</li>
                <li>Live Stock</li>
                <li>Horses</li>
                <li>Pets Food & Accessories</li>
                <li>Other Animals</li>
              </ul>
            </div>
            <div className="drop11 d-none">
              <ul className="DropItems">
                <li>Sofa & Chairs</li>
                <li>Beds & Wardrobs</li>
                <li>Home Decoration</li>
                <li>Tabels & Dining</li>
                <li>Garden & Outdoor</li>
                <li>Painting & Mirrors</li>
                <li>Rugs & Carpets</li>
                <li>Curtaines & Blinds</li>
                <li>Ofices Funiture</li>
                <li>Other Household Items</li>
              </ul>
            </div>
            <div className="drop12 d-none">
              <ul className="DropItems">
                <li>Accessories</li>
                <li>Clothes</li>
                <li>Footwear</li>
                <li>Jewellery</li>
                <li>Make Up</li>
                <li>Skin & Hair</li>
                <li>Watches</li>
                <li>Wedding</li>
                <li>Lawn & Pret</li>
                <li>Couture</li>
                <li>Other Fashion</li>
              </ul>
            </div>
            <div className="drop13 d-none">
              <ul className="DropItems">
                <li>Books & Magazines</li>
                <li>Musical Instruments</li>
                <li>Sports Equipment</li>
                <li>Gym & Fiteness</li>
                <li>Other Hobbies</li>
              </ul>
            </div>
            <div className="drop14 d-none">
              <ul className="DropItems">
                <li>Kids Funiture</li>
                <li>Toys</li>
                <li>Prams & Walkers</li>
                <li>Swing & Slides</li>
                <li>Kids Bikes</li>
                <li>Kid Accessories</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellCategory;
