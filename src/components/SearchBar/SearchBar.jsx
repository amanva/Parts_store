import React from 'react'
import "./SearchBar.scss"
import SearchIcon from '@mui/icons-material/Search';

function SearchBar ({data}) {

    return <>
        <div className="searchBar">
            <div className="searchInputs">
                <input className="searchInput" type="text" placeholder="Enter Search Input" />
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