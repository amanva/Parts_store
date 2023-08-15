import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./index.scss";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

function App() {
  const [items, setItems] = useState([1,2]);

  const addItem = () => {
    const nextItem = Math.max(1, items.length + 1);
    setItems([...items, nextItem]);
  };

  const removeItem = () => {
    const endRange = Math.max(0, items.length - 1);
    setItems(items.slice(0, endRange));
  };

  return (
    <div className="App">
      <div className="controls-wrapper">
        <button onClick={removeItem}>Remove Item</button>
        <button onClick={addItem}>Add Item</button>
      </div>
      <hr className="seperator" />
      <div className="carousel-wrapper">
        <Carousel itemsToShow={3}>
            <item><img className ="images" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png"></img></item>
            <item><img className ="images" src="https://www.freeiconspng.com/thumbs/mercedes-benz-logo-png/mercedes-benz-logo-png-6.png"></img></item>
            <item><img className ="images" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Lamborghini_Logo.svg/1200px-Lamborghini_Logo.svg.png"></img></item>
            
            <item><img className ="images" src="https://1000logos.net/wp-content/uploads/2019/12/Chevrolet-logo.png"></img></item>
            <item><img className ="images" src="https://1000logos.net/wp-content/uploads/2018/02/Porsche-Logo.png"></img></item>
            <item><img className ="images" src="https://1000logos.net/wp-content/uploads/2021/04/Ferrari-logo.png"></img></item>
            
            <item><img className ="images" src="https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_ogp_001.png"></img></item>
            <item><img className ="images" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/600px-Volkswagen_logo_2019.svg.png"></img></item>
            <item><img className ="images" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nissan_logo.png/640px-Nissan_logo.png"></img></item>
            
            <item><img className ="images" src="https://fontmeme.com/images/Acura-Logo.jpg"></img></item>

          
          {/* {items.map((item) => (
            <Item key={item}>{item}</Item>
          ))} */}
        </Carousel>
      </div>
    </div>
  );
}
 
export default App;
