import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { categoryIndex, sellData } from "../storage/action/sellActions";
import { firebaseApp } from "../config/firebase_setup.js";

const SellCategory = (props) => {
  // console.log(props);

  const history = useHistory();
  const categories = [
    { categoryKeyValue: "Mobiles", category: "Mobiles phones", categoryDrop: { subCategories: ["Tablets", "Accessories", "Mobile Phones"], dropClass: "drop1" }, iconClass: "fa-television" },
    { categoryKeyValue: "Vechicles", category: "Vechicles", categoryDrop: { subCategories: ["Cars", "Cars Accessories", "Spare Parts", "Buses, Vans & Trucks", "Rickshaw & Chingchi", "Other Vehicles", "Boats", "Tractor & Trailer"], dropClass: "drop2" }, iconClass: "fa-car" },
    { categoryKeyValue: "Property", category: "Property for Sale", categoryDrop: { subCategories: ["Lands & Plots", "Houses", "Apartments & Flats", "Shops-Offices-Commercial Space", "Portion & Floors"], dropClass: "drop3" }, iconClass: "fa-building" },
    { categoryKeyValue: "Property", category: "Property for Rent", categoryDrop: { subCategories: ["Houses", "Apartments & Flats", "Portion & Floors", "Shops-Offices-Commercial Space", "Rooms", "Roommates & Paying Guests", "Vacational Rentals-Guest Houses", "Lands & Plots"], dropClass: "drop4" }, iconClass: "fa-building" },
    { categoryKeyValue: "Electronics", category: "Electronics & Home Appliances", categoryDrop: { subCategories: ["Compouter & Accessories", "TV-Video-Audio", "Cameras & Accessories", "Games & Entertainment", "Other Home Appliances", "Generators, UPS & Power Solution", "Kitchen Appliances", "AC & Coolers", "Fridges & Freezers", "Washing Machine & Dryers"], dropClass: "drop5" }, iconClass: "fa-television" },
    { categoryKeyValue: "Bikes", category: "Bikes", categoryDrop: { subCategories: ["MotorCycles", "Spare Parts", "Bicycles", "ATV & Quads", "Scooters"], dropClass: "drop6" }, iconClass: "fa-motorcycle" },
    { categoryKeyValue: "Business", category: "Business Industrial & Agriculture", categoryDrop: { subCategories: ["Business for Sale", "Food & Restaturants", "Trade & Industrial", "Construction & Heavy Machinery", "Agriculture", "Other Businness & Industry", "Medical & Pharma"], dropClass: "drop7" }, iconClass: "fa-industry" },
    { categoryKeyValue: "Services", category: "Services", categoryDrop: { subCategories: ["Education & Classes", "Travel & Visa", "Car Rental", "Driver & Taxi", "Web Development", "Other Services", "Electronic & Computer Repair", "Event Services", "Health & Beauty", "Maids & Domestic Help", "Movers & Packers", "Home & Office Repair", "Catering & Restaturant", "Fram & Fresh Food"], dropClass: "drop8" }, iconClass: "fa-suitcase" },
    { categoryKeyValue: "Jobs", category: "Jobs", categoryDrop: { subCategories: ["Online", "Marketing", "Advertising & PR", "Education", "Customer Service", "Sales", "IT & Networking", "Hotels & Tourism", "Clerical & Administration", "Human Resources", "Accounting & Finance", "Manufacturing", "Medical", "Domestic Staff", "Part-Times", "Other Jobs"], dropClass: "drop9" }, iconClass: "fa-briefcase" },
    { categoryKeyValue: "Animals", category: "Animals", categoryDrop: { subCategories: ["Fish & Aquariums", "Birds", "Hens & Aseel", "Cats", "Dogs", "Live Stock", "Horses", "Pets Food & Accessories", "Other Animals"], dropClass: "drop10" }, iconClass: "fa-paw" },
    { categoryKeyValue: "Furniture & Home Decor", category: "Furniture & Home Decor", categoryDrop: { subCategories: ["Sofa & Chairs", "Beds & Wardrobs", "Home Decoration", "Tabels & Dining", "Garden & Outdoor", "Painting & Mirrors", "Rugs & Carpets", "Curtaines & Blinds", "Ofices Funiture", "Other Household Items"], dropClass: "drop11" }, iconClass: "fa-bed" },
    { categoryKeyValue: "Fashion & Beauty", category: "Fashion & Beauty", categoryDrop: { subCategories: ["Accessories", "Clothes", "Footwear", "Jewellery", "Make Up", "Skin & Hair", "Watches", "Wedding", "Lawn & Pret", "Couture", "Other Fashion"], dropClass: "drop12" }, iconClass: "fa-female" },
    { categoryKeyValue: "Books Sports & Hobbies", category: "Books Sports & Hobbies", categoryDrop: { subCategories: ["Books & Magazines", "Musical Instruments", "Sports Equipment", "Gym & Fiteness", "Other Hobbies"], dropClass: "drop13" }, iconClass: "fa-gamepad" },
    { categoryKeyValue: "Kids", category: "Kids", categoryDrop: { subCategories: ["Kids Funiture", "Toys", "Prams & Walkers", "Swing & Slides", "Kids Bikes", "Kid Accessories"], dropClass: "drop14" }, iconClass: "fa-child" },
  ];

  const selectedCategory = (index) => {
    props.indexSet(index);
  };

  const subCategory = (index, subkey) => {
    const obj = {
      categoryName: categories[index].categoryKeyValue,
      categoryKey: index,
      subCategoryName: categories[props.index].categoryDrop.subCategories[subkey],
      subCategoryKey: subkey,
    };
    // firebaseApp.database().ref("/").child("ADS").push(obj).then(props.loadderSet(false));

    props.sellDataSet(obj);
  };

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
          <div className="col-12 col-md-6 categoryContainer">
            <ul className="categoriesList">
              {categories.map((item, index) => {
                return (
                  <li className={index === props.index ? "activeCategory" : ""} key={index} onClick={() => selectedCategory(index)}>
                    <span className="d-inline-block">
                      <span className="cate-icons">
                        <i className={`fa ${item.iconClass}`} aria-hidden="true"></i>
                      </span>
                      {item.category}
                    </span>
                    <i className="fa fa-angle-right float-right" aria-hidden="true"></i>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col-12 col-md-6 dropContainer">
            {props.index !== null && (
              // console.log(categories[props.index].categoryDrop.subCategories): null
              <div className={`${categories[props.index].categoryDrop.dropClass}`}>
                <ul className="DropItems">
                  {categories[props.index].categoryDrop.subCategories.map((item, subkey) => {
                    return (
                      <Link to="/sell/sellForm" key={subkey} onClick={() => subCategory(props.index, subkey)}>
                        {item}
                      </Link>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    index: state.sellReducer.index,
    sellDataObj: state.sellReducer.sellDataObj,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    indexSet: (index) => dispatch(categoryIndex(index)),
    sellDataSet: (data) => dispatch(sellData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SellCategory);
