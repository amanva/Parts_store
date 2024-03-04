import React, {useContext} from 'react'
import "./Shop.scss"
import SearchBar from '../SearchBar/SearchBar';
// import { useState } from 'react'
import Footer from '../Footer/Footer';

import Product from "../Products/simpleProduct";
import Begin from '../Begin/Begin';
import {Select, MenuItem, FormControl, InputLabel} from "@mui/material";
import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';


const Shop = () => {
    const [books, setBooks] = useState([]);
    const[selectedValue, setSelectedValue] = useState('');

    const handleDataFromChild = (data) => {
        // console.log("Parent Child connection established"); 
        setBooks(data);
        setSortedBooks(data);
      };
      const [shouldSort, setShouldSort] = useState(false); // State to control sorting
      const [sortedBooks, setSortedBooks] = useState([]);

      useEffect(() => {
        // Define a sorting function
        const sortingFunction = (a, b) => {
            if (selectedValue === '1') {
                return a.R_Price - b.R_Price;
            } else if (selectedValue === '2') {
                return b.R_Price - a.R_Price;
            } else if (selectedValue === '3') {
                return a.R_Quantity - b.R_Quantity;
            } else if (selectedValue === '4') {
                return b.R_Quantity - a.R_Quantity;
            }
            return 0; // Default case, no sorting
        };
        const sortedBooks = [...books];
        sortedBooks.sort(sortingFunction);
        setSortedBooks(sortedBooks);
    }, [selectedValue, books]);

    const {type} = useParams();
    const handleSelectChange = (event) => {
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
<<<<<<< HEAD:client/src/components/Shop/Shop.jsx
            <FormControl style={{ marginLeft: '-150px' }}>
                <InputLabel>Filter</InputLabel>
                <Select 
                    sx={{
                    width: 190,
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
=======
            <FormControl style={{ marginLeft: '-240px' }}>

            <InputLabel className='label'>Filter</InputLabel>

            <Select 
                sx={{
                width: 240,
                height: 50,
                marginTop: 0.8,
                }}
                value={selectedValue}
                onChange={handleSelectChange}
            >
                <MenuItem defaultValue = {1} value={'1'}>Sort By Price: Low To High</MenuItem>
                <MenuItem defaultValue = {1} value={'2'}>Sort By Price: High To Low</MenuItem>
                <MenuItem defaultValue = {1} value={'3'}>Sort By Quantity: Low To High</MenuItem>
                <MenuItem defaultValue = {1} value={'4'}>Sort By Quantity: High To Low</MenuItem>
            </Select>
>>>>>>> parent of 16c54dfa (Merge branch 'version2'):src/components/Shop/Shop.jsx
            </FormControl>
        </div>
        <div className='products'>{sortedBooks.map((book) => <Product data = {book}></Product> )}</div>
        </div> 
        <Footer></Footer>
    </>

}

export default Shop;