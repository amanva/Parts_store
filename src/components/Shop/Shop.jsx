import React from 'react'
import "./Shop.scss"
// import { useState } from 'react'

// const[searchInput, seSearchInput] = useState("");
const Shop = () => {
    return <>
        <div className="shop">
        <form action="/" method="get">
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
        </form>
        </div>
    </>

}

export default Shop;