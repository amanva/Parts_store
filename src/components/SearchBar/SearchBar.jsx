import { useState } from 'react';
import React from 'react'
import "./SearchBar.scss"
import SearchIcon from '@mui/icons-material/Search';

function SearchBar ({data}) {
    const[searchInput, setSearchInput] = useState('');
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        console.log(searchValue)
    }
    return <>
        <div className="searchBar">
            <div className="searchInputs">
                <input className="searchInput" placeholder="Enter Search Input"
                onChange={(e) => searchItems(e.target.value)} />
                <div className="searchIcons">
                    <SearchIcon></SearchIcon>

                </div>
            </div>
            <div className="dataResult">
                    
            </div>
        </div>
    
    </>
}

export default SearchBar;

{/* <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Search blog posts</span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search blog posts"
                name="s" 
            />
            <button type="submit">Search</button>
        </form> */}