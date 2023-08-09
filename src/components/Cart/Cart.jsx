import './Cart.scss'
import { useState, React} from "react";

function Cart({cartOpen, toggleCart}){

return(

<>

 <div className={`shop-cart-menu ${cartOpen == true ? 'active' : ''}`}>
 <div className="close-button" onClick={toggleCart}>
 <i class="fa-solid fa-xmark"></i>
 </div>
 </div> 
 <div className={`sidebar-overlay ${cartOpen == true ? 'active' : ''}`} onClick={toggleCart}></div>
</>
);
}

export default Cart;