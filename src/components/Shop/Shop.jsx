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
    const[selectedValue, setSelectedValue] = useState('');

    const handleDataFromChild = (data) => {
        console.log("Parent Child connection established"); 
        setBooks(data);
      };
      const [shouldSort, setShouldSort] = useState(false); // State to control sorting

    //   useEffect(() => {
    //     // Define a sorting function
    //     const sortingFunction = (a, b) => {
    //         if (selectedValue === '1') {
    //             return a.R_Price - b.R_Price;
    //         } else if (selectedValue === '2') {
    //             return b.R_Price - a.R_Price;
    //         } else if (selectedValue === '3') {
    //             return a.R_Quantity - b.R_Quantity;
    //         } else if (selectedValue === '4') {
    //             return b.R_Quantity - a.R_Quantity;
    //         }
    //         return 0; // Default case, no sorting
    //     };
    
    //     if (shouldSort) {
    //         // Create a new sorted array and set the state with it
    //         const sortedData = [...books].sort(sortingFunction);
    //         console.log(sortedData); // Check the sorted data in the console
    //         setBooks(sortedData);
    //         setShouldSort(false); // Reset the flag after sorting
    //     }
    // }, [selectedValue, books, shouldSort]);

    const {type} = useParams();
    const handleSelectChange = (event) => {
        // console.log(event.target.value)

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
                <MenuItem defaultValue = {1} value={'1'}>Sort By Price: Low To High</MenuItem>
                <MenuItem defaultValue = {1} value={'2'}>Sort By Price: High To Low</MenuItem>
                <MenuItem defaultValue = {1} value={'3'}>Sort By Quantity: Low To High</MenuItem>
                <MenuItem defaultValue = {1} value={'4'}>Sort By Quantity: High To Low</MenuItem>
            </Select>
            </FormControl>
        </div>
        <div className='products'>{books.map((book) => <Product data = {book}></Product> )}</div>
        </div> 
    </>

}

export default Shop;