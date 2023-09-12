import React from 'react'
import "./Shop.scss"
import SearchBar from '../SearchBar/SearchBar';
// import { useState } from 'react'
import products from "../Products/products";
import Product from "../Products/simpleProduct";
import Begin from '../Begin/Begin';
import {Select, MenuItem, FormControl, InputLabel} from "@mui/material";
import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

const Shop = () => {
    const [books, setBooks] = useState([]);
    const[selectedValue, setSelectedValue] = useState(0);

    const handleDataFromChild = (data) => {
        console.log("Parent Child connection established"); 
        setBooks(data);
      };

    //   useEffect(() => {
    //     // Define a sorting function
        

    //     // Sort the data and update the state
    //     console.log(selectedValue);
    //     // console.log(books.sort(sortingFunction));
    //     if(selectedValue === 1){
    //         books.sort((a,b) => a.R_Price - b.R_Price);
    //     }
    //     else if(selectedValue === 2){
    //         books.sort((a,b) => b.R_Price - a.R_Price);
    //     }
    //     else if(selectedValue === 3){
    //         books.sort((a,b) => a.R_Quantity - b.R_Quantity);
    //     }
    //     else if(selectedValue === 4){
    //         books.sort((a,b) => b.R_Quantity - a.R_Quantity);
    //     }
    //     // const sortedData = books.sort(sortingFunction);
    //     setBooks(books);
    // }, [selectedValue, books]);

    const {type} = useParams();
    const handleSelectChange = (event) => {
        console.log(event.target.value)

        setSelectedValue(event.target.value);
    }
    return <>
    <Begin names = "Shop"/>
    
    <div className="container">
                <div className='shopTitle'>
                    <h1>Shop Now</h1>
                </div>
        <div className="searchBar">
            <SearchBar onDataFromChild = {handleDataFromChild} name = {type}></SearchBar>
            <FormControl>

            <InputLabel>Filter</InputLabel>

            <Select 
                sx={{
                width: 250,
                height: 50,
                }}
                value={selectedValue}
                onChange={handleSelectChange}
            >
                <MenuItem value={1}>Sort By Price: Low To High</MenuItem>
                <MenuItem value={2}>Sort By Price: High To Low</MenuItem>
                <MenuItem value={3}>Sort By Quantity: Low To High</MenuItem>
                <MenuItem value={4}>Sort By Quantity: High To Low</MenuItem>
            </Select>
            </FormControl>
        </div>
        <div className='products'>{books.map((book) => <Product data = {book}></Product> )}</div>
        </div> 
    </>

}

export default Shop;