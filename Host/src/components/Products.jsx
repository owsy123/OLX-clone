import React, { useState, useEffect } from "react";
import "../styles/product.css"
import Card from "./Card";

const Products = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(21);
  
  const showMoreItem = () => {
      setVisible(prevValue=>prevValue + 21)
  }


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => setItems(json));
  },[]);



  return (
    <div>
      <div className="container mt-5">
        <h5 className="">Fresh Recommandation</h5>
        <div className="row row-cols-1 row-cols-md-2 row-cols-md-4">

            {items.slice(0,visible).map((item,key)=>{
                return(
                <Card key={key} price={item.id} detail={item.title.slice(0,20)} address="saddar" date="sep"/>
                )})}
        </div>
        <div className="text-center">
            <button className="load-btn" onClick={showMoreItem}>load more</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
