import './Cart.scss'
import { useState, React, useContext} from "react";
import { List } from '../../cart';
import { ShopContextProvider } from "../../shop-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Cart({cartOpen, toggleCart}){


return(

<>

 <div className={`shop-cart-menu ${cartOpen == true ? 'active' : ''}`}>
 <div className="close-button" onClick={toggleCart}>
 <FontAwesomeIcon icon={faTimes} /> 
 </div>
<List></List>
 </div> 
 <div className={`sidebar-overlay ${cartOpen == true ? 'active' : ''}`} onClick={toggleCart}></div>
</>
);
}

export default Cart;