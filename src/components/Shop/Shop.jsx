import React from 'react'
import "./Shop.scss"
import SearchBar from '../SearchBar/SearchBar';
// import { useState } from 'react'
import products from "../Products/products";
import Product from "../Products/simpleProduct";
import Begin from '../Begin/Begin';
// const[searchInput, seSearchInput] = useState("");
const Shop = () => {
    return <>
    <Begin names = "Shop"/>
    
    <div className="container">
    
        <div className='shopImage'>
            <h1>Shop Grid</h1>
        </div>
        <div className="searchBar">
            <SearchBar></SearchBar>

        </div>
        <div className='products'>{products.map((product) => <Product data = {product}></Product> )}</div>
        </div> 
    </>

}

export default Shop;